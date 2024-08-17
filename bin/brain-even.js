import askName from '../src/cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from '../src/index.js';

const name = askName();
const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkEvenNumber = () => {
  getQuestion('evenGame');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum();
    const answer = getAnswer(num, 'evenGame');
    const result = isEven(num);
    if (compareResult(answer, result, name) === false) {
      return null;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

checkEvenNumber();

export default checkEvenNumber;
