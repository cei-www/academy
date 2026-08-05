# The for loop

The `for` loop puts all three controls on one line: the initialiser (runs once), the condition
(checked before each pass), and the update (runs after each pass).

```
for (let i = 0; i < 3; i++) {
  console.log(i);   // 0, 1, 2
}
```

Inside any loop, `break` leaves it immediately and `continue` skips straight to the next pass. Loops
are how you build a list: collect text in a variable, then write it to the page once at the end.

## Display
### HTML

```
<h1>Seat numbers</h1>
<ul id="list"></ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#list li { padding: 4px 0; border-bottom: 1px solid #DDE2E8; }
```

### Javascript

```
let html = "";
for (let i = 1; i <= 5; i++) {
  html += `<li>Seat ${i}</li>`;
}
document.getElementById("list").innerHTML = html;

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log("pass", i);
}
```

## Your Tasks
### 1. Count up with a `for` loop
The three clauses are start, keep-going test, and step.

```
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 2. Count down with a `for` loop
Start high, test for the floor, and step by `-1`.

```
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

### 3. Skip a pass with `continue`
`continue` jumps straight to the next pass without running the rest of the body.

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

### 4. Stop early with `break`
`break` ends the loop immediately, even if the condition would still be true.

```
for (let i = 1; i <= 10; i++) {
  if (i > 4) break;
  console.log(i);
}
```

### 5. Build HTML in a loop
Collect the string first, then touch the page once.

```
let out = "";
for (let i = 1; i <= 3; i++) {
  out += `<li>Room ${i}</li>`;
}
document.getElementById("list").innerHTML = out;
```

## Exercises

### Exercise 1: Times table
Print the 7 times table from 7 × 1 to 7 × 12 using one `for` loop.

### Exercise 2: Sum a range
Add up every integer from 1 to 100 with a `for` loop and log the total.

### Exercise 3: Numbered list
Build a `<ul>` of 10 items labelled "Item 1" through "Item 10" using a `for` loop.

### Exercise 4: Count down with for
Use a `for` loop (not `while`) to count down from 10 to 1, then log `"go"` after the loop.

### Exercise 5: Off-by-one
Change `i <= 5` to `i < 5` in a counting loop, run it, and describe in one sentence how the output
changed.

## Quizes

### Q1. In `for (let i = 0; i < n; i++)`, when is `i++` executed?
1. Before the first condition check
2. After each pass through the body
3. Only when the condition is false
4. Once, when the loop is set up

### Q2. What is the difference between `break` and `continue`?
1. `break` ends the loop; `continue` skips to the next pass
2. `continue` ends the loop; `break` skips to the next pass
3. Both end the loop, but `break` also returns a value
4. `break` works only in `while`, `continue` only in `for`

### Q3. What does `for (let i = 5; i >= 1; i--) { console.log(i); }` print?
1. `1 2 3 4 5`
2. `5 4 3 2 1`
3. `0 1 2 3 4`
4. Nothing — the condition is false immediately

### Q4. How many times does `for (let i = 0; i < 5; i++)` run its body?
1. 4
2. 5
3. 6
4. Infinitely

### Q5. What does `let s = 0; for (let i = 1; i <= 4; i++) { if (i === 2) continue; s += i; } console.log(s);` print?
1. `10`
2. `8`
3. `6`
4. `3`
