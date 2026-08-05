# Errors and CORS

`fetch` rejects only when the exchange never completed — no network, DNS failure, the request was
aborted. A `404` or a `500` is a completed exchange, so the promise resolves and your code carries on
holding a response that is not the one you wanted. Check `res.ok` yourself and throw.

Wrap the `await` in `try`/`catch` so a network failure and a bad status land in the same handler, and
put a message on the screen there — a user staring at an empty list cannot tell whether to retry.

A request that hangs never rejects on its own. `AbortController` gives you a `signal` to pass to
`fetch` and an `abort()` to call from a `setTimeout`; aborting rejects the promise with an error
whose `name` is `AbortError`.

CORS is a separate problem. When you fetch another origin, the browser sends the request anyway and
then refuses to hand you the response unless it carries an `Access-Control-Allow-Origin` header: the
rule is about who may read the answer. Only the server can send that header, so no client-side flag
fixes CORS. Everything in this course is same-origin, so it will not bite you here.

## Display
### HTML

```
<h2>Loading students</h2>
<p id="out">…</p>
<button id="good" type="button">Load the real file</button>
<button id="bad" type="button">Load a missing file</button>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
#out { border-left: 4px solid #DDE2E8; padding: 8px; background: #EEF1F4; }
#out.error { border-left-color: #F2A93B; color: #6B4207; }
button { margin-right: 6px; padding: 6px 10px; }
```

### Javascript

```
const out = document.getElementById("out");

async function load(url) {
  out.className = "";
  out.textContent = "Loading…";
  try {
    const res = await fetch(url);
    console.log(url, "status", res.status, "ok", res.ok);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const students = await res.json();
    out.textContent = students.length + " students loaded";
  } catch (err) {
    console.log("caught:", err.name, err.message);
    out.className = "error";
    out.textContent = "Could not load the students. Please try again.";
  }
}

document.getElementById("good").addEventListener("click", () => load("resources/data/students.json"));
document.getElementById("bad").addEventListener("click", () => load("resources/data/nope.json"));
load("resources/data/nope.json");
```

## Your Tasks
### 1. Prove that a 404 resolves
No `catch` runs here, and the code happily continues with the wrong response.

```
const res = await fetch("resources/data/nope.json");
console.log("resolved anyway:", res.status, res.ok);
```

### 2. Turn a bad status into an error
`res.ok` is the check; throwing is how you get the failure into one place.

```
const res = await fetch("resources/data/nope.json");
if (!res.ok) throw new Error("HTTP " + res.status);
const data = await res.json();
```

### 3. Catch both kinds of failure
`try`/`catch` around the `await` covers the thrown status and a dead network alike.

```
try {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  console.log(await res.json());
} catch (err) {
  console.log("failed:", err.message);
}
```

### 4. Show the user an error state
An error the user never sees is the same as no error handling.

```
catch (err) {
  out.className = "error";
  out.textContent = "Could not load the students. Please try again.";
  console.log(err.message);
}
```

### 5. Give up after a timeout
The controller's `signal` goes into `fetch`; clear the timer either way so it cannot fire late.

```
const ctrl = new AbortController();
const timer = setTimeout(() => ctrl.abort(), 3000);
try {
  const res = await fetch(url, { signal: ctrl.signal });
  console.log(res.status);
} finally {
  clearTimeout(timer);
}
```

## Exercises

### Exercise 1: Real 404
Fetch `resources/data/nope.json`, log the status, and render `Data unavailable (404)` into the page.

### Exercise 2: Right file, wrong parser
Fetch `resources/img/ce-logo.svg` and call `res.json()` on it. `res.ok` is `true`, yet it throws —
read the error in the console and say which step failed.

### Exercise 3: Abort immediately
Repeat the timeout task with the timer set to `1` millisecond so the abort fires, and log `err.name`.

### Exercise 4: Retry
Add a Retry button to the error state that re-runs the request and clears the message on success.

### Exercise 5: Classify the failure
Write `describe(err)` returning `"timed out"` for an `AbortError`, `"network or CORS"` for a
`TypeError`, and `"HTTP error"` otherwise, and call it from your `catch`.

## Quizes

### Q1. The server answers `404`. What does the `fetch` promise do?
1. Rejects with an `HttpError`
2. Resolves with a response whose `ok` is `false`
3. Rejects with a `TypeError`
4. Resolves with `null`

### Q2. What does `try { await fetch("nope.json"); console.log("A"); } catch { console.log("B"); }` print when the file is missing?
1. `A`
2. `B`
3. `A` then `B`
4. Nothing — the promise never settles

### Q3. Which situations make `fetch` actually reject?
1. Any status of 400 or above
2. A malformed JSON body
3. The request never completed — offline, DNS failure, or aborted
4. Any response that is not `200`

### Q4. You abort a request with `AbortController`. What is `err.name` in the `catch`?
1. `TimeoutError`
2. `CancelError`
3. `NetworkError`
4. `AbortError`

### Q5. Your fetch to another site fails with a CORS error. What is actually happening?
1. The browser refused to send the request, and only a proxy can get around it
2. The request was blocked because your page is not served over HTTPS
3. The request was sent, and the browser withholds the response because the server sent no `Access-Control-Allow-Origin`
4. The server rejected the request with a `403`, which you fix by adding a header to `fetch`
