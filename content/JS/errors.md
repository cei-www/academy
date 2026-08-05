# Error handling overview

When a statement throws, the rest of the block is abandoned and JavaScript looks for the nearest
enclosing `catch`, which receives the thrown value. `finally` runs either way — after success, after a
caught error, even after a `return` — which makes it the place to release whatever you took.

`throw` sends a value up. Always throw an `Error` (or a subclass), never a string: an `Error` carries
`name`, `message` and a `stack` recording where it came from, and code downstream can rely on those.

Subclass it when callers need to tell your failures apart:

```
class ValidationError extends Error {
  constructor(field, message) { super(message); this.name = "ValidationError"; this.field = field; }
}
```

Validate at the boundary where data enters your program and let the rest of the code assume clean
input. Catch only what you can handle; an empty `catch` hides the bug rather than fixing it.

One limit matters: `try` guards the code that runs inside it, now. An error thrown later from a timer
or an event handler happens with that `try` long gone, so it is never caught.

## Display
### HTML

```
<h1>Enrol a student</h1>
<p><input id="gpa" value="3.52"> <button id="go" type="button">Check</button></p>
<p id="out"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { padding: 8px; background: #EEF1F4; border: 1px solid #DDE2E8; }
.bad { color: #6B4207; }
```

### Javascript

```
class ValidationError extends Error {
  constructor(field, message) { super(message); this.name = "ValidationError"; this.field = field; }
}
function parseGpa(text) {
  const value = Number(text);
  if (text.trim() === "" || Number.isNaN(value)) throw new ValidationError("gpa", "not a number");
  if (value < 0 || value > 4) throw new ValidationError("gpa", "must be between 0 and 4");
  return value;
}
const out = document.getElementById("out");
document.getElementById("go").addEventListener("click", () => {
  try {
    const gpa = parseGpa(document.getElementById("gpa").value);
    out.className = ""; out.textContent = `accepted: ${gpa.toFixed(2)}`;
  } catch (error) {
    if (!(error instanceof ValidationError)) throw error;
    out.className = "bad"; out.textContent = `${error.name} on ${error.field}: ${error.message}`;
    console.log(error.stack);
  } finally {
    console.log("check finished");
  }
});
```

## Your Tasks
### 1. Catch and continue
Without the `try`, the line after the failure never runs.

```
try { null.name; }
catch (error) { console.log(error.name, error.message); }   // TypeError: Cannot read ...
console.log("still running");
```

### 2. Always clean up
`finally` runs on both paths, so put the undo there rather than duplicating it.

```
function load() {
  try { throw new Error("disk full"); }
  catch (e) { return "failed: " + e.message; }
  finally { console.log("released the handle"); }
}
console.log(load());
```

### 3. Throw an Error, not a string
A thrown string has no `name`, no `message` and no `stack`.

```
try { throw "broken"; } catch (e) { console.log(e.name, e.stack); }   // undefined undefined
try { throw new Error("broken"); } catch (e) { console.log(e.name, e.message); }
```

### 4. Define your own type
Reuse the class from the starter: `instanceof` lets a caller handle your failure and rethrow the rest.

```
try { throw new ValidationError("year", "must be 1-4"); }
catch (e) { console.log(e instanceof ValidationError, e instanceof Error, e.field); }
```

### 5. See what `try` cannot reach
The timer's callback runs long after the `try` block has finished.

```
try {
  setTimeout(() => { throw new Error("too late"); }, 0);
} catch (e) {
  console.log("never printed");
}
```

## Exercises

### Exercise 1: Validate a student
Write `makeStudent({ name, year })` that throws a `ValidationError` when `name` is empty or `year` is
outside 1–4. Call it four times, covering both failures.

### Exercise 2: Read the stack
Throw from inside two nested functions, log `error.stack`, and name in a comment the function that
threw and the one that called it.

### Exercise 3: Rethrow the unknown
In one `catch`, handle `ValidationError` and rethrow anything else; show both paths by also throwing
a `TypeError` on purpose.

### Exercise 4: Safe JSON
Write `parseOr(text, fallback)` returning `JSON.parse(text)`, or `fallback` when the text is invalid.
Test it at the console prompt with `parseOr("{oops", null)`.

### Exercise 5: Two error classes
Add `NotFoundError` beside `ValidationError`, write a lookup that throws the right one, and a caller
that prints a different message for each.

## Quizes

### Q1. When does a `finally` block run?
1. Only when no error was thrown
2. Only when an error was caught
3. After the `try` block, whether it succeeded, threw, or returned
4. Only if the `catch` block itself throws

### Q2. Why throw `new Error("bad input")` instead of `"bad input"`?
1. Strings cannot be thrown at all
2. The `Error` carries `name`, `message` and `stack`, which a string does not
3. Only `Error` objects can be caught by `catch`
4. A string would stop the script instead of being caught

### Q3. What does this print? `try { setTimeout(() => { throw new Error("x"); }, 0); } catch { console.log("caught"); } console.log("end");`
1. `caught` then `end`
2. `end` then `caught`
3. Nothing — the error cancels both logs
4. `end`, then the error is uncaught

### Q4. In `class NotFoundError extends Error`, what must the constructor do first?
1. Call `super(message)`
2. Set `this.name`
3. Return a new `Error`
4. Call `throw`

### Q5. Which is the best use of `try`/`catch`?
1. Wrap the whole program in one `try` with an empty `catch`
2. Wrap every single statement individually
3. Wrap the boundary where untrusted data is parsed, and handle the failure there
4. Wrap code you already know cannot throw, to be safe
