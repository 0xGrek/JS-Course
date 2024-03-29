'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-01-05T17:01:17.194Z',
    '2020-01-02T23:00:17.929Z',
    '2020-01-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
let currentAccount, timer;

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);
  // console.log(date);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/ ${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
// display euro ISO standart
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};
// timer
const startLogOutTimer = function () {
  //set time to 5 minutes
  let time = 600;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //  in ieach call, print the reamining time to UI
    labelTimer.textContent = `${min}: ${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log it to get started`;
      containerApp.style.opacity = 0;
    }
    // decrease 1s
    time = time - 1;
  };
  // call timmer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // sprting
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // display date
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    // display euro ISO standart
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // баланс в  ISO валюте
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers

// FAKE ASLWAYSLOGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// Experement with API
// const now = new Date();
// const options = {
//   hour: `numeric`,
//   minute: `numeric`,
//   day: `numeric`,
//   month: `long`,
//   year: `numeric`,
//   weekday: `long`,
// };

// наше местоположение
// const locale = currentAccount.locale;
// //day month year
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // current date and time
    const now = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `long`,
      year: `numeric`,
      // weekday: `long`,
    };
    //  change language according country locale
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // start LOGOUT timer  и запуск таймреа снова при входе в другой аккаунт
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // resset timer
    clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // таймер как в банке, когда берешь кредит
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      // add transer date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      // resset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 1500);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);
    // cahange welcome
    labelWelcome.textContent = `Log it to get started`;

    // Hide UI

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// let amount = 0.0000000005;
// console.log(amount);

// console.log(Number.parseInt(`22f2oo443`, 10));
// console.log(Number.parseInt(`2.2324.2.g345o2o`, 10));
// console.log(Number.parseFloat(`2.2834rem`, 10));
// console.log(Number.parseInt(`2.28rem`, 10));

// console.log(Number.isNaN(+`k`));
// console.log(Number.isFinite(+`20`));

// console.log(Math.sqrt(9));
// console.log(9 ** (1 / 2));
// Min and max between integer
// const rendomInd = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(rendomInd(20, 10));

// ROUNDING integer
// console.log(Math.ceil(21.2));
// console.log(Math.ceil(21.7));
// console.log(`-----`);
// console.log(Math.trunc(21.2));
// console.log(Math.trunc(-21.7));
// console.log(`-----`);
// console.log(Math.floor(21.2));
// console.log(Math.floor(-21.7));

// // DECIMALS
// console.log((2.9).toFixed(0));
// console.log((2.7).toFixed(2));
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// labelBalance.addEventListener(`click`, function () {
//   [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = `orangered`;
//   });
// });

// console.log(+`999`);
// WIRKING WITH DATES ***************************************88
// const now = new Date();
// console.log(new Date(account1.movementsDates[0]));
// console.log(account1);
// const now = Date.now();
// console.log(now);

// console.log(new Date(1665169900091));

// 177 op witth DATES
// const future = new Date(2022, 10, 10, 43, 11);
// console.log(+future);
// // CONVERTATOR DATA FORM SEC To Day
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(
//   new Date(2022, 1, 10, 43, 11),
//   new Date(2021, 1, 10, 43, 11)
// );
// console.log(days1);
// 179
// const num = 22832299;
// const options1 = {
//   style: `currency`,
//   unit: `mile-per-hour`,
//   currency: `EUR`,
//   useGrouping: false,
// };

// console.log(new Intl.NumberFormat(`en-US`, options1).format(num));
// console.log(new Intl.NumberFormat(`pt-PT`, options1).format(num));
// console.log(new Intl.NumberFormat(`ar-Sy`, options1).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num)
// );
// 180
// const indgredients = [`olivves`, `jjj`];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   ...indgredients
// );
// console.log();
// console.log(`waiting`);

// if (indgredients.includes(`spinach`)) clearTimeout(pizzaTimer);
//  Again repeat;
// setInterval(function () {
//   const date = new Date();
//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const sec = date.getSeconds();
//   console.log(`${hour}:${minute}:${sec} H:M:S`);
// }, 1000);
// setInterval(() => {
//   console.log(
//     new Intl.DateTimeFormat(navigator.language, {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//     }).format(new Date())
//   );
// }, 1000);

// setInterval(() => {
//   console.log(
//     new Intl.DateTimeFormat(navigator.locale, {
//       // hour: `numeric`,
//       // minute: `numeric`,
//       // second: `numeric`,
//       timeStyle: `long`,
//     }).format(new Date())
//   );
// }, 1000);

console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));
