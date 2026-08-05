# Grid tracks and sizing

`display: grid` lays children into rows and columns you describe on the container.
`grid-template-columns` lists the column widths, left to right; `grid-template-rows` does the same for
rows. The `fr` unit is a share of the leftover space, so `1fr 2fr` makes a second column twice as wide
as the first. `repeat(3, 1fr)` is shorthand for three equal columns, and `gap` spaces every track at
once.

The line worth memorising builds a responsive card wall with no media query:

```
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

`auto-fit` creates as many columns as fit at a 200px minimum, then lets them grow to fill the row.

## Display
### HTML

```
<div class="wall">
  <div class="card">CE101</div>
  <div class="card">CE202</div>
  <div class="card">CE221</div>
  <div class="card">CE310</div>
  <div class="card">CE340</div>
</div>
```

### CSS

```
.wall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  padding: 12px;
  background: #EEF1F4;
}

.card { padding: 16px; background: #fff; border: 1px solid #DDE2E8; color: #0F1B33; }
```

### Javascript

```

```

## Your Tasks
### 1. Make three equal columns
`repeat(3, 1fr)` beats writing `1fr 1fr 1fr` by hand.

```
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

### 2. Mix a fixed track with a flexible one
A sidebar of exactly 220px, and a main column that takes whatever is left.

```
.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
}
```

### 3. Build a card wall without a media query
The column count re-counts itself as the container's width changes.

```
.wall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

### 4. Size rows explicitly
`grid-template-rows` works exactly like columns, just on the other axis.

```
.layout {
  display: grid;
  grid-template-rows: 80px 1fr 60px;
}
```

### 5. Compare fr against percent
`fr` accounts for `gap` automatically; percentages do not.

```
.a { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
.b { display: grid; grid-template-columns: 33.33% 33.33% 33.33%; gap: 20px; }
```

## Exercises

### Exercise 1: Course grid
Show six course cards in `repeat(auto-fit, minmax(220px, 1fr))`. Resize the window and record the
widths at which the column count changes.

### Exercise 2: `fr` versus percent
Build the two rows from Task 5, measure both in DevTools, and explain which one overflows and why.

### Exercise 3: Header, main, footer rows
Build a page with `grid-template-rows: 60px 1fr 60px` and confirm the middle row fills whatever space
is left.

### Exercise 4: Two-track sidebar layout
Build a `220px 1fr` two-column page and confirm the sidebar stays fixed while the main column resizes
with the window.

### Exercise 5: Gap versus margin
Add `gap: 16px` to a grid, then remove it and add margins to each child instead. Compare the two
results at the container's edges.

## Quizes

### Q1. What does the `fr` unit measure?
1. A fraction of the viewport width
2. A fixed 16px unit, like `rem`
3. A fraction of the largest item's width
4. A share of the space left over after fixed tracks and gaps

### Q2. `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` on a 700px container with `gap: 0`. How many columns?
1. Two, each 350px
2. Four, each 175px
3. Three, each about 233px
4. One, 700px wide

### Q3. What does `grid-template-rows` control?
1. The number of columns
2. The size of each row, same as `grid-template-columns` does for columns
3. Only the gap between rows
4. Nothing — rows always size automatically

### Q4. Why does `fr` often beat `%` for equal columns with a gap?
1. `fr` ignores `gap` entirely
2. `fr` accounts for `gap` when dividing the leftover space; percentages do not
3. `%` cannot be used inside `grid-template-columns`
4. There is no difference between the two

### Q5. What does `repeat(3, 1fr)` produce?
1. One column, repeated three times in the markup
2. Three equal-width columns
3. Three rows, each `1fr` tall
4. A three-level nested grid
