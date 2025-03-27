// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todo) {
  try {
    // Отправляем POST-запрос с телом запроса
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Указываем, что отправляем JSON
      },
      body: JSON.stringify(todo), // Преобразуем объект todo в JSON строку
    });

    // Проверяем статус ответа
    if (response.status !== 201) {
      throw new Error(`Ошибка: статус не 201, а ${response.status}`);
    }

    // Преобразуем респонс в JSON
    const jsonResponse = await response.json();

    // Сравниваем данные из респонса с теми, что мы отправляли
    if (JSON.stringify(jsonResponse) !== JSON.stringify({ ...todo, id: jsonResponse.id })) {
      throw new Error('Данные из респонса не совпадают с теми, что были отправлены.');
    }

    // Если все ок, возвращаем полученные данные
    console.log('Тудушка успешно создана:', jsonResponse);
    return jsonResponse;
  } catch (error) {
    // Обрабатываем ошибки
    console.error('Ошибка:', error.message);
  } finally {
    console.log('Работа функции завершена');
  }
}

createTodo({
  userId: 1,
  title: 'Lorem inpsum',
  completed: false,
});
