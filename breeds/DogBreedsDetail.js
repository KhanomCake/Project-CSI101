const id = new URLSearchParams(location.search).get("id");

const dog = BREEDS.find(function (d) {
  return d.id === id;
});

// สร้าง element ใหม่ ใส่ class กับข้อความ แล้วต่อท้าย parent ให้เลย (ใช้ซ้ำหลายที่ด้านล่าง)
function addEl(parent, tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  parent.appendChild(el);
  return el;
}

// เติมรายการลงใน <ul>
// แต่ละข้อเป็นได้ทั้งข้อความธรรมดา หรือ { title: "หัวข้อ", text: "คำอธิบาย" }
function fillList(listId, items) {
  const list = document.getElementById(listId);
  items.forEach(function (item) {
    const li = addEl(list, "li");
    if (typeof item === "string") {
      addEl(li, "span", "point-text", item);
    } else {
      addEl(li, "strong", "point-title", item.title);
      addEl(li, "span", "point-text", item.text);
    }
  });
}

function showSection(sectionId) {
  document.getElementById(sectionId).hidden = false;
}

// สร้างปุ่มสารบัญจากหัวข้อที่แสดงอยู่จริง แล้วไฮไลต์ปุ่มของหัวข้อที่กำลังอ่าน
function buildToc() {
  const toc = document.getElementById("toc");
  const sections = document.querySelectorAll(".DogBreeds section:not([hidden])");

  // ถ้ามีหัวข้อน้อย (สายพันธุ์ที่ยังไม่มีข้อมูลละเอียด) ไม่ต้องมีสารบัญ
  if (sections.length < 3) return;

  const links = {};
  sections.forEach(function (section) {
    // ใช้แค่ชื่อหัวข้อ (.sec-title) ไม่เอาไอคอนมาด้วย
    const title = section.querySelector(".sec-title") || section.querySelector("h2");
    const link = addEl(toc, "a", "", title.textContent);
    link.href = "#" + section.id;
    links[section.id] = link;
  });
  toc.hidden = false;

  // เบราว์เซอร์เก่ามากที่ไม่มี IntersectionObserver ก็ยังกดสารบัญได้ปกติ แค่ไม่มีไฮไลต์
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      Object.keys(links).forEach(function (key) {
        links[key].classList.toggle("active", key === entry.target.id);
      });
    });
  }, { rootMargin: "-20% 0px -70% 0px" }); // นับว่า "กำลังอ่าน" เมื่อหัวข้ออยู่ช่วงบนของจอ

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

// ถ้าเปิดหน้านี้โดยไม่มี ?id= หรือ id ไม่ตรงกับสายพันธุ์ไหนเลย ให้แจ้งแทนที่จะเป็นหน้าว่าง
if (!dog) {
  document.getElementById("name").textContent = "ไม่พบสายพันธุ์นี้";
  document.getElementById("en").textContent = "กรุณากลับไปเลือกจากหน้ารายชื่อสายพันธุ์";
  document.getElementById("sec-traits").hidden = true;
} else {
  document.title = dog.th + " | สายพันธุ์สุนัข";
  document.getElementById("name").textContent = dog.th;
  document.getElementById("en").textContent = dog.en;
  // info และ traits อยู่ในไฟล์ details/ ถ้าไฟล์นั้นโหลดไม่ขึ้น หน้าจะยังแสดงชื่อและอายุขัยได้ ไม่พังทั้งหน้า
  document.getElementById("info").textContent = dog.info || "";

  // ข้อมูลทั่วไป: สายพันธุ์ที่ยังไม่มี facts จะแสดงแค่อายุขัย
  const facts = dog.facts || [{ label: "อายุขัย", value: dog.lifespan }];
  facts.forEach(function (fact) {
    // ถ้ามีข้อมูลช่องเดียว ให้กินเต็มแถว ไม่งั้นจะเหลือช่องว่างในตาราง
    const wide = fact.wide || facts.length === 1;
    const box = addEl(document.getElementById("facts"), "div", wide ? "fact fact-wide" : "fact");
    addEl(box, "span", "fact-label", fact.label);
    addEl(box, "span", "fact-value", fact.value);
  });

  if (dog.traits) {
    fillList("traits", dog.traits);
  } else {
    document.getElementById("sec-traits").hidden = true;
  }

  // หัวข้อด้านล่างนี้จะแสดงก็ต่อเมื่อสายพันธุ์นั้นมีข้อมูล
  if (dog.history) {
    document.getElementById("history").textContent = dog.history;
    showSection("sec-history");
  }

  if (dog.pros && dog.cons) {
    fillList("pros", dog.pros);
    fillList("cons", dog.cons);
    document.getElementById("pros-count").textContent = dog.pros.length + " ข้อ";
    document.getElementById("cons-count").textContent = dog.cons.length + " ข้อ";
    showSection("sec-proscons");
  }

  if (dog.care) {
    dog.care.forEach(function (item) {
      // หนึ่งแถว = [หัวข้อ] [คำอธิบาย] (CSS จัดเป็น 2 คอลัมน์)
      const row = addEl(document.getElementById("care"), "li");
      addEl(row, "strong", "point-title", item.title);
      addEl(row, "span", "point-text", item.text);
    });
    showSection("sec-care");
  }

  if (dog.health) {
    fillList("health", dog.health);
    showSection("sec-health");
  }

  if (dog.suitable) {
    fillList("suit-good", dog.suitable.good);
    fillList("suit-caution", dog.suitable.caution);
    showSection("sec-suitable");
  }

  if (dog.sources) {
    const list = document.getElementById("source-list");
    dog.sources.forEach(function (src) {
      const li = addEl(list, "li");
      const link = addEl(li, "a", "", src.name);
      link.href = src.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer"; // เปิดแท็บใหม่อย่างปลอดภัย
    });
    if (dog.sourcesDate) {
      document.getElementById("sources-note").textContent =
        "เข้าถึงข้อมูลเมื่อ " + dog.sourcesDate + " · ข้อมูลเพื่อความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์";
    }
    document.getElementById("sources").hidden = false;
  }

  buildToc();
}
