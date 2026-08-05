# Working with tables overview

You have now met adding, hovering, editing and removing table rows on their own. A real admin table
combines all four: `insertRow`/`insertCell` to add, delegated `mouseover`/`mouseout` to highlight,
`contenteditable` to edit in place, and a delegated remove button with `.remove()` to delete — every
interaction routed through one or two listeners on the table, not one per row.

## Display
### HTML

```
<h1>Course roster</h1>
<table id="roster">
  <thead><tr><th>Name</th><th>GPA</th><th></th></tr></thead>
  <tbody>
    <tr><td contenteditable="true">Ploy</td><td contenteditable="true">3.52</td>
        <td><button type="button" data-action="remove">x</button></td></tr>
  </tbody>
</table>
<button id="addBtn" type="button">Add row</button>
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
const tbody = document.querySelector("#roster tbody");

document.getElementById("addBtn").addEventListener("click", () => {
  const row = tbody.insertRow(-1);
  row.insertCell(0).textContent = "New student";
  row.insertCell(1).textContent = "0.00";
  const cell = row.insertCell(2);
  const btn = document.createElement("button");
  btn.type = "button"; btn.dataset.action = "remove"; btn.textContent = "x";
  cell.append(btn);
  row.cells[0].contentEditable = "true";
  row.cells[1].contentEditable = "true";
});

tbody.addEventListener("mouseover", (e) => { const r = e.target.closest("tr"); if (r) r.classList.add("hover-row"); });
tbody.addEventListener("mouseout", (e) => { const r = e.target.closest("tr"); if (r) r.classList.remove("hover-row"); });

tbody.addEventListener("click", (event) => {
  if (event.target.dataset.action === "remove") event.target.closest("tr").remove();
});
```

## Your Tasks
### 1. Add a row
`insertRow(-1)` appends; `insertCell` fills each column.

```
const row = tbody.insertRow(-1);
row.insertCell(0).textContent = "Nan";
```

### 2. Highlight on hover
Delegated `mouseover`/`mouseout` cover every row, current and future.

```
tbody.addEventListener("mouseover", (e) => {
  const r = e.target.closest("tr");
  if (r) r.classList.add("hover-row");
});
```

### 3. Edit in place
`contenteditable="true"` needs no `<input>` swap for simple text edits.

```
row.cells[0].contentEditable = "true";
```

### 4. Remove with delegation
One click listener on the body handles every remove button.

```
tbody.addEventListener("click", (event) => {
  if (event.target.dataset.action === "remove") event.target.closest("tr").remove();
});
```

### 5. Keep the row count in sync
Read `tbody.rows.length` fresh after every add or remove, rather than tracking it separately.

```
function updateCount() { count.textContent = `${tbody.rows.length} rows`; }
```

## Exercises

### Exercise 1: Full admin table
Combine add, hover, edit and remove into one roster table, all routed through delegated listeners.

### Exercise 2: Add with editable cells
When adding a row, make its cells `contenteditable` immediately, so new rows can be filled in right
away.

### Exercise 3: Row count display
Show a live row count under the table, correct after every add and remove.

### Exercise 4: Confirm before remove
Add a confirmation check before a row is actually removed.

### Exercise 5: Choose the right tool
For "insert 50 rows from an array", "highlight the row under the cursor" and "let a user fix a typo
in a cell", name which technique from this lesson fits each, in one sentence.

## Quizes

### Q1. Which method adds a new `<tr>` to the end of a table body?
1. `tbody.appendRow()`
2. `tbody.insertRow(-1)`
3. `tbody.newRow()`
4. `tbody.push()`

### Q2. Why delegate hover and click listeners to the table body instead of each row?
1. Delegation is required for `mouseover` to work at all
2. One listener then covers rows added later, with no extra code
3. Rows cannot have their own listeners
4. It has no real advantage here

### Q3. What lets a table cell be edited directly, with no `<input>`?
1. `editable="true"`
2. `contenteditable="true"`
3. `<td type="text">`
4. It is not possible without an `<input>`

### Q4. What removes a row from the table?
1. Setting its `display` to `none` only
2. Calling `.remove()` on the row, or `table.deleteRow(row.rowIndex)`
3. Clearing its `textContent`
4. Setting `row.hidden = true` only

### Q5. Why read `tbody.rows.length` fresh instead of keeping a separate counter variable?
1. `rows.length` is unreliable
2. A separate counter can drift out of sync after adds and removes; the live collection cannot
3. `rows.length` does not update automatically
4. There is no reason — either approach works equally well
