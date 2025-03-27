// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его реджекта в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

function delayTwoSeconds(callback) {
  setTimeout(() => {
    callback(); // вызываем коллбэк через 2 секунды
  }, 2000);

  let myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1); // резолвим промис через 2 секунды
    }, 2000);
  });

  myPromise.then((result) => {
    console.log(result); // Здесь выведется 1 после 2 секунд
  });

  let myRejectPromise = new Promise((resolve, reject) => {
    reject('Promise failed'); // реджектим с сообщением
  });

  myRejectPromise.catch((error) => {
    console.log(error); // Выведется "Promise failed"
  });

  function promiseNumber(number) {
    return new Promise((resolve, reject) => {
      // Резолвим промис с переданным числом
      resolve(number);
    });
  }
  Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(([result1, result2, result3]) => {
      console.log(result1); // 1
      console.log(result2); // 2
      console.log(result3); // 3
    })
    .catch((error) => {
      console.log(error);
    });
  Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Failure:', result.reason);
      }
    });
  });
  async function handlePromises() {
    try {
      // Ждем завершения всех промисов с помощью Promise.all
      const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

      // Выводим результаты
      console.log(results[0]); // 1
      console.log(results[1]); // 2
      console.log(results[2]); // 3
    } catch (error) {
      // Обрабатываем ошибку, если один из промисов был отклонен
      console.log('Error:', error);
    }
  }
  handlePromises();

  async function handleSettledPromises() {
    try {
      // Ждем завершения всех промисов с помощью Promise.allSettled
      const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

      // Выводим статус каждого промиса
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          console.log(`Fulfilled with value: ${result.value}`);
        } else if (result.status === 'rejected') {
          console.log(`Rejected with reason: ${result.reason}`);
        }
      });
    } catch (error) {
      // Обрабатываем ошибку, если она возникнет
      console.log('Error:', error);
    }
  }

  handleSettledPromises();
}
