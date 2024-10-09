import gameEngine from './index.js';
import getRandomNum from './utils.js';

const game = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum();
  const answer = checkPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
