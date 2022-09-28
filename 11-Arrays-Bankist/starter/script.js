'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// Показать счет
const displayMovements = function (movements) {
  // Удалить содержимое HTML
  containerMovements.innerHTML = ``;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}👍</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// Общее количество денег
const clacDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} 👍`;
};
//Резюме всех сумм внизу
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements // сколько зашло денег
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;

  const out = acc.movements // сколько  вывелось
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements // invest
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};
// Name пользователей
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
    // console.log(acc.username);
  });
};
createUserNames(accounts);
// Update UI
const updateUI = function (acc) {
  // Дисплей движений MOVEMENTS
  displayMovements(acc.movements);
  // Дисплей баланса
  clacDisplayBalance(acc);
  // Дисплей резюме всех сум SUMMARY
  calcDisplaySummary(acc);
};
// EVENT LISTENER********* BTN TRANSFER******
let currentAccount;
btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault(); //предотвратить отправку формы
  // поиск логина
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // поиск пароля
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Дисплей приветствия
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100; //манипуляция со стилем
    // Display input fields
    inputLoginUsername.value = inputLoginPin.value = ``;

    inputLoginPin.blur();
    // Update UI CALL
    updateUI(currentAccount);
  }
  console.log(currentAccount);
  // console.log(`LOGIN`);
});
// LOAN BTN
btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add mmovements
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});
// CLOSE ACCOUNT
btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount?.pin === Number(inputClosePin.value)
  ) {
    // Удаляет индекс текущего аккаунтра
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // Delete account
    accounts.splice(index, 1);
    containerApp.style.opacity = 0; //скрыть контейнер
  }
  // Display input fields
  inputCloseUsername.value = inputClosePin.value = ``;
});

/////////////////////// ДЛЯ пониманияя.
// const user = 'Steven Thomas Williams'; // stw
//  УКОРОЧЕНАЯ ВЕРСИЯ
// const userName = user
//   .toLowerCase()
//   .split(` `)
//   .map(function (name) {
//     return name[0];
//   })
//   .join(``);
// console.log(userName);

// CONVERTING PIPELINE
// For converting EUR
// const eurToUsd = 1.1;
// const totalDepositsUSD = account1.movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map((mov, i, arr) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

btnTransfer.addEventListener(`click`, function (e) {
  // Что бы не было перезагрузки страницы
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ` `;

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // Doing to transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    console.log(`Valid`);

    // Update UI CALL
    updateUI(currentAccount);
  }
});

// const arr = [5000, 3400, [-150, -790], -3210, -1000, [8500, -30]];
// console.log(arr);

// const arr2 = arr.flat();
// console.log(arr2);

// const arr3 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .join(`-`);
// console.log(arr3);

const owners = [`jonas`, `Addam`, `Andrii`, `Serhii`];
console.log(owners.sort());
