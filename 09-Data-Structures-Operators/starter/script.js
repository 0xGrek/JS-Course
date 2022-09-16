'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaranName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaranName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(open, close);

// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// const arrAll = [1, 2, ...other[(4, 5, 6)]];
// console.log(arrAll);

// const main = function (firstNUmberxs, x, ...numbers) {
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
// console.log(sum);
//   console.log(firstNUmberxs);
//   console.log(x);
//   console.log(...numbers);
// };

// main(2, 3, 4, 5, 6);
// main(22, 33, 44, 55);
// main(12, 9, 1);

// const x = [23, 5, 7];
// main(...x);
// console.log(x);
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2.
// const [gk, ...filedPlayers] = players1;
// console.log(gk, filedPlayers);

// 3.
// const allPlayers = [...players1, ...players2];
// console.log(...allPlayers);

//4.
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);

// 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2);

// 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// 7.
// team1 < team2 && console.log(`Team 1 win`);
// team1 > team2 && console.log(`Team 2 win`);
// console.log(
//   `${
//     (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
//   } is more likely to win`
// );

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// for (const day of weekdays) {
//   console.log(day);
//   const open = openingHours[day]?.open ?? `closed`;
//   console.log(`In ${day} we open at ${open}`);
// }

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);
// for (const [i, j] of menu.entries()) console.log(`${i + 1}: ${j}`);

// const users = [
//   {
//     name: `serhii`,
//     age: 22,
//   },
// ];
// console.log(users);

// const users = [
//   { name: 'my name', email: 'my email' },
//   { name: 'your name', email: 'your email' },
// ];

// console.log(users[1].name ?? 'put in more users');

// // example for different way to select the property in an object
// const obj = {
//   a: 5,
//   b: 8,
//   c: 7,
// };
// const aa = 'a';
// console.log(obj.a); // most common way
// console.log(obj['a']); // have to use string inside [ ]
// console.log(obj[aa]); // be able to use variable as property name

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const entries = Object.entries(openingHours)
// console.log(entries);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// ***********SET****************
// const orderSet = new Set([
//   `pasta`,
//   `moloko`,
//   `bread`,
//   `moloko`,
//   `tea`,
//   `bread`,
//   `tea`,
//   `pizza`,
// ]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has(`ff`));
// orderSet.add(`MAXIMUM`);
// orderSet.add(`MAXIMUM`);
// for (const order of orderSet) console.log(order);

// const staff = [
//   `Viola`,
//   `Anna`,
//   `Anna`,
//   `Anna`,
//   `eduardo`,
//   `Serhii`,
//   `Isabel`,
//   `Viola`,
//   `Anna`,
//   `Anna`,
//   `Anna`,
//   `eduardo`,
//   `Serhii`,
//   `Isabel`,
// ];
// const callStaff = new Set(staff);

// console.log(callStaff);

// **************MAPS***************
// const question = new Map([
//   [`questions`, `what is the bast pr language in the world?`],
//   [1, `c`],
//   [2, `Java`],
//   [3, `JS`],
//   [`correctttt`, 22],
//   [true, `Correct`],
//   [false, `try again`],
// ]);

// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answer ${key} : ${value}`);
// }

// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
// const answer = Number(prompt(`Your answer`));
// console.log(answer);
// const bull = prompt(`Your string`);

// console.log(question.get(question.get(`correctttt`) === answer));
// console.log(question.get(question.get(`true`) === bull));

// console.log(question.get);
// const airLine = `TAP AIR Portugral`;

// console.log(airLine.indexOf(`r`));
// console.log(airLine.lastIndexOf(`r`));
// console.log(airLine.indexOf(`Portugral`));

// console.log(airLine.slice(5, 10));

// console.log(airLine.slice(0, airLine.indexOf(` `)));
// console.log(airLine.slice(airLine.lastIndexOf(` `) + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1,));

// const check = function (seat) {
//   const s = seat.slice(-2);
//   if (s === `B` || s === `E`) console.log(`OK`);
//   else console.log(`NOT`);
// };

// check(`11232A`);
// check(`223232B`);
// check(`132332E`);
// const airLine = `TAP AIR Portugral`;
// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// const passanger = `SeRhIi`;
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// const random = 'OlEg SeRhiSoGdsfsfsspfS';
// const fix = function () {
//   const lowerCase = random.toLowerCase();
//   const text = lowerCase[0].toUpperCase() + lowerCase.slice(1);
//   console.log(text);
// };
// fix();

// const email = ` ivanneko.pt@gmail.com`;
// const badEmail = `Vsgseno.Pt@gmIal.com`;

// const lowerEmail = badEmail.toLowerCase().trim();

// const priceGB = `288,97$`;
// const priceUS = priceGB.replace(`$`, `@`).replace(`,`, `.`);
// console.log(priceGB);
// console.log(priceUS);
// const send = `all people who have all bitcoin all`;

// console.log(send.replace(/all/g, `1`));
// const [fistName, lastName] = `Serhii Ivanenko`.split(` `);
// // console.log(fistName, lastName);
// let text = 'How are you doing today?';
// const myArray = text.slice('-3, 3');
// // const myArray = text.split(' ', 3);
// let word = myArray[0];
// console.log(myArray);
// console.log(word);
// FUNCTION
// const calc = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];
//   console.log();
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(` `));
// };
// calc(`serhii adnrii and violetta go to the football`);

// const maskCreditCard = function (number) {
//   const str = number + ``;
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);
// };

// console.log(maskCreditCard(2342424234224234));
// console.log(maskCreditCard(`2342424234202111`));
