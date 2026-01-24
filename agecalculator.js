'use strict';


// FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2026 - birthYear;
}

const age1 = calcAge1(2007);

// FUNCTION EXPRESSION
// Anonymous function - A function without a name

const calcAge2 = function (yearOfBirth) {
    return 2026 - yearOfBirth;
}

const age2 = calcAge2(2007);

console.log(age1, age2)

// function declarations can be called before they are initialized but function expressions cannot


// Arrow Function

const calcAge3 = yob => 2026 - yob;
const age3 = calcAge3(2007);
console.log(age3)