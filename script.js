const gameBotFunction = function () {
    // 1. Генерация случайного числа от min до max
    function randomGenerate(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // 2. Получаем от пользователя количество попыток
    let tries = Number(
      prompt("Сколько попыток хотите? Введите число от 1 до 99:")
    );
  
    // Проверка на корректность ввода попыток
    while (
      isNaN(tries) ||
      tries < 1 ||
      tries > 99 ||
      String(tries).trim() === ""
    ) {
      tries = Number(
        prompt("❗ Введите корректное число попыток от 1 до 99:")
      );
    }
  
    // 3. Загаданное число
    let mysteryNumber = randomGenerate(1, 100);
  
    // 4. Основная функция игры (рекурсия)
    function getResult() {
      const userAnswer = prompt("Угадайте число от 1 до 100:");
  
      // Пользователь нажал "Отмена"
      if (userAnswer === null) {
        alert("❌ Вы завершили игру.");
        return;
      }
  
      const answerNum = Number(userAnswer.trim());
  
      // Проверка, что введено число от 1 до 100
      if (
        isNaN(answerNum) ||
        answerNum < 1 ||
        answerNum > 100 ||
        userAnswer.trim() === ""
      ) {
        alert("❗ Введите корректное число от 1 до 100");
        getResult(); // снова спрашиваем
        return;
      }
  
      // Сравнение
      if (answerNum < mysteryNumber) {
        alert("🔼 Загаданное число больше");
      } else if (answerNum > mysteryNumber) {
        alert("🔽 Загаданное число меньше");
      } else {
        // Угадал!
        const again = confirm("🎉 Вы угадали! Хотите сыграть ещё?");
        if (again) {
          mysteryNumber = randomGenerate(1, 100);
          tries = Number(prompt("Сколько попыток хотите? (1–99)"));
  
          // Проверка
          while (
            isNaN(tries) ||
            tries < 1 ||
            tries > 99 ||
            String(tries).trim() === ""
          ) {
            tries = Number(prompt("❗ Введите корректное число попыток от 1 до 99:"));
          }
  
          getResult();
          return;
        } else {
          alert("Спасибо за игру!");
          return;
        }
      }
  
      // Уменьшаем попытки
      tries--;
  
      if (tries > 0) {
        alert(`🕐 Осталось попыток: ${tries}`);
        getResult();
      } else {
        const tryAgain = confirm("😢 Попытки закончились. Хотите попробовать снова?");
        if (tryAgain) {
          tries = Number(prompt("Сколько попыток хотите? (1–99)"));
  
          while (
            isNaN(tries) ||
            tries < 1 ||
            tries > 99 ||
            String(tries).trim() === ""
          ) {
            tries = Number(prompt("❗ Введите корректное число попыток от 1 до 99:"));
          }
  
          mysteryNumber = randomGenerate(1, 100);
          getResult();
        } else {
          alert("👋 Вы завершили игру.");
          return;
        }
      }
    }
  
    // Стартуем игру
    getResult();
  };
  
  // Запускаем
  gameBotFunction();
  