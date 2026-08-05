# Transforming and selecting arrays

Arrays carry methods that take a function and run the loop for you. Prefer them to a hand-written
`for` loop: the method name states what the loop is for.

- `map` — one output per input, so the result is the same length
- `filter` — keep the items whose test returns `true`
- `find` — the first matching item, or `undefined`
- `some` / `every` — a single boolean answer

`map` and `filter` return a **new** array and leave the original untouched. Because they return
arrays, they chain: filter, then map, in one expression.

## Display
### HTML

```
<h1>Year 2 students</h1>
<ul id="list"></ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#list li { padding: 4px 0; border-bottom: 1px solid #DDE2E8; }
```

### Javascript

```
const students = [
  { name: "Ploy", year: 2, gpa: 3.52, skills: ["C", "Verilog"] },
  { name: "Nan",  year: 3, gpa: 2.98, skills: ["Python"] },
  { name: "Beam", year: 2, gpa: 3.71, skills: ["C", "React"] },
  { name: "Tar",  year: 4, gpa: 3.10, skills: ["Python", "Linux"] },
];

console.log(students.map(s => s.name));
console.log(students.find(s => s.gpa > 3.6).name, students.some(s => s.year === 1));

const list = document.getElementById("list");
students
  .filter(s => s.year === 2)
  .map(s => `${s.name} — ${s.gpa.toFixed(2)}`)
  .forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list.append(li);
  });
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

### 4. Chain filter and map
Both return arrays, so the output of one feeds straight into the next.

```
const honourRoll = students.filter(s => s.gpa >= 3.5).map(s => s.name);
console.log(honourRoll);
```

### 5. Confirm the original is untouched
`map` and `filter` never modify the array they were called on.

```
const before = students.length;
students.filter(s => s.year === 2);
console.log(students.length === before);   // true
```

## Exercises

### Exercise 1: Name list
Use `map` to build an array of just the student names, and confirm its length matches the original.

### Exercise 2: Honour roll list
Render into `#list` only the students with a GPA of 3.5 or above, using `filter` then `map` then
`forEach`.

### Exercise 3: First match
Use `find` to get the first student whose year is 4, and log their name.

### Exercise 4: Any and all
Use `some` to check whether any student has a GPA under 3.0, and `every` to check whether all
students have at least one skill.

### Exercise 5: Untouched original
After chaining `filter` and `map`, log the original `students` array and confirm nothing changed.

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

### Q3. What does `map` guarantee about its result's length?
1. It is always shorter than the input
2. It is always the same length as the input
3. It depends on the callback's return value
4. It is always exactly one item

### Q4. What does `some` stop at?
1. The end of the array, always
2. The first item where the callback returns `true`
3. The first item where the callback returns `false`
4. It never stops early

### Q5. Which of these leaves the original array unchanged?
1. `push`
2. `splice`
3. `map`
4. `sort`
