
console.log("--- TASK 1 ---");
// 1. String: text wrapped in quotes
const username = "areeb_dev";

// 2. Number: integers or decimals
const age = 23;

// 3. Boolean: true or false
const isActive = true;

// 4. Null: intentional emptiness (we set this explicitly)
const profilePicture = null;

// 5. Undefined: unintentional emptiness (declared but no value given)
let lastLoginTime;

console.log("User Profile:", username, age, isActive, profilePicture, lastLoginTime);


console.log("\n--- TASK 2 ---");
// We use backticks (`) to create a template literal, allowing us to 
// inject variables directly into the string using ${}
const statusMessage = `User ${username} is ${age} years old. Account active: ${isActive}`;
console.log(statusMessage);


console.log("\n--- TASK 3 ---");
console.log("username is:", typeof username);             // "string"
console.log("age is:", typeof age);                       // "number"
console.log("isActive is:", typeof isActive);             // "boolean"

// THE FAMOUS BUG:
console.log("profilePicture is:", typeof profilePicture);
// Outputs "object". This is a bug from the very first version of JavaScript 
// in 1995. 'null' is a primitive type, not an object, but fixing this bug 
// now would break millions of older websites, so it was left in.

console.log("lastLoginTime is:", typeof lastLoginTime);   // "undefined"


console.log("\n--- TASK 4 ---");
// MY PREDICTIONS:
// "10" + 5   => "105" (The + operator acts as string concatenation if one value is a string)
// "10" - 5   => 5     (The - operator forces the string "10" to become a number)
// "10" * 5   => 50    (The * operator forces the string "10" to become a number)
// true + 1   => 2     (In math operations, JavaScript converts 'true' to 1, and 'false' to 0)

// THE RESULTS:
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 5);
console.log(true + 1);


console.log("\n--- TASK 5 ---");
console.log(100 === 100);        // true (Same type, same value)
console.log("test" === "test");  // true (Same type, same value)

console.log(23 === "23");
// WHY THIS IS FALSE:
// The strict equality operator (===) checks BOTH the value AND the data type. 
// Even though they look identical to a human, the left side is a Number and 
// the right side is a String. Since their types don't match, it immediately 
// returns false.

