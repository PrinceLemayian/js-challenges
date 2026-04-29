'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaNew = dogsJulia.slice(1, -2);
  const mixedArr = juliaNew.concat(dogsKate);

  mixedArr.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is a adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
