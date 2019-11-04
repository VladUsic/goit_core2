<<<<<<< HEAD
function task2() {
    'use strict';

    const calculateEngravingPrice = function(message, pricePerWord) {
        let total = 0;
        const words = message.split(' ');

        for (const word of words) {
            total += pricePerWord;
        }

        return total;
    };

    console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
    console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
=======
function task2() {
    'use strict';

    const calculateEngravingPrice = function(message, pricePerWord) {
        let total = 0;
        const words = message.split(' ');

        for (const word of words) {
            total += pricePerWord;
        }

        return total;
    };

    console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
    console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
>>>>>>> f5116ef97afd6a7b9f380cced4fff74314d5f4c5
}