import gameEngine from './index.js';
import getRandomNum from './utils.js';

const game = 'What is the result of the expression?';

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

  return result.toString();
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const sign = getRandomSign();
  const question = `${num1} ${sign} ${num2}`;
  const answer = checkResult(num1, num2, sign);

  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
