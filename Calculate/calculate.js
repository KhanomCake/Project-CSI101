// ฟังก์ชันคำนวณค่าใช้จ่ายทั้งหมด
function calculateBudget() {
  // ค่าใช้จ่ายแรกเริ่ม
  const costAdoption =
    parseFloat(document.getElementById("cost-adoption").value) || 0;
  const costVaccine =
    parseFloat(document.getElementById("cost-vaccine").value) || 0;
  const costNeutering =
    parseFloat(document.getElementById("cost-neutering").value) || 0;
  const costBed = parseFloat(document.getElementById("cost-bed").value) || 0;
  const costLeash =
    parseFloat(document.getElementById("cost-leash").value) || 0;
  const costToys = parseFloat(document.getElementById("cost-toys").value) || 0;

  // รวมค่าใช้จ่ายแรกเริ่ม
  const totalInitial =
    costAdoption + costVaccine + costNeutering + costBed + costLeash + costToys;

  // ค่าใช้จ่ายประจำต่อเดือน
  const costFood = parseFloat(document.getElementById("cost-food").value) || 0;
  const costPads = parseFloat(document.getElementById("cost-pads").value) || 0;
  const costGrooming =
    parseFloat(document.getElementById("cost-grooming").value) || 0;
  const costMeds = parseFloat(document.getElementById("cost-meds").value) || 0;
  const costInsurance =
    parseFloat(document.getElementById("cost-insurance").value) || 0;
  const costCheckup =
    parseFloat(document.getElementById("cost-checkup").value) || 0;

  // รวมค่าใช้จ่ายรายเดือน
  const totalMonthly =
    costFood + costPads + costGrooming + costMeds + costInsurance + costCheckup;

  // คำนวณค่าใช้จ่ายรวม
  const totalFirstYear = totalInitial + totalMonthly * 12;
  const totalNextYears = totalMonthly * 12;

  // แสดงผลลัพธ์บนหน้าเว็บไซต์
  document.getElementById("out-monthly").textContent =
    totalMonthly.toLocaleString("th-TH");

  document.getElementById("out-first-year").textContent =
    totalFirstYear.toLocaleString("th-TH");

  document.getElementById("out-next-years").textContent =
    totalNextYears.toLocaleString("th-TH");
}

// เลือกช่องกรอกตัวเลขทั้งหมด
const numberInputs = document.querySelectorAll('input[type="number"]');

// เมื่อมีการเปลี่ยนตัวเลข ให้คำนวณใหม่อัตโนมัติ
numberInputs.forEach(function (input) {
  input.addEventListener("input", calculateBudget);
});

// คำนวณครั้งแรกเมื่อเปิดเว็บไซต์
calculateBudget();

// เลือกปุ่มซื้ออาหารสุนัขทั้งหมด
const shopeeButtons = document.querySelectorAll(".shopee-btn[data-brand]");

// วนลูปเพิ่มคำสั่งให้ปุ่มแต่ละปุ่ม
shopeeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // ดึงชื่อแบรนด์จาก data-brand
    const brand = button.dataset.brand;

    // สร้างลิงก์ค้นหาสินค้าบน Shopee
    const shopeeURL =
      "https://shopee.co.th/search?keyword=" + encodeURIComponent(brand);

    // เปิด Shopee ในแท็บใหม่
    window.open(shopeeURL, "_blank");
  });
});
