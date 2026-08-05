# try, catch and finally

When a statement throws, the rest of the block is abandoned and JavaScript looks for the nearest
enclosing `catch`, which receives the thrown value. `finally` runs either way — after success, after a
caught error, even after a `return` — which makes it the place to release whatever you took, so cleanup
never gets skipped.

One limit matters: `try` guards only the code that runs inside it, right now. An error thrown later
from a timer or an event handler happens after that `try` has long finished, so it is never caught by
it.

## Display
### HTML

```
<h1>Divide two numbers</h1>
<p id="out"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { padding: 8px; background: #EEF1F4; border: 1px solid #DDE2E8; }
```

### Javascript

```
function divide(a, b) {
  if (b === 0) throw new Error("cannot divide by zero");
  return a / b;
}

const out = document.getElementById("out");
try {
  const result = divide(10, 0);
  out.textContent = "result: " + result;
} catch (error) {
  out.textContent = "error: " + error.message;
} finally {
  console.log("divide attempt finished");
}
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

### 4. See what try cannot reach
The timer's callback runs long after the `try` block has finished.

```
try {
  setTimeout(() => { throw new Error("too late"); }, 0);
} catch (e) {
  console.log("never printed");
}
```

### 5. Catch specific errors, rethrow the rest
Check `instanceof` before deciding whether you can actually handle it.

```
try {
  JSON.parse("not json");
} catch (e) {
  if (e instanceof SyntaxError) console.log("bad JSON:", e.message);
  else throw e;
}
```

## Exercises

### Exercise 1: Safe divide
Wrap a division that might throw in `try`/`catch`, and show either the result or an error message.

### Exercise 2: Read the stack
Throw from inside two nested functions, log `error.stack`, and name in a comment the function that
threw and the one that called it.

### Exercise 3: Cleanup with finally
Write a function that always logs "done" via `finally`, whether it throws or returns normally.

### Exercise 4: Safe JSON
Write `parseOr(text, fallback)` returning `JSON.parse(text)`, or `fallback` when the text is invalid.
Test it at the console prompt with `parseOr("{oops", null)`.

### Exercise 5: The timer trap
Confirm for yourself that a `catch` around a `setTimeout` call does not catch an error thrown inside
the timer's callback, and explain why in one sentence.

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

### Q4. What happens to code after a thrown statement, inside the same `try` block?
1. It still runs normally
2. It is skipped; control jumps straight to `catch`
3. It runs, but any errors in it are ignored
4. It throws a second error automatically

### Q5. Which is the best use of `try`/`catch`?
1. Wrap the whole program in one `try` with an empty `catch`
2. Wrap every single statement individually
3. Wrap the boundary where untrusted data is parsed, and handle the failure there
4. Wrap code you already know cannot throw, to be safe
