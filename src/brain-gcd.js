// import askName from './cli.js';
import {
  getRandomNum,
  gameEngine,
} from './index.js';

// const name = askName();
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

// export default () => {
//   getQuestion('gcdGame');
//   for (let i = 0; i < 3; i += 1) {
//     const num = getRandomNum();
//     const num2 = getRandomNum();
//     const answer = getAnswer(num, 'gcdGame', num2);
//     const result = gcdFind(num, num2);

//     if (compareResult(answer, result, name) === false) {
//       return null;
//     }
//   }
//   return console.log(`Congratulations, ${name}!`);
// };
