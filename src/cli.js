import promptly from 'promptly';

<<<<<<< HEAD
//startGame
export default async (description, gameData) => {
=======
export default async () => {
>>>>>>> 8f4ae0deba936b22e283f2ad7f404611e47009b4
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(description);//описание игры
  for (let i = 0; i < 3; i += 1) { //играем до трёх побед
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
