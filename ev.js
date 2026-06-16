'use strict';

// Parent Constructor
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Parent Methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Child Constructor
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Inheritance
EV.prototype = Object.create(Car.prototype);

// Child Methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;

  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`,
  );
};

// Test Data
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate(); // 140 km/h, 22%
tesla.accelerate(); // 160 km/h, 21%
tesla.brake(); // 155 km/h
tesla.chargeBattery(90);
tesla.accelerate(); // 175 km/h, 89%
