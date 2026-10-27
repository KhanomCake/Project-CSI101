function searchBreed() {
    const searchInput = document.getElementById('breedSearch').value;
    if(searchInput) {
        // ส่งคำค้นไปหน้าสายพันธุ์ผ่าน URL เช่น DogBreedsIndex.html?q=โกลเด้น
        window.location.href = '../breeds/DogBreedsIndex.html?q=' + encodeURIComponent(searchInput);
    } else {
        alert('กรุณาพิมพ์ชื่อสายพันธุ์ที่ต้องการค้นหา');
    }
}

function startQuiz() {
    window.location.href = '../match/recommend-dog.html';
}

function calculateCost() {
    const resultBox = document.getElementById('costResult');
    resultBox.style.opacity = '0.5';
    
    setTimeout(() => {
        resultBox.innerHTML = '฿ 3,000 - 5,500 / เดือน';
        resultBox.style.opacity = '1';
    }, 500);
}