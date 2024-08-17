import askName from '../src/cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from '../src/index.js';

const name = askName();
const num = getRandomNum();
const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkEvenNumber = () => {
  getQuestion('evenGame');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const answer = getAnswer(num, 'evenGame');
    const result = isEven(num);
    compareResult(answer, result, name);
  }
  return console.log(`Congratulations, ${name}!`);
};

checkEvenNumber();

export default checkEvenNumber;
