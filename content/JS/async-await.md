# async and await

`async`/`await` is a promise chain written as straight lines instead of `.then` calls. An `async`
function always returns a promise, `await` pauses it until its promise settles, and a rejection
throws right at the `await`, so ordinary `try`/`catch` works exactly like it does for synchronous
code.

Awaiting calls that do not depend on each other one after another is slower than needed:
`Promise.all([...])` starts them together and resolves to an array of results once every one of them
finishes.

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
```

### Javascript

```
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getStudent = id => delay(400, { id, name: "Ploy", year: 2 });
const getCourses = id => delay(600, ["CE-231", "CE-232"]);

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
### 1. Rewrite a chain with await
`await` unwraps the value, one line per step.

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

### 2. Confirm async always returns a promise
Even a function that never awaits still returns a promise-wrapped value.

```
async function five() { return 5; }
five().then(v => console.log(v));   // 5
```

### 3. Catch a rejection with try/catch
A rejected `await` throws, so it lands in the same `catch` as any other error.

```
async function risky() {
  try {
    await fail(200, "network down");
  } catch (error) {
    console.log("caught:", error.message);
  }
}
```

### 4. Run independent work in parallel
Two 600 ms awaits in sequence take 1200 ms; `Promise.all` takes 600 ms.

```
console.time("all");
(async () => {
  const [a, b] = await Promise.all([delay(600, "A"), delay(600, "B")]);
  console.timeEnd("all");
  console.log(a, b);
})();
```

### 5. Await inside a loop, on purpose
Sometimes each step genuinely depends on the last, so sequential `await` is correct.

```
async function runInOrder(ids) {
  const results = [];
  for (const id of ids) {
    results.push(await getStudent(id));   // each call may depend on prior state
  }
  return results;
}
```

## Exercises

### Exercise 1: Sequential versus parallel
Time both a sequential-`await` version and a `Promise.all` version of two independent loads with
`console.time`, log the two durations, and write a comment stating when `Promise.all` is *not* the
right choice.

### Exercise 2: Handle a rejection
Reject with a helper like `fail`, catch it in an `async` function, and show its message on the page.

### Exercise 3: Retry
Write `retry(makePromise, times)` that retries on rejection up to `times` and rethrows the last error.
Test it with a helper that fails twice, then resolves.

### Exercise 4: Load two things together
Load a student and their courses with `Promise.all`, and render both once both are ready.

### Exercise 5: Await at the prompt
At the console prompt type `delay(1000, "hi")`, then on a new entry type
`await delay(1000, "hi")`. Explain the two different results in a comment.

## Quizes

### Q1. What does an `async` function return?
1. The value after the `await` finishes
2. `undefined` until it completes
3. A promise, always
4. Whatever the last `await` produced, synchronously

### Q2. `await Promise.all([p1, p2])` where each takes 500 ms takes about
1. 500 ms, and gives an array of both results
2. 1000 ms, and gives an array of both results
3. 500 ms, and gives only the first result
4. 0 ms, because the promises already started

### Q3. How does a rejected `await` behave inside an `async` function?
1. It resolves to `undefined` silently
2. It throws at that line, catchable with an ordinary `try`/`catch`
3. It stops the whole script immediately, uncatchable
4. It retries automatically up to three times

### Q4. Why is awaiting two independent calls one after another often wasteful?
1. It is never wasteful
2. Each `await` blocks the next call from starting until the first finishes, even though neither
   depends on the other
3. `await` always runs calls in parallel automatically
4. `await` cannot be used twice in one function

### Q5. When is sequential `await` (not `Promise.all`) the right choice?
1. Never — always prefer `Promise.all`
2. When each step genuinely depends on the result of the previous one
3. Only inside `for` loops
4. Only when there is exactly one promise to await
