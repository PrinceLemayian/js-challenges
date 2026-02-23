const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // filling types array (1)
    // types[i] = typeof jonas[i];

    // filling types array (2)
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break

console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

// LOOPING BACKWARDS

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// LOOPING INSIDE A LOOP

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
};
