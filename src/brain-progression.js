import {
  getRandomNum,
  gameEngine,
} from './index.js';

const game = 'What number is missing in the progression?';

const getProgression = (length, step, start) => {
  const progressionArray = [];
  for (let i = 0; i < length; i += 1) {
    const value = start + (step * i);
    progressionArray.push(value);
  }
  return progressionArray;
};

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomNum(5, 15);
  const progressionIndex = getRandomNum(0, progressionLength - 1);
  const progressionStep = getRandomNum(1, 5);
  const progressionStart = getRandomNum();
  const progressionArray = getProgression(progressionLength, progressionStep, progressionStart);
  const answer = progressionArray[progressionIndex];
  progressionArray[progressionIndex] = '..';
  const question = progressionArray.join(' ');

  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
