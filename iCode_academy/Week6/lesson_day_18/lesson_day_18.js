console.log("Дасгал №1");

function checkGrade(score) {
    if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
checkGrade(85);  
checkGrade(92);  
checkGrade(73);  
checkGrade(55);  

console.log("Дасгал №2");

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Тэгш тоо");
    } else {
        console.log("Сондгой тоо");
    }
}
checkEvenOdd(15);
checkEvenOdd(20);

console.log("Дасгал №3");

function findFactorial(n) {
  let product = 1; // Эхний утга 1

  for (let i = 1; i <= n; i++) {
    product = product * i; // product *= i гэж товчилж бичиж болно
  }

  console.log("Үржвэр: " + product);
}

// Туршиж үзье:
findFactorial(5); // Үр дүн: Үржвэр: 120
findFactorial(3); // Үр дүн: Үржвэр: 6

console.log("Дасгал №4");

function printStudents() {
  let students = ["Ану", "Бат", "Сараа", "Тэмүүжин"];

  for (let i = 0; i < students.length; i++) {
    console.log("Сурагч: " + students[i]);
  }
}

// Туршиж үзье:
printStudents();


console.log("Дасгал №5");

function guessNumber(userGuess) {
  // 1–10 хооронд санамсаргүй тоо гаргана
  let randomNum = Math.floor(Math.random() * 10) + 1;

  console.log("Санамсаргүй тоо:", randomNum); // шалгах зорилгоор хэвлэж болно

  // Хэрэглэгчийн таасан тоотой харьцуулна
  if (userGuess === randomNum) {
    console.log("Зөв таалаа! 🎯");
  } else {
    console.log("Буруу байна! Зөв хариулт: " + randomNum);
  }
}

// Туршиж үзье:
guessNumber(5);
