# Mouse events on SVG

Inline SVG elements are ordinary DOM nodes, so `addEventListener` works on `<circle>`, `<rect>`,
`<path>` and every other shape exactly like it does on an HTML element — `click`, `mouseover`,
`mouseout` all fire normally, and `event.target` reports whichever shape was actually under the
pointer. Reading or changing a presentation attribute goes through `getAttribute`/`setAttribute`,
since attributes like `fill` are not plain JS properties the way `.textContent` is.

Event delegation works the same way too: one listener on the `<svg>` root, combined with
`event.target.closest("[data-id]")`, covers every shape inside it — including shapes added later.

## Display
### HTML

```
<svg id="chart" viewBox="0 0 300 100" width="300" height="100">
  <circle class="dot" data-id="ce231" cx="50" cy="50" r="30" fill="#F2A93B" />
  <rect class="dot" data-id="ce232" x="120" y="20" width="60" height="60" fill="#0F1B33" />
  <circle class="dot" data-id="ce241" cx="250" cy="50" r="30" fill="#15803D" />
</svg>
<p id="out">Click or hover a shape.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
svg { border: 1px solid #DDE2E8; cursor: pointer; }
.dot { transition: opacity 150ms ease; }
.dot:hover { opacity: 0.7; }
```

### Javascript

```
const chart = document.getElementById("chart");
const out = document.getElementById("out");

chart.addEventListener("click", (event) => {
  const shape = event.target.closest("[data-id]");
  if (!shape) return;
  out.textContent = "clicked: " + shape.dataset.id;
  shape.setAttribute("stroke", "#6B4207");
  shape.setAttribute("stroke-width", "4");
});

chart.addEventListener("mouseover", (event) => {
  const shape = event.target.closest("[data-id]");
  if (shape) console.log("hovering:", shape.dataset.id, "fill:", shape.getAttribute("fill"));
});
```

## Your Tasks
### 1. Listen for a click on a shape
`addEventListener` works on SVG elements exactly like on HTML elements.

```
const circle = document.querySelector("circle");
circle.addEventListener("click", () => console.log("clicked"));
```

### 2. Read the clicked shape
`event.target` reports the exact shape under the pointer.

```
svg.addEventListener("click", (event) => {
  console.log(event.target.tagName);
});
```

### 3. Read a presentation attribute
Attributes like `fill` go through `getAttribute`, not a plain JS property.

```
console.log(circle.getAttribute("fill"));
```

### 4. Change a shape's attribute on interaction
`setAttribute` updates the shape's rendered appearance immediately.

```
circle.addEventListener("click", () => {
  circle.setAttribute("fill", "#0F1B33");
});
```

### 5. Delegate one listener to the whole SVG
One listener on the `<svg>` root, plus `closest`, covers every shape, current and future.

```
svg.addEventListener("click", (event) => {
  const shape = event.target.closest("[data-id]");
  if (shape) console.log(shape.dataset.id);
});
```

## Exercises

### Exercise 1: Click to highlight
Add a click listener to each shape in a small chart that adds a `stroke` to whichever one was
clicked.

### Exercise 2: Hover feedback
Use CSS `:hover` combined with a `mouseover` listener that logs the hovered shape's `data-id`.

### Exercise 3: Delegate to the SVG root
Rewrite Exercise 1 using one delegated listener on the `<svg>` element instead of one per shape.

### Exercise 4: Read then write an attribute
On click, read a shape's current `fill`, log it, then set it to a new color.

### Exercise 5: Toggle selection
Click a shape to toggle a `selected` class on it, and confirm clicking it again removes the class.

## Quizes

### Q1. Does `addEventListener` work on SVG shapes like `<circle>`?
1. No — SVG elements need a separate event API
2. Yes — inline SVG elements are ordinary DOM nodes
3. Only on `<svg>` itself, never on shapes inside it
4. Only with jQuery or a similar library

### Q2. How do you read an SVG shape's `fill` attribute in JavaScript?
1. `shape.fill`
2. `shape.getAttribute("fill")`
3. `shape.style.fill` is the only way
4. It cannot be read, only set

### Q3. What does `event.target` report during a click inside an SVG?
1. Always the `<svg>` root element
2. The exact shape element that was actually clicked
3. `null`, since SVG does not support `event.target`
4. The page's `<body>`

### Q4. How do you change a shape's fill color from JavaScript?
1. `shape.fill = "red"`
2. `shape.setAttribute("fill", "red")`
3. It cannot be changed after the page loads
4. `shape.textContent = "red"`

### Q5. Why delegate a click listener to the `<svg>` root instead of each shape?
1. Shapes cannot have their own listeners
2. One listener then covers shapes added later too, with no extra code
3. Delegation is required for SVG clicks to fire at all
4. It has no real advantage here
