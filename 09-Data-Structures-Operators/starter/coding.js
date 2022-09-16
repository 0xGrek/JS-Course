'use strict';

// const game = {

//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
// }
//  ******************

// const scores = {
//     namePlayers: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
// }

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   console.log(scorers);
// }

// const myArray = ['a', 'b', 'c', 'd', 'e', 'b', 'c', 'b'];
// const myCharCount = {};

// for (const char of myArray) {
//   myCharCount[char] ? myCharCount[char]++ : (myCharCount[char] = 1);
//   console.log(myCharCount)
// }
// console.log('Final obj:', myCharCount)   //{ a: 1, b: 3, c: 2, d: 1, e: 1 }

// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 1.
// const total = game.scored;
// const avarageOdd = game.odds;
// console.log(total);
// console.log(avarageOdd);

// for (const [i, player] of total.entries())   {
//     console.log(`Goal ${[i + 1] } : ${[player]}`);
// }
// 2.
// const odds = Object.values(game.odds);
// let avarage = 0 ;
// for (const odd of  odds)
//     avarage = avarage + odd;
//     avarage = avarage / odds.length;
// console.log(avarage)
// 3.

// for (const [team, odd] of Object.entries(game.odds)){
//     const strVictory = team === `x` ? `drow` : `victory ${game[team]}`
//     console.log(`Odd of ${strVictory} : ${odd}`);
//     // console.log(team,odd);
// }

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// ///////////////////////

//////////////////////
// // 2.
// const [gk, ...filedPlayers] = players1;
// console.log(gk, filedPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(...allPlayers);

// // 4.
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);

// // 5.
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log(`Team 1 win`);
// team1 > team2 && console.log(`Team 2 win`);
// console.log(
//   `${
//     (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
//   } is more likely to win`
// );

// *********************3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);
// 1.
// const events = new Set(gameEvents.keys());
// console.log(events);
// // const events1 = [...new Set(gameEvents.values())];
// // console.log(events1);
// 2.
// events.delete(64);
// console.log(events);
// 3.
// const events = [...new Set(gameEvents.keys())];
// console.log(events);
// console.log(`An event happened , every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened , every ${time / gameEvents.size} minutes`);
// 4.
// for (const [minut, event] of gameEvents) {
// let half = minut <= 45 ? `FiRST` : `SECOND`;
//   console.log(`[${half} HALF] : ${minut}, ${event}`);
// }
//  ***********************************4
// const departure = function (name) {
//   const names = name.split(` `);
//   const bigCase = [];
//   for (const n of names) {
//     console.log(names);
//   }
// };
// console.log();

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);

  for (const row of rows) {
    const [firstName, secondName] = row.toLowerCase().trim().split(`_`);
    const correctName = `${firstName}${secondName.replace(
      secondName[0],
      secondName[0].toUpperCase()
    )}`;
    console.log(correctName);
    // console.log(firstName, secondName, row);
  }

  console.log(rows);
  console.log(text);
});
// console.log(logo);
// console.log(upperLogo);
// console.log(upLogo);
// console.log(lowLogo);

// currentText(`delayed_departure`);
//1. delayed_departure
// const [firstName, secondName] = `delayed_departure`.split(`_`);
// const newName = [firstName, secondName[0].toUpperCase() + secondName.slice(1)];
// console.log(newName.join(``));
// 2. calculate_AGE
// const [firstName, secondName] = `calculate_AGE`.split(`_`);
// const newName = firstName + secondName.toUpperCase();
// const lastName = secondName[0].toLowerCase();

// console.log(lastName);
// console.log(newName);
// console.log(firstName, secondName);

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
//
