/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
  // Проверяем, что вход - это строка
  if (typeof word !== 'string') {
    return false;
  }

  // Приводим строку к нижнему регистру и убираем пробелы
  word = word.toLowerCase().replace(/\s/g, '');

  // Сравниваем слово с его перевёрнутой версией
  return word === word.split('').reverse().join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  if (typeof sentence !== 'string') {
    return [];
  }

  // Если строка пуста, возвращаем пустой массив
  if (sentence.trim() === '') {
    return [];
  }

  // Разделяем предложение на слова
  const words = sentence.split(' ');

  let maxLength = 0;
  let longestWords = [];

  // Проходим по каждому слову
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;

    // Если текущее слово длиннее найденного максимума
    if (wordLength > maxLength) {
      maxLength = wordLength; // Обновляем максимальную длину
      longestWords = [words[i]]; // Начинаем новый список с текущим словом
    }
    // Если длина текущего слова равна максимальной длине
    else if (wordLength === maxLength) {
      longestWords.push(words[i]); // Добавляем текущее слово в список
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
