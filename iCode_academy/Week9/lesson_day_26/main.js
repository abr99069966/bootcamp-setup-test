let title = document.querySelector("#title");
let changeBtn = document.querySelector("#change-btn");

changeBtn.addEventListener("click", function () {
    title.style.color = "green";
})

let searchInput = document.querySelector("#search");
let items = document.querySelectorAll("#items li");
console.log(items);


// Search hiih
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();

    items.forEach(li => {
        const itemText = li.textContent.toLowerCase();
        li.style.display = itemText.includes(text) ? "block" : "none";
    })
})

let students = [
    {
        name: "Bayanaa",
        gender: "Male",
        favColor: "Green"
    },
    {
        name: "Amina",
        gender: "Female",
        favColor: "White"
    },
    {
        name: "Lkhagwa",
        gender: "Female",
        favColor: "Pink"
    },
    {
        name: "Turuu",
        gender: "Male",
        favColor: "Blue"
    },
    {
        name: "Mendee",
        gender: "Male",
        favColor: "Black"
    },
    {
        name: "Ankhaa",
        gender: "Male",
        favColor: "White"
    },
];
let box1 = document.querySelector("#box-1")
let container = document.createElement("div")
box1.appendChild(container);
container.classList.add("con1");

for (let student of students){
    let studentDiv = document.createElement("div");
    container.appendChild(studentDiv);

    studentDiv.innerHTML =`
        <h1>${student.name}</h1>
        <h2>${student.gender}</h2>
        <i>${student.favColor}</i>
    `;

    studentDiv.style.backgroundColor = "lightblue"
    studentDiv.style.width = "200px";
    studentDiv.style.padding = "20px";
    studentDiv.style.margin = "10px";
    studentDiv.style.borderRadius ="20px";
    studentDiv.style.textAlign ="center";
    studentDiv.style.fontFamily = "Arial"
}



// for (let student of students) {
//     // console.log(student);
//     // console.log(student.name);
//     // console.log(student.gender);
//     // console.log(student.favColor);
//     // console.log(`Name: ${student.name}, Gender: ${student.gender}, FavColor: ${student.favColor}`);
//     console.log(`Name: ${student.name}\nGender: ${student.gender}\nFavColor: ${student.favColor}`);
//     let studentDiv = document.createElement("div");
//     container.appendChild(studentDiv);
//     let h1 = document.createElement("h1");
//     h1.textContent = student.name;
//     studentDiv.appendChild(h1);

//     let h2 = document.createElement("h2");
//     h2.textContent =student.gender;
//     studentDiv.appendChild(h2);

//     let i = document.createElement("i");
//     i.textContent = student.favColor;
//     studentDiv.appendChild(i);

//     studentDiv.style.backgroundColor = "lightblue"
//     studentDiv.style.width = "200px";
//     studentDiv.style.padding = "20px";
//     studentDiv.style.margin = "10px";
//     studentDiv.style.borderRadius ="20px";
//     studentDiv.style.textAlign ="center";


// }


