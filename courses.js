// Parent Constructor
const Course = function (title, instructor) {
  this.title = title;
  this.instructor = instructor;
  this.students = 0;
  this.rating = 0;
};

// Prototype Methods
Course.prototype.enroll = function () {
  this.students++;
  return this; // chainable
};

Course.prototype.leave = function () {
  if (this.students > 0) this.students--;
  return this; // chainable
};

Course.prototype.rate = function (score) {
  this.rating = score;
  return this; // chainable
};

// Getter
Object.defineProperty(Course.prototype, 'details', {
  get() {
    return `${this.title} by ${this.instructor}
Students: ${this.students}
Rating: ${this.rating}`;
  },
});

// Static Method
Course.platformInfo = function () {
  console.log('Welcome to LearnHub!');
};

// Child Constructor
const PremiumCourse = function (title, instructor, price) {
  Course.call(this, title, instructor);
  this.price = price;
};

// Inheritance
PremiumCourse.prototype = Object.create(Course.prototype);

// Fix constructor property
PremiumCourse.prototype.constructor = PremiumCourse;

// Child Method
PremiumCourse.prototype.purchase = function () {
  console.log(`Purchased ${this.title} for $${this.price}`);
  return this; // chainable
};

// ====================
// Testing
// ====================

const premium = new PremiumCourse('JavaScript Mastery', 'Jonas', 49);

premium.purchase().enroll().enroll().rate(5);

console.log(premium.details);

Course.platformInfo();
