const container = document.getElementById("container");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

for (let p of pokemonData) {
    let card = document.createElement("div");
    container.appendChild(card);

    card.innerHTML = `
        <img src="${p.image}" width="120">
        <h1>${p.name}</h1>
        <h3>#${p.number}</h3>
        <p>${p.type}</p>
    `;

    card.style.backgroundColor = "#FF6464";
    card.style.width = "250px";
    card.style.padding = "20px";
    card.style.margin = "10px";
    card.style.borderRadius = "20px";
    card.style.textAlign = "center";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.15)";
    
}

searchBtn.addEventListener("click", () => {
    const text = searchInput.value.toLowerCase();

    const filtered = pokemonData.filter(p =>
        p.name.toLowerCase().includes(text)
    );

    renderCards(filtered);
});