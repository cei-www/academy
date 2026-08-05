# Functions

A function is a reusable block of code. You define it once and call it as many times as you need, optionally passing in different inputs each time.

## Display
### HTML

```
<p id="output">Open the console to see output.</p>
```

### CSS

```

```

### Javascript

```
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```

## Your tasks
### Write a function
Define a function that adds two numbers and returns the result.

```
function add(a, b) {
  return a + b;
}
```

### Call it
Use the function and log the result.

```
console.log(add(2, 3));
```

## Exercises

### Exercise 1: Greeting function
Write a function `greet(name)` that returns `"Hello, " + name`.

### Exercise 2: Arrow function
Rewrite the `add` function above as an arrow function.

### Exercise 3: Default parameter
Give a function a parameter with a default value, so it still works when called with no arguments.

## Quizes

### Q1. Which keyword starts a traditional function declaration?
1. `func`
2. `function`
3. `def`
4. `method`

### Q2. What does `return` do inside a function?
1. Ends the entire program
2. Sends a value back to wherever the function was called
3. Prints a value to the console
4. Restarts the function from the top

### Q3. Which of these is a valid arrow function?
1. `const add = (a, b) => a + b;`
2. `const add = function => a + b;`
3. `arrow add(a, b) { return a + b; }`
4. `add(a, b) -> a + b;`
