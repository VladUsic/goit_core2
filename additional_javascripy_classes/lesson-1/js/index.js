const isRegistrationForm = confirm('Do you want to register?');
const user = {};

if (isRegistrationForm) {
    user.login = prompt('Enter your login');
    user.password = prompt('Enter your password');

    localStorage.setItem('userList', JSON.stringify(user));
}

console.log(user);