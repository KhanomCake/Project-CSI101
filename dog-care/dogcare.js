// js สำหรับ ฟังค์ชั่นให้เว็บไซด์เลื่อนตอนเรากดเลือกเสร็จ
const readButtons = document.querySelectorAll(".read-guide-btn");
// เก็บปุ่ม HTML ทุกปุ่มที่มี class ชื่อ read-guide-btn
// เพื่อให้ JavaScript สามารถเข้าถึงปุ่มทุกปุ่ม และสั่งให้แต่ละปุ่มทำงานเมื่อผู้ใช้คลิกได้

const detailPanels = document.querySelectorAll(".detail-panel");
// เพื่อให้ JavaScript สามารถเลือกซ่อนหรือแสดงกล่องรายละเอียดแต่ละกล่องได้ 
// เช่น เมื่อคลิกอ่านเรื่องสุขภาพ ก็แสดงเฉพาะรายละเอียดสุขภาพ



const guideDetails = document.getElementById("guideDetails");
// เก็บ HTML Element ที่มี id="guideDetails" เพียง Element เดียว
// เพื่อให้ JavaScript เข้าถึงส่วนรายละเอียดหลักของหน้าเว็บได้ เช่น สั่งให้หน้าเว็บเลื่อนลงมายังส่วนรายละเอียดเมื่อผู้ใช้กดปุ่มอ่านเพิ่มเติม

readButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const targetPanel = document.getElementById(button.dataset.target);
        // เอาค่าเป้าหมายที่กำหนดไว้ในปุ่ม ไปค้นหากล่องรายละเอียดที่มี ID ตรงกัน แล้วเก็บกล่องนั้นไว้ใน targetPanel"
        // dataset ใช้เข้าถึงข้อมูลที่กำหนดไว้ใน HTML ด้วย Attribute ที่ขึ้นต้นด้วย data-

        if (!targetPanel) return;
        // ถ้าค้นหากล่องไม่เจอ ก็หยุดทำงานทันที เพื่อป้องกัน Error จากการพยายามใช้งาน Element ที่ไม่มีอยู่จริง


        // แสดงกล่องที่เลือกและซ่อนกล่องอื่น
        detailPanels.forEach(function (panel) {
            panel.hidden = panel !== targetPanel;
        });
        // ดังนั้นโค้ดนี้ทำให้แสดงเฉพาะกล่องที่ผู้ใช้เลือก


        // 2. เปลี่ยนสถานะการ์ดที่ถูกเลือก
        readButtons.forEach(function (item) {
            item.closest(".guide-card").classList.toggle(
                "selected",
                item === button
            );
            // closest() ใช้ค้นหา Element แม่ที่ใกล้ที่สุด ซึ่งตรงกับ Selector ที่กำหนด
            // จะได้กล่อง div ที่ครอบปุ่มนั้นอยู่
            // ถ้า item === button เป็น true → เพิ่ม class selected
            // ถ้าเป็น false → ลบ class selected
            // ทำให้การ์ดที่ถูกคลิกมีสถานะ selected ส่วนการ์ดอื่นไม่มีสถานะนี้


            item.setAttribute(
                "aria-expanded",
                String(item === button)
            );
            // ส่วนนี้เป็นการกำหนด Attribute ให้ปุ่ม 
            // เพื่อบอกสถานะการขยายหรือเปิดเนื้อหาของปุ่มแก่เทคโนโลยีช่วยเหลือ 
            // เช่น Screen Reader
            // setAttribute() = กำหนด Attribute
            // "aria-expanded" = ชื่อ Attribute
            // item === button = ตรวจสอบว่าปุ่มนี้เป็นปุ่มที่ถูกคลิกหรือไม่
            // String() = แปลงค่าจาก Boolean เป็น String
            // สิ่งสำคัญคือ aria-expanded ไม่ได้ทำให้กล่องรายละเอียดแสดงหรือซ่อนด้วยตัวเอง
            // หน้าที่หลักคือช่วยให้เทคโนโลยีช่วยเหลือ เช่น Screen Reader เข้าใจสถานะของปุ่มได้
            // ส่วนการแสดงและซ่อนกล่องรายละเอียดจริง ๆ เป็นหน้าที่ของโค้ดนี้:
        });

        // 3. เลื่อนลงมาที่ส่วนรายละเอียด หลังจากแสดงเนื้อหาแล้ว
        requestAnimationFrame(function () {
            guideDetails.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
        });
    });
});