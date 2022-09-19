'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// #1
// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];

// 2.
// const [gk, ...filedPlayers] = players1;

// // 3.
// const allPlayers = [...game.players[0], ...game.players[1]];

// // 4.
// const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //  5.
// const { team1, x: draw, team2 } = game.odds;

// 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// 7.
// team1 < team2 && console.log(`${game.team1} more likely to win`);
// team1 > team2 && console.log(`${game.team2} more likely to win`);

// #2
// 1.
// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${name}`);
// }

// 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
//   average /= odds.length;
// }
// console.log(average);
// 3.
// const finalOdds = Object.entries(game.odds);
// for (const [team, cof] of finalOdds) {
//   console.log(team, cof);
//   console.log(x === `draw` ? `Odd of victory ${game.team1}: ${cof} : Odd of victory ${game.team2}: ${cof})`;
// }
// console.log(finalOdds);
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// 4.

// for (const [team, cof] of Object.entries(game.odds)) {
//   let firstParts = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   //   console.log(firstParts);
//   console.log(`Odd of ${firstParts} : ${cof}`);
// }

// console.log(finalScore);

// #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// 2.
// gameEvents.delete(80);
// console.log(gameEvents);
// 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );
// 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// #4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener(`click`, function () {
//   const text = document.querySelector(`textarea`).value;
//   const rows = text.split(`\n`);

//   for (const row of rows) {
//     const [firstName, secondName] = row.toLowerCase().trim().split(`_`);
//     const correctName = `${firstName}${secondName.replace(
//       secondName[0],
//       secondName[0].toUpperCase()
//     )}`;
//     console.log(correctName);
//     // console.log(firstName, secondName, row);
//   }
// });

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// NEW
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split(`+`));
// const getCode = str => slice(0, 3).toUpperCase();

// for (const flight of flights.split(`+`)) {
//   const [type, from, to, time] = flight.split(`;`);
//   const output = `${type.startsWith(`_Delayed`) ? `🔴` : ` `}${type.replaceAll(
//     `_`,
//     ` `
//   )} ${from.slice(0, 3).toUpperCase()} ${to
//     .slice(0, 3)
//     .toUpperCase()} ${time.replace(`:`, `h`)}`.padStart(36, `-`);
//   console.log(output);
// }
