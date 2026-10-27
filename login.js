function showPage(pageId) {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('forgot-form').classList.add('hidden');

    document.getElementById(pageId).classList.remove('hidden');
}

// เข้าสู่ระบบ (จำลอง): ไม่ได้เช็คกับฐานข้อมูลจริง แค่เช็คว่ากรอกครบ แล้วพาไปหน้าแรก
function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (email === '' || password === '') {
        alert('กรุณากรอกอีเมลและรหัสผ่าน');
        return;
    }

    window.location.href = 'home/home.html';
}

// สมัครสมาชิก (จำลอง): เช็คว่ากรอกครบ แล้วพาไปหน้าแรก
function register() {
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    if (username === '' || email === '' || password === '') {
        alert('กรุณากรอกข้อมูลให้ครบ');
        return;
    }

    alert('สมัครสมาชิกสำเร็จ ยินดีต้อนรับคุณ ' + username);
    window.location.href = 'home/home.html';
}
