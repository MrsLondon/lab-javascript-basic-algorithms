// Iteration 1: Names and Input
const hacker1 = "Sophia";
const hacker2 = "Viktor";
const length1 = hacker1.length;
const length2 = hacker2.length;
console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
let driverName = hacker1.toUpperCase().split('').join(' ');
console.log(driverName);
let driverNameInReverse = hacker1.split('').reverse().join('');
console.log(driverNameInReverse);

// Iteration 3: Loops
if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
 }
 else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
 }
 else {
    console.log("What?! You both have the same name?")
 }