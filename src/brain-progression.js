import gameEngine from './index.js';
import getRandomNum from './utils.js';

const game = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionArray = [];
  const progressionStep = getRandomNum(1, 5);
  const progressionStart = getRandomNum();
  const progressionLength = getRandomNum(5, 15);
  for (let i = 0; i < progressionLength; i += 1) {
    const value = progressionStart + (progressionStep * i);
    progressionArray.push(value);
  }
  return progressionArray;
};

const getQuestionAndAnswer = () => {
  const progressionArray = getProgression();
  const progressionIndex = getRandomNum(0, progressionArray.length - 1);
  const answer = progressionArray[progressionIndex];
  progressionArray[progressionIndex] = '..';
  const question = progressionArray.join(' ');

  return [question, answer];
};

export default () => {
  gameEngine(game, getQuestionAndAnswer);
};
