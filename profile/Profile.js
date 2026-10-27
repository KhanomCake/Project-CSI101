// Key สำหรับบันทึกข้อมูลใน LocalStorage ของเบราว์เซอร์
const STORAGE_KEY = 'dog_profile_hub_data';

// รายการแท็กลักษณะนิสัยมาตรฐาน
const AVAILABLE_TRAITS = [
    'ขี้เล่น 🎾', 'พลังเยอะ ⚡', 'เป็นมิตร 🤝', 'เรียบร้อย 🧘', 
    'ฉลาด 🧠', 'ช่างอ้อน 💖', 'ติดเจ้าของ 🐶', 'หวงของ 🦴', 
    'รักสงบ 🌿', 'ชอบเห่า 📢', 'นักซน 🐾'
];

// ข้อมูลตัวอย่างเริ่มต้น (กรณีไม่มีข้อมูลใน LocalStorage เลย)
const SAMPLE_DOGS = [
    {
        id: 'dog_sample_1',
        name: 'บะหมี่ (Bami)',
        breed: 'โกลเด้น รีทริฟเวอร์',
        age: '2 ปี 3 เดือน',
        gender: 'ผู้',
        photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
        traits: ['ขี้เล่น 🎾', 'เป็นมิตร 🤝', 'ช่างอ้อน 💖', 'ติดเจ้าของ 🐶'],
        food: 'อกไก่ต้ม & ตับบด',
        toy: 'ลูกบอลยางสีเหลือง',
        bio: 'บะหมี่เป็นหมาอารมณ์ดี ชอบคาบลูกบอลมาให้เล่นด้วยตลอดเวลา เป็นมิตรกับทุกคนที่เดินผ่านบ้าน!',
        health: { vaccinated: true, chipped: true, neutered: true }
    },
    {
        id: 'dog_sample_2',
        name: 'คุกกี้ (Cookie)',
        breed: 'พ็อกเก็ต คอร์กี้',
        age: '1 ปี 6 เดือน',
        gender: 'เมีย',
        photo: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&q=80&w=800',
        traits: ['พลังเยอะ ⚡', 'ฉลาด 🧠', 'นักซน 🐾'],
        food: 'ชีสแท่งสำหรับสุนัข',
        toy: 'ตุ๊กตาเป็ดสีเหลือง',
        bio: 'คุกกี้ขาสั้นแต่วิ่งไวมาก ชอบวิ่งวนรอบโซฟาเวลาได้ยินเสียงซองขนมเปิด!',
        health: { vaccinated: true, chipped: false, neutered: true }
    }
];

// ตัวแปรส่วนกลาง
let dogsData = [];
let selectedTraits = [];
let currentEditingId = null;

// เริ่มต้นโปรแกรมเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    loadDogsData();
    renderTraitsChips();
    renderGallery();
});

// โหลดข้อมูลจาก LocalStorage
function loadDogsData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            dogsData = JSON.parse(savedData);
        } catch (e) {
            dogsData = [...SAMPLE_DOGS];
        }
    } else {
        dogsData = [...SAMPLE_DOGS];
        saveDogsDataToStorage();
    }
}

// บันทึกข้อมูลลง LocalStorage
function saveDogsDataToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dogsData));
    updateStatsCounters();
}

// อัปเดตตัวเลขสถิติ
function updateStatsCounters() {
    const totalEl = document.getElementById('total-count');
    const breedEl = document.getElementById('breed-count');
    if (totalEl && breedEl) {
        totalEl.textContent = dogsData.length;
        const uniqueBreeds = new Set(dogsData.map(d => d.breed.trim().toLowerCase()));
        breedEl.textContent = uniqueBreeds.size;
    }
}

