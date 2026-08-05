# The Set object

A `Set` stores unique values — adding a value already present does nothing, silently. That makes it
the natural tool for de-duplicating an array: `[...new Set(arr)]` spreads a `Set` back into an array
with every duplicate gone. `.add(value)`, `.has(value)` and `.delete(value)` mirror `Map`'s methods,
and `.size` is always correct, same as `Map`.

Values are compared the same way `===` does, so two separate objects with identical contents still
count as different entries.

## Display
### HTML

```
<h1>Skill tags</h1>
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
const raw = ["C", "Python", "C", "React", "Python", "C"];
const unique = new Set(raw);

const lines = [];
lines.push("size: " + unique.size);
lines.push("has React: " + unique.has("React"));

unique.add("Rust");
unique.delete("C");

lines.push("as array: " + [...unique].join(", "));

document.getElementById("out").textContent = lines.join("\n");
```

## Your Tasks
### 1. Build a Set and add values
Adding a duplicate has no effect — the set only ever holds unique values.

```
const s = new Set();
s.add("a").add("b").add("a");
console.log(s.size);   // 2
```

### 2. De-duplicate an array
`new Set(array)` drops every duplicate in one step.

```
const skills = ["C", "Python", "C", "React"];
const unique = [...new Set(skills)];
console.log(unique);   // ["C", "Python", "React"]
```

### 3. Check membership
`.has` returns a plain boolean, same as `Map`.

```
console.log(unique.includes ? "array" : "not array");
console.log(new Set(unique).has("React"));   // true
```

### 4. Remove a value
`.delete` removes one value and reports whether it existed.

```
const s = new Set(["a", "b"]);
console.log(s.delete("a"));   // true
console.log(s.size);          // 1
```

### 5. Iterate in insertion order
`for...of` yields each unique value once, in the order it was first added.

```
for (const value of new Set(["b", "a", "b", "c"])) {
  console.log(value);   // b, a, c
}
```

## Exercises

### Exercise 1: Unique tags
De-duplicate an array of skill tags with a `Set`, and render the unique list.

### Exercise 2: Toggle membership
Write `toggle(set, value)` that adds `value` if absent and removes it if present, then log the set's
contents after a few calls.

### Exercise 3: Set intersection
Given two `Set`s, build a third containing only values present in both, using `.has` inside a
`filter`.

### Exercise 4: Count unique visitors
Given an array of student IDs with repeats, log how many unique IDs there are, using `Set.size`.

### Exercise 5: Set versus array
Explain in one or two sentences why a `Set` is a better fit than an array for tracking "which
courses has this student already viewed".

## Quizes

### Q1. What happens when you `.add()` a value already in a `Set`?
1. It is added again, so `.size` grows
2. It throws an error
3. Nothing — the set already has it, so `.size` stays the same
4. It replaces the earlier value

### Q2. What does `[...new Set(arr)]` produce?
1. The same array, unchanged
2. A new array with every duplicate removed
3. An array of `[index, value]` pairs
4. A `Map` converted from the array

### Q3. What does `.has(value)` return on a `Set`?
1. The value itself
2. A plain boolean
3. The value's index
4. `undefined` always

### Q4. How are two separate but identical objects treated as `Set` values?
1. As the same entry, since their contents match
2. As two different entries, compared like `===`
3. `Set` cannot hold objects at all
4. Only the first one is kept, silently

### Q5. Which built-in method removes every duplicate from an array in one step?
1. `array.unique()`
2. `[...new Set(array)]`
3. `array.dedupe()`
4. `Array.distinct(array)`
