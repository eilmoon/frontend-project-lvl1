import startGame from '../index.js';
import randomizer from '../randomizer.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (firstItem, difference) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstItem + difference * i; // 'i' this is iteration and multiplier
  }
  return progression;
};

const getGameData = () => {
  const indexOfDeletedItem = randomizer(0, progressionLength - 1);
  const progression = getProgression(randomizer(0, 100), randomizer(2, 10));
  const answer = progression[indexOfDeletedItem];
  progression[indexOfDeletedItem] = '..';
  const question = progression;
  return [question.join(' '), String(answer)];
};

const startProgression = () => startGame(description, getGameData);

export default startProgression;
