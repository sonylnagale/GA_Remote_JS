/* # Madlibs

1. Construct an array of company names, like Uber, Lyft, Google, Apple
1. Construct a silly array of animals
1. Make a for loop that makes a sentence similar to `"My company is an Uber for dogs!"`
1. Spit out at least 5 sentences to the `console.log()`

## Hungry for more?
Randomize the selection of the company names and animals

## Still hungry?
Use array functions to properly construct the English: `"My company is an Uber for dogs!"` versus `"My company is a Google for dogs!"`
_(note "a" vs. "an")_
  */

const companyNames = shuffle(["Uber", "Lyft", "Google", "Apple", "Facebook"]);
const animals = shuffle(["cats", "dogs", "horse", "pig"]);

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
}

// Fisher-Yates Shuffle
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // Until all items iterated
  while (0 !== currentIndex) {

    // Random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

for (const [_, name] of companyNames.entries()) {
  var counter = 0;
  var properEnglish = isVowel(name.charAt(0)) ? "an" : "a"

  while (counter < animals.length) {
    console.log("My company is " + properEnglish + " " + name + " for " + animals[counter] + "!");
    counter++;
  }
}
