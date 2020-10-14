import startGame from '../index.js';
import randomizer from '../randomizer.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionLength = 10;
  const progression = [];
  const firstItem = randomizer(0, 100);
  const difference = randomizer(2, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstItem + difference * i; // 'i' this is iteration and multiplier
  }
  const indexOfDeletedItem = randomizer(0, progressionLength - 1);
  const answer = progression[indexOfDeletedItem];
  progression[indexOfDeletedItem] = '..';
  return [progression, answer];
};

const getGameData = () => {
  const [progression, answer] = getProgression();
  const question = progression;
  return [question.join(' '), String(answer)];
};

const startProgression = () => startGame(description, getGameData);

export default startProgression;
