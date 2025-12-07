const app = document.getElementById("app");

// ---------------- HEADER ----------------
const header = document.createElement("header");
["Works", "Blog", "Contact"].forEach(item => {
    let a = document.createElement("a");
    a.textContent = item;
    a.href = "#";
    header.appendChild(a);
});
app.appendChild(header);

// ---------------- HERO ----------------
const hero = document.createElement("div");
hero.className = "hero";

const text = document.createElement("div");
text.className = "text";

text.innerHTML = `
    <h1>Hi, I am John,<br>Creative Technologist</h1>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
`;

const btn = document.createElement("button");
btn.textContent = "Download Resume";
text.appendChild(btn);

hero.appendChild(text);

// IMAGE
const photo = document.createElement("img");
photo.src = "https://i.imgur.com/4ZQZ4qG.png"; // Зурагтай адил дугуй зураг
photo.style.width = "300px";
photo.style.borderRadius = "50%";

hero.appendChild(photo);
app.appendChild(hero);

// ---------------- RECENT POSTS ----------------
const postsSection = document.createElement("section");
postsSection.className = "posts";

const postsArea = document.createElement("div");
postsArea.className = "area";

postsArea.innerHTML = `<h3>Recent posts</h3>`;

const cards = document.createElement("div");
cards.className = "cards";

function createPost(title, date, desc) {
    let card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML = `
        <h2>${title}</h2>
        <p>${date}</p>
        <p>${desc}</p>
    `;
    return card;
}

cards.appendChild(createPost(
    "Making a design system from scratch",
    "12 Feb 2020   |   Design Pattern",
    "Amet minim mollit non deserunt..."
));

cards.appendChild(createPost(
    "Creating pixel perfect icons in Figma",
    "12 Feb 2020   |   Figma, Icon Design",
    "Amet minim mollit non deserunt..."
));

postsArea.appendChild(cards);
postsSection.appendChild(postsArea);
app.appendChild(postsSection);

// ---------------- FEATURED WORKS ----------------
const works = document.createElement("section");
works.className = "works";

works.innerHTML = `<h3>Featured works</h3>`;

function createWork(img, title, year, category, desc) {
    let box = document.createElement("div");
    box.style.display = "flex";
    box.style.margin = "30px 0";
    box.style.gap = "20px";

    box.innerHTML = `
        <img src="${img}" width="250" style="border-radius:8px;">
        <div>
            <h2>${title}</h2>
            <p><strong>${year}</strong> — ${category}</p>
            <p>${desc}</p>
        </div>
    `;
    return box;
}

works.appendChild(createWork(
    "https://i.imgur.com/bCc2n4w.png",
    "Designing Dashboards",
    2020,
    "Dashboard",
    "Amet minim mollit non deserunt ullamco..."
));

works.appendChild(createWork(
    "https://i.imgur.com/HCzGZ0e.png",
    "Vibrant Portraits of 2020",
    2018,
    "Illustration",
    "Amet minim mollit non deserunt ullamco..."
));

works.appendChild(createWork(
    "https://i.imgur.com/6Mj5S3Q.png",
    "36 Days of Malayalam type",
    2018,
    "Typography",
    "Amet minim mollit non deserunt ullamco..."
));

app.appendChild(works);

// ---------------- FOOTER ----------------
const footer = document.createElement("footer");
footer.innerHTML = `
    <p>Copyright ©2020 All rights reserved</p>
`;
app.appendChild(footer);
