# The while loop

`while (cond) { … }` only has the condition — no built-in initialiser or step. You must change
something inside the body yourself, or the loop never ends. Reach for `while` when you don't know in
advance how many passes you need.

## Display
### HTML

```
<h1>Seats left</h1>
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
let seats = 5;
while (seats > 0) {
  console.log("seat left:", seats);
  seats--;
}
console.log("sold out");
document.getElementById("out").textContent = "Sold out — check the console for the countdown.";
```

## Your Tasks
### 1. Repeat with `while`
Change the tested variable inside the body, or the loop runs forever.

```
let seats = 3;
while (seats > 0) {
  console.log("seat left:", seats);
  seats--;
}
```

### 2. Count down to zero
The condition is checked before every pass, including the very first.

```
let n = 5;
while (n > 0) {
  console.log(n);
  n--;
}
```

### 3. Count up to a limit
`while` counts up just as easily as down — only the update direction changes.

```
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### 4. Loop forever, on purpose, with a `break`
`while (true)` never ends on its own — a `break` inside the body is what stops it.

```
let tries = 0;
while (true) {
  tries++;
  if (tries === 3) break;
}
console.log("stopped after", tries, "tries");
```

### 5. Spot the missing update
Without a change to the tested variable, the browser tab freezes.

```
// BUG: infinite loop — n is never changed
// let n = 5;
// while (n > 0) { console.log(n); }

let n = 5;
while (n > 0) {
  console.log(n);
  n--;   // the fix
}
```

## Exercises

### Exercise 1: Countdown
Use a `while` loop to count down from 10 to 1, then log `"go"`.

### Exercise 2: Sum until a target
Add random-looking numbers `3, 7, 2, 9, 4, 6` one at a time with a `while` loop, stopping as soon as
the running total passes 15, and log how many numbers it took.

### Exercise 3: Seats simulation
Start with 8 seats. Each pass "fills" one seat and logs how many remain, stopping at zero.

### Exercise 4: Convert for to while
Take a `for` loop that counts 1 to 5 and rewrite it as an equivalent `while` loop with the same
output.

### Exercise 5: Fix the infinite loop
Given a `while` loop whose body never changes the tested variable, add the missing line and confirm
in DevTools that it now finishes instead of freezing the tab.

## Quizes

### Q1. What must a `while` loop's body do to avoid running forever?
1. Nothing — `while` stops automatically after 1000 passes
2. Change the value the condition tests
3. Call `break` on the first pass
4. Include a `for` loop inside it

### Q2. When is a `while` loop's condition checked?
1. Only once, before the loop starts
2. Before every pass, including the first
3. Only after every pass
4. Only when `break` is called

### Q3. What does `while (true) { … break; … }` do?
1. Runs forever, ignoring `break`
2. Never runs the body at all
3. Runs until the `break` line is reached, then stops
4. Throws an error immediately

### Q4. Which loop has no built-in initialiser or step clause?
1. `for`
2. `while`
3. `for...of`
4. All loops have both

### Q5. What happens if `let n = 5; while (n > 0) { console.log(n); }` is run with the update line missing?
1. It logs `5` once and stops
2. It logs `5, 4, 3, 2, 1` and stops
3. It runs forever, freezing the tab
4. It throws a syntax error before running
