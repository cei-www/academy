# Position overview

You have now met `relative`/`absolute` (an element positioned against its nearest positioned
ancestor) and `fixed`/`sticky` (an element positioned against the viewport, or sticking within its
scroll container) on their own. Here all four work together on one page, alongside `z-index`.

`static` is the default and ignores `top`/`left`/`right`/`bottom` entirely — every other value turns
those offsets on.

## Display
### HTML

```
<div class="scroller">
  <div class="sticky-head">CE221 — Data Structures</div>

  <div class="card">
    <span class="badge">New</span>
    <p>Week 1: arrays and linked lists.</p>
  </div>

  <p>Week 2: stacks and queues.</p>
  <p>Week 3: trees.</p>
</div>

<button class="fab" type="button">↑ Top</button>
```

### CSS

```
.scroller {
  height: 160px;
  overflow: auto;
  border: 1px solid #DDE2E8;
}

.sticky-head {
  position: sticky;
  top: 0;
  padding: 6px 10px;
  background-color: #EEF1F4;
  font-weight: 700;
}

.card { position: relative; padding: 10px; }

.badge {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 2px 8px;
  border-radius: 10px;
  background-color: #F2A93B;
  color: #6B4207;
  font-size: 11px;
  z-index: 2;
}

.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: none;
  background-color: #F2A93B;
  color: #6B4207;
  font-weight: 700;
}
```

### Javascript

```

```

## Your Tasks
### 1. Anchor a badge with relative and absolute
`relative` on the parent, `absolute` on the child — the pairing you will use constantly.

```
.card  { position: relative; }
.badge { position: absolute; top: 4px; right: 4px; }
```

### 2. Make a header sticky
`sticky` needs `top: 0` to know where to lock in place while its container scrolls.

```
.sticky-head { position: sticky; top: 0; }
```

### 3. Pin a button to the viewport
`fixed` ignores scrolling entirely and stays relative to the browser window.

```
.fab { position: fixed; bottom: 16px; right: 16px; }
```

### 4. Layer overlapping positioned elements
Only positioned elements respond to `z-index`; the higher number wins.

```
.badge { z-index: 2; }
.overlay { z-index: 1; }
```

### 5. Choose the right value for the job
A corner badge is `absolute`; a header that should stay visible while scrolling is `sticky`; a
button that must always be reachable is `fixed`.

```
.badge       { position: absolute; }
.sticky-head { position: sticky; top: 0; }
.fab         { position: fixed; }
```

## Exercises

### Exercise 1: Badge on a card
Build a course card with a `position: absolute` "Full" badge pinned to its top-right corner.

### Exercise 2: Sticky course header
Put five weeks of course content in a scrollable box with a sticky header showing the course code.

### Exercise 3: Floating action button
Add a `position: fixed` button pinned to the bottom-right corner that stays visible while scrolling.

### Exercise 4: Stack order
Overlap two positioned elements and use `z-index` to control which one paints on top.

### Exercise 5: Name the right value
For a tooltip anchored to a button, a header that should stay visible in a long table, and a chat
launcher that should always be reachable, name the `position` value that fits each and why.

## Quizes

### Q1. What is an element's `position` value by default?
1. `relative`
2. `absolute`
3. `static`
4. `fixed`

### Q2. What does `position: fixed` position an element relative to?
1. Its parent element
2. The nearest `position: relative` ancestor
3. The browser viewport
4. The `<body>`'s content height

### Q3. What must `position: sticky` be given to work?
1. A `width`
2. A threshold value like `top: 0`
3. A `z-index`
4. Nothing extra — it works with no other properties

### Q4. An absolutely positioned element is placed relative to what?
1. The `<body>`, always
2. The browser viewport, always
3. Its nearest ancestor whose `position` is not `static`
4. Its immediate parent, no matter what

### Q5. What does `z-index` control?
1. The element's width and height
2. The horizontal position of an element
3. Which positioned element paints on top when two overlap
4. Whether an element is visible at all
