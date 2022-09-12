'use strict';

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jonas';
// let jop = 'teacher';
// const year = 1999;
// console.log(addDecl(2, 3));
// console.log(addExp);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExp = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;
// // Example
// console.log(!numProducts);
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z);

// console.log(this);

const serhii = {
  firstName: `Serhii`,
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1990 && self.year <= 2000);

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1990 && this.year <= 2000);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hay ${this.firstName}`);
  },
};

serhii.greet();
serhii.calcAge();
