import askName from './cli.js';
import { getRandomNum, getAnswer, getQuestion, compareResult } from './index.js';

const name = askName();

const getProgression = (length, step, start) => {
  const progressionArray = [];
  for (let i = 0; i < length; i += 1) {
    const value = start + (step * i);
    progressionArray.push(value);
  }
  return progressionArray;
};

export default () => {
  getQuestion('progressionGame');
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandomNum(5, 15);
    const progressionIndex = getRandomNum(0, progressionLength - 1);
    const progressionStep = getRandomNum(1, 5);
    const progressionStart = getRandomNum();
    const progressionArray = getProgression(progressionLength, progressionStep, progressionStart);
    const result = progressionArray[progressionIndex];
    progressionArray[progressionIndex] = '..';

    const answer = getAnswer(progressionArray.join(' '), 'progressionGame');
    if (compareResult(answer, result.toString(), name) === false) {
      return null;
    };
  }
  return console.log(`Congratulations, ${name}!`);
}