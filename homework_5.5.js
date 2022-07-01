// Задание 5 вариант 1

let array = prompt("Введите данные через запятую").split(",");

console.log(array.length);

array.forEach((element) => console.log(element));

// Задание 5 вариант 2

let arrayAnother = prompt("Введите данные через запятую").split(",");

console.log(arrayAnother.length);

for (let i = 0; i < arrayAnother.length; i++) {
  console.log(arrayAnother[i]);
}
