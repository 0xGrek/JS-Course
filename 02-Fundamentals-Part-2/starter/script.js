// Functions
// function describeCountry(country, population, capitalCity) {
//     // console.log(country, population, capitalCity);
//     const nom = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return nom;
// }

// const myCountry = describeCountry('Finland', 6, 'Helsinki');
// console.log(myCountry);
// const mySecondCountre = describeCountry('Ukreine', 10, 'Kiev');
// console.log(mySecondCountre);
// const myThirtcountry = describeCountry('Portugal', 2, 'Lisboa');
// console.log(myThirtcountry);

// Function Declarations vs. Expressions

// const worldPopulation = 7900;

// function percentageOfWorld1 (population) {
//     return population * 100 / worldPopulation
// };
//     const china = percentageOfWorld1(100);
//     const ukraine = percentageOfWorld1(50);
//     const japan = percentageOfWorld1(30);

//     console.log(china,ukraine,japan);
// Expression
// const percentageOfWorld2 = function(population) {
//     return population * 100 / worldPopulation
// };

//     const china1 = percentageOfWorld2(100);
//     const ukraine1 = percentageOfWorld2(50);
//     const japan1 = percentageOfWorld2(30);

//     console.log(china1,ukraine1,japan1);

// Arrow Functions
// const worldPopulation = 7900;
// const percentageOfWorld3 = (population) => {
//     return population * 100 / worldPopulation;
// }
    
//     const china2 = percentageOfWorld3(50)
//     const ukraine2 = percentageOfWorld3(100)  
//     const japan2 = percentageOfWorld3(50)

//     console.log(china2,ukraine2, japan2);      

// Functions Calling Other Functions
// **Aroow
//     const worldPopulation = 7900;
//     const percentageOfWorld3 = (population,country) => {
//     const summA = population * 100 / worldPopulation
//     return `${country} has ${population} million people, which about ${summA}% of the world. `;
// }
    
//     const china = percentageOfWorld3(100, 'China')
//     const ukraine = percentageOfWorld3(22, 'China')
//     const japan = percentageOfWorld3(44, 'China')

//     console.log(china);
//     console.log(ukraine);
//     console.log(japan);
// ///////////////////////////////////////////
// **Declaration func
// const worldPopulation = 7900;
// function percentageOfWorld1 (population,country) {
//     const allPeoplePocent = population * 100 / worldPopulation;
//     return `${country} has ${population} millions, its make ${allPeoplePocent} to all world`;
// };
//     const china = percentageOfWorld1(100, 'UK');
//     const ukraine = percentageOfWorld1(50,'UK');
//     const japan = percentageOfWorld1(30,'UK');

//     console.log(china);
//     console.log(ukraine);
//     console.log(japan);
// **Expresions funk
// const worldPopulation = 8000;
// const percentageOfWorld1 = function(population,country) {
//     const allPeoplePocent =population * 100 / worldPopulation;
//     return `${country} has ${population} millions, its make ${allPeoplePocent} to all world`;
// }
// const china = percentageOfWorld1(100, 'UK');
//     const ukraine = percentageOfWorld1(50,'UK');
//     const japan = percentageOfWorld1(30,'UK');

// console.log(china);
// console.log(ukraine);
// console.log(japan);


// const friends = ['a','b', 'c'];

// console.log(friends);   
// console.log(friends.length);
// console.log(friends[friends.length -3]);


// LECTURE: Introduction to Arrays

// const worldPopulation = 8000;
// const percentageOfWorld1 = function(population,country) {
//     const allPeoplePocent =population * 100 / worldPopulation;
//     return `${country} has ${population} millions, its make ${allPeoplePocent} to all world`;
// }
//     const china = percentageOfWorld1(111, 'UK');
//     const ukraine = percentageOfWorld1(222,'UK');
//     const japan = percentageOfWorld1(333,'UK');
//     const oae = percentageOfWorld1(444,'UK');


//     const population = [1, 2, 3, 4];
//     const team1 = percentageOfWorld1(population[0],'china');
//     const team2 = percentageOfWorld1(population[1],'china');
//     const team3 = percentageOfWorld1(population[2],'china');
//     const team4 = percentageOfWorld1(population[3],'china');
//     console.log(team1);
//     console.log(team2);
//     console.log(team3);
//     console.log(team4);


    // const procent = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]),percentageOfWorld1(population[3])];
    // console.log(procent);
    // if (population.length > 4) {
    //     console.log(true)
    // } else {
    //     console.log(false);
    // }
    // console.log(population);
    // console.log(procent);

// const friends = ['a','b', 'c','d'];
// const newFriends = friends.push('Oleg');
// friends.unshift('Vasya');

