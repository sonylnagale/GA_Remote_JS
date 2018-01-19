/* # Fizzbuzz

Write a program that:
* Will iterate through numbers 1 to 100 and log each number in the console except if:
  * If a number is divisible by 3, log "fizz".
  * If it's divisible by 5, log "buzz"
  * If it's divisible by both 3 and 5, log "fizzbuzz"
* _Hint: Use the modulus operator!_
  */

const numbers = createArray(100);

function createArray(n) {
  var array = new Array();
  for (var i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

function fizzBuzz(arr) {
  arr.forEach(function(item) {
    console.log((item % 3 ? "" : "fizz") + (item % 5 ? "" : "buzz"))
  })
}

fizzBuzz(numbers);
