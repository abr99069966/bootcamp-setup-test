
console.log('1-р хэсэг: Javascript-ын Энгийн Дасгалууд');

// Дасгал 01.
console.log("Дасгал 01.");

let length = 12;
let width = 5;
let area = length * width;
console.log(`Тэгш өнцөгтийн талбай: ${area}`)


// Дасгал 02.
console.log("Дасгал 02.");

let price = 5000;
let discountPercettage = 10;
let discountAmount = price * (discountPercettage / 100);
let finalPrice = price - discountAmount;
console.log(`Эцсийн үнэ: ${finalPrice}₮`);

// Дасгал 03.
console.log("Дасгал 03.");

let firstName = "Анхбаяр";
let lastName = "Батдэлгэр ";
let fullName = lastName + firstName;
console.log(`Намайг ${fullName} гэдэг.`);

// Дасгал 04.
console.log("Дасгал 04.");

let temperature = 25;

if (temperature > 20) {
    console.log("Гадаа дулаахан байна.");
} else {
    console.log("Гадаа сэрүүхэн байна.");
}

// Дасгал 05.
console.log("Дасгал 05.");

let secrtWord = "python";
let userGuess = "java";
if (userGuess == secrtWord) {
    console.log("Та зөв таалаа!");
}
else {
    console.log("Буруу таалаа.");
}

// Дасгал 06.
console.log("Дасгал 06.");

let text = "дахь удаагийн мэндчилгээ.";
for (let i = 0; i < 5; i++)
    console.log(`${i + 1} дахь удаагийн мэндчилгээ.`);

// Дасгал 07.
console.log("Дасгал 07.");

let fruits = ["Алим", "Банана", "Жүрж"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Би ${fruits[i]}-д дуртай.`);
}

// Дасгал 08.
console.log("Дасгал 08.");

function displayWelcomeMessage() {
    console.log("Сургалтад тавтай морилно уу!");
    console.log("Танд амжилт хүсье!");
}
displayWelcomeMessage()

function displayWelcomeMessage() {
    let messages = ["Сургалтад тавтай морилно уу!", "Танд амжилт хүсье!"];
    for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]);
    }
}
displayWelcomeMessage();

// Дасгал 09.
// console.log("Дасгал 09.");

// let birthYearStr = prompt("Та хэдэн онд төрсөн бэ?")
// let birthYear = Number(birthYearStr)
// let currentYear = 2025;
// let age = currentYear - birthYear;
// console.log(`Та хэдэн онд төрсөн бэ? ${birthYear}`);
// console.log(`Та ойролцоогоор ${age} настай юм байна.`);



console.log("2-р хэсэг: Javascript-ын Энгийн Дасгалууд")

// Дасгал 01.
console.log("Дасгал 01.");

let planets = ["Ангараг", "Сугар", "Дэлхий", "Бархасбадь"]; {
    console.log(`Манай жагсаалтад ${planets.length} гариг байна`);
}

// Дасгал 02.
console.log("Дасгал 02.");

let symbol = "-*";
console.log(symbol.repeat(10));  // asuuh


// Дасгал 03.
console.log("Дасгал 03.");

let task = [];
if (task.length === 0) {
    console.log("Хийх ажил алга.");
} else {
    console.log("Хийх ажил байна.");

}

// Дасгал 04.
console.log("Дасгал 04.");

let message = "Би Java-д дуртай.";
let newMessage = message.replace("Java", "Python"); // asuuh
console.log(newMessage);


// Дасгал 05.
console.log("Дасгал 05.");

let numbers = [10, 20, 30, 40];
numbers.pop();  // asuuh
console.log("Үлдсэн жагсаалт:", numbers); 


console.log("3-р хэсэг : Javascript дасгалууд");

// Дасгал 01.
console.log("Дасгал 01.");

function calculateGrade() {
  let scores = [95, 82, 78, 65, 50];
  let total_score = 0;

  for (let i = 0; i < scores.length; i++) {
    total_score += scores[i];
  }

  let average = total_score / scores.length;

  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Таны дундаж оноо: ${average.toFixed(1)}`);
  console.log(`Таны үсгэн үнэлгээ: ${grade}`);
}

calculateGrade(); // asuuh

// Дасгал 02.
console.log("Дасгал 02.");

function filterPositiveNumbers() {
  let numbers = [10, -5, 22, -8, 0, 15, -1];

  console.log("Жагсаалт дахь эерэг тоонууд:");
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) { 
      console.log(numbers[i]);
    }
  }
}

filterPositiveNumbers(); // asuuh


// Дасгал 03.
console.log("Дасгал 03.");

function findNumber() {
  let data = [11, 23, 8, 42, 15, 99];
  let targetNumber = 42;
  let found = false;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === targetNumber) {
      found = true;
      break; // олдсон тул давталтаас гарна
    }
  }

  if (found) {
    console.log(`${targetNumber} гэсэн тоо жагсаалтад олдлоо!`);
  } else {
    console.log("Тоо олдсонгүй.");
  }
}

findNumber();
