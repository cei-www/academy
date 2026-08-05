# Tables

A table presents data that has two dimensions — rows and columns. `<table>` wraps it, `<tr>` is one
row, `<td>` is a data cell and `<th>` is a header cell. Cells live inside rows; nothing goes directly
inside `<table>` except rows and the sectioning elements below.

`<thead>` groups the header row and `<tbody>` the data rows. `<caption>` gives the whole table a
title and must be the first child of `<table>`.

A `<th>` needs `scope`. `scope="col"` says the header labels the column below it, `scope="row"` says
it labels the row beside it. A screen reader reads those labels out with each cell, so without
`scope` a cell is announced as a bare number with no idea what it measures.

`colspan="2"` makes a cell span two columns; `rowspan="2"` makes it span two rows. Every row must
still add up to the same number of columns once the spans are counted.

Tables are for data only. Never use one to lay out a page — that is CSS's job, and a layout table
turns a screen reader's row-by-row reading into nonsense.

## Display
### HTML

```
<table>
  <caption>Semester 1 results — Nattapong S.</caption>
  <thead>
    <tr>
      <th scope="col">Code</th><th scope="col">Course</th>
      <th scope="col">Credits</th><th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">01076021</th><td>Web Development</td><td>3</td><td>A</td></tr>
    <tr><th scope="row">01076014</th><td>Data Structures</td><td>3</td><td>B+</td></tr>
  </tbody>
</table>
```

### CSS

```
table { border-collapse: collapse; font-family: system-ui, sans-serif; }

th, td {
  border: 1px solid #DDE2E8;
  padding: 6px 10px;
  text-align: left;
}

thead th { background: #EEF1F4; }
caption { padding-bottom: 8px; color: #4B5563; }
```

### Javascript

```

```

## Your Tasks
### 1. Build the smallest table
One header row and one data row.

```
<table>
  <tr><th>Code</th><th>Course</th></tr>
  <tr><td>01076021</td><td>Web Development</td></tr>
</table>
```

### 2. Split header from body
`<thead>` and `<tbody>` let the browser and your CSS treat the two parts differently.

```
<table>
  <thead>
    <tr><th>Code</th><th>Seats</th></tr>
  </thead>
  <tbody>
    <tr><td>01076021</td><td>60</td></tr>
  </tbody>
</table>
```

### 3. Title the table
`<caption>` must come first, before any row.

```
<table>
  <caption>Courses offered in semester 2</caption>
  <tr><th>Code</th><th>Credits</th></tr>
</table>
```

### 4. Label the rows and columns
`scope` tells a screen reader which cells each header belongs to.

```
<tr>
  <th scope="col">Course</th><th scope="col">Grade</th>
</tr>
<tr>
  <th scope="row">Web Development</th><td>A</td>
</tr>
```

### 5. Merge cells
`colspan` merges across, `rowspan` merges down.

```
<tr>
  <th colspan="2">Semester 1 total</th><td>9 credits</td>
</tr>
<tr>
  <th rowspan="2">Year 2</th><td>Web Development</td>
</tr>
```

## Exercises

### Exercise 1: Timetable
Build a weekly timetable: one column per weekday, one row per time slot, correct `scope` on every `<th>`.

### Exercise 2: Grade report
Make a five-course grade table with a `<caption>`, a `<thead>`, a `<tbody>`, and a final row whose
first cell spans two columns and reads "GPA".

### Exercise 3: Count the columns
Write a three-column table where one row uses `colspan="2"`. Confirm every row still totals three
columns and say how you counted.

### Exercise 4: Header or data
Take a table with no `<th>` at all and convert the correct cells to `<th>` with the right `scope`.
Say in one sentence why the first column deserved `<th>`.

### Exercise 5: Inspect the structure
Render a table written without `<tbody>`, then look at DevTools' Elements panel and report what the
browser inserted around your rows.

## Quizes

### Q1. Which element is a single row?
1. `<td>`
2. `<tr>`
3. `<th>`
4. `<tbody>`

### Q2. Where must `<caption>` appear?
1. As the first child of `<table>`
2. Immediately after `</table>`
3. Inside `<thead>`
4. Anywhere inside `<table>`

### Q3. What does `scope="row"` do?
1. Makes the row taller
2. Merges the row's cells
3. Tells assistive technology that this header labels the cells in its row
4. Freezes the row when the table scrolls

### Q4. A table has three columns. A row contains one `<td colspan="2">` — how many more cells does that row need?
1. Zero
2. One
3. Two
4. Three

### Q5. Which is the right use of a `<table>`?
1. Placing a sidebar next to the main content
2. Centring a logo on the page
3. Showing course codes, credits and grades
4. Building a three-column page layout
