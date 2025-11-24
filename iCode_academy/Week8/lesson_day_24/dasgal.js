console.log("Дасгал №1");


function sumScores() {
    const scores = { math: 88, english: 92, physics: 75, history: 90 };

    let values = Object.values(scores); // бүх оноог массив хэлбэрээр авах
    let total = 0;

    for (let i = 0; i < values.length; i++) {
        total += values[i];  // нийлбэрт нэмэх
    }

    return total; // нийт оноог буцаах
}

console.log(sumScores()); // функцийн үр дүнг хэвлэх
