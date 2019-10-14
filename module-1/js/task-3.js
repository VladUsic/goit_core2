function task3() {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    let password = prompt('Введите пароль:');

    if (password === null) {
        message = 'Отменено пользователем!';
    } else {
        switch (password) {
            case ADMIN_PASSWORD:
                'Добро пожаловать!';
                break;

            default:
                message = 'Доступ запрещен, неверный пароль!';

        }
    }
    alert(message);

}