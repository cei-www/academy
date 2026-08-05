# The Map object

`Map` is a key-value collection, like a plain object, but with real differences that matter. Any
value can be a key — an object, a number, even another `Map` — not just a string. Its size is always
correct via `.size`, no `Object.keys(obj).length` workaround needed. Insertion order is preserved
when iterating, and iterating with `for...of` yields `[key, value]` pairs directly, matching how
`Object.entries()` looks for plain objects.

`.set(key, value)` adds or updates; `.get(key)` reads; `.has(key)` checks; `.delete(key)` removes.
`.set` returns the map itself, so calls can chain.

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
roster.set("CE-241", "Microprocessors");

const lines = [];
lines.push("size: " + roster.size);
lines.push("has CE-231: " + roster.has("CE-231"));

for (const [code, title] of roster) {
  lines.push(`${code}: ${title}`);
}

roster.delete("CE-241");
lines.push("after delete, size: " + roster.size);

document.getElementById("out").textContent = lines.join("\n");
```

## Your Tasks
### 1. Create a Map and set entries
`.set` returns the map itself, so calls can chain.

```
const m = new Map();
m.set("a", 1).set("b", 2);
console.log(m.size);   // 2
```

### 2. Read and check keys
`.get` returns the value or `undefined`; `.has` returns a plain boolean.

```
console.log(m.get("a"), m.has("c"));   // 1 false
```

### 3. Delete an entry
`.delete` removes one key and returns whether it existed.

```
console.log(m.delete("a"));   // true
console.log(m.size);          // 1
```

### 4. Iterate in insertion order
`for...of` over a `Map` yields `[key, value]` pairs, in the order they were set.

```
for (const [key, value] of m) {
  console.log(key, value);
}
```

### 5. Use a non-string key
Any value works as a key — a plain object works too, matched by identity.

```
const config = new Map();
const el = document.querySelector("h1");
config.set(el, { visited: true });
console.log(config.get(el));
```

## Exercises

### Exercise 1: Course lookup
Build a `Map` of course codes to titles, and log the title for a given code.

### Exercise 2: Live size
Show a "N courses" count under a list built from a `Map`, staying correct after adds and deletes.

### Exercise 3: Iterate and render
Loop over a `Map` with `for...of` and render each `[key, value]` pair as a list item.

### Exercise 4: Object keys
Use a DOM element as a `Map` key to store extra data about it, and confirm looking it up by that
exact element works.

### Exercise 5: Map versus object
Convert a plain object of course codes to titles into a `Map` with `new Map(Object.entries(obj))`,
and explain in one sentence one advantage `Map` has here.

## Quizes

### Q1. What does `.set` return?
1. `undefined`
2. `true` or `false`
3. The map itself, so calls can chain
4. The previous value for that key

### Q2. What can be used as a `Map` key?
1. Only strings
2. Only numbers and strings
3. Any value, including objects
4. Only values already frozen with `Object.freeze`

### Q3. How do you get the number of entries in a `Map`?
1. `Object.keys(m).length`
2. `m.length`
3. `m.size`
4. `m.count()`

### Q4. What does iterating a `Map` with `for...of` yield?
1. Only the values
2. Only the keys
3. `[key, value]` pairs, in insertion order
4. A single combined string

### Q5. What does `.has(key)` return?
1. The value stored at that key
2. A plain boolean — whether the key exists
3. The key's index
4. `undefined` if the key is missing, otherwise the value
