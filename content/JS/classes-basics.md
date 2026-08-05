# Class basics

A `class` is a template for objects. `constructor` runs on `new` and sets each instance's own fields;
methods go on the prototype so all instances share one copy instead of each carrying a duplicate. A
`get` accessor is read like a plain property but computed fresh on each read. A field written
`#count` is genuinely private: reading it from outside the class is a syntax error, not just a
convention.

## Display
### HTML

```
<h1>Course seats</h1>
<p id="out"></p>
<button id="join" type="button">Enrol</button>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
button { padding: 6px 10px; }
```

### Javascript

```
class Course {
  #enrolled = 0;
  constructor(code, title, seats) {
    this.code = code; this.title = title; this.seats = seats;
  }
  get free() { return this.seats - this.#enrolled; }
  enrol() { if (this.free > 0) this.#enrolled += 1; return this.free; }
  label() { return `${this.code} ${this.title} — ${this.free} free`; }
}

const course = new Course("CE-231", "Digital Logic", 3);
const out = document.getElementById("out");
const render = () => { out.textContent = course.label(); };

document.getElementById("join").addEventListener("click", () => { course.enrol(); render(); });
render();
```

## Your Tasks
### 1. Build a class with a constructor
`constructor` runs once, at `new`, and sets each instance's own fields.

```
class Student {
  constructor(name, gpa) {
    this.name = name;
    this.gpa = gpa;
  }
}
const s = new Student("Ploy", 3.52);
console.log(s.name, s.gpa);
```

### 2. Add a method
Methods live once on the prototype, not copied onto every instance.

```
class Student {
  constructor(name, gpa) { this.name = name; this.gpa = gpa; }
  describe() { return `${this.name}: ${this.gpa}`; }
}
console.log(new Student("Nan", 2.98).describe());
```

### 3. Add a computed getter
A getter reads like a property, no parentheses, but recomputes every time.

```
class Student {
  constructor(points, credits) { this.points = points; this.credits = credits; }
  get gpa() { return this.points / this.credits; }
}
console.log(new Student(56, 16).gpa);
```

### 4. Add a private field
`#enrolled` cannot be read or written from outside the class at all.

```
class Course {
  #enrolled = 0;
  enrol() { this.#enrolled += 1; }
  get count() { return this.#enrolled; }
}
```

### 5. Keep invariants inside a method
Because `#enrolled` is private, `free` can never disagree with it — every change goes through
`enrol()`.

```
const c = new Course("CE-241", "Microprocessors", 2);
c.enrol();
console.log(c.free);   // 1
```

## Exercises

### Exercise 1: Student class
Write `Student` with `name`, `credits` and `points`, a method `addGrade(credits, grade)`, and a getter
`gpa` computing `points / credits`. Log the GPA after three grades.

### Exercise 2: Encapsulate a queue
Write `WaitList` with a `#queue` private field and methods `add(name)`, `next()` and a getter
`length`. Confirm that `w.#queue` cannot be read from outside.

### Exercise 3: Read-only getter
Build a `Rectangle` class with `width` and `height` fields and a getter `area`, and confirm `area`
updates automatically when `width` changes.

### Exercise 4: Private counter
Build a `Counter` class with a `#value` private field, `increment()`, and a getter `value`. Try
accessing `#value` from outside and note the error.

### Exercise 5: Multiple instances
Create three `Student` instances and confirm each keeps its own `gpa`, independent of the others.

## Quizes

### Q1. When does a class's `constructor` run?
1. Every time a method is called
2. Once, when `new ClassName(...)` is called
3. Only if you call `.constructor()` explicitly
4. Automatically when the file loads, for every class

### Q2. Where do class methods live?
1. Copied onto every new instance
2. Once, on the class's prototype, shared by all instances
3. In the global scope
4. Nowhere until first called

### Q3. What does a `get` accessor do differently from a normal method?
1. Nothing — they behave identically
2. It is read like a property, with no parentheses, and recomputes on each read
3. It can only return `true` or `false`
4. It runs once and caches its result forever

### Q4. What does `#total` mean in a class body?
1. A private field, unreachable from outside the class
2. A comment
3. A static property shared by all instances
4. A getter that must be called as `#total()`

### Q5. Why is a private field useful for keeping an invariant like `free = seats - enrolled`?
1. It is not useful — public fields work identically
2. Nothing outside the class can change it directly, so it can only update through methods that
   keep it consistent
3. Private fields are faster to compute
4. Private fields are visible in `console.log` but not in code
