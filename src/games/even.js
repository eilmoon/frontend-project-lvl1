import startGame from '../index.js';
import randomizer from '../randomizer.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const getGameData = () => { // возврат генерации правильного числа и ответа
  const randomNumber = randomizer(-100, 100);
  const answer = getAnswer(randomNumber);
  const question = String(randomNumber);
  return [question, answer];
};

const startEven = () => startGame(description, getGameData);

export default startEven;
