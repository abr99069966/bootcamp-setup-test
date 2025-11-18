let person1name = "Saraa";
let person1age = 30;
let person1address = "UB";

let person2name = "Saraa";
let person2age = 30;
let person2address = "UB";

let person1 = {
    name: "Saraa",
    age: 30,
    address: "Ulaanbaatar"
}

let person2 = {
    name: "Boldoo",
    age: 40,
    address: "Darkhan"

}
console.log(person1);
console.log(person2);

console.log(person1.name);
console.log(person2.address);

console.log(person1["age"]);
console.log(`Person 1 address ${person1["address"]}`);

person1.email = "saraa@gmail.com"
console.log(person1);

person2.isMarriad = true;
console.log(person2);

//delete property
delete person2.address;
console.log(person2);


let dog = {
    name: "Jerry",
    age: 3,
    breed: "Chihuahua",
    makeNoise: function () {
        console.log("Hov hov");
    }
}
console.log(dog);
dog.makeNoise();

// for loop in object
for (let key in dog) {
    console.log(`${key}: ${dog[key]}`);

}
//constant- тогтмол
const pi = 3.14;

const student = {
    name: "Bat",
    scores: [80, 85, 90, 99],
    address: {
        city: "Ulaanbaatar",
        district: "Bayangol",
    }
}

let avgScore = 0;
let sum = 0;
for (let score in student.scores) {
    console.log(score);
    sum += student.scores[score];
}
avgScore = sum / student.scores.length;
console.log(avgScore);

console.log(student.address.city);

let users = [
    {
        name: "Tuya",
        age: 20,
        city: "Erdenet",
    },
    {
        name: "Bold",
        age: 25,
        city: "Ulaanbaatar",
    },
    {
        name: "Bolor",
        age: 35,
        city: "Ulaanbaatar",
    }
];
for (let user of users) {
    if (user.age > 20) { 
        console.log(user.name);
    } else {
    }
}





