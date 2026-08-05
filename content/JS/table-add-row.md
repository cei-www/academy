# Adding table rows with JavaScript

A `<table>` exposes helpers plain elements do not. `table.insertRow(index)` creates and inserts a
`<tr>` in one call — pass `-1` or leave it off to append at the end. `row.insertCell(index)` does the
same for `<td>` cells inside that row. Both return the new node, ready to fill with `.textContent`.

Building each row this way avoids `innerHTML` string-building and keeps every value properly escaped
as text, not parsed as markup.

## Display
### HTML

```
<h1>Enrolled students</h1>
<table id="roster">
  <thead><tr><th>Name</th><th>GPA</th></tr></thead>
  <tbody>
    <tr><td>Ploy</td><td>3.52</td></tr>
  </tbody>
</table>
<button id="addBtn" type="button">Add student</button>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #DDE2E8; padding: 6px 10px; text-align: left; }
th { background: #EEF1F4; }
button { margin-top: 10px; padding: 6px 12px; }
```

### Javascript

```
const tbody = document.querySelector("#roster tbody");
const names = ["Nan", "Beam", "Tar"];
let i = 0;

document.getElementById("addBtn").addEventListener("click", () => {
  if (i >= names.length) return;
  const row = tbody.insertRow(-1);
  row.insertCell(0).textContent = names[i];
  row.insertCell(1).textContent = (3 + Math.random()).toFixed(2);
  i++;
});
```

## Your Tasks
### 1. Add a row at the end
`insertRow(-1)` (or no argument) appends a new `<tr>` to the table body.

```
const row = tbody.insertRow(-1);
```

### 2. Fill cells with insertCell
Each call adds one `<td>` at the given position and returns it.

```
row.insertCell(0).textContent = "Nan";
row.insertCell(1).textContent = "2.98";
```

### 3. Insert a row at a specific position
A positive index inserts before the row currently at that index.

```
const row = tbody.insertRow(0);   // insert at the very top
```

### 4. Build a row from an object
Loop over the object's values to fill cells in order.

```
function addStudent({ name, gpa }) {
  const row = tbody.insertRow(-1);
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = gpa;
}
addStudent({ name: "Tar", gpa: "3.10" });
```

### 5. Remove a row
`table.deleteRow(index)` removes the row at that position.

```
tbody.deleteRow(0);   // remove the first row
```

## Exercises

### Exercise 1: Add on click
Add a button that appends one new row with sample data each time it is clicked.

### Exercise 2: Add from a form
Read two input fields and append a new row built from their values on submit.

### Exercise 3: Insert at the top
Add a button that inserts a new row at index 0 instead of the end, and confirm the order.

### Exercise 4: Remove the last row
Add a button that removes the table's last row with `deleteRow`, guarding against an empty table.

### Exercise 5: Build from an array
Given an array of `{ name, gpa }` objects, add one row per object using a loop and `insertRow`.

## Quizes

### Q1. What does `table.insertRow(-1)` do?
1. Removes the last row
2. Inserts a new row at the end of the table
3. Throws, since `-1` is not a valid index
4. Inserts a new row at the very top

### Q2. What does `row.insertCell(0)` return?
1. `undefined`
2. The existing first cell, unchanged
3. The newly created cell, ready to fill
4. The whole row

### Q3. What does `table.deleteRow(0)` do?
1. Deletes the entire table
2. Removes the row at index 0
3. Clears the text of the first row without removing it
4. Only works on the `<thead>`

### Q4. Why use `insertRow`/`insertCell` instead of building an HTML string?
1. They are not actually faster or safer
2. They avoid `innerHTML` string-building and keep values properly escaped as text
3. `insertRow` is the only way to add a `<tr>` at all
4. String building is invalid inside `<table>`

### Q5. What does a positive index passed to `insertRow` mean?
1. It is ignored — rows always append at the end
2. The new row is inserted before the row currently at that index
3. It sets the row's height in pixels
4. It sets how many cells the row will have
