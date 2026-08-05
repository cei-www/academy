# Practical destructuring patterns

Destructuring shows up in more places than a single assignment. `for...of` can destructure each item
as it loops, which is exactly how you unpack `Object.entries()` pairs. Swapping two variables needs no
temporary third one with array destructuring. Nested patterns reach straight into a deeply nested
object in one line, and a `catch` clause can destructure the caught error directly.

## Display
### HTML

```
<h1>Course roster</h1>
<pre id="out"></pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; }
```

### Javascript

```
const grades = { Ploy: 3.52, Nan: 2.98, Beam: 3.71 };
const lines = [];

for (const [name, gpa] of Object.entries(grades)) {
  lines.push(`${name}: ${gpa}`);
}

let a = 1, b = 2;
[a, b] = [b, a];
lines.push(`swapped: a=${a} b=${b}`);

const config = { theme: { colors: { primary: "#F2A93B" } } };
const { theme: { colors: { primary } } } = config;
lines.push(`primary: ${primary}`);

try {
  JSON.parse("{ bad json");
} catch ({ message }) {
  lines.push(`caught: ${message}`);
}

document.getElementById("out").textContent = lines.join("\n");
```

## Your Tasks
### 1. Destructure while looping
`for...of` can unpack each item on the way past, no extra line needed.

```
for (const [name, gpa] of Object.entries(grades)) {
  console.log(name, gpa);
}
```

### 2. Swap two variables without a temp
Array destructuring evaluates the right side fully before assigning.

```
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);   // 2 1
```

### 3. Reach into a nested object
Patterns nest as deep as the data does.

```
const { theme: { colors: { primary } } } = config;
console.log(primary);
```

### 4. Destructure a caught error
`catch` accepts a pattern, same as any other binding.

```
try {
  JSON.parse("not json");
} catch ({ message }) {
  console.log("failed:", message);
}
```

### 5. Destructure a function's array return
A function returning `[value, error]` unpacks the same way `useState`-style pairs do elsewhere.

```
function divide(a, b) {
  return b === 0 ? [null, "cannot divide by zero"] : [a / b, null];
}
const [result, error] = divide(10, 2);
console.log(result, error);
```

## Exercises

### Exercise 1: Entries loop
Given an object of student-to-GPA pairs, log each `"name: gpa"` line using `for...of` over
`Object.entries`.

### Exercise 2: Three-way swap
Extend the swap pattern to three variables in one destructuring assignment, and confirm the order
rotates correctly.

### Exercise 3: Deep config read
Given a three-level nested config object, pull out one leaf value in a single destructuring
statement, with a default in case it is missing.

### Exercise 4: Safe JSON parse
Write `safeParse(text)` returning `[value, null]` on success or `[null, error.message]` on failure,
using a destructured `catch`.

### Exercise 5: Unpack a pair-returning function
Write a function returning `[min, max]` for an array, and destructure its result directly in the
call site.

## Quizes

### Q1. What does `Object.entries({ a: 1, b: 2 })` return, before destructuring?
1. `["a", "b"]`
2. `[1, 2]`
3. `[["a", 1], ["b", 2]]`
4. `{ a: 1, b: 2 }`

### Q2. How does `[a, b] = [b, a]` swap two variables?
1. It does not — this is invalid syntax
2. The right side is fully evaluated into a temporary array first, then destructured back
3. It only works for numbers, not strings
4. It requires a `let` declaration on the same line

### Q3. What does `catch ({ message })` do?
1. Nothing — `catch` cannot take a pattern
2. Destructures the caught error, pulling out its `message` directly
3. Only works with custom error classes
4. Silently swallows the error

### Q4. What does destructuring a function's `[value, error]` return let you avoid?
1. Returning more than one value at all
2. A separate `.value` and `.error` property access on every call
3. Using `try`/`catch` ever again
4. Declaring the function with `function` instead of an arrow

### Q5. How deep can a destructuring pattern nest?
1. Only one level
2. As deep as the data itself goes
3. Exactly two levels, no more
4. Nesting is not supported in object destructuring
