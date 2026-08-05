# The this keyword

Inside a method, `this` is the object the method was called *on* — decided at call time, by what
comes before the dot, not by where the function was written. `card.show()` sets `this` to `card`;
pulling the same function out and calling it bare loses that binding, and `this` becomes `undefined`
in a module.

`.call(obj)`, `.apply(obj, args)` and `.bind(obj)` all fix `this` explicitly. `bind` is special: it
returns a new function permanently bound to `obj`, safe to pass around as a callback.

An arrow function has no `this` of its own; it uses the `this` of the scope around it. That makes it
the wrong choice for a method, and the right choice for a callback written *inside* a method.

## Display
### HTML

```
<h1>Student card</h1>
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
const card = {
  name: "Ploy", gpa: 3.52,
  show() { return `${this.name}: ${this.gpa}`; }
};

const lines = [];
lines.push(card.show());

const detached = card.show;
try { lines.push(detached()); } catch (e) { lines.push("detached failed: " + e.message); }
lines.push(detached.call(card));

const bound = card.show.bind(card);
lines.push(bound());

document.getElementById("out").textContent = lines.join("\n");
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
Detaching the method detaches `this` with it.

```
const f = card.show;
console.log(f());   // TypeError or undefined values
```

### 3. Fix it with call or bind
`call` invokes immediately with a given `this`; `bind` returns a new function bound forever.

```
console.log(f.call(card));
const bound = f.bind(card);
console.log(bound());
```

### 4. Arrow in the wrong place
As a method the arrow takes `this` from the enclosing scope, which is not the object.

```
const bad = { name: "Nan", show: () => `${this.name}` };
console.log(bad.show());   // "undefined"
```

### 5. Arrow in the right place
The callback inherits the method's `this`, so no `const self = this` is needed.

```
const team = {
  name: "Robotics", members: ["Ploy", "Beam"],
  list() { return this.members.map(m => `${m} of ${this.name}`); }
};
console.log(team.list());
```

## Exercises

### Exercise 1: Break and repair this
Assign `const g = c.enrol` for some object with an `enrol` method, call `g()`, read the error, then
make a working version with `bind` and call it twice.

### Exercise 2: Event listener this
Pass an object method directly to `addEventListener` and observe that `this` is now the button, not
the object; fix it with `.bind(obj)`.

### Exercise 3: Method versus arrow
Give one object the same behaviour twice, once as `show() {}` and once as `show: () => {}`, log both,
and write a comment naming the exact reason they differ.

### Exercise 4: apply versus call
Write a function that logs `this.name` and two arguments, then call it once with `.call` and once
with `.apply`, passing the same values both ways.

### Exercise 5: Arrow callback inside a method
Write a method that uses `.forEach` with an arrow callback referencing `this`, and confirm it still
resolves to the right object.

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

### Q3. What does `.bind(obj)` return?
1. The result of calling the function immediately
2. A new function permanently bound to `obj`
3. `undefined`
4. A copy of `obj`

### Q4. Which is a good reason to use an arrow function?
1. As a method on an object literal, to shorten it
2. As a class constructor
3. As a callback inside a method that needs the method's `this`
4. Whenever the function takes no arguments

### Q5. Why does passing `obj.method` directly to `addEventListener` often break `this`?
1. `addEventListener` never accepts methods
2. The function is called later with no object before the dot, so `this` is not `obj`
3. Event listeners always set `this` to `window`
4. It does not break — `this` is always preserved
