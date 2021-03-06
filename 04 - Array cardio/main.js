// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filterWithYear = inventors.filter(function(item) {
  if (item.year >= 1500 && item.year < 1600 ) {
    return true;
  }
});

console.table(filterWithYear)

//
// And with an arow function:
//

const filterWithYear2 = inventors.filter(item => item.year >= 1500 && item.year < 1600);
console.table(filterWithYear2);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const firstAndLastNames = inventors.map(function(item) {
  return `${ item.first} ${ item.last}`;
})

console.table(firstAndLastNames);

//
// And with an arow function:
//
const firstAndLastNames2 = inventors.map(item =>`${ item.first} ${ item.last}`);

console.table(firstAndLastNames2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort(function(firstPerson, secondPerson) {
  if (firstPerson.year > secondPerson.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(ordered);

//
// And with an arow function:
//

const ordered2 = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year? 1 : -1);

console.table(ordered2);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const allYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
// ^ you add the 0 after the function to set the value of the total (in this case it will equal to 0) in the first loop.

console.log('total years lived: ' + allYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort(function(a, b) {
  const lastInvestor = a.passed - a.year;
  const nextInvestor = b.passed - b.year;

  return lastInvestor > nextInvestor ? -1 : 1; //a shorter if else statement
});

console.table(oldest);

/************************************** 

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const classOnPage = document.querySelector('.mw-category');
const links = classOnPage.querySelectorAll('a');

const de = links.map(link => link.textContent); // this will not work since links is not an array but a NodeList, so we need to convert links to an array, 2 options:

//const links = Array.from(classOnPage.querySelectorAll('a'));
//or 
//const links = [...classOnPage.querySelectorAll('a')]; the three dots will take everything they collected and store it in the array.
//let's continue the code below:
const links = Array.from(classOnPage.querySelectorAll('a'));
const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));

****************************************/

// 7. sort Exercise
// Sort the people alphabetically by last name

const peeps = people.sort(function(lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = lastOne.split(', ');

  return aLast > bLast ? 1: -1;
})
  console.log(peeps);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {})

    console.log(transportation);