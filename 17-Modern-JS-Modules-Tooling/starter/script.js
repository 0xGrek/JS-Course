// #272
// Importing modules
// import { addToCart, totalPrice as price, tq } from './shopingFiles.js';
// addToCart(`bread`, 5);
// console.log(price, tq);

console.log(`Import`);

// import * as shoppFiles from './shopingFiles.js';
// shoppFiles.addToCart(`lol`, 1);
// console.log(shoppFiles.tq);
// console.log(price);
// import add, { addToCart, totalPrice as price, tq } from './shopingFiles.js';

import add, { cart } from './shopingFiles.js';
add(`pizza`, 2);
add(`non`, 1);
add(`apples`, 4);

console.log(cart);

// #273 Top level Await

// console.log(`Start fetching`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log(`Something `);

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // Not very clean
// // lastPost.then(last => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// #274 Module patern
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shopCost = 10;
//   const totalPrice = 222;
//   const totalQuantity = 111;

//   const addToCart = function (product, quanity) {
//     cart.push({ product, quanity });
//     console.log(`${product} and ${quanity} added to cart`);
//   };

//   const orderStock = function (product, quanity) {
//     cart.push({ product, quanity });
//     console.log(`${product} and ${quanity} ordered from suplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart(`apple`, 4);
// shoppingCart2.addToCart(`pizza`, 2);
// console.log();
// console.log(shoppingCart2.shopCost);

// #275 CommonJS
/*
// Export
export.addToCart = function (product, quanity) {
  cart.push({ product, quanity });
  console.log(`${product} and ${quanity} added to cart`);
};
// Import
const { addToCart } = require('./shopingFiles.js')
*/

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quanity: 5 },
    { product: 'pizza', quanity: 2 },
  ],
  user: { logedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.logedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
