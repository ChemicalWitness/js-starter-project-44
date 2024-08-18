import askName from '../src/cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from '../src/index.js';

const name = askName();
// const gcdFind = (num = 48, num2 = 18) => {
//   let temp;
//   while (0 !== num2) {
//     temp = num % num2;
//     num = num2;
//     num2 = temp;
//   }
//   const result = Math.abs(num);
//   return console.log(result);
// }

const gcdFind = (num, num2) => {
  let result;
  if (num2 === 0) {
    return num;
  }
  result = gcdFind(num2, num % num2);
  return result;
};

const gcd = () => {
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

gcd();
