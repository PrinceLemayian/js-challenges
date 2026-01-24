'use strict';


const calcAge = function(birthYear) {
    return 2026 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log `${firstName} retires in ${retirement} years`
        return retirement;
    } else {
        console.log`${firstName} is retired`;
        return -1;
    }

}

console.log(yearsUntilRetirement("1900", "Bob"));