import React from 'react'

export const Users = () => {
    const fetchUsers = () => {
        const container = document.getElementById("user-container");
        const loading = document.getElementById("loading");

        loading.classList.remove("hidden");
        container.innerHTML = "";
        loading.textContent = "Мэдээлэл ачааллаж байна...";
        loading.className = "text-black text-center"

        fetch("https://randomuser.me/api/?results=10")
            .then(result => result.json())
            .then(data => {
                loading.classList.add("hidden");

                data.results.forEach(user => {
                    const card = document.createElement("div");
                    card.className = "bg-white shadow-md rounded-xl p-5 text-center";
                    console.log(user);
                    
                    card.innerHTML = `
                    <img class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" src=${user.picture.large} />
                    <h3 class = "text-lg font-semibold text-blue-600 ">${user.name.first} ${user.name.last} </h3>
                    <p class="text-gray-600 "> ${user.email}</p>
                    <p class ="text-sm text-gray-500 "> ${user.location.city}, ${user.location.country}</p>
                    `;
                    container.appendChild(card);
                });
            })
            .catch(() => {
                loading.textContent = "Алдаа гарлаа!";
                loading.className = "text-red-500 text-center";
            })
    }


    return (
        <div className='p-6'>
            <h1 className='text-3xl font-bold text-center mb-6'>Хүмүүсийн профайл</h1>
            <div className='flex justify-center mb-6 '>
                <button onClick={fetchUsers} className='px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700'>Мэдээлэл татах</button>
            </div>
            <p id='loading' className='text-center text-gray-600 hidden'>
                
            </p>
            <div id='user-container' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'></div>
        </div>
    )
}
