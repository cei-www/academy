# Objects, this and classes overview

An object literal can hold functions. Written with the shorthand `read() { ... }` they are methods,
and inside a method `this` is the object the method was called *on* — decided at call time, not where
the function was written. `card.show()` sets `this` to `card`; pulling the same function out and
calling it bare loses that binding and `this` becomes `undefined` in a module or the window otherwise.

An arrow function has no `this` of its own; it uses the `this` of the scope around it. That makes it
the wrong choice for a method — the surrounding scope is not the object — and the right choice for a
callback written *inside* a method, where you want the outer `this` to carry through.

A `class` is a template for objects. `constructor` runs on `new`, methods go on the prototype so all
instances share one copy, and a `get` accessor is read like a property but computed on each read. A
field written `#count` is genuinely private: reading it from outside is a syntax error.

`class B extends A` inherits A's methods. B's constructor must call `super(...)` before touching
`this`, and `super.method()` calls the parent's version.

## Display
### HTML

```
<h1>Course seats</h1>
<ul id="list"></ul>
<p><button id="join" type="button">Enrol in CE-231</button></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#list li { padding: 4px 0; border-bottom: 1px solid #DDE2E8; }
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

class Lab extends Course {
  constructor(code, title, seats, room) { super(code, title, seats); this.room = room; }
  label() { return `${super.label()} (${this.room})`; }
}

const courses = [new Course("CE-231", "Digital Logic", 3), new Lab("CE-232", "Logic Lab", 2, "A-401")];
const list = document.getElementById("list");
const render = () => { list.textContent = ""; courses.forEach(c => {
  const li = document.createElement("li"); li.textContent = c.label(); list.append(li); }); };

document.getElementById("join").addEventListener("click", () => { courses[0].enrol(); render(); });
render();
```

## Your Tasks
### 1. Methods on a literal
Inside a method, `this` is whatever came before the dot.

```
const card = {
  name: "Ploy", gpa: 3.52,
  show() { return `${this.name}: ${this.gpa}`; }
};
console.log(card.show());
```

### 2. Lose the binding
Detaching the method detaches `this` with it; `call` or `bind` puts it back.

```
const f = card.show;
console.log(f());                 // TypeError or undefined values
console.log(f.call(card));        // works
```

### 3. Arrow in the wrong place
As a method the arrow takes `this` from the enclosing scope, which is not the object.

```
const bad = { name: "Nan", show: () => `${this.name}` };
console.log(bad.show());          // "undefined"
```

### 4. Arrow in the right place
The callback inherits the method's `this`, so no `const self = this` is needed.

```
const team = {
  name: "Robotics", members: ["Ploy", "Beam"],
  list() { return this.members.map(m => `${m} of ${this.name}`); }
};
console.log(team.list());
```

### 5. Class with a getter and a private field
`#enrolled` is unreachable from outside, so `free` can never disagree with it.

```
const c = new Course("CE-241", "Microprocessors", 2);
c.enrol();
console.log(c.free);              // 1
// console.log(c.#enrolled);      // SyntaxError — uncomment and the whole script fails to parse
```

## Exercises

### Exercise 1: Student class
Write `Student` with `name`, `credits` and `points`, a method `addGrade(credits, grade)`, and a getter
`gpa` computing `points / credits`. Log the GPA after three grades.

### Exercise 2: Break and repair `this`
Assign `const g = c.enrol` at the console prompt, call `g()`, read the error, then make a working
version with `bind` and call it twice.

### Exercise 3: Subclass with extra state
Add `class Seminar extends Course` with a `speaker` field and a `label()` that appends the speaker by
calling `super.label()`.

### Exercise 4: Encapsulate a queue
Write `WaitList` with a `#queue` private field and methods `add(name)`, `next()` and a getter
`length`. Confirm that `w.#queue` cannot be read from outside.

### Exercise 5: Method versus arrow
Give one object the same behaviour twice, once as `show() {}` and once as `show: () => {}`, log both,
and write a comment naming the exact reason they differ.

## Quizes

### Q1. Inside `obj.run()`, what is `this`?
1. The function `run` itself
2. `obj`
3. Always the global object
4. The object where `run` was defined in the source

### Q2. What does `const o = { n: 1, get: () => this.n }; console.log(o.get());` print?
1. `1`
2. `null`
3. A `TypeError`
4. `undefined`

### Q3. Which is a good reason to use an arrow function?
1. As a method on an object literal, to shorten it
2. As a class constructor
3. As a callback inside a method that needs the method's `this`
4. Whenever the function takes no arguments

### Q4. What does `#total` mean in a class body?
1. A private field, unreachable from outside the class
2. A comment
3. A static property shared by all instances
4. A getter that must be called as `#total()`

### Q5. In a subclass constructor, `super(...)` must be called
1. Only if the parent has no constructor
2. After the first use of `this`
3. Before `this` is used
4. Never — `extends` calls it automatically
