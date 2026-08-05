# Spread and rest

The same `...` token does two opposite jobs. In a call or a literal it **spreads** — it unpacks a
value into the pieces around it, which is how you copy an array or object, merge several into one, or
pass an array as individual arguments. In a parameter list or on the left of a destructuring pattern
it **rests** — it collects the leftovers into a new array or object.

Spread copies only one level deep. `{ ...student }` gives you a new outer object whose nested arrays
and objects are still the very same ones, so pushing into `copy.skills` also changes the original.

## Display
### HTML

```
<h1>Merged config</h1>
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
const base = { theme: "light", perPage: 10 };
const userConfig = { perPage: 25, tags: ["ce"] };
const merged = { ...base, ...userConfig };

const scoresA = [88, 91];
const scoresB = [76, 95];
const allScores = [...scoresA, ...scoresB];
console.log("max:", Math.max(...allScores));

function total(...marks) {
  return marks.reduce((sum, m) => sum + m, 0);
}

document.getElementById("out").textContent = JSON.stringify(
  { merged, allScores, total: total(...allScores) }, null, 2
);
```

## Your Tasks
### 1. Spread to copy
`{ ...obj }` and `[...arr]` each make a new top-level container.

```
const copy = { ...base };
console.log(copy !== base, copy.theme);
```

### 2. Spread to merge, later sources win
Order matters — whatever comes last overwrites earlier matching keys.

```
const withOverride = { ...base, ...userConfig };
console.log(withOverride.perPage);   // 25, from userConfig
```

### 3. Spread an array into arguments
`Math.max` takes individual numbers, not an array — spread bridges the two.

```
const scores = [88, 91, 76, 95];
console.log(Math.max(...scores));
```

### 4. Rest to collect extra arguments
`...marks` gathers every argument, however many were passed, into one array.

```
function total(...marks) {
  return marks.reduce((sum, m) => sum + m, 0);
}
console.log(total(3.5, 3.2, 4.0));
```

### 5. Rest to collect leftover keys
On the left of an object pattern, `...rest` gathers whatever was not named explicitly.

```
const { name: who, ...details } = { name: "Ploy", year: 2, gpa: 3.52 };
console.log(who, Object.keys(details));   // "Ploy" ["year", "gpa"]
```

## Exercises

### Exercise 1: Merge with override
Merge a default settings object with a user override object, and confirm the user's values win.

### Exercise 2: Combine two arrays
Spread two arrays of scores into one combined array and find its maximum with `Math.max(...arr)`.

### Exercise 3: Variadic sum
Write `sum(...nums)` that adds any number of arguments, and call it with 2, 3, and 5 arguments.

### Exercise 4: Prove the shallow copy
At the console prompt, make `const c = { ...student }`, push into `c.skills`, then log
`student.skills`. Write one comment saying why the array is shared but `c.gpa = 4` is not.

### Exercise 5: Deep enough copy
Fix Exercise 4 so `c` gets its own `skills` array and its own nested object, using spread only.

## Quizes

### Q1. What does `console.log({ ...{ a: 1, b: 2 }, b: 9 })` print?
1. `{ a: 1, b: 2 }`
2. `{ b: 9 }`
3. `{ a: 1, b: [2, 9] }`
4. `{ a: 1, b: 9 }`

### Q2. In `function f(...args) {}`, what is `args`?
1. An array of every argument passed
2. The first argument only
3. An object keyed by parameter name
4. A copy of the enclosing scope

### Q3. After `const c = { ...s }; c.skills.push("Go");` what is true?
1. Only `c.skills` has `"Go"`
2. Both `s.skills` and `c.skills` have `"Go"`, because the array itself was not copied
3. The push throws, because spread freezes the copy
4. Only `s.skills` has `"Go"`

### Q4. What does `Math.max(...[3, 9, 1])` evaluate to?
1. `NaN`, since `Math.max` cannot take an array
2. `[3, 9, 1]`
3. `9`
4. `13`

### Q5. When two spread sources share a key, which value wins?
1. The first source listed
2. The one with the shorter value
3. The last source listed
4. Neither — it throws an error
