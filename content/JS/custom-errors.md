# Custom error classes

Subclass `Error` when callers need to tell your failures apart from every other error a `try` might
catch. `super(message)` sets the base `message`; setting `this.name` gives it a distinct label instead
of the generic `"Error"`, and any extra fields — like which form field failed — ride along as normal
properties.

Validate at the boundary where data enters your program and let the rest of the code assume clean
input. Catch only what you can handle with `instanceof`; an empty `catch` hides the bug rather than
fixing it, and rethrowing whatever you cannot handle keeps the rest of the program honest.

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
  }
});
```

## Your Tasks
### 1. Define a custom error class
`super(message)` must run before touching `this`, same as any subclass constructor.

```
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
```

### 2. Throw it like any Error
A custom error is still an `Error` at heart — `throw` and `catch` treat it the same way.

```
throw new ValidationError("year", "must be 1-4");
```

### 3. Tell it apart with instanceof
`instanceof` lets a caller handle your failure specifically and rethrow anything else.

```
try { throw new ValidationError("year", "must be 1-4"); }
catch (e) { console.log(e instanceof ValidationError, e instanceof Error, e.field); }
```

### 4. Rethrow what you cannot handle
An empty catch-all hides bugs; check the type and let the rest through.

```
try { riskyThing(); }
catch (e) {
  if (e instanceof ValidationError) showMessage(e);
  else throw e;
}
```

### 5. Add a second error class
Two distinct error classes let one `catch` respond differently to each kind of failure.

```
class NotFoundError extends Error {
  constructor(id) { super(`No record for id ${id}`); this.name = "NotFoundError"; this.id = id; }
}
```

## Exercises

### Exercise 1: Validate a student
Write `makeStudent({ name, year })` that throws a `ValidationError` when `name` is empty or `year` is
outside 1–4. Call it four times, covering both failures.

### Exercise 2: Rethrow the unknown
In one `catch`, handle `ValidationError` and rethrow anything else; show both paths by also throwing
a `TypeError` on purpose.

### Exercise 3: Two error classes
Add `NotFoundError` beside `ValidationError`, write a lookup that throws the right one, and a caller
that prints a different message for each.

### Exercise 4: Extra fields on an error
Give a custom error a field beyond `message`, like `field` or `id`, and read it back from the
`catch` block.

### Exercise 5: Error name in the console
Log a custom error directly with `console.log(error)` and confirm its `name` shows instead of the
generic `"Error"`.

## Quizes

### Q1. In `class NotFoundError extends Error`, what must the constructor do first?
1. Call `super(message)`
2. Set `this.name`
3. Return a new `Error`
4. Call `throw`

### Q2. Why give a custom error class its own `name`?
1. It has no effect on anything
2. It distinguishes it from the generic `"Error"` label when logged or inspected
3. `name` is required for `throw` to work at all
4. It changes how `instanceof` behaves

### Q3. How does a caller tell a `ValidationError` apart from any other thrown error?
1. By checking `error.message` for specific text
2. Using `error instanceof ValidationError`
3. There is no reliable way
4. By checking `typeof error === "ValidationError"`

### Q4. What should a `catch` block do with an error type it does not recognise?
1. Silently ignore it
2. Rethrow it, so the rest of the program is not left assuming success
3. Convert it to a string and log it
4. Always crash the whole program immediately

### Q5. Can a custom error class carry extra data beyond `message`?
1. No — `Error` subclasses can only ever have `message`
2. Yes — any additional property, like `field` or `id`, can be set in the constructor
3. Only if it is named `data`
4. Only numbers can be added, not strings