// การแสดงผลการ์ดน้องหมา
function renderGallery() {
    const galleryEl = document.getElementById('dog-gallery');
    const emptyStateEl = document.getElementById('empty-state');
    
    const searchKeyword = document.getElementById('search-input').value.trim().toLowerCase();
    const genderFilter = document.getElementById('gender-filter').value;

    const filteredDogs = dogsData.filter(dog => {
        const matchesSearch = dog.name.toLowerCase().includes(searchKeyword) || 
                              dog.breed.toLowerCase().includes(searchKeyword);
        const matchesGender = (genderFilter === 'all') || (dog.gender === genderFilter);
        return matchesSearch && matchesGender;
    });

    galleryEl.innerHTML = '';

    if (filteredDogs.length === 0) {
        emptyStateEl.classList.remove('hidden');
        emptyStateEl.classList.add('flex');
    } else {
        emptyStateEl.classList.add('hidden');
        emptyStateEl.classList.remove('flex');
        filteredDogs.forEach((dog, index) => {
            const card = createDogCardHTML(dog, index);
            galleryEl.appendChild(card);
        });
    }
    updateStatsCounters();
}

// สร้าง DOM สำหรับการ์ด
function createDogCardHTML(dog, index) {
    const card = document.createElement('div');
    card.className = 'dog-card bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-100 flex flex-col justify-between animate-fade-in-up';
    card.style.animationDelay = `${index * 0.05}s`;

    const genderBadgeClass = dog.gender === 'ผู้' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700';
    const genderSymbol = dog.gender === 'ผู้' ? '♂' : '♀';
    const photoUrl = dog.photo || 'https://placehold.co/400x300/f6ad55/white?text=No+Photo';
    
    const traitsDisplay = (dog.traits || []).slice(0, 3).map(trait => 
        `<span class="bg-amber-50 text-amber-800 border border-amber-200/60 text-[11px] px-2.5 py-0.5 rounded-full">${trait}</span>`
    ).join('');

    card.innerHTML = `
        <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100 cursor-pointer" onclick="openDetailModal('${dog.id}')">
                <img src="${photoUrl}" class="dog-card-img w-full h-full object-cover">
                <div class="absolute top-3 right-3">
                    <span class="${genderBadgeClass} text-xs font-bold px-2.5 py-1 rounded-full">${dog.gender} ${genderSymbol}</span>
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-xl font-bold text-gray-800 cursor-pointer hover:text-amber-600 mb-1" onclick="openDetailModal('${dog.id}')">${dog.name}</h3>
                <p class="text-xs font-medium text-amber-700 mb-3"><i class="fa-solid fa-paw mr-1"></i> ${dog.breed} • ${dog.age}</p>
                <p class="text-gray-600 text-xs line-clamp-2 mb-4 leading-relaxed">${dog.bio || 'ยังไม่มีรายละเอียดประวัติ...'}</p>
                <div class="flex flex-wrap gap-1.5">${traitsDisplay}</div>
            </div>
        </div>
        <div class="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
            <button onclick="openDetailModal('${dog.id}')" class="text-amber-600 font-semibold flex items-center gap-1">
                <span>ดูรายละเอียด</span> <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
            <div class="flex items-center gap-2">
                <button onclick="openEditFormModal('${dog.id}')" class="text-gray-500 hover:text-amber-600 p-1.5"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteDogProfile('${dog.id}')" class="text-gray-400 hover:text-red-500 p-1.5"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    `;
    return card;
}

// ค้นหาและกรอง
function handleSearchFilter() {
    renderGallery();
}

// แท็กลักษณะนิสัย
function renderTraitsChips() {
    const container = document.getElementById('traits-container');
    container.innerHTML = '';
    AVAILABLE_TRAITS.forEach(trait => {
        const chip = document.createElement('span');
        chip.className = `trait-chip text-xs px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 font-medium ${selectedTraits.includes(trait) ? 'selected' : 'bg-white'}`;
        chip.textContent = trait;
        chip.onclick = () => {
            if (selectedTraits.includes(trait)) {
                selectedTraits = selectedTraits.filter(t => t !== trait);
                chip.classList.remove('selected', 'bg-white');
                chip.classList.add('bg-white');
            } else {
                selectedTraits.push(trait);
                chip.classList.add('selected');
                chip.classList.remove('bg-white');
            }
        };
        container.appendChild(chip);
    });
}

