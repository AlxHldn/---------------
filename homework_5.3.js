// Задание 1

let inputData = +prompt("Введите числовое значение");

if (typeof inputData !== "number") {
  console.log("Кажется Вы ошиблись");
} else if (isNaN(inputData)) {
  console.log("Кажется Вы ошиблись");
} else if (inputData % 2) {
  console.log("Это число нечетное");
} else {
  console.log("Это число четное");
}

// Задание 2

let X;
X = "asd";

if (typeof X === "number") {
  console.log("X - число");
} else if (typeof X === "string") {
  console.log("X - строка");
} else if (typeof X === "boolean") {
  console.log("X - логический тип");
} else {
  console.log("Тип X не определён");
}
