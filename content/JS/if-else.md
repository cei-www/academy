# If, else if, else and ternary

`if` runs a block when its condition is true, `else if` tests another, `else` catches the rest. Only
the first true branch runs — the rest are skipped, even if they would also be true. For a single
value chosen from two, the ternary `cond ? a : b` is shorter than a four-line `if`.

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
### 1. Write a single `if`
Nothing runs when the condition is false — there is no `else` yet.

```
const seats = 0;
if (seats === 0) {
  console.log("full");
}
```

### 2. Add an `else`
`else` catches every case the `if` did not.

```
const seats = 3;
if (seats === 0) {
  console.log("full");
} else {
  console.log("seats available");
}
```

### 3. Chain `else if`
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

### 4. Choose a value with a ternary
Use it for one value, not for side effects.

```
const enrolled = 42, capacity = 40;
const label = enrolled >= capacity ? "Full" : "Open";
console.log(label);
```

### 5. Use a ternary inside a template literal
A ternary is an expression, so it can sit directly inside `${...}`.

```
const seats = 3;
console.log(`Status: ${seats > 0 ? "open" : "full"}`);
```

## Exercises

### Exercise 1: Letter grade
Turn a score of 0–100 into `A` (≥80), `B` (≥70), `C` (≥60) or `F` with an `else if` chain.

### Exercise 2: Rewrite as a ternary
Take an `if`/`else` that sets one variable to one of two values, and rewrite it as a single ternary
line.

### Exercise 3: Three-way ternary
Chain two ternaries to print `"pass"`, `"borderline"` or `"fail"` for a score, without using `if` at
all.

### Exercise 4: Registration check
A student may register only if GPA is at least 2.0. Print a message either way using `if`/`else`.

### Exercise 5: Order matters
Reorder the branches of an `else if` chain so a later, more specific condition is checked first, run
it, and describe in one sentence how the output changed.

## Quizes

### Q1. In an `if` / `else if` / `else` chain, how many branches run?
1. All branches whose condition is true
2. Only the first branch whose condition is true
3. Only the last branch, always
4. Exactly one, chosen at random

### Q2. What does `const n = 0; console.log(n ? "yes" : "no");` print?
1. `yes`
2. `no`
3. `0`
4. `undefined`

### Q3. When is a ternary a better choice than a four-line `if`/`else`?
1. Never — ternaries are only for booleans
2. When choosing a single value based on a condition
3. When the branches need multiple statements each
4. When there is no `else` case at all

### Q4. Given `let seats = 5; if (seats > 10) { seats = "plenty"; } else if (seats > 0) { seats = "some"; } else { seats = "full"; }`, what is `seats` after this runs?
1. `"plenty"`
2. `"some"`
3. `"full"`
4. `5`

### Q5. What does `const label = 3 > 5 ? "big" : "small";` set `label` to?
1. `"big"`
2. `"small"`
3. `true`
4. `undefined`
