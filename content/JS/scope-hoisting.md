# Scope and hoisting

Scope is the region of code in which a name is visible. `let` and `const` are scoped to the nearest
block — any `{ ... }`, including a loop body or an `if`. `var` ignores blocks and belongs to the whole
enclosing function, which is why this course avoids it.

A `let` binding exists from the top of its block but cannot be read until its declaration line runs.
That gap is the temporal dead zone, and reading the name inside it throws a `ReferenceError`. A `var`
in the same position hands you `undefined` instead: a silent wrong answer instead of a loud one.

When a name is not found in the current scope, JavaScript looks in the enclosing scope, then outward
to the global scope — the scope chain, fixed by where the code is written, not by who calls it.

## Display
### HTML

```
<h1>Scope demo</h1>
<p id="out"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
#out { font-weight: 600; color: #6B4207; white-space: pre; }
```

### Javascript

```
function demo() {
  if (true) {
    let inner = "block-scoped";
    var leaked = "function-scoped";
  }
  return leaked; // "leaked" reaches here; "inner" would not
}

const lines = [];
lines.push("demo(): " + demo());

for (var i = 1; i <= 3; i++) setTimeout(() => lines.push("var i = " + i), 0);
for (let j = 1; j <= 3; j++) setTimeout(() => lines.push("let j = " + j), 0);

setTimeout(() => { document.getElementById("out").textContent = lines.join("\n"); }, 10);
```

## Your Tasks
### 1. See block scope
`let` stops at the closing brace; `var` leaks out of the block into the whole function.

```
function demo() {
  if (true) { let inner = "block"; var leaked = "function"; }
  console.log(leaked);      // "function"
  console.log(inner);       // ReferenceError: inner is not defined
}
demo();
```

### 2. Hit the temporal dead zone
Both names exist before their line runs, but only `var` is readable there.

```
console.log(typeof loose);  // "undefined"
console.log(strict);        // ReferenceError: Cannot access 'strict' before initialization
var loose = 1;
let strict = 2;
```

### 3. Follow the scope chain
The inner function finds `lab` two levels up because of where it is written.

```
const lab = "CE Lab";
function outer() {
  const room = "A-401";
  function inner() { console.log(lab, room); }
  inner();
}
outer();
```

### 4. Fix the loop bug
All three `var` callbacks share one `i`, which is `4` by the time they run. `let` makes a fresh
binding per iteration.

```
for (let k = 1; k <= 3; k++) {
  setTimeout(() => console.log(k), 0);   // 1 2 3
}
```

### 5. Compare var and let side by side
Running both loops back to back makes the difference visible in one place.

```
for (var i = 1; i <= 3; i++) setTimeout(() => console.log("var:", i), 0);
for (let j = 1; j <= 3; j++) setTimeout(() => console.log("let:", j), 0);
```

## Exercises

### Exercise 1: Leak versus contain
Write a function with an `if` block declaring one `var` and one `let`, and confirm which name is
readable after the block ends.

### Exercise 2: Dead zone at the prompt
At the console prompt, type `x` on its own and read the error, then on a new entry type
`let x = 5; x`. Explain in a comment why `x` is gone again on the next entry.

### Exercise 3: Three buttons, three numbers
Build three buttons in a loop with `var` so every one of them logs `3`, then change one keyword so
each logs its own index.

### Exercise 4: Trace the scope chain
Nest three functions, each declaring one variable, and have the innermost log all three names.

### Exercise 5: Convert a var-based loop
Take a `for (var …)` loop with a `setTimeout` bug and fix it by changing only the keyword.

## Quizes

### Q1. What does `let` add that `var` does not?
1. Type checking on assignment
2. Automatic hoisting to the top of the file
3. Protection against reassignment
4. Block scope and a temporal dead zone

### Q2. What does this print? `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);`
1. `3 3 3`
2. `0 1 2`
3. `0 0 0`
4. A `ReferenceError`

### Q3. Reading a `let` variable above its declaration line produces
1. `undefined`
2. `null`
3. A `ReferenceError`
4. The value, because declarations are hoisted with their value

### Q4. Where does the JavaScript engine look next when a name is not found in the current scope?
1. Nowhere — it throws immediately
2. The enclosing scope, and then outward toward global
3. A random other function's scope
4. The DOM

### Q5. What decides a function's scope chain?
1. Which object called the function
2. Where the function is written in the source
3. The order functions are defined in the file
4. The number of arguments passed to it
