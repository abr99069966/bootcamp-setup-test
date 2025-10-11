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
let colors = ["улуун", "цэнхэр", "ногоон"]
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
    doubled_numders.push(numbers[number3]*2);
}
console.log("Шинэ жагсаалт", doubled_numders);

//Ex_11
console.log("//Ex_11");
