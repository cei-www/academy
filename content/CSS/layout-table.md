# Page layout with tables (and why not to)

Before CSS layout was reliable across browsers, developers built whole pages out of `<table>` —
one big grid of `<td>` cells holding the header, sidebar, content and footer. It worked, visually,
but it mixes structure with presentation and breaks two things this course cares about:
**accessibility** (a screen reader announces a layout table as a data table, with rows and columns
that mean nothing) and **responsiveness** (a table's rigid grid does not reflow onto a narrow screen).

This lesson exists so you recognise the pattern in old code, not so you use it. Every layout later in
this group replaces it with something built for the job.

## Display
### HTML

```
<table class="layout" cellspacing="0">
  <tr><td colspan="2" class="header">CE WebDev Academy</td></tr>
  <tr>
    <td class="sidebar">Lectures<br>Labs<br>Grades</td>
    <td class="content">Main content area — this is how pages were once laid out.</td>
  </tr>
  <tr><td colspan="2" class="footer">CE-KMITL</td></tr>
</table>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 0; }
.layout { width: 100%; border-collapse: collapse; }
.header, .footer { background: #0F1B33; color: #EEF1F4; padding: 10px 16px; text-align: left; }
.sidebar { width: 160px; background: #EEF1F4; padding: 12px; vertical-align: top; }
.content { padding: 16px; vertical-align: top; }
```

### Javascript

```

```

## Your Tasks
### 1. Build a table-based page skeleton
Header row, a sidebar/content row, footer row — three rows, the middle one with two cells.

```
<table class="layout">
  <tr><td colspan="2">Header</td></tr>
  <tr><td>Sidebar</td><td>Content</td></tr>
  <tr><td colspan="2">Footer</td></tr>
</table>
```

### 2. Span the header across both columns
`colspan="2"` merges a cell across the width of the row below it.

```
<tr><td colspan="2" class="header">CE WebDev Academy</td></tr>
```

### 3. Fix the sidebar's width
A `width` on one `<td>` sets that column's width for every row.

```
.sidebar { width: 160px; }
```

### 4. Hide the table semantics from assistive technology
`role="presentation"` tells a screen reader "ignore that this is a table" — a patch, not a fix.

```
<table class="layout" role="presentation">
```

### 5. Try to make it respond to screen width
There is no clean way to reorder a table's rows and columns per breakpoint — this is the limitation
the rest of this group solves.

```
/* switching display: block on <td> breaks table layout unpredictably —
   this is a dead end, not a real responsive fix */
```

## Exercises

### Exercise 1: Build the skeleton
Recreate the header/sidebar/content/footer table skeleton from the Display, from scratch.

### Exercise 2: Check the accessibility tree
Open DevTools' Accessibility panel on your table layout and report what role it announces for the
outer `<table>`.

### Exercise 3: Add role="presentation"
Add `role="presentation"` to the table and check the Accessibility panel again. Report what changed.

### Exercise 4: Narrow the window
Resize the browser to 375px wide and describe, in one or two sentences, what happens to the sidebar
and content columns.

### Exercise 5: Name the two problems
In your own words, write one sentence on the accessibility problem and one sentence on the
responsiveness problem with table-based layout.

## Quizes

### Q1. Why did developers historically use `<table>` for whole-page layout?
1. Tables render faster than any other element
2. Reliable CSS layout tools were not yet available across browsers
3. It was required by the HTML specification
4. Search engines only indexed tables

### Q2. What does a screen reader announce for a layout built from `<table>`?
1. Nothing — tables are always skipped
2. A data table, with rows and columns that carry no real meaning here
3. A list of links
4. A form

### Q3. What does `colspan="2"` do on a `<td>`?
1. Splits the cell into two columns
2. Merges the cell across two columns' width
3. Doubles the cell's height
4. Adds a border to the cell

### Q4. What does `role="presentation"` do on a layout table?
1. Removes the table from the page entirely
2. Tells assistive technology to ignore its table semantics
3. Makes the table responsive automatically
4. Disables all CSS on the table

### Q5. Why is a table-based layout hard to make responsive?
1. Tables cannot have a `background-color`
2. Its rigid row/column grid does not reflow onto a narrow screen the way flex or grid can
3. Tables are not allowed inside `<body>`
4. `<td>` elements cannot hold more than one line of text
