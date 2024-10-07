// import askName from './cli.js';
import {
  getRandomNum,
  gameEngine,
} from './index.js';

// const name = askName();

const game = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  if (num < 2) {
    return 'no';
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum();
  const answer = checkPrime(question);

  return [question, answer];
}

export default () => {
  gameEngine(game, getQuestionAndAnswer);
}

// export default () => {
//   getQuestion('primeGame');
//   for (let i = 0; i < 3; i += 1) {
//     const num = getRandomNum();
//     const answer = getAnswer(num, 'progressionGame');
//     const result = checkPrime(num);
//     if (compareResult(answer, result, name) === false) {
//       return null;
//     }
//   }
//   return console.log(`Congratulations, ${name}!`);
// };
