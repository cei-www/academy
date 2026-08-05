# Grid overview

You have now met tracks and placement on their own: `grid-template-columns`/`grid-template-rows` with
`fr` and `repeat()` size the grid, while `grid-column`/`grid-row` or named `grid-template-areas` place
children into it. A real layout uses both together.

Use grid when the layout is two-dimensional and known in advance; use flexbox when items are strung
along one axis and their own content decides the sizes.

## Display
### HTML

```
<div class="wall">
  <div class="card wide">CE310 — spans two</div>
  <div class="card">CE101</div>
  <div class="card">CE202</div>
  <div class="card">CE221</div>
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
### 1. Size the tracks
`fr` shares the leftover space; `repeat()` avoids repeating yourself.

```
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

### 2. Build a card wall without a media query
The columns re-count themselves as the container's width changes.

```
.wall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

### 3. Span cells
Counting from track line 1 to line 3 covers two columns; `span 2` says the same thing relatively.

```
.feature { grid-column: span 2; }
.hero    { grid-column: 1 / 3; grid-row: 1 / 3; }
```

### 4. Name the areas
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

### 5. Choose grid over flexbox
Grid wins once both rows and columns need to line up together, not just one axis.

```
/* two-dimensional dashboard → grid */
.dashboard { display: grid; grid-template-columns: repeat(4, 1fr); }

/* one row of tags → flexbox */
.tags { display: flex; gap: 8px; }
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
