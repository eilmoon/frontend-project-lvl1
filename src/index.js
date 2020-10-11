import readlineSync from 'readline-sync';

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const numberOfQuestions = 3;
  console.log(description);
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
<<<<<<< HEAD
=======

// " Библиотека promptly работает в асинхронном режиме который мы еще не изучали
// Для ее работы нужно выполнить две вещи:
// 1. Добавить слово async перед определением функции
// 2. Добавить слово await перед каждым вызовом метода prompt
// В остальном код совершенно обычный "

// p.s. Пошёл изучать https://ru.hexlet.io/courses/js-asynchronous-programming , разберусь с промисами - вернусь
>>>>>>> 41644bdee8c5975da1c4ef9bdc66dc1df129d63f
