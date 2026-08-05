# Objects

An object is a set of named properties. Write it with `{}`, and read a property with dot notation
`course.title`. Use bracket notation `course["title"]` when the key is stored in a variable, or is
not a plain identifier. Assigning to a property that does not exist yet creates it.

```
const course = { code: "CE-233", title: "Web Development" };
course.seats = 40;             // added
course["title"] = "Web Dev";   // updated
```

`JSON.stringify(value, null, 2)` turns a value into indented text, the easiest way to see a whole
nested object in the console.

## Display
### HTML

```
<h1>Course info</h1>
<pre id="out"></pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#out { background: #0F1B33; color: #EEF1F4; padding: 10px; }
```

### Javascript

```
const course = { code: "CE-233", title: "Web Development", seats: 40 };
course.enrolled = 37;

const key = "seats";
console.log(course.code, course[key], course.enrolled);

document.getElementById("out").textContent = JSON.stringify(course, null, 2);
```

## Your Tasks
### 1. Create an object and read a property
Dot notation is the everyday way to read a fixed, known key.

```
const course = { code: "CE-233", title: "Web Development" };
console.log(course.code, course.title);
```

### 2. Add a new property
Assigning to a key that does not exist yet creates it.

```
const course = { code: "CE-233" };
course.credits = 3;
console.log(course);
```

### 3. Read with a variable key
Bracket notation is required whenever the key itself lives in a variable.

```
const course = { code: "CE-233", seats: 40 };
const key = "seats";
console.log(course[key]);
```

### 4. Nest an object inside an object
Chain dot notation to reach a nested property.

```
const course = { code: "CE-233", staff: { instructor: "Dr. Anan", room: "ECC-401" } };
console.log(course.staff.instructor, course.staff.room);
```

### 5. Inspect the whole object
`JSON.stringify` with `null, 2` prints readable indented text.

```
const course = { code: "CE-233", staff: { instructor: "Dr. Anan" } };
console.log(JSON.stringify(course, null, 2));
```

## Exercises

### Exercise 1: Course object
Make an object with `code`, `title`, `credits` and `enrolled`, then log two of its properties with
dot notation.

### Exercise 2: Grow it
Raise `enrolled` by one and add a new `instructor` property to the object from Exercise 1.

### Exercise 3: Variable key
Store a property name in a variable, then use bracket notation to read that property from the
object.

### Exercise 4: Nest a staff object
Add a nested `staff` object with `instructor` and `room`, then log `course.staff.room`.

### Exercise 5: Read the shape
Log your Exercise 1 object with `JSON.stringify(course, null, 2)` and describe, from the console
output, how many top-level keys it has.

## Quizes

### Q1. Which line reads a property whose key is held in the variable `k`?
1. `obj.k`
2. `obj["k"]`
3. `obj[k]`
4. `obj->k`

### Q2. What happens when you assign to a property that does not exist yet?
1. It throws a `TypeError`
2. Nothing — the assignment is silently ignored
3. The property is created
4. It only works if the object was declared with `let`

### Q3. What does `course.staff.room` require?
1. `staff` must be an array
2. `staff` must itself be an object with a `room` property
3. `course` cannot be a `const`
4. Bracket notation instead

### Q4. Why is `JSON.stringify(value, null, 2)` useful in the console?
1. It converts the value into a real JavaScript array
2. It prints the nested structure as indented, readable text
3. It removes every nested object from the value
4. It validates that the object has no missing properties

### Q5. Given `const c = { code: "CE-233" }; c.seats = 40; console.log(c.seats, c["code"]);`, what prints?
1. `40 "CE-233"`
2. `undefined "CE-233"`
3. `40 undefined`
4. A `TypeError`
