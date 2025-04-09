// Functions Assignment

// Declare a function fullName and it print out your full name.
function fullName() {}
console.log("Ma Comfort");

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Ma", "Comfort"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 3));

// Higher Order Functions Assignmentconst
countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "IceLand",
  "Ireland",
  "Japan",
  "Kenya",
];

const names = ["Tamara", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Use forEach  to console.log each country in the countries array.
countries.forEach((element) => {
  console.log(element);
});

// Use forEach  to console.log each name in the names array.
names.forEach((element) => {
  console.log(element);
});

// Use map  to console.log each number in the numbers array.
const eachNum = numbers.map((number) => number);
console.log(eachNum);

// Use map  to create a new array by changing each country to uppercase in the countries array.
const countriesToUpper = countries.map((country) => country.toUpperCase());
console.log(countriesToUpper);

// Use  map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// Use  map to create a new array by changing each number to square in the numbers array.
const numbersSquared = numbers.map((digit) => digit * digit);
console.log(numbersSquared);

// Use  map to change to each name to uppercase in the names array
const namesToUpper = names.map((name) => name.toUpperCase());
console.log(namesToUpper);

// Use map  to map the products array to its corresponding prices.
const productPriceMatch = products.map((product) => product.price);
console.log(productPriceMatch);

// Use filter  to filter out countries containing A.
const countriesWithA = countries.filter((country) => country.includes("a"));
console.log(countriesWithA);

// Use filter  to filter out countries having six character.
const countriesSixChar = countries.filter((country) => country.length == 6);
console.log(countriesSixChar);

// Use filter  to filter out countries containing six letters and more in the country array.
const countriesSixCharAbove = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesSixCharAbove);

// Use filter to filter out country start with 'E';
const countriesStartWithE = countries.filter((country) =>
  country.startsWith("E")
);
console.log(countriesStartWithE);

// Use  filter to filter out only prices with values.

const productsPricesNotNull = products.filter(
  (product) => product.price !== ""
);
console.log(productsPricesNotNull);

// Declare a function called  which returns an array of countries which have some common pattern(you find the countries array (eg 'land', 'ia', 'island','stan')).
let countriesPattern = countries.filter((country) => country.includes("land"));
console.log(countriesPattern);

countriesPattern = countries.filter((country) => country.includes("ia"));
console.log(countriesPattern);

countriesPattern = countries.filter((country) => country.includes("island"));
console.log(countriesPattern);
countriesPattern = countries.filter((country) => country.includes("stan"));
console.log(countriesPattern);

// Objects Assignmnet

// Create an empty object called dogPrint the the dog object on the console
const dogPrint = {};

// Add name, legs, color, age and bark properties for the dog object.
(dogPrint.name = "Peekachu"),
  (dogPrint.legs = 4),
  (dogPrint.color = "brown"),
  (dogPrint.age = 10),
  (dogPrint.bark = function () {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Bark: Woof Woof!`;
  }),
  console.log(dogPrint);

// The bark property is a method which return Get name, legs, color, age and bark value from the dog object

console.log(dogPrint.bark());
