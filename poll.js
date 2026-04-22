'use strict';

const btn = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let choice = Number(
      prompt(
        `What is your favourite programming language? \n ${this.options.join('\n')} \n (Write option number)`,
      ),
    );

    if (!isNaN(choice) && choice >= 0 && choice < this.answers.length) {
      this.answers[choice]++;
    } else {
      console.log('Please choose a valid option.');
    }

    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

btn.addEventListener('click', poll.registerNewAnswer.bind(poll));
