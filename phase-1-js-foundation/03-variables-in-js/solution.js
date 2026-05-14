
// TASK 1
const serverName = "MyFirstServer";
console.log("Task 1:", serverName);

// TASK 2
let activeUsers = 0;
activeUsers = 42; // Reassigning is allowed because we used 'let'
console.log("Task 2:", activeUsers);

// TASK 3
//
// to run this proogram after task 3 makesure to comment the e below line 
serverName = "MySecondServer";
// WHY IT FAILS: 
// This line would throw a "TypeError: Assignment to constant variable." 
// Variables declared with the 'const' keyword are locked. Once a value 
// is declared ,it can never be replaced or reassigned.

// TASK 4
const isServerRunning = true;
console.log("Task 4:", isServerRunning);

// TASK 5
{
  // This is a new block scope
  let blockMessage = "Database connection established!";
  console.log("Task 5 (Inside):", blockMessage); // This works perfectly
}

console.log(blockMessage);
// WHY IT FAILS:
// This line would throw a "ReferenceError: blockMessage is not defined."
// Variables declared with 'let' and 'const' are block-scoped. This means 
// they only exist inside the { curly braces } where they were created. 
// As soon as the block ends, the variable is destroyed and cannot be 
// accessed from the outside.

