// Задание 3 вариант 1

let inputData = prompt("Введите значение, которое хотите отзеркалить");

function reversData(string) {
  let newRewersString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newRewersString += string[i];
  }
  return newRewersString;
}

console.log(reversData(inputData));

// Задание 3 вариант 2

let inputData1 = prompt("Введите значение, которое хотите отзеркалить");

function reversData1(string) {
  let arrayData = [...string];
  let reversArray = arrayData.reverse();
  let newRewersString = reversArray.join("");
  return newRewersString;
}

console.log(reversData1(inputData1));

// Задание 4

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let number = random(0, 101);

console.log(number);
