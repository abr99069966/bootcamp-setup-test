// Дасгал 01.
// console.log("Дасгал 01.");

// let name = ("Таны нэр хэн бэ?");
// let pname = prompt("Таны нэр хэн бэ?");
// let hi = ("Сайн уу?")
// console.log(name);
// console.log(hi, pname, "!");

// Дасгал 02.
// console.log("Дасгал 02.");

// let age = prompt("Та хэдэн настай вэ?")
// console.log(`Та хэдэн настай вэ? ${age}`);

// if (age > 18) {
//     console.log("Та насанд хүрсэн байна.");
// } else if (age <= 18) {
//     console.log("Та насанд хүргүй байна.");
// }

// Дасгал 03.
// console.log("Дасгал 03.");


// function addN(num1, num2) {
//     let total = num1 + num2;
//     console.log(`${num1} + ${num2} = ${total}`);
// }
// let too1 = prompt("Эхний тоог оруул:");
// console.log(`Эхний тоог оруул: ${too1}`);
// let too2 = prompt("Хоёр дахь тоог оруул:")
// console.log(`Хоёр дахь тоог оруул: ${too2}`);

// let num1 = Number(too1);
// let num2 = Number(too2);

// addN(num1, num2)

// Дасгал 04.
console.log("Дасгал 04.");

let fruits = ["Алим", "Банана", "Жүрж"];
console.log("--- Жимсний жагсаалт---");

function printListItems(myList) {
    for (let i = 0; i < myList.length; i++) {
        console.log(myList[i]);
    }
}
printListItems(fruits)

// Дасгал 05.
console.log("Дасгал 05.");

function printToo() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

}
printToo()

// Дасгал 06.
console.log("Дасгал 06.");

console.log("---5-ын хүрд---");

function multiplicationTable(hvrd) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${hvrd} * ${i} = ${hvrd * i}`)
    }
}
multiplicationTable(5)

// Дасгал 07.
console.log("Дасгал 07.");

function findLongestWord(words) {
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i]

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}
let wordList = ["python", "javascript", "програмчлал", "java"];
let longest = findLongestWord(wordList);
console.log(`Хамгийн урт үг: ${longest}`);

// Дасгал 08.
console.log("Дасгал 08.");

function getStats(numbers) {
    let max = [0];
    let avg = 0;
    let total = 0;

    for (let number of numbers) {
        total += number;

        if (number > max) {
            max = number;
        }
    }
    avg = total / numbers.length;
        return [total, avg, max]
}
let nums = [10, 20, 30, 40, 50];
let [total, avg, max] = getStats(nums);
console.log(`Нийлбэр: ${total}, Дундаж: ${avg}, Максимум: ${max}`);