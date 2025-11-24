console.log("дасгал №1");

const person = {
    name: "Sara",
    age: 20,
    city: "Ulaanbaatar"
}
console.log(person.name);

console.log("дасгал №2");

const car = {
    brand: "Toyota",
    model: "prius",
}
car.color = "white"
console.log(car);

console.log("дасгал №3");

const student = {
    name: "Bold",
    hobbies: ["Зураг зурах", "E sport"],
}
console.log(student.hobbies);

console.log("дасгал №4");

const user = {
    name: "Khongoroo",
    greet() {
        console.log("Hi " + this.name);

    }
}
user.greet()

console.log("дасгал №5");

const book = {
    title: "JS Basics",
    author: "John",
    year: 2024
};
for (let key in book){
    console.log(book[key]);
}

console.log("Дунд"+ " "+ "дасгал №1");

const users = [
  { name: "Sara", 
    city: "Ulaanbaatar", 
    age: 21 },
  { name: "Bold", 
    city: "Erdenet", 
    age: 19 },
  { name: "Tuvshin", 
    city: "Ulaanbaatar", 
    age: 25 }
];
for ( let user of users){
    if( user.city == "Ulaanbaatar"){
        console.log(user.name);
    }else{
    }
}
console.log("Дунд"+ " "+ "дасгал №2");

const product = {
  name: "Laptop",
  price: 3500,
  brand: "Apple"
};
let newProduct = {...product}
newProduct.price= 4000;
console.log(newProduct);

console.log("Дунд"+ " "+ "дасгал №3");

const settings = {
  theme: "dark",
  notifications: {
    email: true,
    sms: false
  }
};
settings.notifications.email = false;
console.log(settings);

console.log("Дунд"+ " "+ "дасгал №4")

const students = [
  { name: "Ari", score: 88 },
  { name: "Temuulen", score: 92 },
  { name: "Enkh", score: 79 }
];

let maxScore = -1;        // 1. Эхний бага утга
let topStudent = null;    // 2. Хамгийн өндөр оноотой хүнийг хадгалах

// 3. Массив дээгүүр гүйх
for (let i = 0; i < students.length; i++) {
  let student = students[i];

  // 4. Оноог харьцуулах
  if (student.score > maxScore) {
    maxScore = student.score;   // 5. maxScore шинэчлэх
    topStudent = student;       // topStudent шинэчлэх
  }
}

// 6. Хариуг хэвлэх
console.log(`Хамгийн өндөр оноотой хүн: ${topStudent.name}`);

console.log("Дунд"+ " "+ "дасгал №5")

const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan"
};

const keys = Object.keys(movie);   // 1–2. Бүх key-г массив болгох

console.log(keys);                 // 3. Хэвлэх

