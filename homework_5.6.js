// Задание 6

let array = prompt("Введите данные через запятую").split(",");

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      console.log(true);
      console.log("Одинаковые элементы с индексами " + i + " и " + n);
    } else {
      console.log(false);
    }
  }
}

// Задание 7

let array1 = [1, 4, 5, 0, 6, 8, 9, 0, "qwedq", "+", true, 5, NaN];

let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < array1.length; i++) {
  if (typeof array1[i] !== "number" || isNaN(array1[i])) {
    console.log(`${array1[i]} - это не число`);
  } else if (array1[i] === 0) {
    zero += 1;
  } else if (array1[i] % 2) {
    even += 1;
  } else {
    odd += 1;
  }
}

console.log(`Вы ввели ${odd} четных чисел`);
console.log(`Вы ввели ${even} нечетных чисел`);
console.log(`Вы ввели ${zero} нулей`);
