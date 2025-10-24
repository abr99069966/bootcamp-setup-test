

function addAndPrint(num1, num2) {
    let total = num1 + num2;
    console.log(`Total: ${total}`);

}
let sum1 = addAndPrint(10, 20,);
console.log(sum1);
let result1 = sum1 - 5;
console.log(result1);



function addAndReturn(num1, num2) {
    let total = num1 + num2;
    console.log(`Total: ${total}`);
    return total;
    console.log("Hello");
}
let sum2 = addAndReturn(7, 15)
console.log(sum2);
let result2 = sum2 - 5;
console.log(result2);


console.log("first".toUpperCase());


// Дасгал 1.
console.log("Дасгал 1");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
let result = addTwoNumbers(10, 25);
console.log(`Нийлбэр: ${result}`);

// Дасгал 2.
console.log("Дасгал 2");

function getFullName(firstName, lastName) {
    return firstName + lastName;

}
let fullName = getFullName("Ankhbayar ", "Batdelger")
console.log(fullName);

// Дасгал 3.
console.log("Дасгал 3");

function calculateArea(length, width) {
    return length * width;
}
let sum3 = calculateArea(10, 5)
console.log(sum3);

// Дасгал 4.
console.log("Дасгал 4");

function celsiusToFahrenheit(celsius) {
    let f = celsius * 1.8 + 32;
    return f;
}
let fahrenheit = celsiusToFahrenheit(25);
console.log(fahrenheit);

// Дасгал 5.
console.log("Дасгал 5");

function isEven(number) {
    if (number % 2 == 0) {
        return [true, number];
    } else {
        return [false, number]
    }
}
let [evenOrOdd, numder] = isEven(12);
console.log(`${numder} тэгш үү? ${evenOrOdd}`);

// Дасгал 6.
console.log("Дасгал 6");

function toUppercase(text) {
    return (text.toUpperCase());
}
let up = toUppercase("ankhbayar");
console.log(up);

// Дасгал 7.
console.log("Дасгал 7");

function getFirstElement(myList) {
    return myList;
}
let list = getFirstElement("Алим");
console.log(`Эхний жимс: ${list}`);


// Дасгал 8.
console.log("Дасгал 8");

function findLarger(num3, num4) {
    return Math.max(num3, num4);
}
let max = findLarger(120, 100);
console.log(max);

// Дасгал 9.
console.log("Дасгал 9");

function sumList(numbers) {
    return numbers;
}
let numm = sumList(10 + 26)
console.log(numm);

// Дасгал 10.
console.log("Дасгал 10");

function countChar(text, charToFind) {
  let count = 0;
  for (let ch of text) {
    if (ch === charToFind) {
      count++;
    }
  }
  return count;
}
const text = "Сайн байна уу";
const char = "а";
const resultt = countChar(text, char);

console.log(`'${char}' үсэг ${resultt} удаа орсон байна.`);


// Дасгал 11.
console.log("Дасгал 11");
