const gameBotFunction = function () {
  const randomGenerate = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let mysteryNumber = randomGenerate(1, 100);

  const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  let tries = 0;

  const askTries = function () {
    let userTries = prompt("Сколько попыток вы хотите (от 1 до 99)?");

    if (userTries === null) {
      alert("Вы отменили ввод. Игра завершена.");
      return null;
    }

    userTries = userTries.trim();

    if (!isNumber(userTries)) {
      alert("Введите именно число.");
      return askTries();
    }

    userTries = Number(userTries);

    if (userTries <= 0 || userTries >= 100) {
      alert("Число должно быть от 1 до 99.");
      return askTries();
    }

    return userTries;
  };

  tries = askTries();
  if (tries === null) return;

  const getResult = function () {
    const answer = prompt("Угадайте число от 1 до 100");

    if (answer === null) {
      alert("Вы завершили игру.");
      return;
    }

    let answerNum = answer.trim();

    while (!isNumber(answerNum) || answerNum === "") {
      answerNum = prompt("Введите корректное число от 1 до 100").trim();
      if (answerNum === null) {
        alert("Вы завершили игру.");
        return;
      }
    }

    answerNum = Number(answerNum);

    if (answerNum < mysteryNumber) {
      alert(`Загаданное число больше! Осталось попыток: ${tries - 1}`);
    } else if (answerNum > mysteryNumber) {
      alert(`Загаданное число меньше! Осталось попыток: ${tries - 1}`);
    } else {
      const again = confirm("Поздравляю! Вы угадали! Хотите сыграть ещё?");
      if (again) {
        tries = askTries();
        if (tries === null) return;
        mysteryNumber = randomGenerate(1, 100);
        return getResult();
      } else {
        alert("Спасибо за игру!");
        return;
      }
    }

    tries--;

    if (tries > 0) {
      getResult();
    } else {
      alert(`Попытки закончились. Загаданное число было: ${mysteryNumber}`);
      const again = confirm("Вам стоит поработать над своей интуицией.\nЯ могу помочь совершенно бесплатно.\nИграем ещё раз?");
      if (again) {
        tries = askTries();
        if (tries === null) return;
        mysteryNumber = randomGenerate(1, 100);
        getResult();
      } else {
        alert("Игра окончена.");
        return;
      }
    }
  };

  getResult();
};

gameBotFunction();
