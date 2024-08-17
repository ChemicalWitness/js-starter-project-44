#!/usr/bin/env node
// import calc from './brain-calc.js';
// import checkEvenNumber from './brain-even.js';
import askName from '../src/cli.js';
import calc from './brain-calc.js';
// const playGame = () => {
//   // checkEvenNumber();
//   calc();
// };

askName();
calc();

// playGame();
// const name = askName();
