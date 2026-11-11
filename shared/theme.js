// ธีมกลางของเว็บ MaMha (ทดลอง)
// ทำ 2 อย่าง:
//   1) ใส่ class ให้ <body> ตามชื่อโฟลเดอร์ เช่น "page-vaccine" เพื่อให้ theme.css แต่งเฉพาะหน้าได้
//   2) สร้างแถบหัวเรื่อง (banner) แบบเดียวกับหน้าสารบัญ วางไว้ใต้ navbar
// ไฟล์นี้ต้องเรียก "หลัง" navbar.js เพราะใช้ตัวแปร currentFolder ที่ navbar.js หาไว้แล้ว

// ข้อความบนแถบหัวเรื่องของแต่ละหน้า
// title = คำแรก (สีน้ำเงินเข้ม), highlight = คำหลัง (สีฟ้า), desc = คำอธิบาย
const PAGE_BANNERS = {
    "breeds":    { eyebrow: "ข้อมูลสุนัข", title: "สายพันธุ์", highlight: "สุนัข",    desc: "ค้นหาข้อมูลและทำความรู้จักกับสายพันธุ์สุนัขต่าง ๆ" },
    "match":     { eyebrow: "แบบทดสอบ",  title: "Dog ",     highlight: "Match",    desc: "ตอบคำถามสั้น ๆ แล้วดูว่าสายพันธุ์ไหนเหมาะกับคุณ" },
    "dog-care":  { eyebrow: "คู่มือ",      title: "คู่มือ",     highlight: "การเลี้ยง", desc: "เรียนรู้วิธีการดูแลสุนัขอย่างถูกต้อง พร้อมคำแนะนำจากผู้เชี่ยวชาญ" },
    "vaccine":   { eyebrow: "สุขภาพ",     title: "ข้อมูล",    highlight: "วัคซีน",    desc: "ข้อมูลวัคซีนที่จำเป็นสำหรับสุนัขและตารางการฉีดวัคซีน" },
    "profile":   { eyebrow: "Dog Profile", title: "โปรไฟล์",  highlight: "น้องหมา",  desc: "สร้างและจัดการโปรไฟล์สุนัขของคุณ เก็บข้อมูลสุขภาพและประวัติการดูแล" },
    "diary":     { eyebrow: "บันทึก",     title: "บันทึก",    highlight: "น้องหมา",  desc: "บันทึกข้อมูลการดูแล สุขภาพ และกิจกรรมต่าง ๆ ของน้องหมา" },
    "community": { eyebrow: "ชุมชน",      title: "คอม",      highlight: "มูนิตี้",   desc: "พูดคุย แลกเปลี่ยนประสบการณ์กับเพื่อน ๆ คนรักสุนัข" }
};

// 1) ใส่ class ให้ body
document.body.classList.add("mamha-themed", "page-" + currentFolder);

// 2) สร้างแถบหัวเรื่อง เฉพาะหน้าที่มีข้อความใน PAGE_BANNERS
const banner = PAGE_BANNERS[currentFolder];
if (banner) {
    const section = document.createElement("section");
    section.className = "mamha-banner";
    section.innerHTML =
        '<div class="mamha-banner-inner">' +
            '<div class="mamha-banner-copy">' +
                '<p class="mamha-banner-eyebrow">🐾 ' + banner.eyebrow + "</p>" +
                '<div class="mamha-banner-title">' + banner.title + "<span>" + banner.highlight + "</span></div>" +
                '<p class="mamha-banner-desc">' + banner.desc + "</p>" +
            "</div>" +
            '<img class="mamha-banner-logo" src="../shared/img/mamha-logo.webp" alt="โลโก้ MaMha">' +
        "</div>";

    // วางต่อจาก navbar (navbar อยู่บนสุดของ body แล้ว)
    document.querySelector(".mamha-nav").after(section);
}
