# Removing table rows

A delete button in each row, combined with event delegation on the table body, is enough to remove
rows with no per-row listener. `event.target.closest("tr")` finds the row that contains whatever was
clicked, and `row.remove()` — or `table.deleteRow(row.rowIndex)` — takes it out.
`row.rowIndex` reports that row's live position, which is why it must be read at click time, not
stored ahead of time — it changes as other rows are removed.

## Display
### HTML

```
<h1>Waiting list</h1>
<table id="waitlist">
  <thead><tr><th>Name</th><th></th></tr></thead>
  <tbody>
    <tr><td>Ploy</td><td><button type="button" data-action="remove">Remove</button></td></tr>
    <tr><td>Nan</td><td><button type="button" data-action="remove">Remove</button></td></tr>
    <tr><td>Beam</td><td><button type="button" data-action="remove">Remove</button></td></tr>
  </tbody>
</table>
<p id="count"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #DDE2E8; padding: 6px 10px; text-align: left; }
th { background: #EEF1F4; }
```

### Javascript

```
const tbody = document.querySelector("#waitlist tbody");
const count = document.getElementById("count");

function updateCount() {
  count.textContent = `${tbody.rows.length} on the list`;
}

tbody.addEventListener("click", (event) => {
  if (event.target.dataset.action !== "remove") return;
  const row = event.target.closest("tr");
  row.remove();
  updateCount();
});

updateCount();
```

## Your Tasks
### 1. Remove a row with .remove()
Any element, including a `<tr>`, can remove itself from its parent.

```
row.remove();
```

### 2. Remove a row with deleteRow
`table.deleteRow(row.rowIndex)` is the table-specific equivalent.

```
table.deleteRow(row.rowIndex);
```

### 3. Delegate the remove click
One listener on `<tbody>` covers a delete button in every row, current or future.

```
tbody.addEventListener("click", (event) => {
  if (event.target.dataset.action !== "remove") return;
  event.target.closest("tr").remove();
});
```

### 4. Keep a live count
Recompute the count from `tbody.rows.length` after every removal, rather than tracking a separate
counter that can drift.

```
function updateCount() {
  count.textContent = `${tbody.rows.length} on the list`;
}
```

### 5. Confirm before removing
Guard a destructive action with a simple check before calling `.remove()`.

```
tbody.addEventListener("click", (event) => {
  if (event.target.dataset.action !== "remove") return;
  const row = event.target.closest("tr");
  if (confirm(`Remove ${row.cells[0].textContent}?`)) row.remove();
});
```

## Exercises

### Exercise 1: Remove button
Add a "Remove" button to each row that deletes just that row when clicked, using delegation.

### Exercise 2: Live count
Show "N on the list" under the table, staying correct after every removal.

### Exercise 3: Undo the last removal
Keep the most recently removed row's data in a variable, and add an "Undo" button that re-inserts it.

### Exercise 4: Remove all
Add a "Clear all" button that empties `tbody` in one call, and confirm the count updates to zero.

### Exercise 5: rowIndex after removal
Log every remaining row's `rowIndex` after a removal in the middle of the table, and confirm they
shifted up by one.

## Quizes

### Q1. What does `row.remove()` do?
1. Only hides the row with CSS
2. Removes the row from its parent, taking it out of the document
3. Clears the row's text but keeps it in the table
4. Only works on the last row

### Q2. What does `table.deleteRow(row.rowIndex)` need to know?
1. The row's current, live index — not a stored earlier value
2. Nothing — it always deletes the first row
3. The row's `id` attribute
4. The number of columns in the table

### Q3. Why delegate the remove-button click instead of attaching a listener per row?
1. Per-row listeners are not allowed on table rows
2. One delegated listener covers rows added later too, with no extra code
3. Delegation is required for `.remove()` to work at all
4. It has no real benefit here

### Q4. Why recompute the row count from `tbody.rows.length` instead of a separate counter variable?
1. `rows.length` is always wrong after a removal
2. A separate counter can drift out of sync; reading the live collection cannot
3. `rows.length` does not exist on `<tbody>`
4. There is no difference between the two approaches

### Q5. What happens to other rows' `rowIndex` values after a row in the middle is removed?
1. Nothing changes
2. Every row after the removed one shifts its index up by one
3. All indexes reset to zero
4. `rowIndex` becomes `undefined` for the whole table
