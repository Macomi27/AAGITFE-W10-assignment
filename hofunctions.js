const fruitsArray = ["Orange", "Apple", "Banana", "Mango", "Pineapple"];
const numArray = [1, 4.5, 3, 2.5, 6, 7];
const objectsArray = [
  { name: "Dog", legs: 4, type: "omnivore" },
  { name: "Bird", legs: 2, type: "omnivore" },
  { name: "Lion", legs: 4, type: "canivore" },
  { name: "Cow", legs: 4, type: "herbivore" },
];

//create an array that has only the first 3 characters in the strings which are the items of the array
const shortFruits = fruitsArray.map((fruit) => {
  // console.log(fruit)
  return fruit.slice(0, 3);
});
console.log(shortFruits);

const check = ["hi", "hello"].map((a) => {
  return a;
});
console.log(check);

const animalBreed = objectsArray.map((animal) => {
  return { name: animal.name, legs: animal.legs, type: animal.type };
});
console.log(animalBreed);

const allButFirst = objectsArray.filter((animal) => {
  return animal.name == "Dog";
});
console.log(allButFirst);

const shoppingShelf = [
  "bag",
  "dog food",
  "shoes",
  "clothes",
  "cow food",
  "phone",
  "laptop",
];

let userPrompt = "food";

const searchResults = shoppingShelf.filter((product) => {
  return product.includes("food");
});
console.log(searchResults);
