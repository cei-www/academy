# Variables and data types

A variable is a name for a value. Declare it with `const` by default, and switch to `let` only when
the value has to change later. `var` is the old keyword; you will meet it in old code, but do not
write it.

```
const university = "KMITL";
let score = 0;
score = score + 10;
```

The types you need now are `string`, `number` and `boolean`, plus two "no value" types: `null` means
deliberately empty, `undefined` means never given a value. JavaScript has one number type — `7` and
`7.5` are both `number`. `typeof value` reports the type as a string.

Backtick strings are template literals. They can span lines and can embed any expression with `${…}`,
which reads better than gluing strings together with `+`.

`const` stops you reassigning the name. It does not freeze the contents, so you can still change a
property of an object held in a `const`.

## Display
### HTML

```
<h1>Student record</h1>
<p id="out">See the console panel.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#out { background: #EEF1F4; padding: 8px; }
```

### Javascript

```
const fullName = "Pimchanok Srisai";
const nickname = "Ploy";
let gpa = 3.41;
const enrolled = true;
let advisor = null;

console.log(typeof fullName, typeof gpa, typeof enrolled);
console.log(typeof advisor, typeof gpa.missingProperty);

gpa = 3.52;
const line = `${nickname} (${fullName}) — GPA ${gpa}, enrolled: ${enrolled}`;
console.log(line);
document.getElementById("out").textContent = line;
```

## Your Tasks
### 1. Declare a constant
Use `const` unless you know the value will change.

```
const university = "KMITL";
console.log(university);
```

### 2. Use `let` for a changing value
Reassignment needs `let`; the same code with `const` throws a `TypeError`.

```
let credits = 12;
credits = credits + 3;
console.log(credits);
```

### 3. Check a type
`typeof` returns a string such as `"string"` or `"number"`.

```
console.log(typeof "CE-201");
console.log(typeof 3.41);
console.log(typeof true);
```

### 4. Build a string with a template literal
Backticks plus `${}` beat string concatenation for readability.

```
const nickname = "Ploy";
const year = 2;
console.log(`${nickname} is in year ${year}`);
```

### 5. Mutate an object held in a `const`
The name is fixed; the object's contents are not.

```
const student = { name: "Ploy", gpa: 3.41 };
student.gpa = 3.52;
console.log(student.gpa);
```

## Exercises

### Exercise 1: Four variables
Declare your name, year, GPA and whether you are enrolled, choosing `const` or `let` for each, and
print all four.

### Exercise 2: Type table
Log `typeof` for a string, a number, a boolean, `null` and a variable you declared without a value.
Note in the console which one gives a surprising answer.

### Exercise 3: One-line summary
Rewrite `"Name: " + name + ", year " + year` as a template literal.

### Exercise 4: Break a `const`
Assign a new value to a `const` and read the exact error message in the console panel.

### Exercise 5: Course object
Make `const course = { code: "CE-201", seats: 40 }`, raise `seats` to 45, then print `course.seats`
and confirm the change worked even though `course` is a `const`.

## Quizes

### Q1. Which keyword should you reach for first?
1. `var`
2. `let`
3. `const`
4. `new`

### Q2. What is `typeof null`?
1. `"null"`
2. `"object"`
3. `"undefined"`
4. `"empty"`

### Q3. What is the difference between `null` and `undefined`?
1. They are two spellings of the same keyword
2. `null` is a number and `undefined` is a string
3. `null` is a value you set to mean empty; `undefined` means no value was ever assigned
4. `undefined` can only appear inside objects

### Q4. What does `const s = { n: 1 }; s.n = 2; console.log(s.n);` print?
1. `1`
2. `2`
3. `undefined`
4. A `TypeError`, because `s` is a `const`

### Q5. What is the value of `` `${2 + 3} points` ``?
1. `"${2 + 3} points"`
2. `"2 + 3 points"`
3. `"5 points"`
4. `5`
