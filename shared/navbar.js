// เมนูนำทางกลางของเว็บ MaMha
// ทุกหน้าเรียกไฟล์นี้ไฟล์เดียว ถ้าจะเพิ่ม/แก้เมนู แก้ที่นี่ที่เดียว ทุกหน้าเปลี่ยนตาม
// รายการเมนู: folder = ชื่อโฟลเดอร์ของหน้านั้น, file = ชื่อไฟล์ html, label = ข้อความบนเมนู
const MENU_ITEMS = [
    // { folder: "home",      file: "home.html",           label: "หน้าแรก" },
    // { folder: "menu",      file: "menu.html",           label: "สารบัญ" },   // ย้ายไปไว้ที่โลโก้ MaMha แทน
    // { folder: "about",     file:"about.html",           label: "เกี่ยวกับ" },
    { folder: "breeds",    file: "DogBreedsIndex.html", label: "สายพันธุ์สุนัข" },
    // { folder: "search",    file: "Dogsearch.html",      label: "ค้นหาสุนัข" },
    { folder: "match",     file: "maindog.html",  label: "จับคู่หาน้องหมา" },
    { folder: "dog-care",  file: "dogcare.html",        label: "คู่มือการเลี้ยง" },
    { folder: "Calculate", file: "calculate.html",      label: "คำนวณค่าใช้จ่าย" },
    // { folder: "vaccine",   file: "vaccines.html",       label: "วัคซีน" },
    // { folder: "profile",   file: "Profile.html",        label: "โปรไฟล์น้องหมา" },
    // { folder: "diary",     file: "dogdiary.html",       label: "บันทึกน้องหมา" },
    // { folder: "community", file: "community.html",      label: "คอมมูนิตี้" }
];

// หาว่าตอนนี้อยู่หน้าไหน จากชื่อโฟลเดอร์ใน URL
// เช่น .../MaMha/vaccine/vaccines.html  ->  "vaccine"
const pathParts = window.location.pathname.split("/");
const currentFolder = decodeURIComponent(pathParts[pathParts.length - 2]);

// สร้าง HTML ของเมนู
// ทุกหน้าอยู่ในโฟลเดอร์ลึก 1 ชั้น เลยใช้ "../" ถอยออกมา 1 ชั้นก่อน แล้วค่อยเข้าโฟลเดอร์ปลายทาง
//part traversal เดี๋ยวลืมขอคอมเม้นไว้นะทุกคน 
let linksHTML = "";
MENU_ITEMS.forEach(function (item) {
    const activeClass = item.folder === currentFolder ? ' class="active"' : "";
    linksHTML += '<a href="../' + item.folder + "/" + item.file + '"' + activeClass + ">" + item.label + "</a>";
});

const nav = document.createElement("nav");
nav.className = "mamha-nav";
nav.innerHTML =
    '<a href="../menu/menu.html" class="mamha-nav-logo">MaMha</a>' +   // กดโลโก้ = ไปหน้าสารบัญ
    '<div class="mamha-nav-links">' + linksHTML + "</div>";
    // + '<a href="../index.html" class="mamha-nav-logout">ออกจากระบบ</a>';   // เอาระบบ login/logout ออกแล้ว

document.body.prepend(nav);
