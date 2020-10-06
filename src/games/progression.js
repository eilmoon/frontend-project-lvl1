import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstItem, difference, progressionLength) => {
  const progression = [firstItem];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + difference;
  }
  return progression;
};

const gameData = () => {
  const firstItem = getRandomNumber(0, 100);
  const difference = getRandomNumber(2, 10);
  const progressionLength = 10;
  const progression = getProgression(firstItem, difference, progressionLength);
  const indexOfDeletedItem = getRandomNumber(0, progressionLength - 1);
  const answer = progression[indexOfDeletedItem];
  progression[indexOfDeletedItem] = '..';
  const question = progression;
  return [question.join(' '), String(answer)];
};

const startProgression = () => startGame(description, gameData);

export default startProgression;
