import randomizer from '../randomizer.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
  const randomNumber = randomizer(1, 1000);
  const question = randomNumber;
  const answer = getAnswer(randomNumber);
  return [String(question), answer];
};

const startPrime = () => startGame(description, getGameData);

export default startPrime;
