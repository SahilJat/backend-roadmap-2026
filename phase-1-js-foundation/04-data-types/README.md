# 🧱 Phase 1, Topic 4: Data Types

---

## WHY data types matter before the HOW

Every piece of information your backend handles has a **type.**

A user's name is different from their age. Their age is different from whether they're logged in. And all of those are different from "no value exists here at all."

JavaScript needs to know what *kind* of thing it's working with — because you can't multiply a name, and you can't capitalize a number. Types define what operations make sense on a value.

More importantly — **type-related bugs are some of the most common bugs in JavaScript.** Understanding types early saves you hours of confusion later.

---

## The 5 Primitive Types You Need Now

### 1. String — text
Any sequence of characters wrapped in quotes.

```javascript
const userName = "Areeb";
const message = 'Server is running';
const template = `Hello, ${userName}`; // ← backtick template string
```

Three ways to write strings:
| Style | When to use |
|---|---|
| `"double quotes"` | General use |
| `'single quotes'` | General use |
| `` `backticks` `` | When you need to embed variables inside |

The backtick version is called a **template literal** and it's extremely useful:

```javascript
const port = 3000;
const message = `Server running on port ${port}`;
// → "Server running on port 3000"
```

You'll use template literals constantly in backend code.

---

### 2. Number — any numeric value
JavaScript has just ONE number type for both integers and decimals:

```javascript
const age = 25;          // integer
const price = 9.99;      // decimal
const temperature = -3;  // negative
```

Some useful things to know:

```javascript
console.log(10 + 3);  // 13  — addition
console.log(10 - 3);  // 7   — subtraction
console.log(10 * 3);  // 30  — multiplication
console.log(10 / 3);  // 3.333... — division
console.log(10 % 3);  // 1   — remainder (modulo)
console.log(10 ** 3); // 1000 — exponentiation (10³)
```

There's also a special number value worth knowing:

```javascript
console.log(10 / 0);  // Infinity
console.log("hello" * 2); // NaN — "Not a Number"
```

**NaN** is JavaScript's way of saying: *"you tried to do math on something that isn't a number."* You'll encounter it when handling user input from forms or APIs.

---

### 3. Boolean — true or false
Only two possible values. The foundation of all logic in your code.

```javascript
const isLoggedIn = true;
const hasPermission = false;
```

Booleans come from comparisons:

```javascript
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 === 10); // true  ← triple equals means "strictly equal"
console.log(10 === "10"); // false ← number vs string, not the same
```

**Always use `===` not `==` in JavaScript.**

`==` does type coercion — it tries to convert types before comparing, which causes subtle bugs:
```javascript
console.log(10 == "10");  // true  ← dangerous, wrong
console.log(10 === "10"); // false ← correct behavior
```

---

### 4. null — intentional emptiness
`null` means: **"this variable exists, but it deliberately has no value."**

```javascript
const activeSession = null; // user is not logged in yet
```

A human set this to null on purpose. It's a conscious decision that says *"there is nothing here right now."*

Real backend example:
```javascript
const user = null; // we haven't fetched the user from the database yet
```

---

### 5. undefined — unintentional emptiness
`undefined` means: **"this variable exists, but was never given a value."**

```javascript
let serverResponse;
console.log(serverResponse); // undefined — never assigned
```

JavaScript sets things to `undefined` automatically. You rarely set it yourself.

The difference in one line:
> `null` = *"I know there's nothing here"* — set by the developer
> `undefined` = *"nobody gave this a value yet"* — set by JavaScript

---

## typeof — Checking a Variable's Type

You can always check what type something is:

```javascript
console.log(typeof "Areeb");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof null);        // "object" ← famous JavaScript bug
console.log(typeof undefined);   // "undefined"
```

That `typeof null === "object"` result is a **known bug in JavaScript** from 1995 that was never fixed because fixing it would break too much existing code. Every JavaScript developer knows about it. Now you do too.
FAMOUS BUG: In the first implementation of JS, values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" return value.
---

## Type Coercion — JavaScript's Dangerous Magic

JavaScript will sometimes **automatically convert types** when you mix them. This is called type coercion and it causes real bugs:

```javascript
console.log("5" + 2);  // "52"  ← treated as string concatenation
console.log("5" - 2);  // 3     ← treated as subtraction
console.log("5" * 2);  // 10    ← treated as multiplication
```

The `+` operator is overloaded — it means both addition AND string concatenation. JavaScript guesses which one you want based on types. It guesses wrong sometimes.

This is one of the core reasons **TypeScript exists** — it catches these mistakes before your code even runs. You'll appreciate this deeply when we get to Phase 5.

---

## A Real Backend Scenario

Imagine a user sends data to your server to register:

```javascript
const username = "areeb_dev";      // string ✅
const age = 23;                    // number ✅
const isVerified = false;          // boolean ✅
const profilePicture = null;       // null — not uploaded yet ✅
let lastLoginTime;                 // undefined — never logged in ✅
```

Every backend you build will handle exactly these kinds of values coming in from users and going out to databases.

---

## The One Sentence Summary

> JavaScript has 5 primitive types — **string, number, boolean, null, and undefined** — and mixing them carelessly causes bugs through type coercion, which is exactly why knowing your types matters from day one.

