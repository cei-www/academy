# Asynchronous JavaScript overview

JavaScript runs your code on one thread. Slow work — a timer, a network reply, a click — is handed to
the browser, which queues a callback when it is ready; the event loop runs that callback only once the
current code has finished. So `setTimeout(fn, 0)` never interrupts the next line, and a long loop
freezes the whole page.

A callback is a function you pass in to be run later. Nesting callbacks that depend on each other
drifts rightward and puts the error handling in every level.

A promise is an object representing a result that is not ready yet: pending, then either fulfilled
with a value or rejected with an error. `.then(fn)` handles the value, `.catch(fn)` the error,
`.finally(fn)` either. `.then` returns a promise, so returning one from inside it flattens the chain.

`async`/`await` is that chain written as straight lines. An `async` function always returns a promise,
`await` pauses it until its promise settles, and a rejection throws at the `await`, so ordinary
`try`/`catch` works. Awaiting calls that do not depend on each other one after another is slower than
needed: `Promise.all([...])` starts them together and resolves to an array of results.

## Display
### HTML

```
<h1>Enrolment</h1>
<p><button id="go" type="button">Load</button></p>
<pre id="out">idle</pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; min-height: 3em; }
button { padding: 6px 10px; }
```

### Javascript

```
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const fail = (ms, message) => new Promise((_, reject) => setTimeout(() => reject(new Error(message)), ms));
const getStudent = id => delay(400, { id, name: "Ploy", year: 2 });
const getCourses = id => delay(600, ["CE-231", "CE-232"]);
console.log("1 sync");
setTimeout(() => console.log("3 timer"), 0);
Promise.resolve().then(() => console.log("2.5 promise"));
console.log("2 sync");
const out = document.getElementById("out");
document.getElementById("go").addEventListener("click", async () => {
  out.textContent = "loading...";
  try {
    const [student, courses] = await Promise.all([getStudent(7), getCourses(7)]);
    out.textContent = `${student.name} (year ${student.year}): ${courses.join(", ")}`;
  } catch (error) {
    out.textContent = "failed: " + error.message;
  } finally {
    console.log("done");
  }
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

### 4. Rewrite it with await
`await` unwraps the value, and a rejection lands in the ordinary `catch`.

```
async function load() {
  try {
    const id = await delay(200, 7);
    const student = await delay(200, { id, name: "Beam" });
    console.log(student.name);
  } catch (error) { console.log("failed:", error.message); }
}
load();
```

### 5. Run independent work in parallel
Two 600 ms awaits in sequence take 1200 ms; `Promise.all` takes 600 ms.

```
console.time("all");
(async () => {                      // a plain script has no top-level await
  const [a, b] = await Promise.all([delay(600, "A"), delay(600, "B")]);
  console.timeEnd("all");
  console.log(a, b);
})();
```

## Exercises

### Exercise 1: Sequential versus parallel
Time both versions of Task 5 with `console.time`, log the two durations, and write a comment stating
when `Promise.all` is *not* the right choice.

### Exercise 2: Handle a rejection
Reject with the `fail` helper, catch it in an `async` function, and show its message in `#out`.

### Exercise 3: Callback pyramid
Write three nested `setTimeout` callbacks that log `1`, `2`, `3` in order, then rewrite it as a
promise chain and compare the two in a comment.

### Exercise 4: Retry
Write `retry(makePromise, times)` that retries on rejection up to `times` and rethrows the last error.
Test it with a helper that fails twice, then resolves.

### Exercise 5: Await at the prompt
At the console prompt type `delay(1000, "hi")`, then on a new entry type
`delay(1000, "hi").then(console.log)`. Explain the two different results in a comment.

## Quizes

### Q1. What does this print? `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");`
1. `A B C`
2. `B A C`
3. `C A B`
4. `A C B`

### Q2. A promise that has been rejected is best handled with
1. `.then` only
2. `.catch`, or `try`/`catch` around an `await`
3. `finally` alone
4. An `if` on the returned value

### Q3. What does an `async` function return?
1. The value after the `await` finishes
2. `undefined` until it completes
3. A promise, always
4. Whatever the last `await` produced, synchronously

### Q4. `await Promise.all([p1, p2])` where each takes 500 ms takes about
1. 500 ms, and gives an array of both results
2. 1000 ms, and gives an array of both results
3. 500 ms, and gives only the first result
4. 0 ms, because the promises already started

### Q5. Why does a long `for` loop freeze the page?
1. Loops are compiled differently from other code
2. The browser throttles loops that run over 16 ms
3. The single thread is busy, so the event loop cannot run any queued callback until it ends
4. Because `setTimeout` callbacks have priority over rendering
