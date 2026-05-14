# 📦 Phase 1, Topic 3: Variables — let, const, and var

---

## WHY variables exist before the HOW

A program needs to **remember things.**

A user's name. Their age. Whether they're logged in. The result of a calculation. Without a way to store information temporarily, your code would be useless — it couldn't track anything.

A **variable** is just a named box where you store a value so you can use it later.

```text
┌─────────────┐
│  userName   │  ◄── the label (the name)
│  "Areeb"    │  ◄── the value stored inside
└─────────────┘
```

That's it. The complexity comes from *how* JavaScript lets you create these boxes — and there are 3 ways, each with different rules.

---

## The 3 Ways to Declare a Variable

### `const` — A box you can never reassign
```javascript
const userName = "Areeb";
```
Once you put something in a `const` box, you **cannot replace it** with something else.

```javascript
const userName = "Areeb";
userName = "Ali";  // 💥 ERROR — you can't reassign a const
```

Real world analogy: Your **date of birth**. It's set once. It never changes. Trying to change it causes a problem.

---

### `let` — A box you can reassign
```javascript
let score = 0;
score = 10;   // ✅ totally fine
score = 25;   // ✅ still fine
```

Real world analogy: A **scoreboard**. It starts at 0 and gets updated as the game progresses.

---

### `var` — The old, broken way
```javascript
var name = "Areeb";
```

`var` is how JavaScript worked before 2015. It has confusing, bug-prone behavior that we'll see in a moment. 

**The rule is simple: never use `var` in modern code.** You'll see it in old tutorials and legacy codebases, so you need to know it exists — but you will not use it.

---

## The Critical Difference: Scope

This is where it gets important. **Scope** means: *where in your code can this variable be accessed?*

`let` and `const` are **block-scoped.** A block is anything inside `{ }` curly braces.

```javascript
if (true) {
  let message = "hello";
  console.log(message); // ✅ works — we're inside the block
}

console.log(message); // 💥 ERROR — message doesn't exist out here
```

`var` ignores blocks completely — it **leaks out:**

```javascript
if (true) {
  var message = "hello"; // var doesn't respect the block
}

console.log(message); // ✅ "hello" — it leaked out
```

That leaking behavior is exactly what causes subtle, hard-to-find bugs. This is why `var` was replaced.

---

## Another `var` Problem: Hoisting

JavaScript does something called **hoisting** with `var` — it moves the declaration to the top of the file before running your code. This means you can use a `var` variable *before* you even declare it:

```javascript
console.log(age); // undefined — no error, just silent weirdness
var age = 25;
```

With `let` and `const` this causes a proper error — which is what you *want*. Silent failures are the enemy of good code.

```javascript
console.log(age); // 💥 ReferenceError — caught immediately
let age = 25;
```

---

## The Decision Rule — Memorize This

```text
Do I need to reassign this value later?
        │
        ├── NO  →  use const  (default choice)
        │
        └── YES →  use let
        
Never use var. Ever.
```

In practice, **most variables are `const`.** You reach for `let` only when you know the value will change — like a counter or a value built up inside a loop.

---

## Real Backend Example

Here's what this looks like in actual backend code:

```javascript
const PORT = 3000;              // port never changes — const
const DB_URL = "postgres://..."; // database URL never changes — const

let requestCount = 0;           // this increments with each request — let

requestCount = requestCount + 1; // ✅ works because it's let
PORT = 4000;                     // 💥 error because it's const
```

---

## Naming Rules & Conventions

Variables names must follow these rules:

| Rule | Example |
|---|---|
| Start with a letter, `_`, or `$` | `userName` ✅ / `1name` ❌ |
| No spaces | `user_name` ✅ / `user name` ❌ |
| Case sensitive | `username` and `userName` are different |
| Use camelCase (industry standard) | `requestCount` not `request_count` |

---

## The One Sentence Summary

> Use **`const`** by default for values that don't change, **`let`** only when you need to reassign, and **never use `var`** — it has broken scoping behavior that causes real bugs.

