# Adding JavaScript

A `<script>` tag blocks HTML parsing at the exact point it appears: the browser stops, fetches the
script if it is external, runs it, and only then keeps parsing the rest of the page. That is why a
classic script traditionally sits just before `</body>` — everything above it has already parsed and
rendered by the time it runs.

A script placed in `<head>` runs before the `<body>` exists at all, so anything it looks up with
`document.getElementById` is not there yet. Adding `defer` fixes this: the script still downloads
early, in parallel with parsing, but its execution waits until parsing finishes, in source order.
`async` also downloads in parallel but runs the moment it is ready, out of order with other scripts.

An external file is linked with `<script src="path/to/file.js"></script>`, the same way a `<link>`
loads an external stylesheet; multiple scripts, inline or external, otherwise run top to bottom.

## Display
### HTML

```
<p id="external-msg">Waiting for the linked script...</p>
<script src="resources/js/demo-script.js"></script>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
```

### Javascript

```
/* This box becomes a script placed after the HTML above, so it runs after the
   external <script src="..."> has already executed and updated #msg. */
document.getElementById("external-msg").textContent += " Then this inline script ran, in source order.";
```

## Your Tasks
### 1. Place a script correctly
Before `</body>` is the classic spot — every element above it already exists in the DOM.

```
<body>
  <p id="external-msg"></p>
  <script src="app.js"></script>
</body>
```

### 2. See a head script fail without defer
A script in `<head>` runs before `<body>` exists, so a lookup by id returns `null`.

```
<head>
  <script>document.getElementById("external-msg").textContent = "hi";</script>
</head>
```

### 3. Fix it with defer
`defer` downloads early but waits to run until parsing has finished.

```
<head>
  <script src="app.js" defer></script>
</head>
```

### 4. Link an external JS file
`src` points at a separate file, exactly like a stylesheet's `href`.

```
<script src="resources/js/demo-script.js"></script>
```

### 5. Rely on source order
Two scripts, inline or external, run top to bottom unless one of them uses `async`.

```
<script src="a.js"></script>
<script src="b.js"></script>  <!-- always runs after a.js finishes -->
```

## Exercises

### Exercise 1: Move a script without defer
Move a script that reads `document.getElementById(...)` from just before `</body>` up into `<head>`,
with no `defer`. Explain in one sentence why it now fails.

### Exercise 2: Fix it two ways
Fix the broken script from Exercise 1 both by adding `defer` and, separately, by moving it back before
`</body>`. Compare the two fixes.

### Exercise 3: Three scripts in order
Add three inline scripts, each logging its own number, and confirm the console shows `1, 2, 3` in
that order.

### Exercise 4: async vs defer
Give two external scripts `async` instead of `defer` and explain why their console output order is no
longer guaranteed.

### Exercise 5: An external CDN script
Write a `<script src="https://...">` pointing at a CDN, as the Framework lessons do. Explain one
advantage (no file to host yourself) and one trade-off (the page now depends on that CDN being up).

## Quizes

### Q1. What happens when the HTML parser reaches a classic (non-`defer`) `<script>` tag?
1. Parsing continues immediately; the script runs whenever it is ready
2. Parsing pauses until the script is fetched and finished executing
3. The script is silently skipped
4. The rest of the page stops rendering permanently

### Q2. Why does a script in `<head>` often fail to find an element from the page body?
1. `<head>` scripts cannot use `document` at all
2. The body has not been parsed yet when the script runs
3. `getElementById` only works inside `<body>` scripts
4. It does not fail — this is a myth

### Q3. What does adding `defer` to a `<script>` in `<head>` change?
1. It prevents the script from ever running
2. It makes the script download in parallel and run after parsing, in source order
3. It moves the script to the bottom of the page automatically
4. It disables caching for that script

### Q4. How does `async` differ from `defer`?
1. They are identical in every way
2. `async` runs the script as soon as it downloads, out of order with other scripts
3. `async` blocks parsing entirely, unlike `defer`
4. `async` only works for inline scripts, not external ones

### Q5. Two external scripts, `a.js` then `b.js`, both without `async`. What is guaranteed?
1. `b.js` may run before `a.js`, since they load in parallel
2. `a.js` finishes running before `b.js` starts
3. Only the last script tag on the page ever runs
4. Nothing — execution order is never guaranteed in HTML
