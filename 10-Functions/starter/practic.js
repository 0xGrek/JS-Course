// 'use strict';

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// poll.registerNewAnswer();
// document
//   .querySelector(`.poll`)
//   .addEventListener(`click`, poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3, 2, 3, 4, 5] });

// let sum = (function (a, b) {
//   return a + b;
// })(10, 20);

// console.log(sum);

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector(`body`).addEventListener(`click`, function () {
//     header.style.color = 'blue';
//   });
// })();

// (function () {
//   const header = document.querySelector('h1');
//   let red = (header.style.color = 'red');

//   const toggleColor = () => {
//     let blue = (header.style.color = 'blue');
//     red ? blue : red;
//   };
//   document.body.addEventListener('click', toggleColor);
// })();
