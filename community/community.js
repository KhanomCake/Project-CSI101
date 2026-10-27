// ==========================================
// Dog Community Web App - JavaScript Engine
// ==========================================

// --- ข้อมูลจำลองเริ่มต้น (Mock Data) ---
let posts = [
    {
        id: 1,
        author: "น้องโกลเด้นจอมซน",
        time: "10 นาทีที่แล้ว",
        content: "วันนี้พาน้องโกลเด้นไปวิ่งเล่นที่สวนสาธารณะมาครับ อากาศดีมากๆ น้องแฮปปี้สุดๆ เลยเอาภาพมาฝากทุกคนครับ 🐶✨",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
        likes: 12,
        isLiked: false,
        comments: ["น้องน่ารักมากๆ ครับ", "พันธุ์เดียวกันเลย!"]
    },
    {
        id: 2,
        author: "หมอแมวรักหมา",
        time: "1 ชั่วโมงที่แล้ว",
        content: "อย่าลืมพาน้องหมาไปฉีดวัคซีนพิษสุนัขบ้าประจำปีกันนะครับ หน้าหนาว/หน้าร้อน ก็ฉีดได้ตามกำหนดน้า เพื่อความปลอดภัยของน้องและทุกคนครับ",
        image: null,
        likes: 25,
        isLiked: true,
        comments: ["ขอบคุณสำหรับคำแนะนำครับหมอ"]
    }
];

const hospitals = [
    { name: "โรงพยาบาลสัตว์ทองหล่อ", location: "กรุงเทพฯ (หลายสาขา)", time: "24 ชั่วโมง", tel: "02-079-9999", is24h: true },
    { name: "โรงพยาบาลสัตว์เกษตร", location: "บางเขน กรุงเทพฯ", time: "08:30 - 20:00 น.", tel: "02-797-1900", is24h: false },
    { name: "โรงพยาบาลสัตว์จุฬาลงกรณ์", location: "ปทุมวัน กรุงเทพฯ", time: "24 ชั่วโมง (ฉุกเฉิน)", tel: "02-218-9751", is24h: true },
    { name: "คลินิกคนรักสุนัข", location: "นนทบุรี", time: "09:00 - 19:30 น.", tel: "02-555-1234", is24h: false }
];

const knowledges = [
    { breed: "โกลเด้น รีทรีฟเวอร์", desc: "เป็นมิตร ฉลาด พลังงานเยอะ ชอบเล่นน้ำ ต้องการการออกกำลังกายสม่ำเสมอ" },
    { breed: "ปอมเปอเรเนียน", desc: "ตัวเล็ก น่ารัก ขี้อ้อน และตื่นตัวตลอดเวลา ต้องระวังเรื่องโรคข้อเข่าและหลอดลม" },
    { breed: "ชิบะ อินุ", desc: "รักอิสระ ซื่อสัตย์ มีความมั่นใจสูง ต้องการเจ้าของที่เข้าใจธรรมชาติของสายพันธุ์" },
    { breed: "ไซบีเรียน ฮัสกี", desc: "อารมณ์ดี ชอบสังคม พลังงานสูงมาก ชอบส่งเสียงพูดคุย ต้องเลี้ยงในพื้นที่ร่มรื่น" }
];

let selectedImageData = null;

// ==========================================
// 1. ระบบการสลับหน้า (SPA Navigation)
// ==========================================
function switchPage(pageName) {
    // ซ่อนทุกหน้าก่อน
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.add('hidden'));

    // แสดงหน้าที่เลือก
    const selectedPage = document.getElementById(`page-${pageName}`);
    if (selectedPage) selectedPage.classList.remove('hidden');

    // อัปเดตสีของปุ่ม Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    const activeNav = document.getElementById(`nav-${pageName}`);
    if (activeNav) activeNav.classList.add('active');
}

// ==========================================
// 2. ระบบจัดการโพสต์พูดคุย (Community Feed)
// ==========================================

// แปลงไฟล์รูปภาพเป็น Data URL และแสดง Preview
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImageData = e.target.result;
            document.getElementById('image-preview').src = selectedImageData;
            document.getElementById('image-preview-container').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
}

// ลบรูปภาพที่เลือกไว้ก่อนโพสต์
function removeSelectedImage() {
    selectedImageData = null;
    document.getElementById('post-image-file').value = '';
    document.getElementById('image-preview-container').classList.add('hidden');
}

// เพิ่มโพสต์ใหม่
function addPost() {
    const input = document.getElementById('post-input');
    const content = input.value.trim();

    if (!content && !selectedImageData) {
        alert('กรุณาพิมพ์ข้อความหรือแปะรูปภาพก่อนโพสต์นะครับ!');
        return;
    }

    const newPost = {
        id: Date.now(),
        author: "คนรักน้องหมา (คุณ)",
        time: "เมื่อสักครู่",
        content: content,
        image: selectedImageData,
        likes: 0,
        isLiked: false,
        comments: []
    };

    posts.unshift(newPost); // เพิ่มไปบนสุด
    input.value = '';
    removeSelectedImage();
    renderPosts();
}

