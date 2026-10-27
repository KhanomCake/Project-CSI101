// ข้อมูลสุนัขมาจากไฟล์ recommend-dog-data.js (โหลดไว้ก่อนไฟล์นี้ใน recommend-dog.html)
let dogBreeds = DOG_BREEDS_DATA;


function submitQuiz() {
    if (dogBreeds.length === 0) {
        alert("กำลังโหลดข้อมูลสุนัข กรุณาลองใหม่อีกครั้งในสักครู่");
        return;
    }

    const userAnswers = {
        spaceNeeded: parseInt(document.getElementById('space').value),
        energy: parseInt(document.getElementById('energy').value),
        grooming: parseInt(document.getElementById('grooming').value),
        experience: parseInt(document.getElementById('experience').value)
    };

    
    const matches = calculateMatches(userAnswers);

    
    displayResults(matches.slice(0, 3));
}


function calculateMatches(userAnswers) {
    const weights = {
        spaceNeeded: 3,  
        energy: 2.5,     
        grooming: 1.5,   
        experience: 2    
    };

    
    const maxPenalty = (4 * weights.spaceNeeded) + 
                       (4 * weights.energy) + 
                       (4 * weights.grooming) + 
                       (4 * weights.experience);

    return dogBreeds.map(breed => {
        
        let penalty = Math.abs(breed.spaceNeeded - userAnswers.spaceNeeded) * weights.spaceNeeded +
                      Math.abs(breed.energy - userAnswers.energy) * weights.energy +
                      Math.abs(breed.grooming - userAnswers.grooming) * weights.grooming +
                      Math.abs(breed.experience - userAnswers.experience) * weights.experience;

        
        let matchPercentage = Math.max(0, Math.round(((maxPenalty - penalty) / maxPenalty) * 100));

        return { ...breed, matchPercentage };
    }).sort((a, b) => b.matchPercentage - a.matchPercentage); 
}


function displayResults(topBreeds) {
    const listContainer = document.getElementById('dog-list');
    listContainer.innerHTML = '';

    topBreeds.forEach((dog, index) => {
        const item = document.createElement('div');
        item.className = 'dog-item';
        item.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}" class="dog-img">
            <div class="dog-info">
                <h4>อันดับที่ ${index + 1}: ${dog.name}</h4>
                <div class="badge">เข้ากันได้ ${dog.matchPercentage}%</div>
                <p>${dog.description}</p>
            </div>
        `;
        listContainer.appendChild(item);
    });

    document.getElementById('result').style.display = 'block';
}