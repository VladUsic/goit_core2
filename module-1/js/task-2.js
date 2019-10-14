function task2() {
    const total = 100;
    const ordered = 50;
    const order = ordered <= total && ordered > 0 ? '"Заказ оформлен, с вами свяжется менеджер"' : "На складе недостаточно твоаров!";
    alert(order);

}