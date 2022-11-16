'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// 248.Our First AJAX Call: XMLHttpRequest
/*
const getCountyData = function (country) {
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const currencySymbol =
      data.currencies[Object.keys(data.currencies)[0]].name;
    const languageCountry = data.languages[Object.keys(data.languages)[0]];
    console.log(currencySymbol);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${languageCountry}</p>
      <p class="country__row"><span>💰</span>${currencySymbol}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountyData(`portugal`);
getCountyData(`ukraine`);
getCountyData(`germany`);
getCountyData(`USA`);
*/
// 250. Callback HELL
/*

const renderCountry = function (data, className = ``) {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountyAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country
    renderCountry(data);

    // Get eighbour country (2)
    // const [neighbour] = data.borders?.[0];
    const [neighbour] = data.borders;

    // console.log(neighbour);
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);

    request2.send();
    request2.addEventListener(`load`, function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, `neighbour`);
    });
  });
};

// getCountyAndNeighbour(`usa`);
getCountyAndNeighbour(`spain`);

setTimeout(() => {
  console.log(`1 second passed`);
}, 1000);
*/

// 251. Promises
// const renderCountry = function (data, className = ``) {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${
//           data.languages[Object.keys(data.languages)[0]]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           data.currencies[Object.keys(data.currencies)[0]].name
//         }</p>
//       </div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// v.1.0
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
/*
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

// getCountryData(`portugal`);
getCountryData(`usa`);
*/
// 254. Handling Rejected promise

// const renderCountry = function (data, className = ``) {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${
//           data.languages[Object.keys(data.languages)[0]]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           data.currencies[Object.keys(data.currencies)[0]].name
//         }</p>
//       </div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText(`beforeend`, msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/alpha/${country}`,
//     `Country not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       console.log(neighbour);

//       if (!neighbour) throw new Error(`No neighbour found`);

//       // Country 2
//       getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Neighbour not found`
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener(`click`, function () {
//   getCountryData(`usa`);
// });

// getCountryData(`australia`);
// OLD wersion
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     // if promise rejected
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}.Try again!`);
//     })
//     // always use in finali promise
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener(`click`, function () {
//   getCountryData(`spain`);
// });

// #258
// console.log(`Test start`);
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

// Promise.resolve(`Resolved promise 2`).then(res => {
//   for (let i = 0; i < 10; i++) {}
//   console.log(res);
// });

// console.log(`Test end`);

//#259 Simple Promise
const lotteryPromise = new Promise(function (reslove, reject) {
  console.log(`Lotery draw is LOL`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      reslove(`You WIN 💦`);
    } else {
      reject(new Error(`You lost your money 💢`));
    }
  }, 200);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (reslove) {
    setTimeout(reslove, (seconds = 2000));
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for a two seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited a one second`));
