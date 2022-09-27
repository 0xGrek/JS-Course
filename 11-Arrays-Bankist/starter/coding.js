// 'use strict';

// // Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// // § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
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
// // console.log(checkDogs);
