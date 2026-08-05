# Global attributes

A handful of attributes work on almost any HTML element, regardless of tag. `id` names one specific
element uniquely on the page; `class` names a group of elements sharing a style or behaviour.
`tabindex="0"` makes a normally non-focusable element (like a `<div>`) reachable by Tab, while a
negative value makes it focusable only by script. `hidden` removes an element from layout and the
accessibility tree entirely — stronger than `visibility:hidden`. `contenteditable="true"` lets the
visitor edit an element's text in place. `data-*` attributes store custom data on an element for your
own script to read back, with no effect on rendering.

## Display
### HTML

```
<div id="panel" class="card" tabindex="0" data-role="info">
  Focusable card — try pressing Tab.
</div>

<p contenteditable="true">Click here and type — this text is editable.</p>

<p hidden>You should never see this line.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
.card { border: 1px solid #DDE2E8; border-radius: 6px; padding: 10px; max-width: 300px; }
.card:focus { outline: 2px solid #F2A93B; }
[contenteditable="true"] { border: 1px dashed #DDE2E8; padding: 6px; }
```

### Javascript

```
const panel = document.getElementById("panel");
console.log("data-role:", panel.dataset.role);
panel.addEventListener("focus", () => console.log("panel focused"));
```

## Your Tasks
### 1. Name one element uniquely with id
`id` must be unique on the page; use it for one specific element, never a group.

```
<div id="panel">One specific element</div>
```

### 2. Group elements with class
Any number of elements can share the same class.

```
<div class="card">A</div>
<div class="card">B</div>
```

### 3. Make a div focusable
`tabindex="0"` inserts an element into the normal Tab order.

```
<div tabindex="0">Reachable by keyboard</div>
```

### 4. Hide an element from everyone
`hidden` removes it from layout and the accessibility tree, not just visually.

```
<p hidden>Not shown, not announced.</p>
```

### 5. Store custom data for your own script
`data-*` attributes read back through `.dataset` in JavaScript, in camelCase.

```
<div id="item" data-course-id="01076021"></div>
```
```
console.log(document.getElementById("item").dataset.courseId);
```

## Exercises

### Exercise 1: Unique vs shared
Build three elements: one with a unique `id`, and two sharing one `class`. Explain in one sentence
why `id` should never repeat.

### Exercise 2: Keyboard-reachable card
Give a `<div>` `tabindex="0"`, style its `:focus` state, and confirm Tab reaches it.

### Exercise 3: Editable note
Add `contenteditable="true"` to a `<p>`, edit its text in the browser, and read the updated text back
with `.textContent`.

### Exercise 4: Hide vs style-hide
Compare `hidden` against `style="visibility:hidden"` on two elements, and write one sentence on how
they differ for a screen reader.

### Exercise 5: Read data attributes
Add two `data-*` attributes to one element and log both through `.dataset` in the console.

## Quizes

### Q1. What must be true of an element's `id`?
1. It can repeat any number of times
2. It must be unique on the page
3. It only matters for `<div>` elements
4. It has no effect unless paired with a class

### Q2. What does `tabindex="0"` do to a `<div>`?
1. Removes it from the page
2. Inserts it into the normal keyboard Tab order
3. Makes it uneditable
4. Hides it until clicked

### Q3. How does `hidden` differ from `visibility:hidden`?
1. They are identical in every way
2. `hidden` removes the element from layout and the accessibility tree; `visibility:hidden` only
   hides it visually while it still takes up space
3. `hidden` only works on images
4. `visibility:hidden` is stronger, since it also disables scripts

### Q4. How do you read a `data-course-id` attribute in JavaScript?
1. `element.getAttribute("courseId")`
2. `element.dataset.courseId`
3. `element.data("course-id")`
4. `element.attributes.courseId`

### Q5. What does `contenteditable="true"` allow?
1. The element's CSS `class` to be edited
2. The visitor to edit the element's text directly in the page
3. Only JavaScript can edit it, never the visitor
4. The element's tag name to change at runtime
