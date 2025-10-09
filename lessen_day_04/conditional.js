console.log('Ex-01:');

let age = 15;

if (age >= 18) {
    console.log("Та насанд хүрсэн байна.");
}
else {
    console.log("Та насанд хүрээгүй байна.");
}

console.log('Ex-02:');

let number = 40;

if (number > 0) {
    console.log("Энэ бол эерэг тоо.");
}
else if (number < 0) {
    console.log("Энэ бол сөрөг тоо");
}
else {
    console.log("Энэ бол тэг.");
}

console.log('Ex-03:');

let number1 = 34;

if (number1 % 2 == 0) {
    console.log(`Энэ бол тэгш тоо: ${number1}`);
}
else if (number1 % 2 == 1) {
    console.log(`Энэ бол сондгой тоо: ${number1}`);
}
else {
    console.log(`number: ${number1}`);
}

console.log('Ex-04:');

let username = 'admin';
let password = 'pass123';

if (username == "admin" && password == "pass123") {
    console.log("Амжилттай нэвтэрлээ.");
}
else {
    console.log("буруу");
}

console.log('Ex-05:');

let temp = 18;
let isRaining = 'тийм'

if (temp < 15 && isRaining == "тийм") {
    console.log("Дулаан хувцаслаж, шүхрээ аваарай");
}
else if (temp > 15) {
    console.log("Дулаан өдөр");
}
else {
    console.log("Өдрийг сайхан өнгөрүүлээрэй.");

}
console.log("Өдрийг сайхан өнгөрүүлээрэй.");


console.log('Ex-06:');

let day = 'monday';

if (day == "sunday" && day == 'Saturday') {
    console.log("Амралтын өдрийн мэнд!");
}
else {
    console.log("Ажлын өдөр байна, амжилт");
}

console.log('Ex-07:');

let score = 93;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else if (score >= 60) {
    console.log("D");
}
else if (score >= 50) {
    console.log("F");
}

console.log('Ex-08:');

let year = 2000;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Өндөр жил");

        }
    }
}
else {
    console.log("Өндөр жил биш");
}

console.log('Ex-09:');

let age1 = 80;
if (age1 < 12) {
    console.log("5000₮");
}
else if (age1 < 65) {
    console.log("10000₮");
}
else {
    console.log("7000₮");
}

console.log('Ex-10:');

let A = 12;
let B = 12;
let C = 12;

if (A == B && B == C) {
    console.log("Адил талт");
}
else if (A == B || B == C || A == C) {
    console.log("Адил хажуут");
}
else {
    console.log("Зөрөө тал");
}