import readlineSync from 'readline-sync';
import askName from '../src/cli.js';
// import name from './brain-games.js';
const name = askName();
let num = 0;
const getRandomNum = () => {
  num = Math.floor(Math.random() * 100);
  return num;
};
const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    getRandomNum();
    const answer = readlineSync.question(`Question: ${num} `);
    console.log(`Your answer: ${answer}`);
    if (answer === isEven(num)) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(num)}.`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default checkEvenNumber;
