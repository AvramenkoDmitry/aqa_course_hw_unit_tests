/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = []; // Для уникальных пицц
let resultNull = null; // Для resultNull

// Первая проверка (для myPizzasT1)
for (const myPizza of myPizzasT1) {
  let found = false;

  for (const competitorPizza of competitorPizzas) {
    if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
      found = true;
      break;
    }
  }

  if (!found) {
    resultUnique.push(myPizza.toLowerCase()); // Если пицца уникальна, добавляем в массив
  }
}

// Вторая проверка (для myPizzasT2)
let allPizzasFound = true; // Флаг для проверки, есть ли уникальные пиццы в myPizzasT2
for (const myPizza of myPizzasT2) {
  let found = false;

  for (const competitorPizza of competitorPizzas) {
    if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
      found = true;
      break;
    }
  }

  if (!found) {
    resultNull = [myPizza.toLowerCase()]; // Если пицца уникальна, сохраняем её в resultNull
    allPizzasFound = false; // Устанавливаем флаг, что есть уникальные пиццы
    break;
  }
}

// Если все пиццы из myPizzasT2 были найдены у конкурента, присваиваем null
if (allPizzasFound) {
  resultNull = null;
}

console.log(resultNull, resultUnique);
export { resultNull, resultUnique };
