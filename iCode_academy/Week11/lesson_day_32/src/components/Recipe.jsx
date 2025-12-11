import React from 'react'

export const Recipe = () => {
    const fetchRecipe = () => {
        const loading = document.getElementById("loading");
        const img = document.getElementById("recipe-image");
        const title = document.getElementById("recipe-title");
        const instructions = document.getElementById("recipe-instructions");

        loading.classList.remove("hidden");
        loading.textContent = "Жор ачааллаж байна...";
        img.classList.add ("hidden");
        title.textContent = "";
        instructions.textContent = "";

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(result => result.json())
        .then(data => {
            const meal = data.meals[0];
            loading.classList.add("hidden");

            img.src = meal.strMealThumb;
            img.classList.remove("hidden");

            title.textContent = meal.strMeal;
            instructions.textContent = meal.strInstructions;
        }
        )
    }


  return (
    <div className='flex justify-center items-start min-h-100 p-6'>
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-lg w-full">
                <h1 className="text-3xl font-bold text-center mb-4">Өдрийн жор</h1>

                <p id="loading" className="text-gray-600 text-center mb-4">
                    
                </p>

                <img
                    id="recipe-image"
                    src=""
                    alt="Жорны зураг"
                    className="hidden w-full rounded-xl mb-4 shadow"
                />

                <h2
                    id="recipe-title"
                    className="text-xl font-semibold text-center mb-2"
                ></h2>

                <p id="recipe-instructions" className="text-gray-700 leading-relaxed"></p>

                <button
                    id="new-recipe-btn"
                    onClick={fetchRecipe}
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Дараагийн жор
                </button>
            </div>
    </div>
  )
}
