function task4() {
    let credits = 23580;
    const pricePerDroid = 3000;
    let message;

    const quantityofDroids = prompt('Сколько вам необходимо дроидов?');
    let totalPrice = quantityofDroids * 3000;
    let balance = credits - totalPrice;

    if (quantityofDroids === null) {
        message = 'Отменено пользователем!';
    } else if (quantityofDroids <= credits) {
        message = `Вы купили ${quantityofDroids} дроидов, на счету осталось ${balance} кредитов.`;
    } else if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    }
    alert(message);
}