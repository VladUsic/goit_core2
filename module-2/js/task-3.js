function task3() {
    'use strict'
    let findLongestWord = function(string) {
        let strSplit = string.split(' ');
        let longestWord = 0;
        let Word = null;
        for (let i = 0; i < strSplit.length; i++) {
            if (strSplit[i].length > longestWord) {
                longestWord = strSplit[i].length;
                Word = strSplit[i];
            }
        }
        return Word;
    }
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

    console.log(findLongestWord('Google do a roll')); // 'Google'

    console.log(findLongestWord('May the force be with you')); // 'force'
}