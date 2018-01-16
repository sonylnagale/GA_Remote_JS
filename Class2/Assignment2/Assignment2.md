# Math

## So fun. Much woot.

1. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
2. Use the `console.log()` function to output the browser's JS console.
3. Add this file to your git repository and push it to GitHub.

```
function findTriangleArea(a,b,c) {
  let p = (a+b+c)/2;
  let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  return area;
}
```

## Hungry for more?

1. Use the `prompt()` function to input three values for the three sides
2. Store the input into three variables
3. Calculate the area

```
function findTriangleArea(a,b,c) {
  let p = (a+b+c)/2;
  let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  return area;
}

var input = [0,0,0]
for ([i, value] of input.entries()) {
  let userInput = prompt("Input the length " + (i+1) + " of the first side");
  input[i] = parseInt(userInput);
}

let [v1,v2,v3] = input
console.log(findTriangleArea(v1,v2,v3))
```
