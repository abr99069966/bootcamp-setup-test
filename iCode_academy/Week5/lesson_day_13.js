console.log("Array-ийн Үндсэн Методууд (Methods)");
console.log("Дасгал №1");

let fruits = ["Apple", "Banana"];
let poppedValue = fruits.pop();
console.log(poppedValue);
console.log(fruits);

console.log("Дасгал №2");

fruits2 = ["Алим", "Жүрж", "Гадил"];
fruits2.push("Тарвас");
console.log(fruits2);

console.log("Дасгал №3");

fruits3 = ["Алим", "Жүрж", "Гадил"];
let removedfruit = fruits3.shift();
console.log(fruits3);
console.log(removedfruit);

console.log("Дасгал №4");

fruits4 = ["гадил", "жүрж"];
let newLength =fruits4.unshift("алим", "киви");
console.log(fruits4);
console.log(newLength); ////////////////

console.log("Дасгал №5");

fruits5 = ["алим", "гадил", "жүрж"];
let numberOfFruits = fruits5.length;
console.log(numberOfFruits);

console.log("Дасгал №6");

let numbers = [10, 20, 30, 40, 50, 60];
let slicedArray = numbers.slice(1, 4);
console.log(slicedArray);
console.log(numbers); 

console.log("Дасгал №7");

fruits = ["алим", "гадил", "жүрж", "киви", "манго"];
let removedItems = fruits.splice(2, 2); 
console.log(fruits);
console.log(removedItems);

console.log("Дасгал №8");

let numbers1 = [1, 2, 3, 4, 5];
let reversedNumbers = numbers1.reverse();
console.log(numbers1);
console.log(reversedNumbers); /////////////////

console.log("Дасгал №9");

fruits6 = ["гадил", "алим", "манго", "киви", "жүрж"];
fruits6.sort();
console.log(fruits6);

let numbers2 = [100, 5, 25, 1, 10];
numbers2.sort((a, b) => a - b);
console.log(numbers2);

console.log("Дасгал №10");

fruits7 = ["алим", "гадил", "жүрж", "киви"];
let hasBanana = fruits7.includes("гадил"); 
console.log(hasBanana);

let hasMango = fruits7.includes("манго");
console.log(hasMango); 

console.log("Дасгал №11");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = array1.concat(array2);
console.log(combinedArray);
console.log(array1); 

console.log("Дасгал №12");

let prices = [100, 200, 350, 50];
let pricesWithVAT = prices.map(price => {
  return price * 1.1; 
});

console.log(pricesWithVAT);
console.log(prices);

let users = [
  { id: 1, name: "Бат", age: 30 },
  { id: 2, name: "Сарнай", age: 24 },
  { id: 3, name: "Дорж", age: 45 }
];
let userNames = users.map(user => user.name);
console.log(userNames);

let data = ["A", "B", "C"];
let formattedData = data.map((value, index) => {
  return `${index}: ${value}`;
});

console.log(formattedData);

console.log("Дасгал №13");

let colors = ["улаан", "цэнхэр", "ногоон"];

colors.forEach(color => {
  console.log(`Өнгө: ${color}`);
});

let scores = [90, 85, 92];
let totalScore = 0;

scores.forEach((score, index) => {
  totalScore += score;
  console.log(`${index + 1}-р шалгалт: ${score} оноо`);
});
console.log(`Нийт оноо: ${totalScore}`);


console.log("Дасгал №14");

let numbers3 = [10, 25, 40, 5, 50, 30];
let result = numbers3.find(number => {
  return number > 30;
});

console.log(result);

let notFound = numbers3.find(number => number > 60);
console.log(notFound);


let users1 = [
  { id: 1, name: "Бат", role: "admin" },
  { id: 2, name: "Сарнай", role: "user" },
  { id: 3, name: "Дорж", role: "admin" }
];

let specificUser = users1.find(user => user.id === 2);

console.log(specificUser);

let firstAdmin = users1.find(user => user.role === "admin");

console.log(firstAdmin);


console.log("Дасгал №15");

let numbers8 = [12, 5, 8, 30, 7, 22, 1];

let evenNumbers = numbers8.filter(number => {
  return number > 10 && number % 2 === 0;
});

console.log(evenNumbers);
console.log(numbers);

let team = [
  { name: "Бат", role: "admin", active: true },
  { name: "Сарнай", role: "user", active: true },
  { name: "Дорж", role: "admin", active: false },
  { name: "Ганзориг", role: "user", active: true }
];

let activeAdmins = team.filter(member => {
  return member.role === "admin" && member.active === true;
});

console.log(activeAdmins);

console.log("Дасгал №16");

let words = ["Бид", "JavaScript-ийг", "судалж", "байна."];
let sentence = words.join(" "); 

console.log(sentence);


let names = ["Амар", "Бат", "Цэцэг", "Дөлгөөн"];
let list = names.join(", "); 

console.log(list);

let charArray = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
let word = charArray.join("");
console.log(word);


let codes = ["MGL", 976, "UB"];
let defaultJoin = codes.join(); 

console.log(defaultJoin);
















