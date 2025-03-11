/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  // Ваш код
  return wordsArr.sort((a, b) => {
    // Считаем количество гласных в словах a и b
    const countVowels = (word) => word.split('').filter((letter) => 'aeiou'.includes(letter)).length;

    return countVowels(a) - countVowels(b); // Сортируем по разнице в количестве гласных
  });
}
console.log(sortedByVowels(words));
export { sortedByVowels };
