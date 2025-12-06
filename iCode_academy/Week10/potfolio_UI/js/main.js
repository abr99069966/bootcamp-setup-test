const con1 = document.getElementById("con1");

let title = document.createElement("div");
con1.appendChild(title);

title.innerHTML = `
<a href="">Works</a>
<a href="">Blog</a>
<a href="">Contact</a>
`
title.style.width = "100%";
title.style.height = "300px";
title.style.backgroundColor = "lightblue";
title.style.display ="flex";
title.style.justifyContent= "end";
title.style.marginRight = "100px"
title.style.gap= "20px"
title.style.a.fontSize = "20px"

const links = title.querySelectorAll("a");

a.style.color = "#FF6464";
a.style.textDecoration = "none";
a.style.fontSize = "20px";
a.style.margin = "0 20px";


const header = document.getElementById("header");

// линкүүдийн нэр
const menu = ["Works", "Blog", "Contact"];

menu.forEach(item => {
    let a = document.createElement("a");
    a.textContent = item;
    a.href = "#";          // хүсвэл өөр хуудасны линк тавьж болно
    header.appendChild(a);
});
