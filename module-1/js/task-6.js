function task6() {
    let total = 0;
    let input;
    do {
        input = Number(prompt('Введите несколько чисел, и полуите их общую сумму'));
        total += input;
    }
    while (input);
    alert(`Общая сумма чисел равна [ ${total} ]`);
}