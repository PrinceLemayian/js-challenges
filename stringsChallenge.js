'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const words = text.split('\n');
  for (const [i, word] of words.entries()) {
    console.log(caseConverter(word).padEnd(20), '✅'.repeat(i + 1));
  }
});

const caseConverter = function (varName) {
  const str = varName.trim().toLowerCase().split('_');
  const [first, second] = str;
  return first + second[0].toUpperCase() + second.slice(1);
};
