# Introduction

HTML gives a page structure and CSS gives it appearance. JavaScript makes it *do* things: react to a
click, read what someone typed, change text after the page has loaded.

JavaScript runs in the browser, inside the page. You add it with a `<script>` tag:

```
<script src="app.js"></script>
```

A plain `<script>` blocks parsing and runs immediately, so an element it looks for may not exist yet.
Put the tag at the end of `<body>`, or write `<script src="app.js" defer></script>` to run it after
the HTML is parsed.

`console.log(value)` prints to the console. This playground has its own console panel below the
preview, so you can see the output without opening DevTools. A statement usually ends with `;`, and
`//` starts a comment to end of line while `/* … */` comments a block.

## Display
### HTML

```
<h1>CE WebDev</h1>
<p id="msg">Open the console panel below.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#msg { color: #4B5563; }
```

### Javascript

```
// A statement ends with a semicolon.
console.log("Script is running");

/* Several values in one call are separated by commas. */
console.log("course:", "CE-201", "year:", 2);

document.getElementById("msg").textContent = "JavaScript changed this text.";
```

## Your Tasks
### 1. Print a message
Open the console panel and read what you printed.

```
console.log("Hello from KMITL");
```

### 2. Print several values at once
`console.log` accepts a comma-separated list and prints all of them on one line.

```
console.log("student:", "Nattapong", "year:", 2);
```

### 3. Write a comment
Comments are ignored by the browser and are for the next person reading your code.

```
// This line is skipped.
/* So is
   this block. */
console.log("only this prints");
```

### 4. Run two statements in order
Statements run top to bottom, one after the other.

```
console.log("first");
console.log("second");
```

### 5. Change text on the page
`textContent` replaces the text inside an element.

```
document.getElementById("msg").textContent = "Updated by JavaScript";
```

## Exercises

### Exercise 1: Three lines
Print your name, your nickname and your year with three separate `console.log` calls, then read them
in the console panel.

### Exercise 2: One line, three values
Print the same three values with a single `console.log` call instead.

### Exercise 3: Comment one out
Take your three calls from Exercise 1 and comment out the middle one so only two lines print.

### Exercise 4: Move the script
In a plain HTML file, put `<script>` in `<head>` with code that reads an element in `<body>`, observe
the error in the console, then fix it by adding `defer`.

### Exercise 5: Two headings
Add a second heading to the HTML and set its text from JavaScript instead of typing it in the markup.

## Quizes

### Q1. Where does JavaScript in a web page run?
1. On the web server before the page is sent
2. In the browser, in the page itself
3. In the operating system, outside the browser
4. In the CSS engine after styles are applied

### Q2. Why is `<script>` usually placed at the end of `<body>`?
1. Scripts written earlier in the file are ignored by the browser
2. The HTML above it is already parsed, so the elements it needs exist
3. CSS cannot load until every script has finished
4. It makes the JavaScript file download faster

### Q3. Which attribute makes a script wait until the HTML is parsed before running?
1. `async`
2. `wait`
3. `defer`
4. `onload`

### Q4. What does `console.log()` do?
1. Writes a value into the page where the script tag is
2. Saves a value to a log file on disk
3. Stops the script and shows an error
4. Prints a value to the browser console

### Q5. A file has three lines in this order: `console.log("A");`, then `// console.log("B");`, then `console.log("C");`. What is printed?
1. `A`, `B` and `C`
2. `A` then `C`
3. `A` only
4. Nothing, because the comment stops the script