// friends.pop();
// friends.shift();
// friends.indexOf('a');
// console.log(friends.indexOf('d')); 
// console.log(friends.includes('a'));
// console.log(friends.includes('lol'));

// if(friends.includes('dd')) {
//     console.log('You go with a');
// }

// console.log(friends);

// const friends = {
//     firstName: 'Oleg',
//     job: 'IT',
//     parents: ['mother', 'phather', 'brother'],
//     age: 20,
//     animals: 'dog'
// }
// console.log(`Name my boy  is ${friends.firstName}, he has work in ${[friends.job + ' '+friends.animals]}, and now him ${friends.parents[2]} speaking with me about my ${friends.age} ears old.`);

////////////////////////////////////////////
// Basic Array Operations (Methods)

// const country = ['Uraine', 'China', 'USA', 'Spain', 'Portugal']
// let newCounrty = country.push('Utopia');

// country.pop();
// country[1]  = 'Jambo';

// console.log(country);

// const neighbours = [country[0], country[2], country[4]];
// neighbours[2] = 'Jambo';

// if (neighbours.includes('USA')) {
//     console.log(`It was OK`);
// } else {
//     console.log(`Probably not a central European country :D'`);
// }

// console.log(neighbours);
// console.log(neighbours.indexOf('USA'));

// Introduction to Objects

// const myCountry = {
//     country: 'USA',
//     capital: 'Mayami',
//     language: 'Averican',
//     population: 100,
//     neighbours: ['Mexica', 'Canada', 'England']
// }
// myCountry['population'] = 50;
// console.log(myCountry);

// console.log(`${myCountry.country} has a ${myCountry.population} milion ${myCountry.language}-skeaking people, ${myCountry.neighbours.length} neighbours and a capital ${myCountry.capital}`);

// myCountry.population = 50;
// console.log(myCountry);

// ******************************
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Ivanenko',
//     bithYear: '1999',
//     job: 'teacher',
//     firends: ['a', 'b', 'c'],
//     hasDriverLicense: true,
    
    // calcAge: function (bithYear) {
    //     return 2022 - bithYear;
    // }

//     calcAge: function () {
//         // console.log(this);
//         return age = 2022 - this.bithYear;
//     },

//     getSummary: function () {
//         return `${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? `a` : `no`} drivers license`;
//     }
// }
// console.log(jonas.calcAge(1999));
// console.log(jonas[`calcAge`](1999));
// if (jonas.hasDriverLicense == true) {
//     console.log(`ok`)
// } else {
//     console.log(`not`)
// };
// console.log(jonas.getSummary());
// console.log(jonas.calcAge());

// Object Methods

// const myCountry = {
//     country: 'USA',
//     capital: 'Mayami',
//     language: 'Averican',
//     population: 100,
//     neighbours: ['Mexica', 'Canada', 'England'],
//     isIsland: false,
    
//     describe: function() {
//         return this.capital;
//     },

//     checkIslan: function() {
//         return ` ${myCountry.country} ${myCountry.isIsland ? ` have friends` : ` not have friends`}`;
//     }
// }
// console.log(myCountry.describe());
// console.log(myCountry.checkIslan());

// for (let rep = 1; rep <= 10; rep++)  {
//     console.log(`Kak${rep} dela `);
// }

// **************Iteration: The for Loop
// for (let rep = 1; rep <= 50; rep++) {
//     console.log(`Voter nubmer ${rep} is curently voting`);
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

// const worldPopulation = 5000;
// const population = [100, 200, 300, 400];

// const precetages2 = []
// for (let  i = 0; i < population.length; i++) {
//     precetages2.push(population[i] * 100 / worldPopulation);
// }
// console.log(precetages2);

  
     
// const nameFirst = [1 , 'a', 2, 'b', 3, 'c', 'g', 11 , 20 , 30]
// const nameSecond = [];
// for (let i  = 0 ; i <= 20 ; i++) {
//     if (typeof nameFirst[i] !== 'string' ) continue;
//     nameSecond.push(2022 - nameFirst[i]);
    // nameSecond.push('DOTA' + nameFirst[i]);


    // console.log(nameSecond);
    // console.log(nameFirst[i]);
    // console.log([i])
// }

// /////////////////////////////////
// Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     ['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']
// ];
 
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }
// }

////////////////////////////
// The while Loop

// const worldPopulation = 5000;
// const population = [100, 200, 300, 400];

// const precetages2 = []
// for (let  i = 0; i < population.length; i++) {
//     precetages2.push(population[i] * 100 / worldPopulation);
// }
// console.log(precetages2);

// let rep = 0;
// const precetages3 = [];
// while (rep < population.length) {
//     precetages3.push(population[rep] * 100 / worldPopulation);
//     console.log(precetages3);
//     rep++;

// }

// precetages2.push(population[i] * 100 / worldPopulation);
// }

