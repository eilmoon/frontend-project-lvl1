import randomizer from '../randomizer.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
  const question = randomizer(1, 1000);
  const answer = getAnswer(question);
  return [String(question), answer];
};

const startPrime = () => startGame(description, getGameData);

export default startPrime;
