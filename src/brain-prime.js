import askName from './cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from './index.js';

const name = askName();

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

export default () => {
  getQuestion('primeGame');
  for (let i = 0; i < 3; i += 1) {
    const num = 71;
    const answer = getAnswer(num, 'progressionGame');
    const result = checkPrime(num);
    if (compareResult(answer, result, name) === false) {
      return null;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
