
console.log('Дасгал №1');

// 1. findMax нэртэй function үүсгэнэ.
// 2. Хоёр параметр авна: a, b
// 3. if ашиглан a > b эсэхийг шалга.
// 4. Хэрвээ үнэн бол “a хамгийн их” гэж хэвлэ.
// 5. Үгүй бол “b хамгийн их” гэж хэвлэ.
// 6. Function-оо 5 ба 9 гэх мэт утгаар дуудаж шалга.

function findMax(a, b) {
    if (a > b) {
        console.log(a + " хамгийн их");
    } else {
        console.log(b + " хамгийн их");
    }
}

findMax(5, 9);
findMax(12, 3);
findMax(7, 7);

console.log('Дасгал №2');

// 1. checkMultipleOfThree нэртэй function үүсгэнэ.
// 2. Нэг параметр num авна.
// 3. if ашиглан num % 3 === 0 эсэхийг шалга.
// 4. Хэрвээ тийм бол “3-ын үржвэр мөн ✅” гэж хэвлэ.
// 5. Үгүй бол “3-ын үржвэр биш ❌” гэж хэвлэ.
// 6. Function-оо 9, 10 гэх мэт тоогоор шалга.

function checkMultipleOfThree(num) {
    if (num % 3 === 0) {
        console.log("3-ын үржвэр мөн");
    } else {
        console.log("3-ын үржвэр биш");
    }
}
checkMultipleOfThree(8)
checkMultipleOfThree(9)
checkMultipleOfThree(32)

console.log('Дасгал №3');

// 1. findAverage нэртэй function үүсгэнэ.
// 2. numbers нэртэй массив авна (жишээ: [10, 20, 30, 40, 50]).
// 3. Нэг хувьсагч sum = 0 гэж зарла.
// 4. for давталтаар массивын бүх элементийг нийлбэрт нэм.
// 5. Давталт дууссаны дараа average = sum / numbers.length гэж тооцоол.
// 6. “Дундаж нь ... байна” гэж хэвлэ.
// 7. Function-оо дуудаж шалга.

function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    console.log("Дундаж нь " + average + " байна");
}
findAverage([10, 20, 30, 40, 50]);
findAverage([5, 15, 25]);
findAverage([100, 200, 300, 400]);

console.log('Дасгал №4');
// 1. printOddNumbers нэртэй function үүсгэнэ.
// 2. for давталтаар i = 1 → 10 хүртэл гүй.
// 3. if ашиглан i % 2 !== 0 эсэхийг шалга.
// 4. Хэрвээ үнэн бол тухайн тоог console.log ашиглан хэвлэ.
// 5. Function-оо дуудаж шалга.

function printOddNumbers() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbers();

console.log('Дасгал №5');

// 1. checkResults нэртэй function үүсгэнэ.
// 2. students нэртэй массив үүсгэ:
//    [
//      { name: "Бат", score: 85 },
//      { name: "Сараа", score: 50 },
//      { name: "Ану", score: 73 }
//    ]
// 3. for давталтаар бүх оюутныг шалга.
// 4. if ашиглан score >= 60 эсэхийг шалга.
// 5. Хэрвээ үнэн бол “<нэр> - Тэнцсэн ✅”
// 6. Үгүй бол “<нэр> - Унасан ❌” гэж хэвлэ.
// 7. Function-оо дуудаж шалга.

function checkResults() {
    const students = [
        { name: "Бат", score: 85 },
        { name: "Сараа", score: 50 },
        { name: "Ану", score: 73 }
    ];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (student.score >= 60) {
            console.log(student.name + " - Тэнцсэн");
        } else {
            console.log(student.name + " - Унасан");
        }
    }
}
checkResults();
