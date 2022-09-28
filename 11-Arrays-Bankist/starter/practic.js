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
// //////////// FILTER
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawal = movements.filter(function (price) {
//   return price < 0;
// });
// console.log(withdrawal);

// const withdrawalTo = [];
// for (const ppris of movements) if (ppris < 0) withdrawalTo.push(ppris);
// console.log(withdrawalTo);
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

///////////////// ОТРАБОТКА МАССИВОВ
// 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// // *** REDUCE ***
// const bankDepSum = accounts.reduce((acc, cur) => {
//   return (acc += cur.movements.reduce((acc, cur) => {
//     return cur > 0 ? (acc += cur) : acc;
//   }, 0));
// }, 0);
// console.log(bankDepSum, bankDepositSum);
// *******************
// 2.
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// //   .filter(mov => mov >= 1000).length;
// console.log(numDeposit1000);
// // *** REDUCE ***
// const numDep1000 = accounts.reduce((acc, cur) => {
//   return (acc += cur.movements.reduce((count, cur) => {
//     return cur >= 1000 ? ++count : count;
//   }, 0));
// }, 0);
// console.log(numDep1000);
// *******************
// 3.
const summ = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? `deposits` : `withdrawal`] += cur;
      return sums;
    },
    // помогает во многих ситуациях
    { deposits: 0, withdrawal: 0 }
  );
// *** REDUCE ***
// const summ1 = accounts.reduce(
//   (sums, cur) => {
//     cur.movements.reduce((acc, v) => {
//       sums[v > 0 ? 'deposits' : 'withdrawals'] += v;
//     }, 0);
//     return sums;
//   },
//   { deposits: 0, withdrawals: 0 }
// );
// console.log(summ, summ1);
// *******************
// Another method******* для понимания
// const { deposits, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur >= 0 ? (sums.deposits += cur) : (sums.withdrawal += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );
// console.log(deposits, withdrawal);

// 4. CONVERTING FUNCTION
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    // Новый масив с болшоай буквой
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(` `);

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// 5. CODDING CHALENGE