// จัดการการอัปโหลดไฟล์/ลิงก์รูป
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            document.getElementById('photo-preview').src = e.target.result;
            document.getElementById('dog-photo-url').value = '';
        };
        reader.readAsDataURL(file);
    }
}
function handleUrlInput(event) {
    const url = event.target.value.trim();
    const preview = document.getElementById('photo-preview');
    if (url) {
        preview.src = url;
        document.getElementById('dog-photo-file').value = '';
    } else {
        preview.src = 'https://placehold.co/100x100/f6ad55/white?text=Preview';
    }
}

// การจัดการ Form Modal
function openFormModal() {
    currentEditingId = null;
    selectedTraits = [];
    document.getElementById('modal-title').innerHTML = '<i class="fa-solid fa-paw"></i> เพิ่มโปรไฟล์น้องหมาใหม่';
    document.getElementById('dog-form').reset();
    document.getElementById('dog-id').value = '';
    document.getElementById('photo-preview').src = 'https://placehold.co/100x100/f6ad55/white?text=Preview';
    renderTraitsChips();
    showModal('form-modal');
}

function openEditFormModal(id) {
    const dog = dogsData.find(d => d.id === id);
    if (!dog) return;
    currentEditingId = id;
    selectedTraits = [...(dog.traits || [])];
    
    document.getElementById('modal-title').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> แก้ไขโปรไฟล์';
    document.getElementById('dog-id').value = dog.id;
    document.getElementById('dog-name').value = dog.name;
    document.getElementById('dog-breed').value = dog.breed;
    document.getElementById('dog-age').value = dog.age;
    document.getElementById('dog-gender').value = dog.gender;
    document.getElementById('dog-photo-url').value = dog.photo.startsWith('data:') ? '' : dog.photo;
    document.getElementById('photo-preview').src = dog.photo || 'https://placehold.co/100x100';
    document.getElementById('dog-food').value = dog.food || '';
    document.getElementById('dog-toy').value = dog.toy || '';
    document.getElementById('dog-bio').value = dog.bio || '';
    
    document.getElementById('health-vaccinated').checked = dog.health?.vaccinated || false;
    document.getElementById('health-chipped').checked = dog.health?.chipped || false;
    document.getElementById('health-neutered').checked = dog.health?.neutered || false;

    renderTraitsChips();
    closeDetailModal();
    showModal('form-modal');
}

function closeFormModal() { hideModal('form-modal'); }

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('dog-name').value.trim();
    const breed = document.getElementById('dog-breed').value.trim();
    const age = document.getElementById('dog-age').value.trim();
    const gender = document.getElementById('dog-gender').value;
    const photoPreviewSrc = document.getElementById('photo-preview').src;
    const photo = (photoPreviewSrc && !photoPreviewSrc.includes('placehold.co')) ? photoPreviewSrc : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800';
    
    const data = {
        name, breed, age, gender, photo,
        traits: [...selectedTraits],
        food: document.getElementById('dog-food').value.trim(),
        toy: document.getElementById('dog-toy').value.trim(),
        bio: document.getElementById('dog-bio').value.trim(),
        health: {
            vaccinated: document.getElementById('health-vaccinated').checked,
            chipped: document.getElementById('health-chipped').checked,
            neutered: document.getElementById('health-neutered').checked
        }
    };

    if (currentEditingId) {
        const index = dogsData.findIndex(d => d.id === currentEditingId);
        dogsData[index] = { ...dogsData[index], ...data };
        showToast('แก้ไขข้อมูลเรียบร้อย!');
    } else {
        data.id = 'dog_' + Date.now();
        dogsData.unshift(data);
        showToast('เพิ่มโปรไฟล์เรียบร้อย!');
    }

    saveDogsDataToStorage();
    renderGallery();
    closeFormModal();
}

