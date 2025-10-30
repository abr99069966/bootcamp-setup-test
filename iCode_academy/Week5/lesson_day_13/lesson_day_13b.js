console.log("String-ийн Үндсэн Методууд (Methods)");
console.log("Дасгал №1");

let text = "Монгол Улс";
let sliced1 = text.slice(3, 7);

console.log(sliced1);

let sentence2 = "Бид ирээдүйг бүтээгчид";
let sliced2 = sentence2.slice(4);

console.log(sliced2);


data = "JavaScript";
let endPart = data.slice(-4);
console.log(endPart);

let middlePart = data.slice(-6, -2);
console.log(middlePart);


console.log("Дасгал №2");

text = "Монгол Улс";
let result1 = text.substring(3, 7);

console.log(result1);


let word = "Hello World";

let result2 = word.substring(7, 2);

console.log(result2);


data = "JavaScript";

let result3 = data.substring(-4, 4);
console.log(result3);

let result4 = data.substring(6, -2);
console.log(result4);

console.log("Дасгал №3");

sentence = "Бид JavaScript-ийг сурч байна";

let strIndex1 = sentence.indexOf("Script");
console.log(strIndex1);

let strIndex2 = sentence.indexOf("а", 10);
console.log(strIndex2);

let strIndex3 = sentence.indexOf("java");
console.log(strIndex3);

console.log("Дасгал №4");

sentence = "Бид JavaScript-ийг сурч байна";


let hasScript = sentence.includes("Script");
console.log(hasScript);

let checkChar = sentence.includes("а", 10);
console.log(checkChar);

let checkCase = sentence.includes("java");
console.log(checkCase);

console.log("Дасгал №5");

let greeting = "Hello, World!";

let check1 = greeting.startsWith("Hello");
console.log(check1);

let check2 = greeting.startsWith("hello");
console.log(check2);

let check3 = greeting.startsWith("World");
console.log(check3);

console.log("Дасгал №6");

website = "www.google.mn";

let check1a = website.endsWith(".mn");
console.log(check1);

let check2a = website.endsWith("MN");
console.log(check2);

let check3a = website.endsWith("google");
console.log(check3);


console.log("Дасгал №7");

greeting = "Hello World, welcome to the World.";

let result1a = greeting.replace("World", "Universe");

console.log(result1a);
console.log(greeting);

console.log("Дасгал №8");

let basket = "Бидэнд алим, жүрж, алим, киви, алим байна.";

let result1b = basket.replaceAll("алим", "гадил");
console.log(result1b);


console.log("Дасгал №9");

let rawInput = "   Хэрэглэгчийн Нэр   ";

let trimmedInput = rawInput.trim();

console.log(`Оригинал: |${rawInput}|`);

console.log(`Trimmed:   |${trimmedInput}|`);

console.log(rawInput.length, trimmedInput.length);

console.log("Дасгал №10");

let originalText = "Монгол Хэл & JS Code";
let lowercaseText = originalText.toLowerCase();
console.log(lowercaseText);
console.log(originalText);

console.log("Дасгал №11");

originalText = "Мэдээлэл технологи, js version 2.0";
let uppercaseText = originalText.toUpperCase();
console.log(uppercaseText);
console.log(originalText);

console.log("Дасгал №12");

sentence = "JavaScript-ийн массив хичээл";
let words = sentence.split(" "); 
console.log(words);

data = "apple,banana,orange,kiwi";

let fruits = data.split(","); 
console.log(fruits);

let dateString = "2024-10-27";
let dateParts = dateString.split("-");
console.log(dateParts);

word = "Монгол";
let characters = word.split("");

console.log(characters);



