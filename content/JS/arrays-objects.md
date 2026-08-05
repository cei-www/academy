# Arrays and objects overview

You have now met arrays (ordered lists, `[]`) and objects (named properties, `{}`) on their own.
These nest freely, and the shape you will meet most often on the web is an array of objects. Loop it
with `for...of` and read each object's properties inside the body.

```
const student = { name: "Ploy", gpa: 3.41 };
student.year = 2;              // added
student["gpa"] = 3.52;         // updated
```

`JSON.stringify(value, null, 2)` turns a value into indented text, which is the easiest way to see a
whole nested structure in the console.

## Display
### HTML

```
<h1>Year 2 students</h1>
<ul id="list"></ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#list li { padding: 4px 0; border-bottom: 1px solid #DDE2E8; }
```

### Javascript

```
const students = [
  { name: "Pimchanok Srisai", nickname: "Ploy", gpa: 3.41, skills: ["C", "Verilog"] },
  { name: "Thanakrit Wong",   nickname: "Beam", gpa: 3.60, skills: ["Python"] },
  { name: "Kanyarat Ruangsri", nickname: "Nice", gpa: 3.75, skills: ["JS", "SQL"] },
];

console.log("count:", students.length, "first:", students[0].nickname);

let html = "";
for (const s of students) {
  console.log(`${s.nickname}: ${s.gpa} — ${s.skills.length} skills`);
  html += `<li>${s.nickname} — GPA ${s.gpa}</li>`;
}
document.getElementById("list").innerHTML = html;

console.log(JSON.stringify(students[0], null, 2));
```

## Your Tasks
### 1. Make an array and read it
Indexes start at `0`, so the last one is `length - 1`.

```
const codes = ["CE-201", "CE-210", "CE-233"];
console.log(codes[0], codes[codes.length - 1], codes.length);
```

### 2. Add and remove items
`push` appends; `pop` removes the last item and returns it.

```
const codes = ["CE-201"];
codes.push("CE-210");
const last = codes.pop();
console.log(last, codes);
```

### 3. Loop an array
`for...of` hands you each element.

```
for (const code of ["CE-201", "CE-210", "CE-233"]) {
  console.log(code);
}
```

### 4. Read and write object properties
Dot notation for fixed keys, brackets when the key is in a variable.

```
const course = { code: "CE-233", title: "Web Development", seats: 40 };
const key = "seats";
course.enrolled = 37;
course[key] = 45;
console.log(course.code, course[key], course.enrolled);
```

### 5. Inspect a nested value
`JSON.stringify` with `null, 2` prints readable indented text.

```
const course = { code: "CE-233", staff: { instructor: "Dr. Anan", room: "ECC-401" } };
console.log(JSON.stringify(course, null, 2));
```

## Exercises

### Exercise 1: Your courses
Build an array of five course code strings, then log the first, the last and the count.

### Exercise 2: Course object
Make an object with `code`, `title`, `credits` and `enrolled`, raise `enrolled` by one, add an
`instructor` property, and log the result.

### Exercise 3: List of students
Build an array of four student objects with `nickname` and `gpa`, then loop it and print one line per
student.

### Exercise 4: Highest GPA
Using the array from Exercise 3 and a loop, find and log the student with the highest GPA.

### Exercise 5: Read the shape
Log your Exercise 3 array with `JSON.stringify(students, null, 2)` and use the console output to
describe how many objects it holds and which keys each one has.

## Quizes

### Q1. What is the index of the first item in an array?
1. `-1`
2. `0`
3. `1`
4. It depends on how the array was created

### Q2. Which line reads a property whose key is held in the variable `k`?
1. `obj.k`
2. `obj["k"]`
3. `obj[k]`
4. `obj->k`

### Q3. What does `pop()` do?
1. Adds an item to the end of the array
2. Removes the first item and returns it
3. Removes the last item and returns it
4. Empties the array

### Q4. What does `const a = ["CE-201"]; a.push("CE-210"); console.log(a.length, a[1]);` print?
1. `2 "CE-210"`
2. `1 "CE-210"`
3. `2 "CE-201"`
4. A `TypeError`, because `a` is a `const`

### Q5. Why is `JSON.stringify(value, null, 2)` useful in the console?
1. It converts the value into a real JavaScript object
2. It prints the nested structure as indented text you can read
3. It removes every nested array from the value
4. It validates that the object has no missing properties
