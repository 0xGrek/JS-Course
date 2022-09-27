/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(`-----------FOr----------`);
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });
// let users = [
//   { id: 1, login: 'admin', comments: [{ id: 1, text: 'Cool!' }] },
//   { id: 2, login: 'js-ninja', comments: [] },
//   { id: 3, login: 'user', comments: [] },
// ];

// users.forEach(function (user, index, arr) {
//   console.log('login=', user.id);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// });

// const newCurrencies = new Set([
//   'USD',
//   'EUR',
//   'GBP',
//   'USD',
//   'EUR',
//   'GBP',
//   'USD',
//   'EUR',
//   'GBP',
// ]);

// newCurrencies.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
//   console.log(map);
// });
// console.log(newCurrencies);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// EXPRESION
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;

// ARROW
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// ДЛИННАЯ ФОР ИЧ
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });

//  УКОРОЧЕНАЯ ВЕРСИЯ
// const movementsDescr = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescr);
