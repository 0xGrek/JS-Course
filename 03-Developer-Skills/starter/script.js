// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, 5, 6, 9], [4, 5, 2, 2]);
// console.log(amplitude);

////////////////////////////////
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 1. Undesterding problem
//  - что такое день Х: it's index + 1
// -
// 2. Разделение на части
// - перевести масив в строку
//  - tranform each element to string with 23ºC

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// data1.toString();
// console.log(`...${data1[0]}C ...${data1[1]}C...${data1[2]}C...`);

// console.log(data1                                                                                                                                     .toString());

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}C in ${i + 1} days.`;
//   }
//   console.log(str);
// };
// printForecast(data1);
