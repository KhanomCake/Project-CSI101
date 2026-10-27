// js สำหรับ ฟังค์ชั่นให้เว็บไซด์เลื่อนตอนเรากดเลือกเสร็จ
const readButtons = document.querySelectorAll(".read-guide-btn");
const detailPanels = document.querySelectorAll(".detail-panel");
const guideDetails = document.getElementById("guideDetails");

readButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const targetPanel = document.getElementById(button.dataset.target);

        if (!targetPanel) return;

        // 1. แสดงเนื้อหาที่เลือก และซ่อนเนื้อหาอื่น
        detailPanels.forEach(function (panel) {
            panel.hidden = panel !== targetPanel;
        });

        // 2. เปลี่ยนสถานะการ์ดที่ถูกเลือก
        readButtons.forEach(function (item) {
            item.closest(".guide-card").classList.toggle(
                "selected",
                item === button
            );

            item.setAttribute(
                "aria-expanded",
                String(item === button)
            );
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