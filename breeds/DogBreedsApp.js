const grid = document.getElementById("grid");
const search = document.getElementById("search");

// ส่วนรูปด้านบนการ์ด: มีรูปก็แสดงรูป ไม่มีรูป (หรือโหลดรูปไม่ขึ้น) แสดงพื้นว่างแทน การ์ดจะได้สูงเท่ากัน
function cardPhoto(dog) {
  const box = document.createElement("div");
  box.className = "card-photo";

  if (dog.image) {
    const img = document.createElement("img");
    img.src = dog.image;
    img.alt = dog.th;
    img.loading = "lazy"; // โหลดเฉพาะการ์ดที่เลื่อนมาเห็น
    img.onerror = function () {
      img.remove();
      box.classList.add("no-photo");
      box.textContent = "ยังไม่มีรูป";
    };
    box.appendChild(img);
  } else {
    box.classList.add("no-photo");
    box.textContent = "ยังไม่มีรูป";
  }
  return box;
}

function DogBreeds(list) {
  grid.innerHTML = "";

  list.forEach(function (dog) {
    const card = document.createElement("a");
    card.className = "card";
    card.href = "DogBreedsDetail.html?id=" + dog.id;

    card.appendChild(cardPhoto(dog));

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = "<h3>" + dog.th + "</h3><p>" + dog.en + "</p><p>อายุขัย " + dog.lifespan + "</p>";
    card.appendChild(body);

    grid.appendChild(card);
  });
}

search.addEventListener("input", function () {
  const word = search.value.toLowerCase();
  const result = BREEDS.filter(function (dog) {
    return (dog.th + dog.en).toLowerCase().includes(word);
  });
  DogBreeds(result);
});

DogBreeds(BREEDS);
