import {
  getRandomNum,
  gameEngine,
} from './index.js';

const game = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum();
  const answer = isEven(question);
  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
