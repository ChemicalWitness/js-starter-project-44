import gameEngine from './index.js';
import getRandomNum from './utils.js';

const game = 'What is the result of the expression?';

const getRandomSign = () => {
  const arrSign = ['+', '-', '*'];
  const result = arrSign[getRandomNum(0, 2)];
  return result;
};

const getResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Error');
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const sign = getRandomSign();
  const question = `${num1} ${sign} ${num2}`;
  const answer = getResult(num1, num2, sign);

  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
