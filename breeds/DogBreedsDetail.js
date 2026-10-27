const id = new URLSearchParams(location.search).get("id");

const dog = BREEDS.find(function (d) {
  return d.id === id;
});

// ถ้าเปิดหน้านี้โดยไม่มี ?id= หรือ id ไม่ตรงกับสายพันธุ์ไหนเลย ให้แจ้งแทนที่จะเป็นหน้าว่าง
if (!dog) {
  document.getElementById("name").textContent = "ไม่พบสายพันธุ์นี้";
  document.getElementById("en").textContent = "กรุณากลับไปเลือกจากหน้ารายชื่อสายพันธุ์";
} else {
  document.getElementById("name").textContent = dog.th;
  document.getElementById("en").textContent = dog.en;
  document.getElementById("info").textContent = dog.info;
  document.getElementById("lifespan").textContent = dog.lifespan;

  dog.traits.forEach(function (t) {
    const li = document.createElement("li");
    li.textContent = t;
    document.getElementById("traits").appendChild(li);
  });
}
