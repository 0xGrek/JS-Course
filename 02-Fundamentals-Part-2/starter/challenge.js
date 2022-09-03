// Coding Challenge #1
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDelphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 97);
// console.log (scoreDelphins);
// console.log (scoreKoalas);

// const checkWinner = function(avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`team Delphins win (${avgDolhins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`team Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     } else {
//         console.log(`No winner`);
//     }
// }
// checkWinner(scoreDelphins,scoreKoalas);
// // Test 2 
// scoreDelphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDelphins,scoreKoalas);



// const checkWinner = (avgDolhins, avgKoalas) => {
//     const win1 = avgDolhins >= 2 * avgKoalas;
//     const win2 = avgKoalas >= 2 * avgKoalas;
//     if (win1) {
//         console.log(`team Delphins win (${avgDolhins} vs ${avgKoalas})`);
//     } else if (win2) {
//         console.log(`team Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     } else {
//         console.log(`No winner`)
//         return win1, win2;
//     }
// }
// const team1 = calcAverage(44, 23, 7);
// const team2 = calcAverage(85, 54, 41);
// console.log(team1);
// console.log(team2);


// Coding Challenge #2

// function calcTip(bill) {
//    return bill <= 300 && bill >= 15 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [10, 200, 350];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const all =  [calcTip(bills[0]) + bills[0], calcTip(bills[1])+ bills[1], calcTip(bills[2]) + bills[2]];

// console.log(bills, tips, all);

const friends = {
    firstName: 'Oleg',
    job: 'IT',
    parents: ['mother', 'phather', 'brother'],
    age: 20,
    animals: 'dog'
}
console.log(`Name my boy  is ${friends.firstName}, he has work in ${[friends.job + ' '+friends.animals]}, and now him ${friends.parents[2]} speaking with me about my ${friends.age} ears old.`);
