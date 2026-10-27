const grid = document.getElementById("grid"); 
const search = document.getElementById("search");

function DogBreeds(list) {
  grid.innerHTML = "";

  list.forEach(function (dog) {
    const card = document.createElement("a");
    card.className = "card";
    card.href = "DogBreedsDetail.html?id=" + dog.id;
    card.innerHTML = "<h3>" + dog.th + "</h3><p>" + dog.en + "</p><p>อายุขัย " + dog.lifespan + "</p>";
    grid.appendChild(card);
  });
}
function filterBreeds() {
  const word = search.value.toLowerCase();
  const result = BREEDS.filter(function (dog) {
    return (dog.th + dog.en).toLowerCase().includes(word);
  });
  DogBreeds(result);
}

search.addEventListener("input", filterBreeds);

// ถ้ามาจากหน้าอื่นพร้อมคำค้น (เช่น DogBreedsIndex.html?q=โกลเด้น) ให้ใส่คำค้นลงช่องค้นหาให้เลย
const queryFromUrl = new URLSearchParams(location.search).get("q");
if (queryFromUrl) {
  search.value = queryFromUrl;
}
filterBreeds();