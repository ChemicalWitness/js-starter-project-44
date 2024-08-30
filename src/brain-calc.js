import askName from './cli.js';
import {
  getAnswer, getQuestion, getRandomNum, compareResult,
} from './index.js';

const name = askName();

const getRandomSign = () => {
  const arrSign = ['+', '-', '*'];
  const result = arrSign[Math.floor(Math.random() * 2)];
  return result;
};

const checkResult = (num1, num2, sign) => {
  let result;
  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else if (sign === '*') {
    result = num1 * num2;
  }

  return result;
};

export default () => {
  getQuestion('calcGame');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum();
    const num2 = getRandomNum();
    const sign = getRandomSign();
    const answer = getAnswer(num, 'calcGame', sign, num2);
    const result = checkResult(num, num2, sign);
    if (compareResult(answer, result.toString(), name) === false) {
      return null;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
