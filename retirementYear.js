'use strict';

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2026 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

const years1 = yearsUntilRetirement(2007, 'Lemayian');
const years2 = yearsUntilRetirement(1970, 'Bob');
console.log(years1, years2);
