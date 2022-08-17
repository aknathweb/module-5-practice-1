console.log('index');
const login_email = document.getElementById('login_email');
const login_password = document.getElementById('login_password');
document.getElementById('Login_button').addEventListener('click', () => {
    if (login_email.value == 'anik' && login_password.value == 'anik')
        window.location.replace("another.html");
})