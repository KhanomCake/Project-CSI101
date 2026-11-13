let dogBreeds = [];


async function loadDogData() {
    const submitBtn = document.querySelector('button');
    submitBtn.disabled = true;
    submitBtn.textContent = "กำลังโหลดข้อมูล...";

    try {
        const response = await fetch('dog-match.json');
        if (!response.ok) throw new Error("โหลดไฟล์ไม่สำเร็จ");
        dogBreeds = await response.json();
        
        submitBtn.disabled = false;
        submitBtn.textContent = "วิเคราะห์ผลลัพธ์";
    } catch (error) {
        console.error("Error loading dog breeds JSON:", error);
        submitBtn.textContent = "โหลดข้อมูลไม่สำเร็จ";
    }
}

loadDogData();

function submitQuiz() {
    if (dogBreeds.length === 0) {
        alert("กำลังโหลดข้อมูล กรุณาลองใหม่อีกครั้ง");
        return;
    }

    const userPrice = parseInt(document.getElementById('price').value);
    const userSize = parseInt(document.getElementById('size').value);
    const userTemperament = parseInt(document.getElementById('temperament').value);

    const scoredBreeds = dogBreeds.map(dog => {
        const priceDiff = Math.abs(dog.price - userPrice);
        const sizeDiff = Math.abs(dog.size - userSize);
        const tempDiff = dog.temperament === userTemperament ? 0 : Math.abs(dog.temperament - userTemperament) + 2;

        const totalDifference = (priceDiff * 1.0) + (sizeDiff * 2.0) + (tempDiff * 2.5);

        return {
            ...dog,
            score: totalDifference
        };
    });

    scoredBreeds.sort((a, b) => a.score - b.score);
    const top3Dogs = scoredBreeds.slice(0, 3);

    const dogListDiv = document.getElementById('dog-list');
    dogListDiv.innerHTML = '';

    top3Dogs.forEach((dog, index) => {
        const item = document.createElement('div');
        item.style.marginBottom = '16px';
        item.innerHTML = `
            <p><strong>อันดับที่ ${index + 1}:</strong> ${dog.name_th} (${dog.name_en})</p>
            <img src="${dog.image}" alt="${dog.name_en}" style="width: 200px; height: auto; border-radius: 8px;" onerror="this.style.display='none'">
        `;
        dogListDiv.appendChild(item);
    });

    document.getElementById('result').style.display = 'block';
}