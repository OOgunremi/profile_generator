// the link below was used as a guide to develop code: https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const question0 = 'What\'s your name? Nicknames are also acceptable! 😉';
const question1 = 'What\'s an activity you like doing?';
const question2 = 'What do you listen to while doing that?';
const question3 = 'Which meal is your favourite (eg: dinner, brunch, etc.)';
const question4 = 'What\'s your favourite thing to eat for that meal?';
const question5 = 'Which sport is your absolute favourite?';
const question6 = 'What is your superpower? In a few words, tell us what you are amazing at!';

const questions = [question0, question1, question2, question3, question4, question5, question6];
let answers = '';

const askingQuestions = q => {
  if (q < questions.length) {
    rl.question(questions[q], (response) => {
      answers += '\n' + response;
      askingQuestions(q + 1);
    });
  } else {
    console.log(`Thank you for your response. ${answers}`);
    rl.close();
  }
};
askingQuestions(0);