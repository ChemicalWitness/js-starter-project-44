import askName from './cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from './index.js';

const name = askName();

const gcdFind = (num, num2) => num2 === 0 ? num : gcdFind(num, num % num2);

export default () => {
  getQuestion('gcdGame');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum();
    const num2 = getRandomNum();
    const answer = getAnswer(num, 'gcdGame', num2);
    const result = gcdFind(num, num2);

    if (compareResult(answer, result, name) === false) {
      return null;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
