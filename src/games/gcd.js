import startGame from '../index.js';
import randomizer from '../randomizer.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y === 0) return Math.abs(x);
  return getGCD(y, x % y);
};

const getGameData = () => {
  const num1 = randomizer(-100, 100);
  const num2 = randomizer(-100, 100);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, String(answer)];
};

const startGCD = () => startGame(description, getGameData);

export default startGCD;
