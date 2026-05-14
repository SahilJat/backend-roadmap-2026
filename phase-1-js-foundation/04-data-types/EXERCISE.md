# 🧱 Phase 1, Topic 4: Exercise

---

## The Challenge

Open your Replit from before and clear `index.js`. Fresh start.

---

### Task 1 — Build a user profile using correct types
Create variables representing a user on a backend system. You must use **all 5 data types** at least once:

A user has:
- A username
- An age
- Whether their account is active
- A profile picture (they haven't uploaded one yet — intentional emptiness)
- A last login timestamp (JavaScript hasn't set this yet — unintentional emptiness)

Use the right type for each. Use `const` or `let` correctly. Log all 5 with `console.log`.

---

### Task 2 — Template literals
Using the variables you created above, log this exact sentence to the console using a **template literal** (no string concatenation with `+`):

```text
"User areeb_dev is 23 years old. Account active: true"
```

(Use your actual variable values, not hardcoded text)

---

### Task 3 — typeof check
Use `typeof` to log the type of each of your 5 variables. Then write a comment next to the `null` one explaining the famous bug.

---

### Task 4 — Spot the coercion bug
What does this code output? Write your answer as a comment **before** running it. Then run it and check if you were right:

```javascript
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 5);
console.log(true + 1);
```

---

### Task 5 — strict equality
Write 3 comparisons using `===` and log the results. At least one must compare a number to a string version of the same number. Write a comment explaining why that one returns `false`.

---

