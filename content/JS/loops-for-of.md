# Looping arrays with for...of

`for...of` walks an array and hands you each **element** directly — no index bookkeeping needed. It
is the clearest way to loop an array, and the one you will reach for almost every time.

```
for (const course of ["CE-201", "CE-210"]) {
  console.log(course);   // "CE-201", then "CE-210"
}
```

`for...in` looks similar but gives you an object's **keys**. Used on an array it hands you index
strings like `"0"` instead of the values — it is for objects, not arrays.

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
  html += `<li>${course}</li>`;
}
document.getElementById("list").innerHTML = html;
```

## Your Tasks
### 1. Walk an array with `for...of`
You get the element itself on every pass, ready to use.

```
const nicknames = ["Ploy", "Beam", "Nice"];
for (const n of nicknames) {
  console.log(n);
}
```

### 2. Build HTML in a `for...of` loop
Collect the string first, then touch the page once.

```
const rooms = ["ECC-401", "ECC-402", "ECC-505"];
let out = "";
for (const r of rooms) out += `<li>${r}</li>`;
document.getElementById("list").innerHTML = out;
```

### 3. Skip and stop inside `for...of`
`continue` and `break` work exactly as they do in a `for` loop.

```
for (const n of [4, 7, 8, 11, 12]) {
  if (n % 2 !== 0) continue;
  if (n > 10) break;
  console.log("even:", n);
}
```

### 4. See what `for...in` gives you on an array
It hands you index strings, not the values — a sign you picked the wrong loop.

```
const codes = ["CE-201", "CE-210"];
for (const key in codes) {
  console.log(key, typeof key);   // "0" "string", "1" "string"
}
```

### 5. Choose the right loop for the job
Arrays get `for...of`; objects get `for...in` (or `Object.keys`, covered later).

```
const codes = ["CE-201", "CE-210"];
for (const code of codes) console.log(code);   // values — correct for an array
```

## Exercises

### Exercise 1: Sum an array
Given `[3.41, 2.98, 3.75, 3.10]`, loop over it with `for...of` and log the total and the average.

### Exercise 2: First match
Loop over an array of course codes and `break` at the first one starting with `"CE-2"`, logging both
the match and how many passes it took.

### Exercise 3: Build a list
Loop an array of five room names with `for...of` and render them as `<li>` items.

### Exercise 4: Wrong tool
Run `for (const x in ["a", "b"]) console.log(x, typeof x)` and record in the console what `for...in`
actually gives you for an array.

### Exercise 5: Rewrite a for loop
Take a `for (let i = 0; i < arr.length; i++)` loop that only reads `arr[i]` and rewrite it as
`for...of`, confirming the output is identical.

## Quizes

### Q1. What does `for...of` give you on each pass over an array?
1. The index as a number
2. The index as a string
3. The element's value
4. A `[index, value]` pair

### Q2. What does `for...in` give you when used on an array?
1. The array's values, in order
2. The array's index strings, like `"0"` and `"1"`
3. A `TypeError`
4. The array's `length` once

### Q3. Why is `for...in` the wrong tool for looping an array?
1. It runs the body in reverse order
2. It cannot be used with `const`
3. It gives you keys, which for an array are index strings, not the values
4. It stops at the first empty slot

### Q4. What does `for (const n of [1, 2, 3]) { if (n === 2) continue; console.log(n); }` print?
1. `1 2 3`
2. `1 3`
3. `2`
4. Nothing — `continue` stops the loop

### Q5. Which loop type is generally preferred for walking an array?
1. `for...in`
2. `for...of`
3. Neither — always use `.forEach` instead
4. It never matters which one you pick
