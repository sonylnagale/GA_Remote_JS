// Write a program that outputs results based on age. Use Codepen and work with a partner. This exercise draws on if/else statements, Boolean logic, and comparison operators.

function checkAge(age) {
  switch (true) {
    case age >= 62:
      console.log("You can collect social security benefits");
    case age >= 35:
      console.log("You can run for president");
    case age >= 25:
      console.log("You can rent a car");
    case age >= 21:
      console.log("You can drink alcohol");
    case age >= 18:
      console.log("You can vote");
    case age >= 16:
      console.log("You can drive");
      break;
    case age < 16:
      console.log("You only go to school");
      break;
    default:
      break;
  }
}

const age = prompt("What is your age?")
checkAge(age);
