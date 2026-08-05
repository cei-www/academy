# Storage and timers overview

You have now met `localStorage` and timers on their own. Together they cover a common pattern:
persisting a value across reloads, and debouncing how often you write it — waiting for typing or
clicking to pause before saving, instead of saving on every keystroke.

## Display
### HTML

```
<h1>Draft note</h1>
<textarea id="note" rows="4" cols="40" placeholder="Type a note..."></textarea>
<p id="status">not saved</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#status { color: #4B5563; }
```

### Javascript

```
const note = document.getElementById("note");
const status = document.getElementById("status");
let pending;

note.value = localStorage.getItem("draft") || "";
if (note.value) status.textContent = "loaded saved draft";

note.addEventListener("input", () => {
  status.textContent = "typing...";
  clearTimeout(pending);
  pending = setTimeout(() => {
    localStorage.setItem("draft", note.value);
    status.textContent = "saved";
  }, 500);
});
```

## Your Tasks
### 1. Save a value
`setItem` always stores a string.

```
localStorage.setItem("theme", "dark");
```

### 2. Read it back on load
A missing key returns `null`, so fall back to a default.

```
const theme = localStorage.getItem("theme") || "light";
```

### 3. Debounce a save
Clearing the previous timeout on every input means only the last call in a burst actually saves.

```
let pending;
note.addEventListener("input", () => {
  clearTimeout(pending);
  pending = setTimeout(() => localStorage.setItem("draft", note.value), 500);
});
```

### 4. Restore on page load
Read the saved value once, outside any event listener, right when the script runs.

```
note.value = localStorage.getItem("draft") || "";
```

### 5. Clear a saved draft
`removeItem` clears just the one key, once it is no longer needed.

```
localStorage.removeItem("draft");
```

## Exercises

### Exercise 1: Auto-saving textarea
Build a textarea that saves its value to `localStorage` 500ms after typing stops, and restores it on
reload.

### Exercise 2: Save status message
Show "typing...", then "saved" once the debounced save actually runs.

### Exercise 3: Clear the draft
Add a "Clear draft" button that removes the saved key and empties the textarea.

### Exercise 4: Countdown with save
Build a countdown timer whose final value is saved to `localStorage` when it reaches zero.

### Exercise 5: Choose the delay
Explain in one or two sentences why a 500ms debounce delay is a reasonable choice for autosave,
compared to saving on every keystroke.

## Quizes

### Q1. What does `getItem` return for a key that was never set?
1. `undefined`
2. `null`
3. An empty string
4. It throws an error

### Q2. What does clearing and resetting a timeout on every keystroke implement?
1. A memory leak, with no useful behaviour
2. A debounce — only the last call in a burst actually fires
3. An immediate synchronous call on every keystroke
4. Nothing — `clearTimeout` has no effect on typing

### Q3. Why debounce a `localStorage` save instead of saving on every keystroke?
1. `localStorage` cannot be written to more than once per page load
2. Saving that often would be wasteful and offers no benefit over saving after a short pause
3. `setItem` is asynchronous and would queue up
4. There is no reason — every-keystroke saving is just as good

### Q4. When should a saved value be restored from `localStorage`?
1. Never — it is write-only
2. Once, when the script runs, before the user has interacted
3. Only after `setInterval` fires once
4. Only on a manual "load" button click

### Q5. What does `localStorage.removeItem("draft")` do?
1. Clears every key stored for the page
2. Removes only the `"draft"` key, leaving other keys untouched
3. Sets `"draft"` to an empty string, without removing it
4. Throws if the key does not exist
