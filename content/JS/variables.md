# Variables

Variables store values so a program can reuse and change them. Modern JavaScript uses `let` for values that change and `const` for values that don't.

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
let name = "Ada";
console.log("Hello, " + name);
```

## Your tasks
### Declare a variable
Store your name and print a greeting.

```
let name = "Ada";
console.log("Hello, " + name);
```

### Use a constant
Store a value that should never be reassigned.

```
const pi = 3.14159;
```

## Exercises

### Exercise 1: Reassign a let
Declare a `let score = 0`, then add 10 to it twice and log the final value.

### Exercise 2: Try reassigning a const
Declare a `const` and attempt to change its value — note what error appears.

### Exercise 3: Template strings
Combine two variables into one sentence using a template literal, e.g. `` `${a} and ${b}` ``.

## Quizes

### Q1. Which keyword declares a variable that can be reassigned?
1. `const`
2. `let`
3. `var name`
4. `fixed`

### Q2. What happens if you try to reassign a `const`?
1. It silently keeps the old value
2. JavaScript throws an error
3. It automatically becomes a `let`
4. Nothing, `const` behaves exactly like `let`

### Q3. What does `console.log()` do?
1. Saves a variable to a file
2. Prints a value to the browser's console
3. Deletes a variable
4. Sends data to a server
