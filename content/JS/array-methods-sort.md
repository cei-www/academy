# Sorting and mutating arrays

`push`, `splice`, `reverse` and `sort` change the array in place — they mutate the very array they
were called on, unlike `map`/`filter`/`slice`, which return a new one. `sort` catches everyone twice:
it mutates, and with no comparator it compares items as text, so `[10, 9, 1].sort()` gives
`[1, 10, 9]`. Pass `(a, b) => a - b` for ascending numbers, `(a, b) => b - a` for descending. Sort a
copy with `slice()` first when the original order still matters.

## Display
### HTML

```
<h1>Ranked by GPA</h1>
<ol id="ranked"></ol>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#ranked li { padding: 4px 0; }
```

### Javascript

```
const students = [
  { name: "Ploy", gpa: 3.52 },
  { name: "Nan",  gpa: 2.98 },
  { name: "Beam", gpa: 3.71 },
  { name: "Tar",  gpa: 3.10 },
];

const ranked = students.slice().sort((a, b) => b.gpa - a.gpa);
console.log(ranked[0].name, students[0].name);   // Beam Ploy — original untouched

const list = document.getElementById("ranked");
ranked.forEach(s => {
  const li = document.createElement("li");
  li.textContent = `${s.name} — ${s.gpa.toFixed(2)}`;
  list.append(li);
});

console.log([10, 9, 1].sort());              // [1, 10, 9] — text order, likely a bug
console.log([10, 9, 1].sort((a, b) => a - b));  // [1, 9, 10] — numeric order
```

## Your Tasks
### 1. Sort without wrecking the original
Copy with `slice()` first, then pass a comparator that returns a negative, zero or positive number.

```
const byGpa = students.slice().sort((a, b) => b.gpa - a.gpa);
console.log(byGpa[0].name, students[0].name);    // Beam Ploy
```

### 2. See the default-sort trap
With no comparator, `sort` compares items as text.

```
console.log([10, 9, 1].sort());   // [1, 10, 9]
```

### 3. Fix it with a numeric comparator
`(a, b) => a - b` sorts numbers ascending; `(a, b) => b - a` sorts descending.

```
console.log([10, 9, 1].sort((a, b) => a - b));   // [1, 9, 10]
```

### 4. Add and remove in place with splice
`splice(start, deleteCount, ...items)` mutates the array at that position.

```
const list = ["A", "B", "D"];
list.splice(2, 0, "C");   // insert "C" before index 2
console.log(list);        // ["A", "B", "C", "D"]
```

### 5. Reverse in place
`reverse()` mutates the array it is called on — copy first if the order still matters elsewhere.

```
const original = [1, 2, 3];
const copy = original.slice().reverse();
console.log(original, copy);   // [1, 2, 3] [3, 2, 1]
```

## Exercises

### Exercise 1: Top three
Produce an array of the three highest-GPA names, sorted high to low, in one chain, and confirm at the
console prompt that `students[0].name` is still `Ploy`.

### Exercise 2: Mutation proof
Call `students.sort((a, b) => a.gpa - b.gpa)` at the console prompt, then log `students` and explain in
a comment what changed and what `sort`'s return value is.

### Exercise 3: Numeric versus default sort
Sort `[100, 25, 3]` once with no comparator and once with `(a, b) => a - b`, and explain the
difference in the results.

### Exercise 4: Insert into a sorted list
Use `splice` to insert a new student into an already-sorted array at the correct position.

### Exercise 5: Safe reverse
Write a one-line function `reversedCopy(arr)` that reverses without mutating its input, and prove the
input is unchanged afterward.

## Quizes

### Q1. What does `console.log([1, 5, 10, 2].sort())` print?
1. `[1, 2, 5, 10]`
2. `[1, 10, 2, 5]`
3. `[10, 5, 2, 1]`
4. `[1, 5, 10, 2]`

### Q2. Which of these mutates the array it is called on?
1. `map`
2. `filter`
3. `slice`
4. `sort`

### Q3. What must a comparator function passed to `sort` return for ascending numeric order?
1. `true` or `false`
2. A negative number, zero, or a positive number based on `a - b`
3. Always `1`
4. The larger of the two values

### Q4. How do you sort a copy, leaving the original array's order untouched?
1. `arr.sort()` always leaves the original untouched
2. Call `.slice()` first, then `.sort()` on the result
3. Use `filter` instead of `sort`
4. It cannot be done in JavaScript

### Q5. What does `splice(2, 0, "C")` do to `["A", "B", "D"]`?
1. Removes the item at index 2
2. Inserts `"C"` at index 2 without removing anything
3. Replaces every item after index 2 with `"C"`
4. Throws an error — `deleteCount` cannot be `0`
