# Folding arrays with reduce

`reduce` folds a whole array into one value — a sum, a count, a lookup object, even a brand-new
array. The callback receives the running accumulator and the current item; its return value becomes
the accumulator for the next item. The second argument to `reduce` itself is the starting value for
that accumulator.

`reduce` can replace `map` and `filter` too, but reach for it specifically when the result is not
"one item per input" — a single total, or a grouping.

## Display
### HTML

```
<h1>GPA summary</h1>
<p id="stats"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#stats { color: #4B5563; }
```

### Javascript

```
const students = [
  { name: "Ploy", year: 2, gpa: 3.52 },
  { name: "Nan",  year: 3, gpa: 2.98 },
  { name: "Beam", year: 2, gpa: 3.71 },
  { name: "Tar",  year: 4, gpa: 3.10 },
];

const total = students.reduce((sum, s) => sum + s.gpa, 0);

const byYear = students.reduce((acc, s) => {
  (acc[s.year] ||= []).push(s.name);
  return acc;
}, {});

document.getElementById("stats").textContent =
  `mean GPA ${(total / students.length).toFixed(2)} — groups: ${JSON.stringify(byYear)}`;
```

## Your Tasks
### 1. Sum with reduce
The first argument is the accumulator, the second is the current item, and `0` is the starting value.

```
const total = students.reduce((sum, s) => sum + s.gpa, 0);
console.log(total);
```

### 2. Count with reduce
Every fold, not just sums, starts from an initial value and updates it per item.

```
const skillCount = students.reduce((count, s) => count + s.skills.length, 0);
console.log(skillCount);
```

### 3. Build a lookup object
The accumulator does not have to be a number — an object works the same way.

```
const byYear = students.reduce((acc, s) => {
  (acc[s.year] ||= []).push(s.name);
  return acc;
}, {});
console.log(byYear);
```

### 4. Rebuild map with reduce
`reduce` can do everything `map` does, by pushing into an accumulator array.

```
const names = students.reduce((acc, s) => { acc.push(s.name); return acc; }, []);
console.log(names);
```

### 5. Find the maximum
Compare the accumulator against each item and keep the larger one.

```
const topGpa = students.reduce((best, s) => (s.gpa > best.gpa ? s : best));
console.log(topGpa.name);
```

## Exercises

### Exercise 1: Skill index
Use `reduce` to build an object mapping each skill to the array of student names who have it.

### Exercise 2: Average per year
Compute the mean GPA of each year group and log it as `{ "2": 3.43, "3": 2.98, "4": 3.10 }`, using
only array methods — no `for` loop.

### Exercise 3: Total credits
Given each student has a `credits` array, use `reduce` to sum every student's total credits into one
number.

### Exercise 4: Word frequency
Given an array of words, use `reduce` to build an object counting how many times each word appears.

### Exercise 5: Flatten with reduce
Given an array of arrays, use `reduce` with `concat` to flatten it into one array, with no `for` loop.

## Quizes

### Q1. `[1, 2, 3, 4].reduce((a, b) => a + b, 10)` evaluates to
1. `20`
2. `10`
3. `24`
4. `[10, 1, 2, 3, 4]`

### Q2. What does the second argument to `reduce` set?
1. The array's final length
2. The starting value of the accumulator
3. The index to start folding from
4. Nothing — it is optional and has no effect

### Q3. What does the reduce callback's return value become?
1. The final result immediately
2. The accumulator passed into the next call
3. A new array element
4. Ignored — `reduce` only cares about side effects

### Q4. Can `reduce` build an object instead of a number?
1. No — the accumulator must always be a number
2. Yes — the accumulator can be any value, including an object
3. Only if `Object.reduce` is used instead
4. Only with a library like Lodash

### Q5. When should you reach for `reduce` over `map`?
1. Whenever you want to log something
2. When the result is not one output per input, like a single total or grouping
3. `reduce` should replace every `map` call
4. Never — `reduce` is deprecated
