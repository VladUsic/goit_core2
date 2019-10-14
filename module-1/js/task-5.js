function task5() {
    let message = prompt('Введите свою страну');
    let myCountry;
    let price;
    const not_available = 'В вашей стране доставка не доступна';
    if (message === null) {
        message = 'Отменено пользователем!';
    } else {
        myCountry = message[0].toUpperCase() + message.slice(1).toLowerCase();

        switch (myCountry) {
            case 'Китай':
                price = 100;
                break;

            case 'Чили':
                price = 250;
                break;

            case 'Австралия':
                price = 170;
                break;

            case 'Индия':
                price = 80;
                break;

            case 'Ямайка':
                price = 120;
                break;

            default:
                message = not_available;
        }
    }
    if (price > 0) {
        message = `Доставка в ${myCountry} будет стоить ${price} кредитов`;
    }
    console.log(message);
    alert(message);
}