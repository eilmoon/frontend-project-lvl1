import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  if (randomNumber < 2) return false;
  for (let i = 2; i < randomNumber; i++) {
    if (randomNumber % i === 0) return false;
  }
  return true;
};

const gameData = () => {
  const randomNumber = getRandomNumber(1, 1000);
  const getAnswer = (randomNumber) => (isPrime(randomNumber) ? 'yes' : 'no');
  const question = randomNumber;
  const answer = getAnswer(randomNumber);
  return [String(question), answer];
};

const startPrime = () => startGame(description, gameData);

export default startPrime;
