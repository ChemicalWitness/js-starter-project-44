import askName from './cli.js';
import {
  getRandomNum,
  gameEngine,
} from './index.js';

// const name = askName();
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

// const getAnswer = () => {
//   const answer = isEven(getQuestion()) ? 'yes' : 'no';
//   return answer;
// };

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};

// export default () => {
//   getQuestion('evenGame');
//   for (let i = 0; i < 3; i += 1) {
//     const num = getRandomNum();
//     const answer = getAnswer(num, 'evenGame');
//     const result = isEven(num);
//     if (compareResult(answer, result, name) === false) {
//       return null;
//     }
//   }
//   return console.log(`Congratulations, ${name}!`);
// };
