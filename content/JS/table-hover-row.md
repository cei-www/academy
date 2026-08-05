# Highlighting table rows

A table's `rows` collection lists every `<tr>` in document order, and each row's `cells` collection
lists its `<td>`/`<th>` in the same way — both are live, index-based, and need no `querySelectorAll`.
Delegating one listener to the whole table and reading `event.target.closest("tr")` highlights
whichever row the pointer is over, and works for rows added after the listener was attached, same as
delegation anywhere else in the DOM.

## Display
### HTML

```
<h1>Course grades</h1>
<table id="grades">
  <thead><tr><th>Code</th><th>Grade</th></tr></thead>
  <tbody>
    <tr><td>CE-231</td><td>A</td></tr>
    <tr><td>CE-232</td><td>B+</td></tr>
    <tr><td>CE-241</td><td>A-</td></tr>
  </tbody>
</table>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #DDE2E8; padding: 6px 10px; text-align: left; }
th { background: #EEF1F4; }
tbody tr.hover-row { background: #FDF1DC; }
```

### Javascript

```
const table = document.getElementById("grades");

table.addEventListener("mouseover", (event) => {
  const row = event.target.closest("tbody tr");
  if (row) row.classList.add("hover-row");
});

table.addEventListener("mouseout", (event) => {
  const row = event.target.closest("tbody tr");
  if (row) row.classList.remove("hover-row");
});

console.log("row count:", table.rows.length);
console.log("first row's cells:", table.rows[1].cells.length);
```

## Your Tasks
### 1. Delegate a hover listener to the table
One pair of listeners on the table covers every current and future row.

```
table.addEventListener("mouseover", (event) => {
  const row = event.target.closest("tbody tr");
  if (row) row.classList.add("hover-row");
});
```

### 2. Remove the highlight on mouseout
Pair every `mouseover` handler with a matching `mouseout` handler, or the highlight sticks.

```
table.addEventListener("mouseout", (event) => {
  const row = event.target.closest("tbody tr");
  if (row) row.classList.remove("hover-row");
});
```

### 3. Read the rows collection
`table.rows` lists every `<tr>`, including the header row, in document order.

```
console.log(table.rows.length);
console.log(table.rows[0].textContent);   // the header row
```

### 4. Read a row's cells collection
`row.cells` lists that row's `<td>`/`<th>` elements, indexed from 0.

```
const firstDataRow = table.rows[1];
console.log(firstDataRow.cells[0].textContent, firstDataRow.cells[1].textContent);
```

### 5. Scope the selector to skip the header
`"tbody tr"` in `closest()` avoids highlighting the `<thead>` row along with data rows.

```
const row = event.target.closest("tbody tr");
```

## Exercises

### Exercise 1: Hover highlight
Add a delegated hover highlight to a table's data rows, leaving the header row unaffected.

### Exercise 2: Click to select
Extend the hover example so clicking a row toggles a `selected` class that persists after the mouse
leaves, using the same delegation pattern.

### Exercise 3: Read a clicked row's data
On click, log every cell's text in the clicked row using `row.cells`.

### Exercise 4: Row count display
Show "N rows" under the table, computed from `table.rows.length` minus the header row.

### Exercise 5: Highlight the header separately
Add a distinct hover style just for the `<thead>` row, using a listener scoped to `"thead tr"`.

## Quizes

### Q1. What does `table.rows` list?
1. Only the rows currently visible on screen
2. Every `<tr>` in the table, in document order, including the header
3. Only `<tr>` elements inside `<tbody>`
4. The number of columns, not rows

### Q2. What does `row.cells` list?
1. Every `<tr>` in the table
2. That row's `<td>`/`<th>` elements, in order
3. Only cells with a `data-*` attribute
4. Nothing — `cells` is not a real property

### Q3. Why pair `mouseover` with `mouseout` in this pattern?
1. `mouseover` alone already removes the class automatically
2. Without `mouseout`, the highlight class would never be removed
3. `mouseout` is required for `mouseover` to fire at all
4. There is no reason — either works alone

### Q4. Why scope the delegated selector to `"tbody tr"` instead of just `"tr"`?
1. `"tr"` is invalid inside `closest()`
2. It avoids matching the header row inside `<thead>`
3. `"tbody tr"` is faster to evaluate for the browser
4. There is no difference between the two

### Q5. Does a row added to the table after the listeners were attached get the hover behaviour?
1. No — a new listener must be attached to it individually
2. Yes — the table's delegated listener already covers it
3. Only if the row is added with `insertRow`, not `innerHTML`
4. Only after a page reload
