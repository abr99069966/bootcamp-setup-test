console.log("Number-ийн Үндсэн Методууд (Methods)");
console.log("Дасгал №1");

let price = 123.45678;

let fixed2 = price.toFixed(2); 
console.log(fixed2);

let fixed3 = price.toFixed(3);
console.log(fixed3);

console.log("Дасгал №2");

let priceString = "12500₮";
let ageString = "30 нас";


price = parseInt(priceString, 10);
let age = parseInt(ageString, 10);

console.log(price); 
console.log(age); 