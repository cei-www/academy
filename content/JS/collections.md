# Map and Set overview

You have now met `Map` and `Set` on their own. Both improve on what a plain object or array can do
for a specific job: `Map` when keys are not just strings, or when insertion order and a reliable
`.size` matter; `Set` when the only thing that matters is "is this value present", with duplicates
automatically dropped.

## Display
### HTML

```
<h1>Course roster</h1>
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
const roster = new Map();
roster.set("CE-231", "Digital Logic").set("CE-232", "Logic Lab");

const skills = new Set(["C", "Python", "C", "React"]);

const lines = [];
for (const [code, title] of roster) lines.push(`${code}: ${title}`);
lines.push("unique skills: " + [...skills].join(", "));

document.getElementById("out").textContent = lines.join("\n");
```

## Your Tasks
### 1. Build a Map
Any value can be a key; `.size` is always correct.

```
const m = new Map();
m.set("a", 1).set("b", 2);
console.log(m.size);
```

### 2. Build a Set
Adding a duplicate has no effect.

```
const s = new Set(["a", "b", "a"]);
console.log(s.size);   // 2
```

### 3. Iterate both the same way
`for...of` works on both, yielding `[key, value]` pairs for `Map` and plain values for `Set`.

```
for (const [k, v] of m) console.log(k, v);
for (const v of s) console.log(v);
```

### 4. De-duplicate with Set
`[...new Set(array)]` is the shortest way to drop duplicates.

```
const unique = [...new Set(["C", "Python", "C"])];
```

### 5. Pick the right one
A lookup by arbitrary key needs `Map`; a plain "have I seen this" check needs `Set`.

```
const seen = new Set();
const cache = new Map();
```

## Exercises

### Exercise 1: Course lookup with Map
Build a `Map` of course codes to titles and log one title by its code.

### Exercise 2: Unique tags with Set
De-duplicate an array of skill tags with a `Set`, and render the unique list.

### Exercise 3: Combine both
Use a `Set` to track which course codes have already been added to a `Map`, skipping duplicates.

### Exercise 4: Map versus plain object
Convert a plain object into a `Map` with `new Map(Object.entries(obj))`, and explain one advantage
`Map` has here.

### Exercise 5: Choose the right structure
For "cache API responses by URL", "track which buttons have been clicked" and "count word
frequency", name which of `Map`, `Set`, or plain object fits each, in one sentence.

## Quizes

### Q1. What can be used as a `Map` key?
1. Only strings
2. Only numbers and strings
3. Any value, including objects
4. Only values already frozen with `Object.freeze`

### Q2. What happens when you `.add()` a value already in a `Set`?
1. It is added again, so `.size` grows
2. Nothing — the set already has it, so `.size` stays the same
3. It throws an error
4. It replaces the earlier value

### Q3. What does iterating a `Map` with `for...of` yield?
1. Only the values
2. `[key, value]` pairs, in insertion order
3. Only the keys
4. A single combined string

### Q4. Which structure fits "is this value present" checks best?
1. `Map`
2. `Set`
3. A plain array with `indexOf`
4. `WeakRef`

### Q5. What does `[...new Set(arr)]` produce?
1. The same array, unchanged
2. A new array with every duplicate removed
3. An array of `[index, value]` pairs
4. A `Map` converted from the array
