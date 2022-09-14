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

const weekdays = ['mon', 'tue', '3', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours.mon?.open);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);
// for (const [i, j] of menu.entries()) console.log(`${i + 1}: ${j}`);
