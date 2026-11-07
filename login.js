function showPage(pageId) {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('forgot-form').classList.add('hidden');

    document.getElementById(pageId).classList.remove('hidden');
}