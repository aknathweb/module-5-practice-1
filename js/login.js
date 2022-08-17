console.log('login');
const login_email = document.getElementById('login_email');
const login_password = document.getElementById('login_password');
document.getElementById('Login_button').addEventListener('click', () => {
    if (login_email.value == 'anik@example.com' && login_password.value == 'anik')
        // window.location.replace("bank.html");
        window.location.href = 'bank.html';
})