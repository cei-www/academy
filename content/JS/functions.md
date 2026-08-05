# Functions

A function is a named block you can run whenever you need it. Declare one with `function`, list its
parameters, and call it with arguments — parameters are the names in the definition, arguments are
the values you pass in. `return` hands a value back and ends the function; a function with no
`return` gives `undefined`, so a function that only prints something returns `undefined`.

Arrow functions are shorter. With a block body you still write `return`; with a concise body the
single expression is returned automatically.

```
function area(width, height) {
  return width * height;
}
const double = n => n * 2;
const label = (name, year) => { return `${name}, year ${year}`; };
console.log(area(3, 4), double(21));   // 12 42
```

A parameter can have a default, used only when that argument is missing or `undefined`. Passing a
function to `addEventListener` is how you run code on a click — pass the function, do not call it.

## Display
### HTML

```
<h1>GPA tool</h1>
<p id="out">Press the button.</p>
<button id="calc" type="button">Show summary</button>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
button { background: #F2A93B; color: #6B4207; border: 0; padding: 8px 14px; }
```

### Javascript

```
function summarize(name, gpa, year = 2) {
  return `${name} — year ${year}, GPA ${gpa.toFixed(2)}`;
}

const honours = gpa => gpa >= 3.5;

console.log(summarize("Ploy", 3.412));
console.log(summarize("Beam", 3.6, 3), honours(3.6));

function shout(text) {
  console.log(text.toUpperCase());
}
console.log("shout returns:", shout("no return here"));

document.getElementById("calc").addEventListener("click", () => {
  document.getElementById("out").textContent = summarize("Nice", 3.75, 2);
});
```

## Your Tasks
### 1. Declare and call a function
The names in the parentheses are parameters; the values at the call are arguments.

```
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Ploy"));
```

### 2. Return a value
Without `return`, the call evaluates to `undefined`.

```
function noReturn() {
  console.log("side effect only");
}
console.log(noReturn());
```

### 3. Write an arrow function
A concise body returns its expression; a block body needs `return`.

```
const double = n => n * 2;
const initials = (first, last) => { return first[0] + last[0]; };
console.log(double(21), initials("Pimchanok", "Srisai"));
```

### 4. Give a parameter a default
The default applies when the argument is missing or `undefined`.

```
function credits(code, value = 3) {
  return `${code}: ${value} credits`;
}
console.log(credits("CE-233"), credits("CE-201", 4));
```

### 5. Call a function from a click
Pass the function itself — `handler()` would run it immediately instead.

```
function handler() {
  document.getElementById("out").textContent = "Clicked";
}
document.getElementById("calc").addEventListener("click", handler);
```

## Exercises

### Exercise 1: Rectangle area
Write `area(w, h)` that returns the product, and log the result for three different pairs.

### Exercise 2: Arrow version
Rewrite `area` as an arrow function with a concise body, and confirm both give the same answers.

### Exercise 3: Default greeting
Write `greet(name, greeting = "Sawasdee")` and call it once with one argument and once with two.

### Exercise 4: Missing return
Write a function whose body only calls `console.log`, then log its call. Explain in the console what
value came back and why.

### Exercise 5: Two buttons, one function
Write `setMessage(text)` and wire two buttons so each passes different text to it on click.

## Quizes

### Q1. What is the difference between a parameter and an argument?
1. Parameters are the names in the definition; arguments are the values passed at the call
2. Arguments are the names in the definition; parameters are the values passed at the call
3. Parameters are typed and arguments are untyped
4. They are the same thing under two names

### Q2. What does a function return if it has no `return` statement?
1. `null`
2. `0`
3. `undefined`
4. The last value it computed

### Q3. Which arrow function returns `n * n`?
1. `const sq = n => { n * n; };`
2. `const sq = n => n * n;`
3. `const sq = n -> n * n;`
4. `const sq = (n) { return n * n; };`

### Q4. Why is `btn.addEventListener("click", handler())` wrong?
1. Event names must be written as `"onclick"`
2. `addEventListener` accepts only arrow functions
3. It calls `handler` immediately and registers its return value as the listener
4. The handler needs to be declared with `let`

### Q5. Given `function f(a, b = 10) { return a + b; }`, what does `f(5)` return?
1. `5`
2. `10`
3. `15`
4. `NaN`
