# Disclosure widgets

`<details>` and `<summary>` build a collapsible section with no JavaScript at all. `<summary>` is
always visible and is what the visitor clicks; everything else inside `<details>` is hidden until it
is expanded. Add the `open` attribute to start expanded. A `toggle` event fires every time the state
changes, in either direction.

## Display
### HTML

```
<details>
  <summary>What do I need before this course?</summary>
  <p>Comfortable with variables and functions in any language. No prior web experience needed.</p>
</details>

<details open>
  <summary>How are labs graded?</summary>
  <p>Each lab is checked against the five numbered tasks in that lesson.</p>
</details>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
details { border: 1px solid #DDE2E8; border-radius: 6px; padding: 8px 12px; margin-bottom: 8px; }
summary { cursor: pointer; font-weight: 600; color: #0F1B33; }
details p { color: #4B5563; margin: 8px 0 0; }
```

### Javascript

```
document.querySelectorAll("details").forEach((d) => {
  d.addEventListener("toggle", () => console.log(d.querySelector("summary").textContent, "→", d.open));
});
```

## Your Tasks
### 1. Build a collapsed section
By default a `<details>` with no `open` attribute starts closed.

```
<details>
  <summary>Click to expand</summary>
  <p>Hidden content, revealed on click.</p>
</details>
```

### 2. Start a section expanded
The `open` attribute (no value needed) starts it visible.

```
<details open>
  <summary>Already open</summary>
  <p>Visible immediately, and still collapsible.</p>
</details>
```

### 3. Read the open state in JavaScript
`.open` is a plain boolean property, readable and settable.

```
const d = document.querySelector("details");
console.log(d.open);
d.open = true;
```

### 4. React to the toggle event
`toggle` fires on every state change, whether the visitor opened or closed it.

```
document.querySelector("details").addEventListener("toggle", (e) => {
  console.log("now open:", e.target.open);
});
```

### 5. Build a FAQ from several details
Several `<details>` elements stack independently — opening one does not close the others.

```
<details><summary>Question 1</summary><p>Answer 1.</p></details>
<details><summary>Question 2</summary><p>Answer 2.</p></details>
```

## Exercises

### Exercise 1: FAQ list
Build three `<details>` elements as a FAQ, one starting open, two starting closed.

### Exercise 2: Log every toggle
Attach a `toggle` listener to every `<details>` on the page and confirm in the console that clicking
each one logs its new state.

### Exercise 3: Open from a button
Add a button outside any `<details>` that sets a specific one's `.open` to `true` when clicked.

### Exercise 4: Count open sections
Log how many `<details>` elements are currently open using
`document.querySelectorAll("details[open]").length`.

### Exercise 5: Style the marker
Give `<summary>` a custom look (color, bold, or a hover state) and confirm the built-in disclosure
triangle still works without any JavaScript.

## Quizes

### Q1. What is always visible in a `<details>` element, whether it is open or closed?
1. Every child element
2. Only the first paragraph
3. The `<summary>`
4. Nothing until it is clicked

### Q2. Which attribute starts a `<details>` element expanded?
1. `expanded`
2. `open`
3. `visible`
4. `show`

### Q3. What does `.open` return on a `<details>` element in JavaScript?
1. The number of times it has been toggled
2. A boolean — `true` if it is currently expanded
3. The `<summary>` text
4. `undefined`, since `<details>` has no JavaScript API

### Q4. When does the `toggle` event fire?
1. Only when the element opens, never when it closes
2. Only when the element closes, never when it opens
3. Every time the open/closed state changes, in either direction
4. Only when triggered by JavaScript, never by a click

### Q5. Do multiple `<details>` elements on one page affect each other?
1. Yes — opening one always closes the others
2. No — each one opens and closes independently by default
3. Only if they share the same `id`
4. Only inside a `<form>`
