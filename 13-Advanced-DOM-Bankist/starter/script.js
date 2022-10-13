'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector(`.header`);

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

const nav = document.querySelector(`.nav`);

/////////////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  //examination
  // console.log(s1coords);
  // console.log(
  //   `height/width viewport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //console.log(e.target.getBoundingClientRect());  distance betwen cur el and top line

  window.scrollTo({
    left: s1coords.left + window.pageXOffset, // curr el + cer scroll
    top: s1coords.top + window.pageYOffset,
    behavior: `smooth`,
  });
  // ANOTHER WAY
  // section1.scrollIntoView({ behavior: `smooth` });
});

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open modal
btnsOpenModal.forEach(btn => btn.addEventListener(`click`, openModal));
// *Another way
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//Page navigation
// Another Way -  event delegetion
// 1. Add event listener to commot parent el
// 2. Detemine that el originated the event
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  // Matching strategy/ сопоставляем информацию
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// ****************** Этот вариант хуже, если много links
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`); //берем селектор у елемента
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// tabbed component

// BAD practice
// tabs.forEach(t => t.addEventListener(`click`, () => console.log(`TAB`)));
tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  // ignore click outside
  if (!clicked) return;
  // Remove tab
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));
  // Activated tab
  clicked.classList.add(`operations__tab--active`);
  // Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// Menu fade animations
const handleHover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passigng the argument into hendler
nav.addEventListener(`mouseover`, handleHover.bind(0.5));

nav.addEventListener(`mouseout`, handleHover.bind(1));
// nav.addEventListener(`mouseout`, function (e) {
//   handleHover(e, 1);
// });
/////////////////////////////////////
console.log(`practic`);
////////////////////////////////////
//Page navaigation

// *************PRACTIC*****************
// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// message.innerHTML = `we use so HTML
// <button class="btn btn--close-coolie">Go it!</button>`;
// // header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//   });
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });

// 187
// Styles
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 70) + 30 + 'px';

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Atributes
// const logo = document.querySelector(`.nav__logo`);
// logo.alt = `Minimun`;
// logo.getAttribute(`designer`);
// console.log(logo.alt);
// console.log(logo.src);
// logo.getAttribute(`src`);

// если хотим получть аблолютный(relative) путь src
// console.log(logo.getAttribute(`src`));
// const link = document.querySelector(`.twitter-link`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// data когда работаем с UI it need
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add(`c`);
// logo.classList.remove(`c`);
// logo.classList.toggle(`c`); // чередовать класс
// logo.classList.contains(`c`);

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// const h1 = document.querySelector(`h1`);
// h1.addEventListener(`mouseenter`, function (e) {
//   alert(`addEventListener: Great! You are reading the head/`);
// });

// 191

// random number
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`);
// });

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`CONT`);
// });

// document.querySelector(`.nav`).addEventListener(
//   `click`,
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`NAV`);
//   },
//   false
// );
// perents node, going down
// const h1 = document.querySelector(`h1`);
/*
console.log(h1.querySelectorAll(`.highlight`));

console.log(h1.childNodes);
console.log(h1.children);
 */
// going upwords
/*
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(`.header1`).style.background = `var(--color-primary)`; 
*/
// going siblings
/*
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

 */
