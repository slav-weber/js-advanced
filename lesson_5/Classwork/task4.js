"use strict"

console.log('script 4 included');

/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

const AbcEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt(step, word) {
    let oldWord = word;
    let result = [];
    let wordLetters = word.split('');
    wordLetters.forEach((letter) => {
        let letterIndex = AbcEn.indexOf(letter);
        letterIndex += step;
        if(letterIndex > AbcEn.length - 1) letterIndex = letterIndex - AbcEn.length;
        letter = AbcEn[letterIndex];
        result.push(letter);
    });
    result = result.join('');
    console.log(`Word ${oldWord} encrypted as ${result}`);
    return result;
};

function decrypt(step, word) {
    let oldWord = word;
    let result = [];
    let wordLetters = word.split('');
    wordLetters.forEach((letter) => {
        let letterIndex = AbcEn.indexOf(letter);
        letterIndex -= step;
        if(letterIndex < 0) letterIndex = letterIndex + AbcEn.length;
        letter = AbcEn[letterIndex];
        result.push(letter);
    });
    result = result.join('');
    console.log(`Word ${oldWord} decrypted as ${result}`);
    return result;
}

// let encryptedWord = encrypt('kitty', 5);
// let decryptedWord = decrypt(encryptedWord, 5);
