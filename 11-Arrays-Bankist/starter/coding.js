// 'use strict';

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrect = dogsJulia.slice();
//   dogsJuliaCorrect.splice(0, 1);
//   dogsJuliaCorrect.splice(-2);

//   const allCorrect = [...dogsJuliaCorrect, ...dogsKate];
//   allCorrect.forEach(function (age, i, arr) {
//     const text = age >= 3 ? `adult` : `puppy`;
//     if (age > 3) {
//       console.log(
//         `Dog number: ${i + 1} is an ${text}, and is ${age} years old `
//       );
//       //   console.log(text);
//     }
//   });
//   //   console.log(dogsJulia);
//   //   console.log(dogsJuliaCorrect);
//   console.log(allCorrect);
// };
// checkDogs(dogsJulia, dogsKate);
// console.log(checkDogs);

// const calcAvarageHumanAge = dogAges.map(function (ages) {
//   const humanAgeCalc = (age >=2 ? )

//   if (age >= 2) {
//     console.log(`Ok ${more}`);
//   }
//   if (age > 2) {
//     console.log(`No ${moreTwo}`);
//   }
//   const humanAge = [...more, ...moreTwo];
//   console.log(humanAge);
//   //   console.log(humanAge);
// });

// #2
// const dogAges = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const filter = dogAges.find(el => el < 5);
// console.log(filter);
// console.log(dogAges);

// const calcAvarageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

//   const oldAges = humanAges.filter(age => age >= 18);

//   const caclAvarage = oldAges.reduce(function (acc, age) {
//     return acc + age / oldAges.length;
//   }, 0);
//   console.log(humanAges);
//   console.log(oldAges);
//   console.log(caclAvarage);
// };
// calcAvarageHumanAge(dogAges);
// calcAvarageHumanAge(dogAges2);
// #3  REVRITE to cHANGING

// const calcAvarageHumanAge = ages => {
//   const humanAges = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce(function (acc, age, i, arr) {
//       return acc + age / arr.length;
//     }, 0);
//   console.log(humanAges);
// };
// calcAvarageHumanAge(dogAges);
// calcAvarageHumanAge(dogAges2);
