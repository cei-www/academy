# Loops

A loop repeats a block. The `for` loop puts all three controls on one line: the initialiser, the
condition checked before each pass, and the update run after each pass.

```
for (let i = 0; i < 3; i++) {
  console.log(i);   // 0, 1, 2
}
```

`while (cond) { … }` only has the condition, so you must change something inside the body or the loop
never ends.

To walk an array, `for...of` gives you each element directly and is the clearest choice. `for...in`
gives you an object's *keys* — it is for objects, and using it on an array hands you index strings
like `"0"` instead of values.

Inside any loop, `break` leaves it immediately and `continue` skips to the next pass. Loops are how
you build a list: collect text in a variable, then write it to the page once at the end.

## Display
### HTML

```
<h1>Course list</h1>
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
const courses = ["CE-201 Data Structures", "CE-210 Digital Logic", "CE-233 Web Development"];

let html = "";
for (const course of courses) {
  console.log("adding", course);
  html = html + `<li>${course}</li>`;
}
document.getElementById("list").innerHTML = html;

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log("pass", i);
}
```

## Your Tasks
### 1. Count with a `for` loop
The three clauses are start, keep-going test, and step.

```
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 2. Repeat with `while`
Change the variable inside the body or the loop runs forever.

```
let seats = 3;
while (seats > 0) {
  console.log("seat left:", seats);
  seats--;
}
```

### 3. Walk an array with `for...of`
You get the element itself, not its index.

```
const nicknames = ["Ploy", "Beam", "Nice"];
for (const n of nicknames) {
  console.log(n);
}
```

### 4. Skip and stop
`continue` jumps to the next pass; `break` ends the loop.

```
for (const n of [4, 7, 8, 11, 12]) {
  if (n % 2 !== 0) continue;
  if (n > 10) break;
  console.log("even:", n);
}
```

### 5. Build HTML in a loop
Collect the string first, then touch the page once.

```
const rooms = ["ECC-401", "ECC-402", "ECC-505"];
let out = "";
for (const r of rooms) out += `<li>${r}</li>`;
document.getElementById("list").innerHTML = out;
```

## Exercises

### Exercise 1: Times table
Print the 7 times table from 7 × 1 to 7 × 12 using one `for` loop.

### Exercise 2: Sum an array
Given `[3.41, 2.98, 3.75, 3.10]`, loop over it and log the total and the average.

### Exercise 3: First match
Loop over an array of course codes and `break` at the first one starting with `"CE-2"`, logging both
the match and how many passes it took.

### Exercise 4: Countdown
Use a `while` loop to count down from 10 to 1, then log `"go"`.

### Exercise 5: Wrong tool
Run `for (const x in ["a", "b"]) console.log(x, typeof x)` and record in the console what `for...in`
actually gives you for an array.

## Quizes

### Q1. In `for (let i = 0; i < n; i++)`, when is `i++` executed?
1. Before the first condition check
2. After each pass through the body
3. Only when the condition is false
4. Once, when the loop is set up

### Q2. What does `for...of` give you on each pass over an array?
1. The index as a number
2. The index as a string
3. The element's value
4. A `[index, value]` pair

### Q3. What is the difference between `break` and `continue`?
1. `break` ends the loop; `continue` skips to the next pass
2. `continue` ends the loop; `break` skips to the next pass
3. Both end the loop, but `break` also returns a value
4. `break` works only in `while`, `continue` only in `for`

### Q4. Why is `for...in` the wrong tool for an array?
1. It runs the body in reverse order
2. It cannot be used with `const`
3. It gives you keys, which for an array are index strings, not the values
4. It stops at the first empty slot

### Q5. What does `let s = 0; for (let i = 1; i <= 4; i++) { if (i === 2) continue; s += i; } console.log(s);` print?
1. `10`
2. `8`
3. `6`
4. `3`
