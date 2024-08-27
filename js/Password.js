document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordVisible = passwordInput.getAttribute('type') === 'text';
    const icon = this.querySelector('i');
    
    if (passwordVisible) {
    passwordInput.setAttribute('type', 'password');
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
    } else {
    passwordInput.setAttribute('type', 'text');
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
    }
});
