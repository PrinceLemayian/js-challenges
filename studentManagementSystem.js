// ========================================
// STUDENT MANAGEMENT SYSTEM
// ========================================

// Array of student objects
let students = [
  {
    id: 1,
    name: 'Alice',
    age: 20,
    marks: [80, 90, 85],
  },
  {
    id: 2,
    name: 'Bob',
    age: 19,
    marks: [70, 65, 75],
  },
];

// ------------------------------
// Functions
// ------------------------------

function addStudent(name, age) {
  const student = {
    id: students.length + 1,
    name,
    age,
    marks: [],
  };

  students.push(student);
  console.log(`${name} added.`);
}

function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
  console.log(`Student ${id} deleted.`);
}

function addMark(id, mark) {
  const student = students.find(student => student.id === id);

  if (student) {
    student.marks.push(mark);
    console.log(`Added ${mark} to ${student.name}`);
  } else {
    console.log('Student not found.');
  }
}

function showStudents() {
  console.log('\nStudents:');
  students.forEach(student => {
    console.log(student);
  });
}

// ------------------------------
// Arrow Function
// ------------------------------

const average = marks =>
  marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

// ------------------------------
// Array Methods
// ------------------------------

function showAverages() {
  console.log('\nAverage Marks');

  students.forEach(student => {
    if (student.marks.length > 0) {
      console.log(`${student.name}: ${average(student.marks).toFixed(2)}`);
    }
  });
}

function topStudent() {
  const sorted = [...students].sort(
    (a, b) => average(b.marks) - average(a.marks),
  );

  console.log('\nTop Student:');
  console.log(sorted[0].name);
}

// ------------------------------
// Destructuring
// ------------------------------

const { name, age } = students[0];

console.log('First Student:');
console.log(name, age);

// ------------------------------
// Spread Operator
// ------------------------------

const copy = [...students];
console.log('\nCopied array:');
console.log(copy);

// ------------------------------
// Rest Parameters
// ------------------------------

function total(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log('\nRest Parameter:');
console.log(total(10, 20, 30));

// ------------------------------
// Default Parameter
// ------------------------------

function greet(student = 'Guest') {
  console.log(`Hello ${student}!`);
}

greet();
greet('Prince');

// ------------------------------
// Closure
// ------------------------------

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log('Counter:', count);
  };
}

const increment = counter();

increment();
increment();
increment();

// ------------------------------
// Callback
// ------------------------------

function processStudent(student, callback) {
  callback(student);
}

processStudent(students[0], student => {
  console.log('\nCallback:');
  console.log(student.name);
});

// ------------------------------
// Promise
// ------------------------------

function wait(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

// ------------------------------
// Async / Await
// ------------------------------

async function loadUsers() {
  try {
    console.log('\nLoading users...');

    await wait(2);

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) throw new Error('Network error');

    const users = await response.json();

    console.log('\nUsers from API:');

    users.slice(0, 5).forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.log(error.message);
  }
}

// ------------------------------
// Main Program
// ------------------------------

showStudents();

addStudent('Prince', 19);

addMark(3, 95);
addMark(3, 90);
addMark(3, 88);

showStudents();

showAverages();

topStudent();

deleteStudent(2);

showStudents();

loadUsers();
