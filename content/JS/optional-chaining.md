# Optional chaining and nullish coalescing

`?.` reads a property only if what comes before it is not `null`/`undefined` — otherwise the whole
expression short-circuits to `undefined` instead of throwing. That makes `student?.office?.room` safe
even when `office` is missing, with no `if` chain needed first. `?.()` calls a function the same way,
only if it exists; `?.[]` reads a computed key the same way.

`??` is a companion, not the same thing as `||`: it only falls back when the left side is `null` or
`undefined`, not for every falsy value. `0`, `""` and `false` are legitimate values that `||` would
wrongly replace but `??` keeps.

## Display
### HTML

```
<h1>Student lookup</h1>
<pre id="out"></pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; }
```

### Javascript

```
const student = { name: "Ploy", year: 2, credits: 0 };

const lines = [];
lines.push("room: " + student?.office?.room);          // undefined, no throw
lines.push("credits: " + (student.credits ?? "n/a"));   // 0, not "n/a"
lines.push("credits (||): " + (student.credits || "n/a"));   // wrongly "n/a"
lines.push("name: " + (student?.name ?? "unknown"));

const noStudent = null;
lines.push("no student's name: " + noStudent?.name);

document.getElementById("out").textContent = lines.join("\n");
```

## Your Tasks
### 1. Read a possibly-missing nested property
`?.` stops safely at the first missing link instead of throwing.

```
const student = { name: "Ploy" };
console.log(student?.office?.room);   // undefined, no error
```

### 2. Compare to the unsafe version
Without `?.`, reading through a missing property throws.

```
try { console.log(student.office.room); }
catch (e) { console.log("threw:", e.message); }
```

### 3. Call a method that might not exist
`?.()` only calls the function if it is actually present.

```
const obj = { greet: null };
obj.greet?.();   // does nothing, no error
```

### 4. Fall back only for null or undefined
`??` keeps `0`, `""` and `false` as-is, unlike `||`.

```
const credits = 0;
console.log(credits ?? "n/a");   // 0
console.log(credits || "n/a");   // "n/a" — wrong here
```

### 5. Combine both operators
Chain `?.` for safe access, then `??` to supply a default if the result is missing.

```
const room = student?.office?.room ?? "not assigned";
console.log(room);
```

## Exercises

### Exercise 1: Safe nested read
Given an object that may or may not have a nested `office.room`, read it safely with `?.` and confirm
no error is thrown either way.

### Exercise 2: Nullish default
Give a student a `credits` value of `0`, then use `??` to provide a fallback and confirm the `0` is
kept, not replaced.

### Exercise 3: The `||` trap
Repeat Exercise 2 with `||` instead of `??`, and explain in a comment why the result is wrong.

### Exercise 4: Optional method call
Call a possibly-missing callback function with `?.()`, once when it exists and once when it is
`null`, and confirm neither call throws.

### Exercise 5: Chain it all together
Combine `?.` and `??` in one expression to safely read a deeply nested value with a sensible default.

## Quizes

### Q1. What does `student?.office?.room` do when `office` is missing?
1. Throws a `TypeError`
2. Evaluates to `undefined`, with no error
3. Evaluates to `null`
4. Silently creates an empty `office` object

### Q2. What is the key difference between `??` and `||`?
1. There is no difference
2. `??` only falls back for `null`/`undefined`; `||` falls back for any falsy value
3. `||` only works with numbers
4. `??` cannot be chained

### Q3. What does `credits ?? "n/a"` return when `credits` is `0`?
1. `"n/a"`
2. `0`
3. `undefined`
4. `NaN`

### Q4. What does `obj.greet?.()` do if `greet` is `null`?
1. Throws a `TypeError`
2. Does nothing, evaluating to `undefined`
3. Calls `greet` anyway with no arguments
4. Sets `greet` to a no-op function

### Q5. What does `?.[]` do?
1. Nothing — it is not valid syntax
2. Reads a computed key safely, short-circuiting if the object is missing
3. Deletes a computed key
4. Always returns an array
