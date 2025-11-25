let h2 = document.getElementById("my-heading");
console.log(h2);
h2.textContent = "this is my heading";

let paragraph = document.getElementsByClassName("my-p");
console.log(paragraph);

paragraph[0].textContent = "My first paragraph";
paragraph[1].textContent = "My second paragraph";

paragraph[0].style.color = "crimson";
paragraph[1].style.color = "black";
paragraph[1].style.color = "white";

let box1 = document.createElement("div");
document.body.appendChild(box1);

let boxHeading = document.createElement("h1");
boxHeading.textContent = "Box heading";
box1.appendChild(boxHeading);



let friuts = ["apple", "orange", "banana", "watermelon"];
for (let fruit of friuts) {
    let p = document.createElement("p");
    p.textContent = fruit;
    box1.appendChild(p);
}
let friutImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
    "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
    "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg"
]


for (let image of friutImages) {
    let img = document.createElement("img");
    img.src = image;
    img.style.width = "200px";
    box1.appendChild(img)

}
let button1 = document.createElement("button");
button1.textContent = "Click me";
box1.appendChild(button1);

button1.addEventListener("click", function () {
    console.log("Button 1 clicked");

    for (let i = 0; i < friuts.length; i++) {

        let fruitName = document.createElement("h3");
        fruitName.textContent = friuts[i];
        fruitName.classList.add(friuts[i]);

        box1.appendChild(fruitName);

        let friutImage = document.createElement("img");
        friutImage.src = friutImages[i]
        friutImage.style.width = "200px"

        box1.appendChild(friutImage)

    }

})

let item = document.querySelector(".item");
item.textContent = "Some text..."

let para = document.querySelector("#para");
para.style.backgroundColor = "aqua";