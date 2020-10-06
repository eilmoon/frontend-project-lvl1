import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

let answer;
const gameData = () => {
  const operandOne = getRandomNumber(0, 100);
  const operandTwo = getRandomNumber(0, 100);
  const randomNum = getRandomNumber(-100, 100);
  // Криво рандомим знак, и возвращаем его и правильный ответ вычисления
  if ((randomNum >= -99) && (randomNum <= -33)) {
    answer = operandOne - operandTwo;
    return [`${operandOne} - ${operandTwo}`, String(answer)];
  } else if ((randomNum > -33) && (randomNum <= 33)) {
    answer = operandOne + operandTwo;
    return [`${operandOne} + ${operandTwo}`, String(answer)];
  } else {
    answer = operandOne * operandTwo;
    return [`${operandOne} * ${operandTwo}`, String(answer)];
  }
};

const startCalc = () => startGame(description, gameData);

export default startCalc;
