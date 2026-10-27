
const $ = id => document.getElementById(id);

const DAILY_KEY = "dogDiaryDailyV2";
const VACCINE_KEY = "dogDiaryVaccinesV2";
const PET_KEY = "dogDiaryPetV2";

// อ่านข้อมูลที่บันทึกไว้ในเบราว์เซอร์
function load(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

// บันทึกข้อมูลลงในเบราว์เซอร์
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// สร้างรหัสให้แต่ละรายการ
function uid() {
  return window.crypto?.randomUUID?.() ||
    `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// วันที่ปัจจุบัน
function today() {
  const d = new Date();

  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// แปลงวันที่เป็น วัน/เดือน/ปี
function dateText(value) {
  if (!value) return "—";

  const [y, m, d] = value.split("-");
  return `${d}/${m}/${y}`;
}

// ป้องกันข้อความที่ผู้ใช้กรอกแทรก HTML
function safe(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

// แสดงข้อความแจ้งเตือน
let toastTimer;

function toast(message) {
  const box = $("toast");

  // ถ้า HTML ไม่มีช่องแจ้งเตือน ให้ใช้ alert แทน
  if (!box) {
    alert(message);
    return;
  }

  box.textContent = message;
  box.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    box.classList.remove("show");
  }, 2400);
}

// อ่านค่าตัวเลือกที่เลือกอยู่
function selectedRadio(name) {
  return document.querySelector(
    `input[name="${name}"]:checked`
  )?.value || "";
}

// เลือกตัวเลือกตามค่าที่ต้องการ
function setRadio(name, value) {
  const inputs = document.querySelectorAll(
    `input[name="${name}"]`
  );

  inputs.forEach(input => {
    input.checked = input.value === value;
  });
}

// สลับหน้า บันทึกประจำวัน / บันทึกวัคซีน
function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("hidden", page.id !== id);
  });

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === id
    );
  });

  if (id === "daily") renderDaily();
  if (id === "vaccine") renderVaccines();
}

// กดเมนูเพื่อเปลี่ยนหน้า
document.querySelectorAll(".nav-link").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

// ตั้งค่าวันที่เริ่มต้น
$("dailyDate").value = today();
$("vaccineDate").value = today();

$("dailyDate").addEventListener("change", renderDaily);


// =====================================
// 1. ระบบบันทึกประจำวัน
// =====================================

$("dailyForm").addEventListener("submit", event => {
  event.preventDefault();

  const date = $("dailyDate").value || today();
  const id = $("dailyId").value || uid();
  const records = load(DAILY_KEY);

  const record = {
    id,
    date,
    sleep: selectedRadio("sleep"),
    food: selectedRadio("food"),
    toilet: selectedRadio("toilet"),
    activity: selectedRadio("activity"),
    mood: selectedRadio("mood"),
    notes: $("dailyNotes").value.trim()
  };

  const index = records.findIndex(item => item.id === id);

  if (index >= 0) {
    records[index] = record;
  } else {
    records.push(record);
  }

  save(DAILY_KEY, records);

  resetDailyForm();
  renderDaily();

  toast(
    index >= 0
      ? "แก้ไขบันทึกเรียบร้อยแล้ว 🐾"
      : "บันทึกประจำวันเรียบร้อยแล้ว 🐶"
  );
});

// คืนค่าแบบฟอร์มประจำวัน
function resetDailyForm() {
  $("dailyId").value = "";
  $("dailyNotes").value = "";

  setRadio("sleep", "8–12 ชม.");
  setRadio("food", "กินปกติ");
  setRadio("toilet", "ปกติ");
  setRadio("activity", "15–30 นาที");
  setRadio("mood", "ร่าเริง");

  $("cancelEdit").classList.add("hidden");
}

// ปุ่มยกเลิกการแก้ไขบันทึกประจำวัน
$("cancelEdit").addEventListener("click", resetDailyForm);

// แสดงประวัติของวันที่เลือก
function renderDaily() {
  const date = $("dailyDate").value || today();

  const records = load(DAILY_KEY)
    .filter(record => record.date === date)
    .sort((a, b) => b.id.localeCompare(a.id));

  if (records.length === 0) {
    $("dailyHistory").innerHTML =
      '<p class="empty">ยังไม่มีบันทึกของวันที่เลือก 🐶</p>';
    return;
  }

  $("dailyHistory").innerHTML = records.map(record => `
    <article class="history-item">
      <span class="history-emoji">🐾</span>

      <div class="history-copy">
        <strong>
          ${safe(record.mood)} · ${safe(record.food)}
        </strong>

        <small>
          นอน ${safe(record.sleep)}<br>
          ขับถ่าย ${safe(record.toilet)}<br>
          ออกกำลังกาย ${safe(record.activity)}
        </small>

        ${record.notes
          ? `<small>📝 ${safe(record.notes)}</small>`
          : ""}
      </div>

      <div class="item-actions">
        <button
          class="mini-btn"
          data-edit-daily="${safe(record.id)}"
          type="button">
          แก้ไข
        </button>

        <button
          class="mini-btn delete"
          data-delete-daily="${safe(record.id)}"
          type="button">
          ลบ
        </button>
      </div>
    </article>
  `).join("");
}

// ปุ่มแก้ไขและลบประวัติประจำวัน
$("dailyHistory").addEventListener("click", event => {
  const edit = event.target.closest("[data-edit-daily]");
  const del = event.target.closest("[data-delete-daily]");
  const records = load(DAILY_KEY);

  if (edit) {
    const record = records.find(
      item => item.id === edit.dataset.editDaily
    );

    if (!record) return;

    $("dailyId").value = record.id;
    $("dailyDate").value = record.date;
    setRadio("sleep", record.sleep);
    setRadio("food", record.food);
    setRadio("toilet", record.toilet);
    setRadio("activity", record.activity);
    setRadio("mood", record.mood);
    $("dailyNotes").value = record.notes || "";

    $("cancelEdit").classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    toast("แก้ไขข้อมูล แล้วกดบันทึกอีกครั้ง");
  }

  if (del && confirm("ต้องการลบบันทึกประจำวันนี้หรือไม่?")) {
    save(
      DAILY_KEY,
      records.filter(
        item => item.id !== del.dataset.deleteDaily
      )
    );

    renderDaily();
    toast("ลบบันทึกแล้ว");
  }
});


// =====================================
// 2. ระบบข้อมูลน้องหมา
// =====================================

// บันทึกชื่อและสายพันธุ์
$("savePet").addEventListener("click", () => {
  const pet = {
    name: $("dogName").value.trim(),
    breed: $("dogBreed").value.trim()
  };

  save(PET_KEY, pet);
  toast("บันทึกข้อมูลน้องหมาแล้ว 🐶");
});

// โหลดข้อมูลน้องหมาที่เคยบันทึกไว้
function fillPet() {
  const pet = load(PET_KEY, {});

  $("dogName").value = pet.name || "";
  $("dogBreed").value = pet.breed || "";
}

fillPet();


// =====================================
// 3. ระบบบันทึกวัคซีน
// =====================================

$("vaccineForm").addEventListener("submit", event => {
  event.preventDefault();

  const date = $("vaccineDate").value;
  const nextDate = $("nextDate").value;

  // ตรวจสอบวันนัดครั้งถัดไป
  if (nextDate && nextDate < date) {
    toast("วันนัดครั้งถัดไปต้องไม่ก่อนวันที่ฉีด");
    return;
  }

  const id = $("vaccineId").value || uid();
  const records = load(VACCINE_KEY);

  const record = {
    id,
    name: $("vaccineName").value,
    date,
    dose: $("dose").value,
    clinic: $("clinic").value.trim(),
    nextDate,
    notes: $("vaccineNotes").value.trim()
  };

  const index = records.findIndex(item => item.id === id);

  if (index >= 0) {
    records[index] = record;
  } else {
    records.push(record);
  }

  save(VACCINE_KEY, records);

  $("vaccineForm").reset();
  $("vaccineId").value = "";
  $("vaccineDate").value = today();
  $("dose").value = "1";
  $("cancelVaccineEdit").classList.add("hidden");

  renderVaccines();

  toast(
    index >= 0
      ? "แก้ไขประวัติวัคซีนแล้ว 💉"
      : "บันทึกประวัติวัคซีนแล้ว 💉"
  );
});

// ปุ่มยกเลิกการแก้ไขวัคซีน
$("cancelVaccineEdit").addEventListener("click", () => {
  $("vaccineForm").reset();

  $("vaccineId").value = "";
  $("vaccineDate").value = today();
  $("dose").value = "1";

  $("cancelVaccineEdit").classList.add("hidden");
});

// แสดงประวัติวัคซีนและวันนัดครั้งถัดไป
function renderVaccines() {
  const records = load(VACCINE_KEY)
    .sort((a, b) => b.date.localeCompare(a.date));

  const upcoming = records
    .filter(record =>
      record.nextDate && record.nextDate >= today()
    )
    .sort((a, b) =>
      a.nextDate.localeCompare(b.nextDate)
    )[0];

  $("nextDateDisplay").textContent = upcoming
    ? dateText(upcoming.nextDate)
    : "ยังไม่มีวันนัด";

  $("nextVaccineDisplay").textContent = upcoming
    ? upcoming.name
    : "เพิ่มข้อมูลวัคซีนเพื่อเริ่มต้น";

  if (records.length === 0) {
    $("vaccineHistory").innerHTML = `
      <tr>
        <td colspan="6" class="empty">
          ยังไม่มีประวัติวัคซีน
        </td>
      </tr>
    `;
    return;
  }

  $("vaccineHistory").innerHTML = records.map(record => `
    <tr>
      <td>${safe(record.name)}</td>
      <td>${safe(dateText(record.date))}</td>
      <td>${safe(record.dose)}</td>
      <td>${safe(record.clinic || "—")}</td>
      <td>${safe(dateText(record.nextDate))}</td>
      <td>
        <button
          class="mini-btn"
          type="button"
          data-edit-vaccine="${safe(record.id)}">
          แก้ไข
        </button>

        <button
          class="mini-btn delete"
          type="button"
          data-delete-vaccine="${safe(record.id)}">
          ลบ
        </button>
      </td>
    </tr>
  `).join("");
}

// ปุ่มแก้ไขและลบประวัติวัคซีน
$("vaccineHistory").addEventListener("click", event => {
  const edit = event.target.closest("[data-edit-vaccine]");
  const del = event.target.closest("[data-delete-vaccine]");
  const records = load(VACCINE_KEY);

  if (edit) {
    const record = records.find(
      item => item.id === edit.dataset.editVaccine
    );

    if (!record) return;

    $("vaccineId").value = record.id;
    $("vaccineName").value = record.name;
    $("vaccineDate").value = record.date;
    $("dose").value = record.dose;
    $("clinic").value = record.clinic || "";
    $("nextDate").value = record.nextDate || "";
    $("vaccineNotes").value = record.notes || "";

    $("cancelVaccineEdit").classList.remove("hidden");

    $("vaccineForm").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    toast("แก้ไขข้อมูล แล้วกดบันทึกประวัติวัคซีน");
  }

  if (del && confirm("ต้องการลบประวัติวัคซีนนี้หรือไม่?")) {
    save(
      VACCINE_KEY,
      records.filter(
        item => item.id !== del.dataset.deleteVaccine
      )
    );

    renderVaccines();
    toast("ลบประวัติวัคซีนแล้ว");
  }
});


// =====================================
// เริ่มต้นแสดงข้อมูลเมื่อเปิดเว็บไซต์
// =====================================

renderDaily();
renderVaccines();



// ถ้าเข้ามาจากหน้าอื่นด้วยลิงก์ dogdiary.html#vaccine ให้เปิดแท็บวัคซีนเลย
if (location.hash === "#vaccine") {
  showPage("vaccine");
}
