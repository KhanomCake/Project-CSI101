const $ = id => document.getElementById(id);
const DAILY = "dogDiaryDailyV2", VACCINE = "dogDiaryVaccinesV2", PET = "dogDiaryPetV2";

const load = (key, def = []) => { try { return JSON.parse(localStorage.getItem(key)) || def; } catch { return def; } };
const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const today = () => new Date().toLocaleDateString("sv");
const dateText = d => d ? d.split("-").reverse().join("/") : "-";
const safe = t => String(t || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const getRadio = name => document.querySelector(`input[name="${name}"]:checked`)?.value || "";
const setRadio = (name, val) => document.querySelectorAll(`input[name="${name}"]`).forEach(i => i.checked = i.value === val);

function toast(msg) {
    const box = $("toast");
    if (!box) return alert(msg);
    box.textContent = msg;
    box.classList.add("show");
    setTimeout(() => box.classList.remove("show"), 2000);
}

function upsert(key, record) {
    const list = load(key), i = list.findIndex(x => x.id === record.id);
    i < 0 ? list.push(record) : list[i] = record;
    save(key, list);
}

const buttons = id => `
    <button class="mini-btn" data-act="edit" data-id="${safe(id)}">แก้ไข</button>
    <button class="mini-btn delete" data-act="delete" data-id="${safe(id)}">ลบ</button>`;

function bindList(el, key, onEdit, render, confirmMsg) {
    el.addEventListener("click", e => {
        const btn = e.target.closest("[data-act]");
        if (!btn) return;
        const id = btn.dataset.id;
        if (btn.dataset.act === "edit") {
            const record = load(key).find(x => x.id === id);
            if (record) { onEdit(record); toast("แก้ไขข้อมูลแล้ว กดบันทึกอีกครั้ง"); }
        } else if (confirm(confirmMsg)) {
            save(key, load(key).filter(x => x.id !== id));
            render();
            toast("ลบแล้ว");
        }
    });
}

// ---------- เมนู ----------
document.querySelectorAll(".nav-link").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(p => p.classList.toggle("hidden", p.id !== btn.dataset.page));
    document.querySelectorAll(".nav-link").forEach(b => b.classList.toggle("active", b === btn));
}));

// ---------- บันทึกประจำวัน ----------
const RADIOS = { sleep: "8–12 ชม.", food: "กินปกติ", toilet: "ปกติ", activity: "15–30 นาที", mood: "ร่าเริง" };

$("dailyDate").value = today();
$("dailyDate").addEventListener("change", renderDaily);
$("cancelEdit").addEventListener("click", resetDailyForm);

function resetDailyForm() {
    $("dailyId").value = "";
    $("dailyNotes").value = "";
    Object.entries(RADIOS).forEach(([name, val]) => setRadio(name, val));
    $("cancelEdit").classList.add("hidden");
}

$("dailyForm").addEventListener("submit", e => {
    e.preventDefault();
    const record = { id: $("dailyId").value || Date.now() + "", date: $("dailyDate").value, notes: $("dailyNotes").value };
    Object.keys(RADIOS).forEach(name => record[name] = getRadio(name));
    upsert(DAILY, record);
    resetDailyForm();
    renderDaily();
    toast("บันทึกข้อมูลเรียบร้อยแล้ว");
});

function renderDaily() {
    const records = load(DAILY).filter(r => r.date === $("dailyDate").value);
    $("dailyHistory").innerHTML = records.length ? records.map(r => `
        <article class="history-item">
            <span class="history-emoji">🐾</span>
            <div class="history-copy">
                <strong>${safe(r.mood)} · ${safe(r.food)}</strong>
                <small>นอน ${safe(r.sleep)}<br>ขับถ่าย ${safe(r.toilet)}<br>ออกกำลังกาย ${safe(r.activity)}</small>
                ${r.notes ? `<small> ${safe(r.notes)}</small>` : ""}
            </div>
            <div class="item-actions">${buttons(r.id)}</div>
        </article>`).join("") : '<p class="empty">ยังไม่มีบันทึกของวันที่เลือก </p>';
}

bindList($("dailyHistory"), DAILY, r => {
    $("dailyId").value = r.id;
    $("dailyDate").value = r.date;
    $("dailyNotes").value = r.notes || "";
    Object.keys(RADIOS).forEach(name => setRadio(name, r[name]));
    $("cancelEdit").classList.remove("hidden");
}, renderDaily, "ต้องการลบบันทึกนี้หรือไม่?");

// ---------- ข้อมูลน้องหมา ----------
$("savePet").addEventListener("click", () => {
    save(PET, { name: $("dogName").value, breed: $("dogBreed").value });
    toast("บันทึกข้อมูลน้องหมาแล้ว");
});
const pet = load(PET, {});
$("dogName").value = pet.name || "";
$("dogBreed").value = pet.breed || "";

// ---------- วัคซีน ----------
const VACCINE_FIELDS = { vaccineName: "name", vaccineDate: "date", dose: "dose", clinic: "clinic", nextDate: "nextDate", vaccineNotes: "notes" };

function resetVaccineForm() {
    $("vaccineForm").reset();
    $("vaccineId").value = "";
    $("vaccineDate").value = today();
    $("dose").value = "1";
    $("cancelVaccineEdit").classList.add("hidden");
}

resetVaccineForm();
$("cancelVaccineEdit").addEventListener("click", resetVaccineForm);

$("vaccineForm").addEventListener("submit", e => {
    e.preventDefault();
    if ($("nextDate").value && $("nextDate").value < $("vaccineDate").value)
        return toast("วันนัดต้องไม่ก่อนวันที่ฉีด");
    const record = { id: $("vaccineId").value || Date.now() + "" };
    Object.entries(VACCINE_FIELDS).forEach(([id, key]) => record[key] = $(id).value);
    upsert(VACCINE, record);
    resetVaccineForm();
    renderVaccines();
    toast("บันทึกข้อมูลวัคซีนแล้ว");
});

function renderVaccines() {
    const records = load(VACCINE).sort((a, b) => b.date.localeCompare(a.date));
    const next = records.filter(r => r.nextDate >= today()).sort((a, b) => a.nextDate.localeCompare(b.nextDate))[0];

    $("nextDateDisplay").textContent = next ? dateText(next.nextDate) : "ยังไม่มีวันนัด";
    $("nextVaccineDisplay").textContent = next ? next.name : "เพิ่มข้อมูลวัคซีนเพื่อเริ่มต้น";

    $("vaccineHistory").innerHTML = records.length ? records.map(r => `
        <tr>
            <td>${safe(r.name)}</td>
            <td>${dateText(r.date)}</td>
            <td>${safe(r.dose)}</td>
            <td>${safe(r.clinic || "-")}</td>
            <td>${dateText(r.nextDate)}</td>
            <td>${buttons(r.id)}</td>
        </tr>`).join("") : '<tr><td colspan="6" class="empty">ยังไม่มีประวัติวัคซีน</td></tr>';
}

bindList($("vaccineHistory"), VACCINE, r => {
    $("vaccineId").value = r.id;
    Object.entries(VACCINE_FIELDS).forEach(([id, key]) => $(id).value = r[key] || "");
    $("cancelVaccineEdit").classList.remove("hidden");
}, renderVaccines, "ต้องการลบประวัติวัคซีนนี้หรือไม่?");

// ---------- เริ่มต้น ----------
renderDaily();
renderVaccines();