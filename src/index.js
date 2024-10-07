import readlineSync from 'readline-sync';
import askName from './cli.js';

export function getRandomNum(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const gameEngine = (game, getQuestionAndAnswer) => {
  const name = askName();
  console.log(game);
  const roundCount = 3;
  for (let round = 0; round < roundCount; round += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer.toString() !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};
