// Дасгал 1.
console.log("Дасгал 1");

function displayGreeting() {
    console.log("Сайн уу, Javascript-ын ертөнцөд тавтай морил!");
}
displayGreeting();

// Дасгал 2.
console.log("Дасгал 2");

function showFavoriteQuote() {
    let Qoute = ("Imagination is more important than knowledge");
    let name = ("- Albert Einstein")
    console.log(Qoute + name);
}
showFavoriteQuote()

// Дасгал 3.
console.log("Дасгал 3");

function drawSquare() {
    console.log("*****");
    console.log("*   *");
    console.log("*****");
}
drawSquare()


// Дасгал 4.
console.log("Дасгал 4");

function printRecipe() {
    console.log("--- Өндөг шарах жор ---");
    console.log("1. Хайруулын тавгаа халаана.");
    console.log("2. Тосоо хийнэ.");
    console.log("3. Өндгөө хагалж хийнэ.");
    console.log("4. Давс нэмээд болгоно.");
}
printRecipe()

// Дасгал 5.
console.log("Дасгал 5");

function calculateFixedArea(a, b) {
    let urt = 10;
    let urgun = 5;
    let S = urt * urgun;
    console.log("Талбай нь", S, "юм.");
}
calculateFixedArea()

// Дасгал 6.
console.log("Дасгал 6");

function showMenu() {
    console.log("--- Манай Цэс ---");
    console.log("1. Хуушуур - 2000₮");
    console.log("2. Цуйван - 8000₮");
    console.log("3. Бууз - 1500₮");
}
showMenu()

// Дасгал 7.
console.log("Дасгал 7");

function sing_a_verse() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
sing_a_verse()

// Дасгал 8.
console.log("Дасгал 8");

function countToTen() {
    for (let number = 1; number <= 10; number++) {
        console.log(number);

    }
}
console.log(`1-ээс 10 хүртэл тоолж байна:`);
countToTen()

// Дасгал 9.
console.log("Дасгал 9");

function checkFixedNumber() {
    let number1 = 15;
    if (number1 % 2 == 1) {
        console.log(`${number1} бол сондгой тоо:`);
    }
}
checkFixedNumber()

// Дасгал 10.
console.log("Дасгал 10");

function rollDie() {
    let die = (Math.floor(Math.random() * 6) + 1);
    console.log(`Шооны нүд: ${die}`);
}
rollDie()

// Дасгал 11.
console.log("Дасгал 11");

function printShoppingList() {
    let fruits = ["-Талх", "-Сүү", "-Өндөг", "-Алим"];
    for (const fruit of fruits) {
        console.log(fruit);
    }

}
console.log('Дэлгүүрээс авах зүйлс:');
printShoppingList()

// Дасгал 12.
console.log("Дасгал 12");

function greetUser() {
    let name2 = ("Таны нэр хэн бэ?");
    let i = prompt("Таны нэр хэн бэ?");
    let aa = ("Сайн уу?")
    console.log(name2);
    console.log(aa, i);
}
greetUser()

// Дасгал 13.
console.log("Дасгал 13");

function drawTriangle() {
    let star1 = ""
    for (let number = 1; number <= 5; number++) {
        star1 = star1 + "*"
        console.log(star1);
    }

}
drawTriangle()

// Дасгал 14.
console.log("Дасгал 14");

function displayTime() {
    const now = Date();
    const tsag = now.toLocaleString()
    console.log(`Одоогын цаг: ${tsag}`);
}
displayTime()

// Дасгал 15.
console.log("Дасгал 15");

function multiplicationTable() {
    let too3 = 7;
    console.log(too3 * 1);
    console.log(too3 * 2);
    console.log(too3 * 3);
    console.log(too3 * 4);
    console.log(too3 * 5);
    console.log(too3 * 6);
    console.log(too3 * 7);
    console.log(too3 * 8);
    console.log(too3 * 9);
    console.log(too3 * 10);
}
console.log("--- 7-ийн хүрд ---");
multiplicationTable()

// Дасгал 15.
console.log("Дасгал 15");

function countdown() {
    for (number = 10; number >= 1; number--)
        console.log(number);
    console.log("ХӨӨРЛӨӨ! 🚀");
}
// countdown()