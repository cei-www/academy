# Promises

JavaScript runs your code on one thread. Slow work — a timer, a network reply, a click — is handed to
the browser, which queues a callback when it is ready; the event loop runs that callback only once the
current code has finished. So `setTimeout(fn, 0)` never interrupts the next line, and a long loop
freezes the whole page.

A promise is an object representing a result that is not ready yet: pending, then either fulfilled
with a value or rejected with an error. `.then(fn)` handles the value, `.catch(fn)` the error,
`.finally(fn)` either. `.then` returns a promise, so returning one from inside it flattens what would
otherwise be nested callbacks into a flat chain.

## Display
### HTML

```
<h1>Load a student</h1>
<p><button id="go" type="button">Load</button></p>
<pre id="out">idle</pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; min-height: 3em; }
```

### Javascript

```
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

console.log("1 sync");
setTimeout(() => console.log("3 timer"), 0);
Promise.resolve().then(() => console.log("2.5 promise"));
console.log("2 sync");

const out = document.getElementById("out");
document.getElementById("go").addEventListener("click", () => {
  out.textContent = "loading...";
  delay(300, 7)
    .then(id => delay(300, { id, name: "Ploy" }))
    .then(student => { out.textContent = student.name; })
    .catch(error => { out.textContent = "failed: " + error.message; })
    .finally(() => console.log("settled"));
});
```

## Your Tasks
### 1. Watch the ordering
`0` milliseconds means "as soon as the current code finishes", not "now".

```
console.log("first");
setTimeout(() => console.log("third"), 0);
console.log("second");
```

### 2. Make a promise from a timer
The executor gets `resolve` and `reject`; call one of them when the work is done.

```
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
delay(300, "ready").then(v => console.log(v));
console.log("this line runs first");
```

### 3. Chain instead of nesting
Returning a promise inside `.then` keeps the next step at the same indent level.

```
delay(200, 7)
  .then(id => delay(200, { id, name: "Beam" }))
  .then(student => console.log(student.name))
  .catch(error => console.log("failed:", error.message))
  .finally(() => console.log("settled"));
```

### 4. Handle a rejection
`.catch` receives whatever was passed to `reject`.

```
const fail = (ms, message) => new Promise((_, reject) => setTimeout(() => reject(new Error(message)), ms));
fail(200, "network down").catch(e => console.log("caught:", e.message));
```

### 5. Resolve immediately
`Promise.resolve(value)` creates an already-fulfilled promise, useful for testing a chain.

```
Promise.resolve(42).then(v => console.log(v));
```

## Exercises

### Exercise 1: Chained load
Chain two `delay` calls, where the second depends on the first's result, and log the final value.

### Exercise 2: Handle a rejection
Reject with a helper like `fail`, catch it, and show its message in an on-page element.

### Exercise 3: Callback pyramid
Write three nested `setTimeout` callbacks that log `1`, `2`, `3` in order, then rewrite it as a
promise chain and compare the two in a comment.

### Exercise 4: Finally always runs
Add a `.finally()` to a chain that sometimes rejects and sometimes resolves, and confirm it logs on
both paths.

### Exercise 5: Explain the ordering
At the console prompt, run `console.log("A"); setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C")); console.log("D");` and explain the printed order in a
comment.

## Quizes

### Q1. What does this print? `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");`
1. `A B C`
2. `B A C`
3. `C A B`
4. `A C B`

### Q2. A promise that has been rejected is best handled with
1. `.then` only
2. `.catch`
3. `finally` alone
4. An `if` on the returned value

### Q3. What does `.then` return?
1. `undefined`
2. The original promise, unchanged
3. A new promise, which is why chains can keep extending
4. The resolved value directly, synchronously

### Q4. Why does chaining `.then` calls avoid the "callback pyramid"?
1. It does not — chaining is identical to nesting
2. Each `.then` stays at the same indent level instead of nesting one inside another
3. `.then` cannot be chained more than once
4. Chaining removes the need for error handling

### Q5. Why does a long `for` loop freeze the page?
1. Loops are compiled differently from other code
2. The browser throttles loops that run over 16 ms
3. The single thread is busy, so the event loop cannot run any queued callback until it ends
4. Because `setTimeout` callbacks have priority over rendering
