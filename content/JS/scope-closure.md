# Scope, hoisting and closures

Scope is the region of code in which a name is visible. `let` and `const` are scoped to the nearest
block — any `{ ... }`, including a loop body or an `if`. `var` ignores blocks and belongs to the whole
enclosing function, which is why this course avoids it.

A `let` binding exists from the top of its block but cannot be read until its declaration line runs.
That gap is the temporal dead zone, and reading the name inside it throws a `ReferenceError`. A `var`
in the same position hands you `undefined` instead: a silent wrong answer instead of a loud one.

When a name is not found in the current scope, JavaScript looks in the enclosing scope, then outward
to the global scope. This scope chain is fixed by where the code is written, not by who calls it.

A function keeps its chain alive after the outer call has returned. A function together with the
variables it captured is a closure — the basis of private state in JavaScript.

## Display
### HTML

```
<h1>Counters</h1>
<p>
  <button id="a" type="button">Counter A</button>
  <button id="b" type="button">Counter B</button>
</p>
<p id="out">A: 0 / B: 0</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
button { padding: 6px 10px; margin-right: 6px; }
#out { font-weight: 600; color: #6B4207; }
```

### Javascript

```
function makeCounter(start = 0) {
  let count = start;                    // private: only the two functions below can see it
  return {
    next() { count += 1; return count; },
    read() { return count; }
  };
}

const a = makeCounter();
const b = makeCounter(10);
const out = document.getElementById("out");
const show = () => { out.textContent = `A: ${a.read()} / B: ${b.read()}`; };

document.getElementById("a").addEventListener("click", () => { a.next(); show(); });
document.getElementById("b").addEventListener("click", () => { b.next(); show(); });

for (var i = 1; i <= 3; i++) setTimeout(() => console.log("var i =", i), 0);
for (let j = 1; j <= 3; j++) setTimeout(() => console.log("let j =", j), 0);
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

### 4. Keep state in a closure
`count` survives after `makeCounter` returns, and each call gets its own copy.

```
const c1 = makeCounter();
const c2 = makeCounter();
c1.next(); c1.next();
console.log(c1.read(), c2.read());   // 2 0
console.log(c1.count);               // undefined — not reachable from outside
```

### 5. Fix the loop bug
All three `var` callbacks share one `i`, which is `4` by the time they run. `let` makes a fresh
binding per iteration.

```
for (let k = 1; k <= 3; k++) {
  setTimeout(() => console.log(k), 0);   // 1 2 3
}
```

## Exercises

### Exercise 1: Counter with reset
Extend `makeCounter` with a `reset()` method that puts the count back to its original `start` value,
without exposing `count` itself.

### Exercise 2: Run once
Write `once(fn)` that returns a function calling `fn` only on its first invocation and returning the
same first result on every later call. Prove it with `console.log` inside `fn`.

### Exercise 3: Dead zone at the prompt
At the console prompt, type `x` on its own and read the error, then on a new entry type
`let x = 5; x`. Explain in a comment why `x` is gone again on the next entry.

### Exercise 4: Three buttons, three numbers
Build three buttons in a loop with `var` so every one of them logs `3`, then change one keyword so
each logs its own index.

### Exercise 5: Private registry
Write `makeRegistry()` returning `{ add(name), has(name), size() }` backed by an array that no code
outside the factory can read or modify.

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

### Q3. Reading a `const` above its declaration line produces
1. `undefined`
2. `null`
3. A `ReferenceError`
4. The value, because declarations are hoisted with their value

### Q4. A closure is
1. A function that has finished running
2. A function together with the outer variables it captured
3. Any function defined inside an object literal
4. A block wrapped in braces to hide its variables

### Q5. Two calls to the same counter factory share their `count` variable
1. Yes, because the variable is declared once in the source
2. Yes, but only when the factory uses `let`
3. No, because `count` is stored on the global object
4. No, each call creates a new variable that its returned functions capture
