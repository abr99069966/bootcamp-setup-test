// Дасгал 01.
// console.log("Дасгал 01");

// function greetByName(name) {
//     console.log(`Сайн уу, ${name}!`);
// }
// greetByName("Дорж");
// greetByName("Сараа");

// Дасгал 02.
// console.log("Дасгал 02");

// function addTwoNumbers(num1, num2) {
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
// }
// addTwoNumbers(10, 25);
// addTwoNumbers(100, -50)

// Дасгал 03.
// console.log("Дасгал 03");

// function printFavoriteColor(color) {
//     console.log("Миний дуртай өнгө бол", color);
// }
// printFavoriteColor("Цэнхэр")

// Дасгал 04.
// console.log("Дасгал 04");

// function calculateArea(length, width) {
//     let = length;
//     let = width;
//     let sum = length * width;
//     console.log("Урт=", length, "Өргөн=", width, "үед талбай нь", sum, "байна.");
//     console.log(`Урт = ${length}, Өргөн = ${width} үед талбайн нь ${sum} байна.`);
// }
// calculateArea(10, 5)

// Дасгал 05.
// console.log("Дасгал 05");

// function repeatMessage(message, times) {
//     for (let number = 1; number <= times; number++) {
//         console.log(message);
//     }
// }
// repeatMessage("Javascript бол сонирхолтой!", 1)
// repeatMessage("Javascript бол сонирхолтой!", 1)
// repeatMessage("Javascript бол сонирхолтой!", 1)

// Дасгал 06.
// console.log("Дасгал 06");

// function describePet(name2, animalType) {
//     console.log(`Миний ${animalType}-г ${name2} гэдэг`);
// }
// describePet("Банхар", "нохой")

// Дасгал 07.
// console.log("Дасгал 07");

// function printAddress(city, district, street) {
//     console.log("--- Хаяг ---");
//     console.log(`Хот: ${city}`);
//     console.log(`Дүүрэг: ${district}`);
//     console.log(`Гудамж: ${street}`);
// }
// printAddress("Улаанбаатар", "Сүхбаатар", "Их тойруу")

// Дасгал 08.
// console.log("Дасгал 08");

// function showMultiplicationTable(number3) {
//     console.log("--- 9-ийн хүрд ---");
//     console.log(`${number3} x 1 =`, number3 * 1);
//     console.log(`${number3} x 2 =`, number3 * 2);
//     console.log(`${number3} x 3 =`, number3 * 3);
//     console.log(`${number3} x 4 =`, number3 * 4);
//     console.log(`${number3} x 5 =`, number3 * 5);
//     console.log(`${number3} x 6 =`, number3 * 6);
//     console.log(`${number3} x 7 =`, number3 * 7);
//     console.log(`${number3} x 8 =`, number3 * 8);
//     console.log(`${number3} x 9 =`, number3 * 9);
//     console.log(`${number3} x 10 =`, number3 * 10);

// }
// showMultiplicationTable(9)

// Дасгал 08.
// console.log("Дасгал 08");

// function showMultiplicationTable(number3) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number3} x ${i} =  ${number3 * i}`);
//     }
// }
// console.log(`--- 9-ийн хүрд ---`);
// showMultiplicationTable(9)

// Дасгал 09.
// console.log("Дасгал 09");

// function checkEvenOdd(number4) {
//     if (number4 % 2 == 0) {
//         console.log(`${number4} бол тэгш тоо.`);
//     } else {
//         console.log(`${number4} бол сондгой тоо.`);
//     }
// }
// checkEvenOdd(10)
// checkEvenOdd(17)

// Дасгал 10.
// console.log("Дасгал 10");

// function drawLine(length, character) {
//     let a = "";
//     for (let i = 1; i <= length; i++) {
//         a += character
//     }
//     console.log(a);
// }
// drawLine(20, "=");
// drawLine(10, "*");


// Дасгал 11.
// console.log("Дасгал 11");

// function checkPassword(passwordAttempt) {
//     const correctPassword = "Javascript123";
//     if (passwordAttempt == correctPassword) {
//         console.log("Нууц үг зөв байна. Нэвтрэх эрх олгогдлоо.");
//     }
//     else {
//         console.log("Нууц үг буруу байна. Дахин оролдоно уу.");
//     }
// }

// checkPassword("wrongPassword");
// checkPassword("Javascript123");


// Дасгал 12.
// console.log("Дасгал 12");

// let fruits = ["Алим", "Банана", "Жүрж"];

// function printListItems(myList) {
//     for (let i = 0; i < myList.length; i++) {
//         console.log(`${i + 1}.${myList[i]}`);
//     }
// }
// printListItems(fruits)


// Дасгал 13.
// console.log("Дасгал 13");

// function calculateDiscount(price, percentage) {
//     let discount = (price * percentage) / 100
//     let lastprice = price - discount;
//     console.log(`Анхны үнэ: ${price}, Хямдрал: ${percentage}%, Эцсийн үнэ: ${lastprice}₮`);

// }
// calculateDiscount(50000, 10)


// Дасгал 14.
// console.log("Дасгал 14");

// function checkAgeGroup(age) {
//   if (age < 18) {
//     console.log(age + " нас бол 'Өсвөр насны' ангилалд багтана.");
//   } else if (age >= 18 && age <= 65) {
//     console.log(age + " нас бол 'Насанд хүрсэн' ангилалд багтана.");
//   } else {
//     console.log(age + " нас бол 'Ахмад настан' ангилалд багтана.");
//   }
// }
// checkAgeGroup(15);
// checkAgeGroup(30);
// checkAgeGroup(70);


// Дасгал 15.
// console.log("Дасгал 15");

// function countDownFrom(startnumber) {
//     console.log(`${startnumber}-c тоолж эхэллээ...`);
//     for (let i = startnumber; i >= 1; i--) {
//         let delay = (startnumber - i) * 1000;
//         setTimeout(() => {
//             console.log(i);
//         }, delay);
//     }
//     setTimeout(() => {
//         console.log("Хөөрлөө!");

//     }, startnumber * 1000);
// }
// countDownFrom(10)

// Дасгал 16.
console.log("Дасгал 16");

function drawRectangle(width, height, character){
        let a = "";
    for (let i = 1; i <= length; i++) {
        a += character
}