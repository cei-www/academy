# Toggling display and visibility with JavaScript

*Constraining and hiding content* showed the CSS difference: `display: none` removes the box and its
space; `visibility: hidden` keeps the space and only hides what is drawn in it. JavaScript flips
either one through `element.style`, and reading `getComputedStyle(element).display` back confirms
which state an element is actually in.

`element.style.display = "none"` and setting it back to `""` (not `"block"`) is the safer toggle —
an empty string clears the inline override and lets the element fall back to its own CSS-defined
`display`, whatever that was. The same applies to `element.style.visibility`.

## Display
### HTML

```
<div id="panel">This panel can be hidden two different ways.</div>
<div class="row">
  <button id="btnDisplay" type="button">Toggle display: none</button>
  <button id="btnVisibility" type="button">Toggle visibility: hidden</button>
</div>
<p id="status">Panel is visible.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
#panel { padding: 10px; margin-bottom: 8px; background: #F2A93B; color: #6B4207; }
.row { display: flex; gap: 8px; margin-bottom: 8px; }
button { padding: 6px 10px; }
```

### Javascript

```
const panel = document.getElementById("panel");
const status = document.getElementById("status");

document.getElementById("btnDisplay").addEventListener("click", () => {
  const hidden = getComputedStyle(panel).display === "none";
  panel.style.display = hidden ? "" : "none";
  status.textContent = hidden
    ? "Panel is visible again — display restored, space is back."
    : "Panel is gone — no box, no space (display: none).";
});

document.getElementById("btnVisibility").addEventListener("click", () => {
  const hidden = getComputedStyle(panel).visibility === "hidden";
  panel.style.visibility = hidden ? "" : "hidden";
  status.textContent = hidden
    ? "Panel is visible again."
    : "Panel is invisible, but its space still holds its place (visibility: hidden).";
});
```

## Your Tasks
### 1. Hide an element with display
Setting `display` to `"none"` removes the box entirely from the layout.

```
panel.style.display = "none";
```

### 2. Restore it without hard-coding a value
Clearing to `""` lets the element's own CSS `display` take over again, whatever it was.

```
panel.style.display = "";
```

### 3. Hide an element with visibility instead
`visibility: hidden` hides the drawing but leaves the box's space reserved.

```
panel.style.visibility = "hidden";
```

### 4. Ask the browser which state it is actually in
`getComputedStyle` reports the real, current value — not just what you last set.

```
if (getComputedStyle(panel).display === "none") { /* it's hidden */ }
```

### 5. Toggle based on the current state
Read the current value first, then flip it — this is what makes one button work as a toggle.

```
const hidden = getComputedStyle(panel).display === "none";
panel.style.display = hidden ? "" : "none";
```

## Exercises

### Exercise 1: Two hide buttons, one panel
Build the display above from scratch: one button removes the panel entirely, the other only makes it
invisible. Click each and watch the layout around the panel.

### Exercise 2: Compare the layout shift
Toggle `display: none` on one box in a row of three, and note how the other two shift. Then do the
same with `visibility: hidden` and note that nothing shifts.

### Exercise 3: A show/hide password field
Toggle a password `<input>` between `type="password"` and `type="text"` on a button click — not
display or visibility, but a related "reveal" pattern using the same toggle-by-reading-state idea.

### Exercise 4: Fix a broken toggle
Given `btn.addEventListener("click", () => { panel.style.display = "none"; })`, explain why clicking
it twice does not bring the panel back, and fix it.

### Exercise 5: Hide, then measure
Set an element to `visibility: hidden` and read its `offsetWidth` in the console. Then set it to
`display: none` and read `offsetWidth` again. Explain the difference.

## Quizes

### Q1. What does `element.style.display = "none"` do?
1. Fades the element out over time
2. Removes the element's box and its space from the layout
3. Only hides the element's text, not its background
4. Deletes the element from the DOM entirely

### Q2. Why set `element.style.display = ""` instead of `"block"` to un-hide it?
1. `"block"` is invalid in JavaScript
2. An empty string restores the element's own CSS-defined display, whatever it was
3. There is no difference between the two
4. `""` is required syntax and `"block"` throws an error

### Q3. What does `getComputedStyle(element).display` return?
1. The value last set in JavaScript only, ignoring CSS
2. The element's actual current display value, from CSS or inline style
3. Always `"block"`, regardless of styling
4. `undefined` unless the element has an inline style

### Q4. After `panel.style.visibility = "hidden"`, what happens to the layout around it?
1. Other elements shift to fill the space
2. The space is preserved — nothing else moves
3. The whole page becomes invisible
4. The element is removed from the DOM

### Q5. What pattern makes a single button toggle an element's visibility on each click?
1. Always setting the same fixed value
2. Reading the current computed state first, then setting the opposite
3. Removing and re-creating the element each time
4. Reloading the page on every click
