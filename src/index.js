import readlineSync from 'readline-sync';

export const getRandomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getQuestion = (type) => {
  if (type === 'evenGame') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (type === 'calcGame') {
    console.log('What is the result of the expression?');
  } else if (type === 'gcdGame') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (type === 'progressionGame') {
    console.log('What number is missing in the progression?');
  } else if (type === 'primeGame') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
};

export const getAnswer = (num, type, ...arg) => {
  let answer;
  if (type === 'evenGame') {
    answer = readlineSync.question(`Question: ${num} `);
    console.log(`Your answer: ${answer}`);
  } else if (type === 'calcGame') {
    answer = readlineSync.question(`Question: ${num} ${arg[0]} ${arg[1]} `);
    console.log(`Your answer: ${answer}`);
  } else if (type === 'gcdGame') {
    answer = readlineSync.question(`Question: ${num} ${arg[0]} `);
    console.log(`Your answer: ${answer}`);
  } else if (type === 'progressionGame') {
    answer = readlineSync.question(`Question: ${num} `);
    console.log(`Your answer: ${answer}`);
  } else if (type === 'primeGame') {
    answer = readlineSync.question(`Question: ${num} `);
    console.log(`Your answer: ${answer}`);
  }
  return answer;
};

export const compareResult = (answer, result, name) => {
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
