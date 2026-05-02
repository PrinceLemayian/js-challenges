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

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const calcAverageHumanAge = function (arr) {
  const humanAge = arr.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humanAge.filter(age => age > 18);
  const average =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  // Alternatively
  // const average1 = adultDogs.reduce((acc, age, i, arr) => acc + age / arr.length, 0,);

  return average;
};

const calcAvgHumanAge = arr =>
  arr
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
const average1 = calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average2 = calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
console.log(average1, average2);
