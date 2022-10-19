'use strict';
console.log(`//////////////CODING`);
// #1
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
car.prototype.accelerate = function () {
  this.speed += 10;
  //   console.log(`${this.make} is going at ${this.speed} km/h `);
};
car.prototype.break = function () {
  this.speed -= 5;
  //   console.log(`${this.make} is going at ${this.speed} km/h `);
};
const bmw = new car(`BMW`, 120);
const merc = new car(`Mercedes`, 95);
bmw.accelerate();
merc.break();
// console.log(bmw, merc);
// #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h `);
  };
  break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h `);
  };
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl(`Ford`, 120);
ford.speedUS = 50;
console.log(ford);
ford.accelerate();
ford.break();
console.log(ford);

console.log(`//////////////PRACTIC`);
//208 Constructor functions
const Person = function (firstName, bithYear) {
  // instance propetries
  this.firstName = firstName;
  this.bithYear = bithYear;
  // Never do this
  //   this.clacAge = function() {
  //     console.log(2022 = this.bithYear);
  //   }
};
// // 1. new () is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. func automaticly return {}
const serhii = new Person(`Serhii`, 1999);

Person.hey = function () {
  //   console.log(`Hey there 🐱‍👤`);
  //   console.log(this);
};
Person.hey();
// // 209 Prototypes
// // console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.bithYear);
};

// jonas.calcAge();
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = `Homo sapiens`;
// // console.log(jonas.species, viola.species);
// console.log(jonas.hasOwnProperty(`firstName`));
// console.log(jonas.hasOwnProperty(`spacies`));
// 211
// Obj.prtotype  top of chain
// console.log(jonas.__proto__);
// // console.log(jonas.__proto.__proto__);

// const arr = [3, 4, 3, 4, 4, 8, 8]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.uniq = function () {
//   return [...new Set(this)];
// };
// console.log(arr.uniq());

// const h1 = document.querySelector(`h1`);
// console.dir(h1);

// 213
// expresions****
// const presonCl = class {};

// declaration
class presonCl {
  constructor(fullName, bithYear) {
    this.fullName = fullName;
    this.bithYear = bithYear;
  }
  //   Instance method
  //   Methods will be added to prototype propetry
  calcAge1() {
    // console.log(2022 - this.bithYear);
  }
  greet() {
    // console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2022 - this.bithYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log(`Hey there 🐱‍👤`);
    console.log(this);
  }
}
const serhii1 = new presonCl(`Serhii Ivanenko`, 1999);
console.log(serhii1.age);
serhii1.calcAge1();
serhii1.greet();
presonCl.hey();

// 214
const walter = new presonCl(`Walter dd`, 1992);
const account = {
  owner: `Serhii`,
  movnents: [200, 500, 200, 1200],
  get latest() {
    return this.movnents.slice(-1).pop();
  },
  set latest(mov) {
    this.movnents.push(mov);
  },
};
account.latest = 999;
console.log(account.latest);
console.log(account.movnents);
// 216 Obj create
const personProto = {
  calcAge() {
    console.log(2022 - this.bithYear);
  },

  init(firstName, bithYear) {
    this.firstName = firstName;
    this.bithYear = bithYear;
  },
};

const steven = Object.create(personProto);
console.log(steven);
steven.name = `Steven`;
steven.bithYear = 2001;
steven.calcAge();
console.log(steven.__proto__ == personProto);
// the better way
const sarah = Object.create(personProto);
sarah.init(`Sarah`, 1945);
sarah.calcAge();
