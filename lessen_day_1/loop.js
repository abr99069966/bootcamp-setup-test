//Ex_01
console.log("Ex_01");
for (let number = 1; number <= 5; number++) {
    console.log(number);
}
//Ex_02
console.log("Ex_02");

let fruits = ["apple", "Banana", "Orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
console.log(fruits);

//Ex_03
console.log("//Ex_03");
let word = "Сайн";
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

//Ex_04
console.log("//Ex_04");
for (number = 5; number >= 1; number--)
    console.log(number);

//Ex_05
console.log("//Ex_05");
for (number = 1; number <= 10; number++) {
    if (number % 2 == 0) {
        console.log(number);
    }
}

//Ex_06
console.log("//Ex_06");
let name1 = "Ankhbayar";
if (name1.length > 0) {
    for (let vseg = 0; vseg < name1.length; vseg++) {
        console.log(name1[vseg]);
    }
}

//Ex_07
console.log("//Ex_07");
let colors = ["улаан", "цэнхэр", "ногоон"]
for (let color = 0; color < colors.length; color++) {
    console.log("Би", colors[color], "өнгөнд дуртай");
}

//Ex_08
console.log("//Ex_08");
let number2 = [1, 2, 3, 4, 5]
let total = 0;
for (let too = 0; too < number2.length; too++) {
    total = total + number2[too]
}
console.log("Нийлбэр", total);

//Ex_09
console.log("//Ex_09");
let items = ["талх", "сүү", "өндөг"]
let count = 0;
for (let too2 = 0; too2 < items.length; too2++) {
    count++;
}
console.log("Жагсаалтад", count, "зүйл байна");

//Ex_10
console.log("//Ex_10");
let numbers = [10, 20, 30,]
let doubled_numders = []
for (let number3 = 0; number3 < numbers.length; number3++) {
    doubled_numders.push(numbers[number3] * 2);
}
console.log("Шинэ жагсаалт", doubled_numders);

//Ex_11
console.log("//Ex_11");
let namess = ["Ану", "Болд", "Ариун"]
for (let name of namess) {
    if (name.startsWith("А")) {
        console.log(name);
    }
}

//Ex_11-2
console.log("//Ex_11-2");
let names = ["Ану", "Болд", "Ариун"]
for (let name of names) {
    for (letter of name)
        if (letter == "А") {
            console.log(name);
        }
}

//Ex_12
console.log("//Ex_12");
let words = ["Сайн", "байна", "уу"]
let total_length = 0;
for (let word of words) {
    total_length += word.length
}
console.log("Нийт үсгийн тоо", total_length);

//Ex_13
console.log("//Ex_13");

let scores = [75, 92, 81, 60, 88];
let high_scores = 0;
for (let score of scores) {
    if (score > 80) {
        high_scores++;
    }
}
console.log("80-аас дээш оноотой сурагчдын тоо:", high_scores);

//Ex_14
console.log("//Ex_14");
let shopping_list = ["Алим", "Талх"];
let new_item = prompt("Шинэ зүйлээ оруулна уу:");
shopping_list.push(new_item);

console.log("Таны шинэчилсэн жагсаалт:");
for (let item of shopping_list) {
    console.log(item);
}

//Ex_15
console.log("//Ex_15");
let numbers2 = [12, 45, 8, 29, 50, 19];
let max_number = numbers2[0];

for (let number of numbers2) {
    if (number > max_number) {
        max_number = number;
    }
}
console.log("Хамгийн их тоо:", max_number);

//Ex_16
console.log("//Ex_16");
let numbers3 = [12, 45, 8, 29, 50, 19];
let min_number = numbers3[0];

for (let number of numbers3) {
    if (number < min_number) {
        min_number = number;
    }
}
console.log("Хамгийн бага тоо:", min_number);

//Ex_17
console.log("//Ex_17");

let words4 = ["ном", "компьютер", "үзэг", "дэвтэр"];
let long_words = [];

for (let word of words4) {
    if (word.length > 4) {
        long_words.push(word);
    }
}
console.log(long_words);

//Ex_18
console.log("//Ex_18");
