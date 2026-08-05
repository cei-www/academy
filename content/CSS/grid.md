# Grid

`display: grid` gives you rows and columns at the same time. You describe the tracks on the
container, and children drop into cells in order.

`grid-template-columns` lists the column widths. The `fr` unit is a share of the leftover space, so
`1fr 2fr` makes a second column twice as wide as the first. `repeat(3, 1fr)` is three equal columns.
`gap` spaces the tracks.

The one line worth memorising builds a responsive card wall with no media query:

```
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

`auto-fit` creates as many columns as fit at 200px minimum, then lets them grow to fill the row.

Use grid when the layout is two-dimensional and known in advance; use flexbox when items are strung
along one axis and their own content decides the sizes.

## Display
### HTML

```
<div class="wall">
  <div class="card">CE101</div>
  <div class="card">CE202</div>
  <div class="card">CE221</div>
  <div class="card wide">CE310 — spans two</div>
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

.wide { grid-column: span 2; }
```

### Javascript

```

```

## Your Tasks
### 1. Make three equal columns
`repeat(3, 1fr)` beats writing `1fr 1fr 1fr`.

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
The columns re-count themselves as the container changes width.

```
.wall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

### 4. Span cells
Counting from track line 1 to line 3 covers two columns; `span 2` says the same thing relatively.

```
.feature { grid-column: span 2; }
.hero    { grid-column: 1 / 3; grid-row: 1 / 3; }
```

### 5. Name the areas
`grid-template-areas` draws the layout in the stylesheet, so placement reads like a picture.

```
.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "side header"
    "side main";
}

.page > header { grid-area: header; }
.page > aside  { grid-area: side; }
.page > main   { grid-area: main; }
```

## Exercises

### Exercise 1: Course grid
Show six course cards in `repeat(auto-fit, minmax(220px, 1fr))`. Resize the window and record the
widths at which the column count changes.

### Exercise 2: `fr` versus percent
Build one row with `1fr 1fr 1fr` and a `gap: 20px`, and another with `33.33% 33.33% 33.33%` and the
same gap. Measure both in DevTools and explain which one overflows and why.

### Exercise 3: Dashboard with a hero cell
Make a four-column grid where the first card spans two columns and two rows. Use `grid-column` and
`grid-row` and check the highlighted track lines in DevTools' grid overlay.

### Exercise 4: Named areas
Rebuild a header, sidebar, main and footer page with `grid-template-areas`, then swap the sidebar to
the right by editing only the area strings.

### Exercise 5: Choose the tool
Take a navigation bar and a photo gallery. Implement each with the layout module that fits, and write
one sentence for each justifying the choice.

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

### Q3. Which declaration makes an item cover two columns?
1. `grid-area: 2;`
2. `column-span: 2;`
3. `grid-column: span 2;`
4. `flex: 2;`

### Q4. When is grid the better choice than flexbox?
1. Whenever items must be centred
2. When rows and columns must line up in both directions at once
3. When there is only one row of items
4. When the items have different content lengths

### Q5. What does `grid-template-areas` need in order to work?
1. Each child given a matching `grid-area` name
2. Every child given an explicit `grid-column` as well
3. `display: flex` on the container
4. The areas listed in alphabetical order
