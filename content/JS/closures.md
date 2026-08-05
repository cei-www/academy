# Closures

A function keeps its scope chain alive even after the outer call that created it has returned. A
function together with the variables it captured from that outer scope is a closure — the basis of
private state in JavaScript, with no `class` or `#private` field required.

Each call to a factory function creates a fresh set of captured variables, so two objects built by the
same factory never share state unless you deliberately make them.

## Display
### HTML

```
<h1>Counters</h1>
<p>
  <button id="a" type="button">Counter A</button>
  <button id="b" type="button">Counter B</button>
</p>
<p id="out">A: 0 / B: 0</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
button { padding: 6px 10px; margin-right: 6px; }
#out { font-weight: 600; color: #6B4207; }
```

### Javascript

```
function makeCounter(start = 0) {
  let count = start;                    // private: only the two functions below can see it
  return {
    next() { count += 1; return count; },
    read() { return count; }
  };
}

const a = makeCounter();
const b = makeCounter(10);
const out = document.getElementById("out");
const show = () => { out.textContent = `A: ${a.read()} / B: ${b.read()}`; };

document.getElementById("a").addEventListener("click", () => { a.next(); show(); });
document.getElementById("b").addEventListener("click", () => { b.next(); show(); });
```

## Your Tasks
### 1. Keep state in a closure
`count` survives after `makeCounter` returns, and each call gets its own copy.

```
const c1 = makeCounter();
const c2 = makeCounter();
c1.next(); c1.next();
console.log(c1.read(), c2.read());   // 2 0
```

### 2. Confirm the state is private
Nothing outside the factory can read `count` directly — only the returned functions can.

```
console.log(c1.count);   // undefined — not reachable from outside
```

### 3. Capture a parameter, not just a local variable
Whatever is captured — parameters or local variables — sticks around the same way.

```
function greeter(name) {
  return () => console.log("Hello, " + name);
}
const greetRathachai = greeter("Rathachai");
greetRathachai();   // "Hello, Rathachai"
```

### 4. Build a function that remembers its first result
The captured value only gets set once, on the first call.

```
function once(fn) {
  let called = false, result;
  return (...args) => {
    if (!called) { result = fn(...args); called = true; }
    return result;
  };
}
```

### 5. Give two objects independent closures
Two calls to the same factory never share their captured variables unless you pass the same one in.

```
const a = makeCounter();
const b = makeCounter();
a.next();
console.log(a.read(), b.read());   // 1 0
```

## Exercises

### Exercise 1: Counter with reset
Extend `makeCounter` with a `reset()` method that puts the count back to its original `start` value,
without exposing `count` itself.

### Exercise 2: Run once
Write `once(fn)` that returns a function calling `fn` only on its first invocation and returning the
same first result on every later call. Prove it with `console.log` inside `fn`.

### Exercise 3: Private registry
Write `makeRegistry()` returning `{ add(name), has(name), size() }` backed by an array that no code
outside the factory can read or modify.

### Exercise 4: Two independent timers
Build `makeTimer()` returning `{ start(), elapsed() }`, and confirm two separate timers created from
it track independent start times.

### Exercise 5: Explain the leak-proofing
In one or two sentences, explain why a closure is a safer way to hide state than just naming a
variable with an underscore prefix.

## Quizes

### Q1. A closure is
1. A function that has finished running
2. A function together with the outer variables it captured
3. Any function defined inside an object literal
4. A block wrapped in braces to hide its variables

### Q2. Two calls to the same counter factory share their `count` variable
1. Yes, because the variable is declared once in the source
2. Yes, but only when the factory uses `let`
3. No, because `count` is stored on the global object
4. No, each call creates a new variable that its returned functions capture

### Q3. Why can code outside `makeCounter` not read `count` directly?
1. `count` is deleted once `makeCounter` returns
2. `count` only exists inside the closure formed by the returned functions
3. JavaScript objects cannot have private data under any circumstances
4. `count` is renamed automatically on return

### Q4. What does `once(fn)` need to remember between calls?
1. Nothing — it can be stateless
2. Whether it has already run, and the result from that first run
3. The name of the function passed in
4. How many arguments `fn` takes

### Q5. What keeps a closure's captured variables alive after the outer function returns?
1. The garbage collector refuses to remove any variable ever
2. The returned function's continued reference to them
3. `var` declarations, specifically
4. Nothing — the values are copied, not referenced
