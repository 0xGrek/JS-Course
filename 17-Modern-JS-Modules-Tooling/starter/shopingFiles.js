// Exporting modules
console.log(`Export`);

// Blocking code
console.log(`Start fetching users`);
await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log(`Finish fetching `);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quanity) {
  cart.push({ product, quanity });
  console.log(`${product} and ${quanity} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quanity) {
  cart.push({ product, quanity });
  console.log(`${product} and ${quanity} added to cart`);
}
