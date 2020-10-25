import startGame from '../index.js';
import randomizer from '../randomizer.js';

const description = 'What is the result of the expression?';

const calculate = (operandOne, operator, operandTwo) => {
  switch (operator) {
    case '+':
      return (operandOne + operandTwo);
    case '-':
      return (operandOne - operandTwo);
    case '*':
      return (operandOne * operandTwo);
    default:
      throw new Error(`Error! Current operator is ${operator}. Avalible operators are "+", "-", "*".`);
  }
};

const operators = ['+', '-', '*'];

const getGameData = () => {
  const operandOne = randomizer(0, 100);
  const operator = operators[randomizer(0, operators.length - 1)];
  const operandTwo = randomizer(0, 100);
  const question = `${operandOne} ${operator} ${operandTwo}`;
  const answer = calculate(operandOne, operator, operandTwo);
  return [question, String(answer)];
};

const startCalc = () => startGame(description, getGameData);

export default startCalc;