// แสดงรายการโพสต์ทั้งหมด
function renderPosts() {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = "post-card";
        
        let imageHTML = post.image ? `<img src="${post.image}" class="post-image">` : '';

        // รายการความคิดเห็น
        let commentsHTML = post.comments.map(c => `
            <div class="comment-item">
                <span class="comment-author">สมาชิก:</span> ${c}
            </div>
        `).join('');

        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-author">
                    <div class="author-avatar">
                        ${post.author.charAt(0)}
                    </div>
                    <div>
                        <p class="author-name">${post.author}</p>
                        <p class="post-time">${post.time}</p>
                    </div>
                </div>
            </div>
            <p class="post-content">${post.content}</p>
            ${imageHTML}
            
            <div class="post-actions">
                <button onclick="toggleLike(${post.id})" class="like-button${post.isLiked ? ' liked' : ''}">
                    <i class="${post.isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    <span>${post.likes} ไลก์</span>
                </button>
                <div class="comment-count">
                    <i class="fa-regular fa-comment"></i> ${post.comments.length} ความคิดเห็น
                </div>
            </div>

            <!-- โซนความคิดเห็น -->
            <div class="comment-section">
                ${commentsHTML}
                <div class="comment-form">
                    <input type="text" id="comment-input-${post.id}" placeholder="เขียนความคิดเห็น..." class="form-control">
                    <button onclick="addComment(${post.id})" class="button comment-submit">ส่ง</button>
                </div>
            </div>
        `;
        container.appendChild(postElement);
    });
}

// กดไลก์ / ยกเลิกไลก์
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        renderPosts();
    }
}

// เพิ่มความคิดเห็น
function addComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const commentText = input.value.trim();
    if (commentText) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.comments.push(commentText);
            renderPosts();
        }
    }
}

// ==========================================
// 3. ระบบตารางประวัติวัคซีน (LocalStorage)
// ==========================================
function saveVaccineRecord(e) {
    e.preventDefault();
    const dogName = document.getElementById('dog-name-input').value;
    const vaccineName = document.getElementById('vaccine-name-input').value;
    const vaccineDate = document.getElementById('vaccine-date-input').value;

    const records = JSON.parse(localStorage.getItem('dog_vaccines') || '[]');
    records.push({ id: Date.now(), dogName, vaccineName, vaccineDate });
    localStorage.setItem('dog_vaccines', JSON.stringify(records));

    document.getElementById('vaccine-form').reset();
    renderVaccineHistory();
}

function renderVaccineHistory() {
    const tbody = document.getElementById('vaccine-history-body');
    const records = JSON.parse(localStorage.getItem('dog_vaccines') || '[]');

    if (records.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="empty-table-message">ยังไม่มีบันทึกวัคซีน</td></tr>`;
        return;
    }

    tbody.innerHTML = records.map(r => `
        <tr>
            <td>${r.dogName}</td>
            <td>${r.vaccineName}</td>
            <td>${r.vaccineDate}</td>
            <td class="table-action">
                <button onclick="deleteVaccineRecord(${r.id})" class="delete-button">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function deleteVaccineRecord(id) {
    let records = JSON.parse(localStorage.getItem('dog_vaccines') || '[]');
    records = records.filter(r => r.id !== id);
    localStorage.setItem('dog_vaccines', JSON.stringify(records));
    renderVaccineHistory();
}

// ==========================================
// 4. ระบบค้นหา รพ. สัตว์ และคลังความรู้
// ==========================================
function renderHospitals(list) {
    const container = document.getElementById('hospital-list');
    container.innerHTML = list.map(h => `
        <div class="hospital-card">
            <div class="hospital-heading">
                <h3>${h.name}</h3>
                ${h.is24h ? '<span class="open-badge">24 ชม.</span>' : ''}
            </div>
            <p class="hospital-detail"><i class="fa-solid fa-location-dot"></i> ${h.location}</p>
            <p class="hospital-detail"><i class="fa-solid fa-clock"></i> ${h.time}</p>
            <p class="hospital-phone"><i class="fa-solid fa-phone"></i> ${h.tel}</p>
        </div>
    `).join('');
}

function filterHospitals() {
    const searchText = document.getElementById('hospital-search').value.toLowerCase();
    const type = document.getElementById('hospital-type').value;

    const filtered = hospitals.filter(h => {
        const matchesSearch = h.name.toLowerCase().includes(searchText) || h.location.toLowerCase().includes(searchText);
        const matchesType = (type === 'all') || (type === '24h' && h.is24h);
        return matchesSearch && matchesType;
    });

    renderHospitals(filtered);
}

function renderKnowledge() {
    const container = document.getElementById('knowledge-cards');
    container.innerHTML = knowledges.map(k => `
        <div class="knowledge-card">
            <h4>🐶 ${k.breed}</h4>
            <p>${k.desc}</p>
        </div>
    `).join('');
}

// ==========================================
// 5. ระบบส่งฟอร์มขอข้อมูล
// ==========================================
function submitInquiry(e) {
    e.preventDefault();
    const name = document.getElementById('inquiry-name').value;
    alert(`ขอบคุณครับคุณ ${name}! ทีมงาน MaMha ได้รับข้อความคำถามของคุณแล้ว จะติดต่อกลับโดยเร็วที่สุดครับ`);
    document.getElementById('inquiry-form').reset();
}

// ==========================================
// 6. ทำงานทันทีเมื่อโหลดหน้าเว็บครั้งแรก (Initial Load)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderVaccineHistory();
    renderHospitals(hospitals);
    renderKnowledge();
});