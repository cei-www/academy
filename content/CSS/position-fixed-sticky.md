# Fixed, sticky and z-index

`position: fixed` pins an element to the browser viewport — it ignores scrolling and stays put, which
is how a "back to top" button or a floating chat launcher works. `position: sticky` behaves like
`relative` until the page scrolls past a threshold you set (usually `top: 0`), then behaves like
`fixed` within its own parent — the classic sticky table or section header.

## Display
### HTML

```
<div class="scroller">
  <div class="sticky-head">CE221 — Data Structures</div>
  <p>Week 1: arrays and linked lists.</p>
  <p>Week 2: stacks and queues.</p>
  <p>Week 3: trees.</p>
  <p>Week 4: graphs.</p>
</div>

<button class="fab" type="button">↑ Top</button>
```

### CSS

```
.scroller {
  height: 140px;
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
### 1. Pin a button to the viewport
`fixed` positions relative to the browser window, not any ancestor, and stays through scrolling.

```
.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
```

### 2. Make a header sticky inside a scroll area
`sticky` needs a threshold — `top: 0` — to know when to start sticking.

```
.sticky-head {
  position: sticky;
  top: 0;
}
```

### 3. Style the sticky header so it hides the content behind it
A solid background stops scrolled content from showing through the sticky bar.

```
.sticky-head {
  background-color: #EEF1F4;
}
```

### 4. Layer a fixed button above other content
`z-index` only compares positioned elements, so give the button a high value if anything overlaps it.

```
.fab { position: fixed; z-index: 10; }
```

### 5. Combine offsets to place a fixed corner button
Two offsets — one vertical, one horizontal — are enough to pin any corner.

```
.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
```

## Exercises

### Exercise 1: Floating action button
Build a `position: fixed` button pinned to the bottom-right corner of the page that stays there while
you scroll.

### Exercise 2: Sticky course header
Put five weeks of course content in a 150px scrollable box with a sticky header showing the course
code. Scroll and confirm the header stays visible.

### Exercise 3: Sticky without a threshold
Remove `top: 0` from a `position: sticky` element and describe, in one sentence, what happens when
you scroll.

### Exercise 4: Two fixed elements
Add a second fixed element that overlaps the first, then use `z-index` to control which one is on
top. Confirm the result in DevTools.

### Exercise 5: Read the computed position
Select the sticky header in DevTools while scrolled past its threshold and confirm its computed
`position` behaviour matches `fixed` at that point.

## Quizes

### Q1. What does `position: fixed` position an element relative to?
1. Its parent element
2. The nearest `position: relative` ancestor
3. The browser viewport
4. The `<body>`'s content height

### Q2. What must `position: sticky` be given to work?
1. A `width`
2. A threshold value like `top: 0`
3. A `z-index`
4. Nothing extra — it works with no other properties

### Q3. How does a sticky element behave before it reaches its scroll threshold?
1. Like `fixed`
2. Like `absolute`
3. Like `relative` — it scrolls normally with the page
4. It is invisible

### Q4. Which elements does `z-index` compare?
1. All elements on the page, positioned or not
2. Only positioned elements (not `static`)
3. Only elements with the same `class`
4. Only direct siblings

### Q5. What is a typical use for `position: fixed`?
1. A table row that highlights on hover
2. A "back to top" button that stays visible while scrolling
3. A paragraph that wraps text around an image
4. A grid track that resizes with the viewport
