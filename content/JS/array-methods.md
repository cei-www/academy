# Array methods overview

Arrays carry methods that take a function and run the loop for you. Prefer them to a hand-written
`for` loop: the method name states what the loop is for.

- `map` — one output per input, so the result is the same length
- `filter` — keep the items whose test returns `true`
- `find` — the first matching item, or `undefined`
- `some` / `every` — a single boolean answer
- `reduce` — fold the whole array into one value

`map`, `filter` and `slice` return a **new** array and leave the original untouched. `push`, `splice`,
`reverse` and `sort` change the array in place. `sort` catches everyone twice: it mutates, and with no
comparator it compares items as text, so `[10, 9, 1].sort()` gives `[1, 10, 9]`. Pass `(a, b) => a - b`
for numbers, and sort a copy when you still need the original order.

Because the non-mutating methods return arrays, they chain: filter, then sort, then map.

## Display
### HTML

```
<h1>Year 2 students</h1>
<ul id="list"></ul>
<p id="stats"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#list li { padding: 4px 0; border-bottom: 1px solid #DDE2E8; }
#stats { color: #4B5563; }
```

### Javascript

```
const students = [
  { name: "Ploy", year: 2, gpa: 3.52, skills: ["C", "Verilog"] },
  { name: "Nan",  year: 3, gpa: 2.98, skills: ["Python"] },
  { name: "Beam", year: 2, gpa: 3.71, skills: ["C", "React"] },
  { name: "Tar",  year: 4, gpa: 3.10, skills: ["Python", "Linux"] },
  { name: "Mint", year: 2, gpa: 3.05, skills: ["C"] },
];

const total = students.reduce((sum, s) => sum + s.gpa, 0);
console.log(students.map(s => s.name));
console.log(students.find(s => s.gpa > 3.6).name, students.some(s => s.year === 1));

const list = document.getElementById("list");
students
  .filter(s => s.year === 2)
  .sort((a, b) => b.gpa - a.gpa)
  .forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.name} — ${s.gpa.toFixed(2)}`;
    list.append(li);
  });

document.getElementById("stats").textContent = `mean GPA ${(total / students.length).toFixed(2)}`;
```

## Your Tasks
### 1. Transform with map
The callback's return value becomes the item at the same index in the new array.

```
const labels = students.map(s => `${s.name} (year ${s.year})`);
console.log(labels.length === students.length);   // true
```

### 2. Select with filter and find
`filter` always returns an array, even an empty one; `find` returns one item or `undefined`.

```
const seniors = students.filter(s => s.year >= 3);
const cCoder = students.find(s => s.skills.includes("C"));
console.log(seniors.length, cCoder.name);
```

### 3. Ask a yes/no question
`some` stops at the first `true`, `every` stops at the first `false`.

```
console.log(students.some(s => s.gpa < 3.0));    // true
console.log(students.every(s => s.skills.length > 0));   // true
```

### 4. Sort without wrecking the original
Copy with `slice()` first, then pass a comparator that returns a negative, zero or positive number.

```
const byGpa = students.slice().sort((a, b) => b.gpa - a.gpa);
console.log(byGpa[0].name, students[0].name);    // Beam Ploy
console.log([10, 9, 1].sort());                  // [1, 10, 9]
```

### 5. Fold with reduce
The first argument is the accumulator, the second is the current item, and `0` is the starting value.

```
const credits = students.reduce((sum, s) => sum + s.skills.length, 0);
const byYear = students.reduce((acc, s) => {
  (acc[s.year] ||= []).push(s.name);
  return acc;
}, {});
console.log(credits, byYear);
```

## Exercises

### Exercise 1: Top three
Produce an array of the three highest-GPA names, sorted high to low, in one chain, and confirm at the
console prompt that `students[0].name` is still `Ploy`.

### Exercise 2: Skill index
Use `reduce` to build an object mapping each skill to the array of student names who have it.

### Exercise 3: Honour roll list
Render into `#list` only the students with a GPA of 3.5 or above, showing name and skills joined by
commas, using `filter` then `map` then `forEach`.

### Exercise 4: Mutation proof
Call `students.sort((a, b) => a.gpa - b.gpa)` at the console prompt, then log `students` and explain in
a comment what changed and what `sort`'s return value is.

### Exercise 5: Average per year
Compute the mean GPA of each year group and log it as `{ "2": 3.43, "3": 2.98, "4": 3.10 }`, using
only array methods — no `for` loop.

## Quizes

### Q1. What does `[3, 1, 2].filter(n => n > 1)` return?
1. `true`
2. `[3, 1, 2]`
3. `[3, 2]`
4. `3`

### Q2. Which method returns the first matching element itself?
1. `filter`
2. `some`
3. `find`
4. `indexOf`

### Q3. What does `console.log([1, 5, 10, 2].sort())` print?
1. `[1, 2, 5, 10]`
2. `[1, 10, 2, 5]`
3. `[10, 5, 2, 1]`
4. `[1, 5, 10, 2]`

### Q4. Which of these leaves the original array unchanged?
1. `push`
2. `splice`
3. `reverse`
4. `map`

### Q5. `[1, 2, 3, 4].reduce((a, b) => a + b, 10)` evaluates to
1. `20`
2. `10`
3. `24`
4. `[10, 1, 2, 3, 4]`