function deleteDogProfile(id) {
    if (confirm('คุณต้องการลบโปรไฟล์นี้ใช่หรือไม่?')) {
        dogsData = dogsData.filter(d => d.id !== id);
        saveDogsDataToStorage();
        renderGallery();
        closeDetailModal();
        showToast('ลบโปรไฟล์เรียบร้อย', 'info');
    }
}

// การจัดการ Detail Modal
function openDetailModal(id) {
    const dog = dogsData.find(d => d.id === id);
    if (!dog) return;

    document.getElementById('detail-photo').src = dog.photo || 'https://placehold.co/600x400';
    document.getElementById('detail-name').textContent = dog.name;
    document.getElementById('detail-breed-badge').textContent = dog.breed;
    
    const gb = document.getElementById('detail-gender-badge');
    gb.textContent = `เพศ${dog.gender} ${dog.gender === 'ผู้' ? '♂' : '♀'}`;
    gb.className = `px-3 py-0.5 rounded-full text-xs font-semibold ${dog.gender === 'ผู้' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'}`;

    document.getElementById('detail-age').textContent = dog.age;
    document.getElementById('detail-gender').textContent = `เพศ${dog.gender}`;
    document.getElementById('detail-bio').textContent = dog.bio || '-';
    document.getElementById('detail-food').textContent = dog.food || '-';
    document.getElementById('detail-toy').textContent = dog.toy || '-';

    const traitsContainer = document.getElementById('detail-traits');
    traitsContainer.innerHTML = '';
    if (dog.traits?.length > 0) {
        dog.traits.forEach(trait => {
            traitsContainer.innerHTML += `<span class="bg-amber-100 text-amber-900 border border-amber-200 text-xs px-3 py-1 rounded-full">${trait}</span>`;
        });
    }

    const healthContainer = document.getElementById('detail-health');
    healthContainer.innerHTML = '';
    const healthItems = [
        { key: 'vaccinated', label: 'ฉีดวัคซีนแล้ว', icon: 'fa-syringe', color: 'text-emerald-600 bg-emerald-50' },
        { key: 'chipped', label: 'ฝังไมโครชิป', icon: 'fa-microchip', color: 'text-blue-600 bg-blue-50' },
        { key: 'neutered', label: 'ทำหมันแล้ว', icon: 'fa-scissors', color: 'text-purple-600 bg-purple-50' }
    ];
    let hasHealth = false;
    healthItems.forEach(item => {
        if (dog.health?.[item.key]) {
            hasHealth = true;
            healthContainer.innerHTML += `<span class="text-xs px-3 py-1 rounded-xl border flex items-center gap-1.5 ${item.color}"><i class="fa-solid ${item.icon}"></i> ${item.label}</span>`;
        }
    });
    if (!hasHealth) healthContainer.innerHTML = '<span class="text-xs text-gray-400">ไม่มีข้อมูล</span>';

    document.getElementById('detail-edit-btn').onclick = () => openEditFormModal(dog.id);
    document.getElementById('detail-delete-btn').onclick = () => deleteDogProfile(dog.id);

    showModal('detail-modal');
}
function closeDetailModal() { hideModal('detail-modal'); }

// Utility สำหรับ Modal และ Toast
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.firstElementChild.classList.remove('scale-95');
        modal.firstElementChild.classList.add('scale-100');
    }, 10);
}
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.firstElementChild.classList.remove('scale-100');
    modal.firstElementChild.classList.add('scale-95');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    document.getElementById('toast-icon').className = type === 'success' ? 'fa-solid fa-circle-check text-emerald-400 text-xl' : 'fa-solid fa-circle-info text-blue-400 text-xl';
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}