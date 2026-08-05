# Local storage

`localStorage` persists key-value pairs in the browser, surviving page reloads and even closing the
tab — until explicitly cleared. `sessionStorage` has the identical API but is cleared when the tab
closes. Both only store strings: `JSON.stringify` before saving an object, `JSON.parse` after reading
it back. `.setItem(key, value)`, `.getItem(key)`, `.removeItem(key)` and `.clear()` cover the whole
API, and a missing key returns `null`, not `undefined`.

## Display
### HTML

```
<h1>Saved theme</h1>
<button id="light" type="button">Light</button>
<button id="dark" type="button">Dark</button>
<p id="out"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
button { padding: 6px 12px; margin-right: 6px; }
```

### Javascript

```
const out = document.getElementById("out");

function save(theme) {
  localStorage.setItem("theme", theme);
  render();
}

function render() {
  const saved = localStorage.getItem("theme") || "not set";
  out.textContent = "saved theme: " + saved;
}

document.getElementById("light").addEventListener("click", () => save("light"));
document.getElementById("dark").addEventListener("click", () => save("dark"));
render();
```

## Your Tasks
### 1. Save a value
`setItem` always stores a string — pass one directly for simple values.

```
localStorage.setItem("theme", "dark");
```

### 2. Read a value back
A missing key returns `null`, so check for it before using the result.

```
const theme = localStorage.getItem("theme");
console.log(theme ?? "not set");
```

### 3. Remove one key
`removeItem` deletes just that key, leaving everything else untouched.

```
localStorage.removeItem("theme");
```

### 4. Store an object
Objects must be serialised first — `localStorage` only holds strings.

```
localStorage.setItem("profile", JSON.stringify({ name: "Ploy", year: 2 }));
const profile = JSON.parse(localStorage.getItem("profile"));
console.log(profile.name);
```

### 5. Clear everything
`.clear()` empties every key this page's origin has stored.

```
localStorage.clear();
```

## Exercises

### Exercise 1: Remember a choice
Save a light/dark theme choice with two buttons, and confirm it persists after a page reload in
DevTools' Application panel.

### Exercise 2: Store and restore an object
Save a small settings object with `JSON.stringify`, reload the page, and restore it with
`JSON.parse`.

### Exercise 3: Handle a missing key
Read a key that was never set, and confirm the result is `null`, not an error or `undefined`.

### Exercise 4: sessionStorage versus localStorage
Save the same key to both, close and reopen the tab, and report which one still has the value.

### Exercise 5: Clear one key
Save two keys, remove only one with `removeItem`, and confirm the other survives.

## Quizes

### Q1. What does `localStorage` store values as?
1. Any JavaScript type, unchanged
2. Only strings — objects must be serialised first
3. Only numbers
4. Binary data only

### Q2. What does `getItem` return for a key that was never set?
1. `undefined`
2. `null`
3. An empty string
4. It throws an error

### Q3. What is the key difference between `localStorage` and `sessionStorage`?
1. There is no difference
2. `sessionStorage` clears when the tab closes; `localStorage` persists until explicitly cleared
3. `localStorage` only works on HTTPS
4. `sessionStorage` can store objects directly; `localStorage` cannot

### Q4. How do you store an object in `localStorage`?
1. Pass it directly to `setItem`
2. Serialise it first with `JSON.stringify`
3. It is not possible
4. Use `setItem` twice, once per property

### Q5. What does `localStorage.clear()` do?
1. Removes only the most recently set key
2. Removes every key stored for this page's origin
3. Clears the page's visible content
4. Clears `sessionStorage` too, automatically
