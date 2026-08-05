# Grid placement and named areas

Once tracks exist, an item can span more than one of them. `grid-column: span 2` covers two columns
from wherever the item would normally land; `grid-column: 1 / 3` instead names the exact track lines
to start and end at — line numbers count the gaps between tracks, starting at 1. `grid-row` works the
same way on the other axis.

`grid-template-areas` takes a different approach: draw the layout as a grid of names directly in the
stylesheet, then give each child a matching `grid-area`. Placement then reads like a picture instead
of a set of line numbers.

## Display
### HTML

```
<div class="page">
  <header>Header</header>
  <aside>Sidebar</aside>
  <main>Main content</main>
</div>
```

### CSS

```
.page {
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-areas:
    "side header"
    "side main";
  gap: 10px;
}

.page header { grid-area: header; background: #F2A93B; padding: 10px; }
.page aside  { grid-area: side; background: #EEF1F4; padding: 10px; }
.page main   { grid-area: main; background: #fff; border: 1px solid #DDE2E8; padding: 10px; }
```

### Javascript

```

```

## Your Tasks
### 1. Span two columns from the natural position
`span 2` covers two columns starting wherever the item would normally land.

```
.feature { grid-column: span 2; }
```

### 2. Place an item by exact track lines
Line numbers count the gaps between tracks, starting at 1.

```
.hero { grid-column: 1 / 3; grid-row: 1 / 3; }
```

### 3. Draw a layout with named areas
Each string is one row; each word names one cell.

```
.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "side header"
    "side main";
}
```

### 4. Assign children to named areas
`grid-area` on each child must match a name used in `grid-template-areas`.

```
.page > header { grid-area: header; }
.page > aside  { grid-area: side; }
.page > main   { grid-area: main; }
```

### 5. Swap a layout by editing only the areas
Reordering the words in `grid-template-areas` moves elements with no other CSS change.

```
grid-template-areas:
  "header header"
  "main side";
```

## Exercises

### Exercise 1: Dashboard with a hero cell
Make a four-column grid where the first card spans two columns and two rows, using `grid-column` and
`grid-row`. Check the highlighted track lines in DevTools' grid overlay.

### Exercise 2: Named-area page
Build a header, sidebar, main and footer page with `grid-template-areas`.

### Exercise 3: Move the sidebar
Take the page from Exercise 2 and swap the sidebar from left to right by editing only the area
strings, changing nothing else.

### Exercise 4: Span versus line numbers
Build the same two-column spanning item once with `span 2` and once with `1 / 3`, and confirm they
render identically.

### Exercise 5: Missing area name
Give a child a `grid-area` that does not appear in `grid-template-areas`, reload, and report what the
grid inspector in DevTools shows.

## Quizes

### Q1. Which declaration makes an item cover two columns from where it would normally land?
1. `grid-area: 2;`
2. `column-span: 2;`
3. `grid-column: span 2;`
4. `flex: 2;`

### Q2. In `grid-column: 1 / 3`, what do 1 and 3 refer to?
1. Two column widths in pixels
2. Two grid line numbers, so the item spans between them
3. The first and third child elements
4. A percentage range

### Q3. What must match between `grid-template-areas` and a child element?
1. The child's `class` name
2. The child's `grid-area` value and a name used in the area strings
3. The child's tag name
4. Nothing — placement is automatic

### Q4. What does `grid-template-areas` let you do that raw line numbers do not?
1. Skip using `display: grid` entirely
2. Draw the layout as readable names directly in the stylesheet
3. Avoid using `gap`
4. Automatically make the layout responsive

### Q5. What does one row of a `grid-template-areas` value represent?
1. One column
2. One row of the grid, with each word naming a cell
3. A media query breakpoint
4. Nothing visual — it is purely for documentation
