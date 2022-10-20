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
// console.log(bmw, merc);
bmw.accelerate();
merc.break();

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
// ford.speedUS = 50;
// console.log(ford);
// ford.accelerate();
// ford.break();
console.log(ford);

// #3
const carNormal = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
carNormal.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

carNormal.prototype.break = function () {
  this.speed -= 10;
  this.charge -= 0.5;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const carElectro = function (make, speed, charge) {
  carNormal.call(this, make, speed);
  this.charge = charge;
};
// Link the prototypes
carElectro.prototype = Object.create(carNormal.prototype);

carElectro.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// carElectro.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// };

const tesla = new carElectro(`tesla`, 100, 20);
// console.log(tesla);
// tesla.chargeBattery(20);
// tesla.break();
// tesla.accelerate();
// tesla.accelerate();
// console.log(tesla);
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
// class presonCl {
//   constructor(fullName, bithYear) {
//     this.fullName = fullName;
//     this.bithYear = bithYear;
//   }
//   //   Instance method
//   //   Methods will be added to prototype propetry
//   calcAge1() {
//     // console.log(2022 - this.bithYear);
//   }
//   greet() {
//     // console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2022 - this.bithYear;
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hey() {
//     console.log(`Hey there 🐱‍👤`);
//     console.log(this);
//   }
// }
// const serhii1 = new presonCl(`Serhii Ivanenko`, 1999);
// console.log(serhii1.age);
// serhii1.calcAge1();
// serhii1.greet();
// presonCl.hey();

// 214
// const walter = new presonCl(`Walter dd`, 1992);
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

// const steven = Object.create(personProto);
// console.log(steven);
// steven.name = `Steven`;
// steven.bithYear = 2001;
// steven.calcAge();
// console.log(steven.__proto__ == personProto);
// // the better way

// sarah.init(`Sarah`, 1945);
// sarah.calcAge();
const sarah = Object.create(personProto);
// 218 Inharitance between "Clasess": Constructor Function

const PersonOne = function (firstName, bithYear) {
  this.firstName = firstName;
  this.bithYear = bithYear;
};
PersonOne.prototype.calcAge = function () {
  console.log(2022 - this.bithYear);
};

const Student = function (firstName, bithYear, course) {
  PersonOne.call(this, firstName, bithYear);
  this.course = course;
};
//Important/ linking prototypes
Student.prototype = Object.create(PersonOne.prototype);

Student.prototype.introduce = function () {
  console.log(`My name ${this.firstName} and I study ${this.course}`);
};

const mike = new Student(`Mike`, 1999, `Computer Sciense`);
mike.introduce();
mike.calcAge();

// console.log(Student.prototype.constructor);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// console.log(mike instanceof Student);
// console.log(mike instanceof PersonOne);
console.log(mike instanceof Object);
// 220 Inheritanse between classes
class SudentCl extends PersonOne {
  constructor(fullName, bithYear, course) {
    // Always need to happan first!
    super(fullName, bithYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`1'm ${2022 - this.bithYear} years old, but i student`);
  }
}

// const marta = new SudentCl(`Marta`, 2001, `Dota2`);
// marta.introduce();
// marta.calcAge();
// 221 Inhetiranse beetween classes: obg.create
const PersonProto1 = {
  calcAge() {
    console.log(2022 - this.bithYear);
  },

  init(firstName, bithYear) {
    this.firstName = firstName;
    this.bithYear = bithYear;
  },
};

const StudentProto = Object.create(PersonProto1);

StudentProto.init = function (firstName, bithYear, course) {
  PersonProto1.init.call(this, firstName, bithYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init(`Jay`, 2010, `IT`);
jay.introduce();
jay.calcAge();
// 222 Another
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // protected propetry
    this._movements = [];
    this.locale = navigator.language;

    console.log(`thnks for opening an account ${owner}`);
  }
  //   Public interface
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan aproved`);
    }
  }
}
const acc1 = new Account(`Jonas`, `EUR`, 1111);
console.log(acc1);

acc1.requestLoan(999);
acc1.approveLoan();
// bad practic
acc1._movements.push(250);
acc1._movements.push(-150);
acc1.deposit(250);
acc1.withdraw(140);

//223 Encpsulation
