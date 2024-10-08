import gameEngine from './index.js';
import getRandomNum from './utils.js';

const game = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
