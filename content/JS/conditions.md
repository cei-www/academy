# Operators and conditions

Arithmetic works as you expect: `+ - * /`, plus `%` (remainder), which is how you test divisibility —
`n % 2 === 0` means `n` is even.

Comparison operators `> < >= <=` give a boolean. For equality there are two forms, and only one is
safe:

```
"5" === 5   // false — different types, no conversion
"5" == 5    // true  — == converts first, and hides bugs
```

Always use `===` and `!==`. Combine conditions with `&&` (both), `||` (either) and `!` (not).

`if` runs a block when its condition is true, `else if` tests another, `else` catches the rest. For a
single value chosen from two, the ternary `cond ? a : b` is shorter than a four-line `if`.

Any value used as a condition is coerced to a boolean. Exactly six values are falsy: `0`, `""`,
`null`, `undefined`, `NaN` and `false`. Everything else — including `"0"`, `[]` and `{}` — is truthy.

## Display
### HTML

```
<h1>Grade check</h1>
<p id="out">See the console panel.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#out { background: #EEF1F4; border-left: 4px solid #F2A93B; padding: 8px; }
```

### Javascript

```
const score = 78;
const attended = true;

console.log("remainder:", score % 10);
console.log("=== vs ==:", "78" === score, "78" == score);

let grade;
if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else {
  grade = "C";
}

const status = score >= 60 && attended ? "pass" : "fail";
console.log(`score ${score} → grade ${grade} (${status})`);
document.getElementById("out").textContent = `Grade ${grade} — ${status}`;
```

## Your Tasks
### 1. Use the remainder operator
`%` gives what is left after division.

```
console.log(17 % 5);
console.log(10 % 2 === 0);
```

### 2. Compare with `===`
`===` checks value and type, so no silent conversion happens.

```
console.log(5 === 5);
console.log("5" === 5);
console.log("5" !== 5);
```

### 3. Write an if / else if / else chain
The first true branch wins; the rest are skipped.

```
const seats = 0;
if (seats > 10) {
  console.log("plenty of seats");
} else if (seats > 0) {
  console.log("almost full");
} else {
  console.log("full");
}
```

### 4. Combine conditions
`&&` needs both sides true; `||` needs one; `!` flips a boolean.

```
const gpa = 3.6, credits = 18;
console.log(gpa >= 3.5 && credits >= 15);
console.log(gpa >= 3.9 || credits >= 15);
console.log(!(gpa >= 3.9));
```

### 5. Choose a value with a ternary
Use it for one value, not for side effects.

```
const enrolled = 42, capacity = 40;
const label = enrolled >= capacity ? "Full" : "Open";
console.log(label);
```

## Exercises

### Exercise 1: Even or odd
Print whether a number is even or odd using `%` and an `if`.

### Exercise 2: Letter grade
Turn a score of 0–100 into `A` (≥80), `B` (≥70), `C` (≥60) or `F` with an `else if` chain.

### Exercise 3: Falsy census
Log the boolean of each of `0`, `""`, `null`, `undefined`, `NaN`, `false`, `"0"`, `[]` and `{}` with
`Boolean(v)`, and note in the console which of the last three surprised you.

### Exercise 4: Two conditions
A student may register if GPA is at least 2.0 **and** unpaid fees are 0. Print `"may register"` or
the reason it failed.

### Exercise 5: Ternary rewrite
Rewrite your Exercise 1 answer as a single line using a ternary inside a template literal.

## Quizes

### Q1. What does `7 % 3` evaluate to?
1. `2.33`
2. `2`
3. `1`
4. `21`

### Q2. What does `"10" == 10` evaluate to, and why?
1. `false`, because the types differ
2. `true`, because `==` converts the string to a number before comparing
3. `true`, because `==` compares the text of both values
4. An error, because you cannot compare a string with a number

### Q3. Which of these is truthy?
1. `""`
2. `NaN`
3. `"0"`
4. `undefined`

### Q4. What does `const n = 0; console.log(n ? "yes" : "no");` print?
1. `yes`
2. `no`
3. `0`
4. `undefined`

### Q5. Given `const a = 5, b = "5";`, what does `a === b || a == b` evaluate to?
1. `true`, because `==` is satisfied even though `===` is not
2. `false`, because both comparisons fail
3. `true`, because `===` compares numbers loosely
4. `"5"`, because `||` returns the second value
