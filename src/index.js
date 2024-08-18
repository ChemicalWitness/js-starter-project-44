import readlineSync from 'readline-sync';

export const getRandomNum = () => {
  let num = 0;
  num = Math.floor(Math.random() * 100);
  return num;
};

export const getQuestion = (type) => {
  if (type === 'evenGame') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (type === 'calcGame') {
    console.log('What is the result of the expression?');
  } else if (type === 'gcdGame') {
    console.log('Find the greatest common divisor of given numbers.');
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
  }
  return answer;
};

export const compareResult = (answer, result, name) => {
  if (+answer === +result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
