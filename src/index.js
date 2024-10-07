import readlineSync from 'readline-sync';
import askName from './cli.js';

export function getRandomNum(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export const getQuestion = (type) => {
//   if (type === 'evenGame') {
//     console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   } else if (type === 'calcGame') {
//     console.log('What is the result of the expression?');
//   } else if (type === 'gcdGame') {
//     console.log('Find the greatest common divisor of given numbers.');
//   } else if (type === 'progressionGame') {
//     console.log('What number is missing in the progression?');
//   } else if (type === 'primeGame') {
//     console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
//   }
// };

// export const getAnswer = (num, type, ...arg) => {
//   let answer;
//   if (type === 'evenGame') {
//     answer = readlineSync.question(`Question: ${num} `);
//     console.log(`Your answer: ${answer}`);
//   } else if (type === 'calcGame') {
//     answer = readlineSync.question(`Question: ${num} ${arg[0]} ${arg[1]} `);
//     console.log(`Your answer: ${answer}`);
//   } else if (type === 'gcdGame') {
//     answer = readlineSync.question(`Question: ${num} ${arg[0]} `);
//     console.log(`Your answer: ${answer}`);
//   } else if (type === 'progressionGame') {
//     answer = readlineSync.question(`Question: ${num} `);
//     console.log(`Your answer: ${answer}`);
//   } else if (type === 'primeGame') {
//     answer = readlineSync.question(`Question: ${num} `);
//     console.log(`Your answer: ${answer}`);
//   }
//   return answer;
// };

// export const compareResult = (answer, result, name) => {
//   if (answer === result.toString()) {
//     console.log('Correct!');
//     return true;
//   }
//   console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
//   console.log(`Let's try again, ${name}!`);
//   return false;
// };

export const gameEngine = (game, getQuestionAndAnswer) => {
  const name = askName();
  console.log(game);
  const roundCount = 3;
  for (let round = 0; round < roundCount; round += 1) {
    // const question = getQuestion();
    // const correctAnswer = getAnswer();
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
