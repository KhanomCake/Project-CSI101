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
    // (เพิ่ม) คำตอบข้อ 4-7
    const userSpace = parseInt(document.getElementById('space').value);
    const userEnergy = parseInt(document.getElementById('energy').value);
    const userGrooming = parseInt(document.getElementById('grooming').value);
    const userExperience = parseInt(document.getElementById('experience').value);

    const scoredBreeds = dogBreeds.map(dog => {
        const priceDiff = Math.abs(dog.price - userPrice);
        const sizeDiff = Math.abs(dog.size - userSize);
        const tempDiff = dog.temperament === userTemperament ? 0 : Math.abs(dog.temperament - userTemperament) + 2;

        // (เพิ่ม) ใช้วิธีเดิม: ยิ่งคำตอบต่างจากข้อมูลของสายพันธุ์มาก ยิ่งได้ค่าต่างมาก
        const spaceDiff = Math.abs(dog.spaceNeeded - userSpace);
        const energyDiff = Math.abs(dog.energy - userEnergy);
        const groomingDiff = Math.abs(dog.grooming - userGrooming);
        const experienceDiff = Math.abs(dog.experience - userExperience);

        const totalDifference = (priceDiff * 1.0) + (sizeDiff * 2.0) + (tempDiff * 2.5)
            + (spaceDiff * 1.0) + (energyDiff * 1.0) + (groomingDiff * 1.0) + (experienceDiff * 1.0);   // (เพิ่ม) ข้อ 4-7 น้ำหนัก 1.0 เท่ากับเรื่องงบ

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