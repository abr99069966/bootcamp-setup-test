// Exercise 1
let text = document.querySelector("#text");
text.addEventListener("click", function () {
   text.textContent = "“Сайн байна уу!”"
})
// Exercise 2
btn.addEventListener("click", function () {
    box.style.backgroundColor = "red"
})
// Exercise 3
let nameInput= document.querySelector("#name");
let showButton = document.querySelector("#show");
let resultP =document.querySelector("#result");
showButton.addEventListener("click", function () {
    resultP.textContent = nameInput.value;
})
// Exercise 4
let box2 = document.querySelector("#box2");
let button = document.querySelector("#add");
button.addEventListener("click", function () {
    box2.classList.add("active");
})
// Exercise 5
let body = document.querySelector("body");
let toggleBtn= document.querySelector("#toggle")
toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode")
})
// Exercise 6
let ul = document.querySelector("#list");
ul.addEventListener("click", function () {


})