import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const gameData = () => { // возврат генерации правильного числа и ответа
  const randomNumber = getRandomNumber(-100, 100);
  const answer = getAnswer(randomNumber);
  return [String(randomNumber), answer];
};

const startEven = () => startGame(description, gameData);

export default startEven;
