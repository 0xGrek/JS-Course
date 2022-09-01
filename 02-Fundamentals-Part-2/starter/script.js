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
//     const worldPopulation = 7900;
//     const percentageOfWorld3 = (population,country) => {
//     const summA = population * 100 / worldPopulation

//     return `${country} has ${population} million people, which about ${summA}% of the world. `;
// }
    
//     const china2 = percentageOfWorld3(100, 'China')
//     const ukraine2 = percentageOfWorld3(22, 'China')
//     const japan2 = percentageOfWorld3(44, 'China')

//     console.log(china2,ukraine2, japan2); 


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

const worldPopulation = 8000;
const percentageOfWorld1 = function(population,country) {
    const allPeoplePocent =population * 100 / worldPopulation;
    return `${country} has ${population} millions, its make ${allPeoplePocent} to all world`;
}
const china = percentageOfWorld1(100, 'UK');
    const ukraine = percentageOfWorld1(50,'UK');
    const japan = percentageOfWorld1(30,'UK');

    console.log(china);
    console.log(ukraine);
    console.log(japan);