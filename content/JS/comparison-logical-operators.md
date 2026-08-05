# Comparison and logical operators

Arithmetic works as you expect: `+ - * /`, plus `%` (remainder), which is how you test divisibility —
`n % 2 === 0` means `n` is even. Comparison operators `> < >= <=` give a boolean.

For equality there are two forms, and only one is safe:

```
"5" === 5   // false — different types, no conversion
"5" == 5    // true  — == converts first, and hides bugs
```

Always use `===` and `!==`. Combine conditions with `&&` (both), `||` (either) and `!` (not). Any
value used as a condition is coerced to a boolean. Exactly six values are falsy: `0`, `""`, `null`,
`undefined`, `NaN` and `false`. Everything else — including `"0"`, `[]` and `{}` — is truthy.

## Display
### HTML

```
<h1>Operator check</h1>
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
console.log("both true:", score >= 60 && attended);
console.log("truthy check:", Boolean(score), Boolean(""));

document.getElementById("out").textContent = `score ${score}, attended ${attended}`;
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

### 3. Combine conditions
`&&` needs both sides true; `||` needs one; `!` flips a boolean.

```
const gpa = 3.6, credits = 18;
console.log(gpa >= 3.5 && credits >= 15);
console.log(gpa >= 3.9 || credits >= 15);
console.log(!(gpa >= 3.9));
```

### 4. Check truthiness directly
`Boolean(v)` shows exactly how a value would be treated as a condition.

```
console.log(Boolean(0), Boolean(1));
console.log(Boolean(""), Boolean("hi"));
```

### 5. List every falsy value
Only six values are ever falsy — everything else, including `"0"` and `[]`, is truthy.

```
[0, "", null, undefined, NaN, false, "0", [], {}].forEach(v =>
  console.log(v, "→", Boolean(v))
);
```

## Exercises

### Exercise 1: Even or odd
Print whether a number is even or odd using `%` and `===`.

### Exercise 2: Trust but verify
Log both `"10" == 10` and `"10" === 10`, and write a one-sentence explanation of why they differ.

### Exercise 3: Falsy census
Log the boolean of each of `0`, `""`, `null`, `undefined`, `NaN`, `false`, `"0"`, `[]` and `{}` with
`Boolean(v)`, and note in the console which of the last three surprised you.

### Exercise 4: Two conditions
A student may register if GPA is at least 2.0 **and** unpaid fees are 0. Log `true` or `false` using
`&&`.

### Exercise 5: Either condition
A course is visible if it is open **or** the viewer is an instructor. Log the result using `||` for
two different combinations of inputs.

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

### Q4. What does `true && false || true` evaluate to?
1. `false`
2. `true`
3. `undefined`
4. A syntax error

### Q5. Given `const a = 5, b = "5";`, what does `a === b || a == b` evaluate to?
1. `true`, because `==` is satisfied even though `===` is not
2. `false`, because both comparisons fail
3. `true`, because `===` compares numbers loosely
4. `"5"`, because `||` returns the second value
