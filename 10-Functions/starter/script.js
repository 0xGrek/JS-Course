'use strict';

// Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '_').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join('-');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log(`odf`);
// };
// document.body.addEventListener(`click`, high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Serhii`);
// greeterHey(`Anrdii`);

// const greet = greeting => name => secondName =>
//   console.log(`${greeting} ${name} ${secondName}`);

// const greetHey = greet(`OLA`);
// greetHey(`228`)(`sdfs`);
// greetHey(`322`);

// // CALL METHOD
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flighNum, name) {
//     console.log(
//       `${name}, booked a seat on ${this.airline} flight ${this.iataCode} ${flighNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flighNum}, ${name}` });
//   },
// };

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };
// const book = lufthansa.book;

// // APPLY METHOD
// const flightData = [111, `SASKI`];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// // instead APPLY
// book.call(eurowings, ...flightData);

// // const bookEW = book.bind(eurowings);
// // bookEW(`PETRO`, 22);

// // bookEW(111, `Oleg Ivanenko`);

// // const bookEW23 = book.bind(eurowings, 333);
// // bookEW23(`Violeta`);
// // bookEW23(`Vika`);

// // eurowings.planes = 300;
// // eurowings.buyPlane = function () {
// //   console.log(this);
// //   this.planes++;
// //   console  log(this.planes);
// // };

// // document
// //   .querySelector('.buy')
// //   .addEventListener(`click`, eurowings.buyPlane.bind(eurowings));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const addTaxFunc = function (rate) {
//   return function (value, score) {
//     return value + score * rate;
//   };
// };

// const final = addTaxFunc(2);
// console.log(final(100, 13));
// function isOdd(number) {
//   return number % 2 != 0;
// }

// function filter(numbers, fn) {
//   let results = [];
//   for (const number of numbers) {
//     if (fn(number)) {
//       results.push(number);
//     }
//   }
//   return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(numbers, isOdd));
// Functions Accepting Callback Functions

// ///////////////////////////////////////
// // РАЗНИЦА МЕЖДУ МЕТОДАМИ!
// // The call and apply Methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // Call method
// book.call(eurowings, 111, 'Sarah Williams');
// // console.log(eurowings);

// book.call(lufthansa, 222, 'Mary Cooper');
// // console.log(lufthansa);

// // The bind Method
// const bookEW23 = book.bind(eurowings, 999);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');
