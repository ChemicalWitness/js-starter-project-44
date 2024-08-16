import readlineSync from 'readline-sync';
import askName from '../src/cli.js';
// import name from './brain-games.js';
const name = askName();
let num = 0;
const getRandomNum = () => {
  num = Math.floor(Math.random() * 100);
  return num;
};

const getRandomSign = () => {
  const arrSign = ['+', '-', '*'];
  const result = arrSign[Math.floor(Math.random() * 2)];
  return result;
};

const checkResult = (num1, num2, sign) => {
  let result;
  if (sign === '+') {
    result = +num1 + +num2;
  } else if (sign === '-') {
    result = +num1 - +num2;
  } else if (sign === '*') {
    result = +num1 * +num2;
  }

  return result;
};

const calc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const sign = getRandomSign();
    const answer = readlineSync.question(`Question: ${num1} ${sign} ${num2} `);
    console.log(`Your answer: ${answer}`);
    if (+checkResult(num1, num2, sign) === +answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${checkResult(num1, num2, sign)}`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default calc;
