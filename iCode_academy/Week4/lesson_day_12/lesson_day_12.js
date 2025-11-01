// Дасгал 01. 
console.log("Дасгал 01.");

let numString = "15";
let number = Number(numString);
console.log(number + 5);

// Дасгал 02. 
console.log("Дасгал 02.");

let firstNum = 15;
let secondNum = 7;
let total = firstNum + secondNum;
console.log(`Эхний тоо: ${firstNum}`);
console.log(`Хоёр дахь тоо: ${secondNum}`);
console.log(`Нийлбэр нь: ${total}`);

// Дасгал 03. 
console.log("Дасгал 03.");

let length = 10;
let width = 5;
let area = length * width;
console.log(`Эхний талбай (Урт ${length}, Өргөн ${width}): ${area}`);
width = 8;
area = length * width;
console.log(`Шинэ талбай (Урт ${length}, Өргөн ${width}): ${area}`);

// Дасгал 04. 
console.log("Дасгал 04.");

let age = 30;
let age2 = 25;
let name = "Ариунаа";
let name2 = "Саран";
let difAge = age - age2;
console.log(`${name} ${age} настай. ${name2} ${age2} настай. Бидний насны зөрүү: ${difAge} жил байна.`);


// Дасгал 05. 
console.log("Дасгал 05.");

let numberToCheck = -7;
if (numberToCheck > 0) {
    console.log(`${numberToCheck} нь эерэг тоо байна. `);
}
else if (numberToCheck < 0) {
    console.log(`${numberToCheck} нь сөрөг тоо байна.`);
}
else {
    console.log('0-тэй тэнцүү ');

}

// Дасгал 06. 
console.log("Дасгал 06.");

let num3 = 16;
if (num3 % 2 === 0) {
    console.log(`${num3} нь Тэгш тоо байна.`);
} else {
    console.log(`${num3} нь Cондгой тоо байна.`);
}

// Дасгал 07. 
console.log("Дасгал 07.");

let time = 23;
if (time <= 11 && time >= 5) {
    console.log('Өглөөний мэнд!');
}
else if (time < 17 && time >= 12) {
    console.log("Өдрийн мэнд!");
}
else if (time < 21 && time >= 18) {
    console.log("Оройн мэнд!");
}
else {
    console.log("Шөнийн мэнд!");
}

// Дасгал 08. 
console.log("Дасгал 08.");

console.log("1-ээс 10 хүртэлх тоо:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Дасгал 09. 
console.log("Дасгал 09.");

console.log("2-оос 20 хүртэлх тэгш тоонууд:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(i);

}

// Дасгал 10. 
console.log("Дасгал 10.");

let sum = 0;
for ( let i =0; i <= 50; i++){
    sum += i;
}
console.log(`1-ээс 50 хүртэлх тоонуудын нийлбэр: ${sum}`);

let fruits = ["алим", "гадил"];
let poppedValue = fruits.pop();
console.log(poppedValue); // "гадил"
console.log(fruits); // ['алим']

// Бүхэл тоо
console.log(Number.isInteger(10)); 
// Үр дүн: true

// Аравтын бутархай тоо
console.log(Number.isInteger(10.5)); 
// Үр дүн: false

// Сөрөг бүхэл тоо
console.log(Number.isInteger(-10)); 
// Үр дүн: true