# Relative and absolute positioning

Every element defaults to `position: static` — it sits exactly where normal flow puts it, and `top`,
`left`, `right`, `bottom` do nothing. `position: relative` shifts an element from that spot with
`top`/`left` while leaving a gap behind, as if it were still there. `position: absolute` removes the
element from flow entirely and places it relative to its nearest **positioned** ancestor — any
ancestor whose `position` is not `static`.

## Display
### HTML

```
<div class="card">
  <span class="badge">New</span>
  <h2>CE221 Data Structures</h2>
  <p>3 credits — Thursday 09:00, Lab 2</p>
</div>
```

### CSS

```
.card {
  position: relative;
  width: 260px;
  padding: 16px;
  border: 1px solid #DDE2E8;
  border-radius: 8px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 3px 10px;
  border-radius: 10px;
  background-color: #F2A93B;
  color: #6B4207;
  font-size: 12px;
  font-weight: 700;
}
```

### Javascript

```

```

## Your Tasks
### 1. Make a container the positioning anchor
`position: relative` on the parent does not move it, but it becomes the reference for any absolute
child.

```
.card { position: relative; }
```

### 2. Pin a badge to a corner
An absolute child is placed with `top`/`right`/`bottom`/`left` measured from its positioned ancestor.

```
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
}
```

### 3. Nudge an element without disturbing layout
`relative` offsets move the box visually but the space it originally occupied stays reserved.

```
.nudge {
  position: relative;
  top: 4px;
  left: 4px;
}
```

### 4. Centre an absolute element
Combine a 50% offset with a negative margin, or a transform, to centre a fixed-size absolute box.

```
.centered {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

### 5. Layer two absolute elements with `z-index`
`z-index` only compares elements that are positioned; the higher number paints on top.

```
.badge   { position: absolute; z-index: 2; }
.overlay { position: absolute; z-index: 1; }
```

## Exercises

### Exercise 1: Badge on a card
Build a course card with a `position: absolute` "Full" badge pinned to its top-right corner.

### Exercise 2: Missing anchor
Remove `position: relative` from the card and describe, in one sentence, where the badge jumps to
and why.

### Exercise 3: Relative nudge
Give a `<span>` `position: relative; top: 6px;` next to plain text and confirm in DevTools that the
space it left behind is still reserved.

### Exercise 4: Centred overlay
Absolutely position a 40×40px icon in the exact centre of a 200×200px card using `left: 50%` and
`transform: translateX(-50%)` on both axes.

### Exercise 5: Stack order
Overlap two absolutely positioned boxes and use `z-index` to make the second one appear behind the
first, then confirm the paint order in DevTools' 3D view or by inspection.

## Quizes

### Q1. What is an element's `position` value by default?
1. `relative`
2. `absolute`
3. `static`
4. `fixed`

### Q2. What happens to the space an element used to occupy when it becomes `position: relative` and is offset with `top`?
1. It collapses to zero
2. It stays reserved, as if the element had not moved
3. It is given to the next sibling
4. It becomes scrollable

### Q3. An absolutely positioned element is placed relative to what?
1. The `<body>`, always
2. The browser viewport, always
3. Its nearest ancestor whose `position` is not `static`
4. Its immediate parent, no matter what

### Q4. Why does `.badge { position: absolute; top: -10px; right: -10px; }` do nothing useful without `position: relative` on `.card`?
1. `absolute` elements need a `width` first
2. With no positioned ancestor, it positions relative to a much larger ancestor instead
3. `top` and `right` cannot be combined
4. Negative offsets are invalid in CSS

### Q5. What does `z-index` control?
1. The element's width and height
2. The horizontal position of an element
3. Which positioned element paints on top when two overlap
4. Whether an element is visible at all
