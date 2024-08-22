import askName from '../src/cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from '../src/index.js';

const name = askName();

const progression = () => {
  getQuestion('progressionGame');
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandomNum(5, 15);
    const progressionIndex = getRandomNum(0, progressionLength - 1);
    const progressionStep = getRandomNum(1, 5);
    const progressionArray = [];
    let element = getRandomNum();
    let result;
    for (let j = 0; j < progressionLength; j += 1) {
      progressionArray.push(element + progressionStep);
      element += progressionStep;
      if (j === progressionIndex) {
        progressionArray.push(' .. ');
        element += progressionStep;
        result = element;
      }
    }
    const answer = getAnswer(progressionArray.join(' '), 'progressionGame');
    if (compareResult(answer, result, name) === false) {
      return null;
    };
  }
  return console.log(`Congratulations, ${name}!`);
}

progression();