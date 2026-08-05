# Editing table cells in place

`contenteditable="true"` on a `<td>` lets the visitor click in and type, with no `<input>` swapped in.
Reading the result back is just `.textContent`, same as any other element. Pair it with a `blur` or
`change`-like moment — here, listening for `blur` via event delegation with the `capture` option,
since `blur` does not bubble on its own.

## Display
### HTML

```
<h1>Editable roster</h1>
<table id="roster">
  <thead><tr><th>Name</th><th>GPA</th></tr></thead>
  <tbody>
    <tr><td contenteditable="true">Ploy</td><td contenteditable="true">3.52</td></tr>
    <tr><td contenteditable="true">Nan</td><td contenteditable="true">2.98</td></tr>
  </tbody>
</table>
<p id="out"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #DDE2E8; padding: 6px 10px; text-align: left; }
th { background: #EEF1F4; }
td[contenteditable="true"]:focus { background: #FDF1DC; outline: 2px solid #F2A93B; }
```

### Javascript

```
const tbody = document.querySelector("#roster tbody");
const out = document.getElementById("out");

tbody.addEventListener("blur", (event) => {
  const cell = event.target;
  if (cell.tagName !== "TD") return;
  out.textContent = `saved: "${cell.textContent}"`;
}, true);
```

## Your Tasks
### 1. Make a cell editable
`contenteditable="true"` turns any element into an editable region.

```
<td contenteditable="true">Ploy</td>
```

### 2. Read the edited text
`.textContent` returns whatever the visitor typed, exactly like reading any other element.

```
console.log(cell.textContent);
```

### 3. React when editing finishes
`blur` does not bubble, so delegate with the third `addEventListener` argument set to `true`.

```
tbody.addEventListener("blur", (event) => {
  if (event.target.tagName === "TD") console.log("saved:", event.target.textContent);
}, true);
```

### 4. Style the active cell
`:focus` on an editable cell gives a clear visual cue while typing.

```
td[contenteditable="true"]:focus { outline: 2px solid #F2A93B; }
```

### 5. Validate on save
Check the new value before accepting it, and revert if it fails.

```
tbody.addEventListener("blur", (event) => {
  const cell = event.target;
  if (cell.tagName === "TD" && cell.textContent.trim() === "") {
    cell.textContent = "(required)";
  }
}, true);
```

## Exercises

### Exercise 1: Editable roster
Make every cell in a table body editable, and confirm clicking in and typing works with no
JavaScript needed for the editing itself.

### Exercise 2: Save on blur
Log a "saved" message with the new cell text whenever an editable cell loses focus.

### Exercise 3: Reject empty values
When an edited cell is left empty, restore a placeholder value instead of leaving it blank.

### Exercise 4: Highlight the active cell
Style the currently focused editable cell so it stands out from the rest of the table.

### Exercise 5: Read a whole row after editing
On blur, read every cell's `.textContent` in that row and log them as one object.

## Quizes

### Q1. What does `contenteditable="true"` do on a `<td>`?
1. Nothing — it only works on `<div>`
2. Lets the visitor click in and edit the cell's text directly
3. Turns the cell into an `<input>` automatically
4. Makes the cell read-only

### Q2. How do you read an editable cell's current text in JavaScript?
1. `cell.value`
2. `cell.textContent`
3. `cell.innerHTML` is the only option
4. It cannot be read — only the DOM shows it

### Q3. Why does listening for `blur` on the table body need the capture option?
1. It does not — `blur` bubbles normally
2. `blur` does not bubble, so delegation needs the capturing phase instead
3. Capture is required for any event on a `<table>`
4. `blur` only fires on `<input>` elements

### Q4. What does `:focus` on `td[contenteditable="true"]` style?
1. Every cell in the table, all the time
2. Only the specific editable cell currently being typed into
3. The table's border
4. Nothing — pseudo-classes do not apply to table cells

### Q5. What is a reasonable response to an editable cell being left empty on blur?
1. Delete the entire row
2. Restore a placeholder or previous value instead of leaving it blank
3. Reload the page
4. Nothing — empty cells are always fine
