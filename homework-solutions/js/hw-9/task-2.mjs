/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if (!character || typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Invalid character format');
  }
  characters.push(character);
}

function getCharacter(name) {
  // Ваш код
  return characters.find((character) => character.name === name);
}

function getCharactersByAge(minAge) {
  // Ваш код
  if (typeof minAge !== 'number') {
    throw new Error('minAge must be a number');
  }

  return characters.filter((character) => character.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  let character = getCharacter(name);

  if (!character) {
    throw new Error('Character not found');
  }

  character.name = newCharacter.name;
  character.age = newCharacter.age;
}

function removeCharacter(name) {
  // Ваш код
  const characterIndex = characters.findIndex((character) => character.name === name);

  if (characterIndex === -1) {
    throw new Error('Character not found');
  }

  characters.splice(characterIndex, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
