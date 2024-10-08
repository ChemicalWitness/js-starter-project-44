import gameEngine from './index.js';
import getRandomNum from './utils.js';

const game = 'Find the greatest common divisor of given numbers.';

function gcdFind(num, num2) {
  return num2 === 0 ? num : gcdFind(num2, num % num2);
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = gcdFind(num1, num2);

  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
