# Layout with flex and grid

`flex` turns an element into a flex container; its children sit in a row. `items-center` aligns them
on the cross axis, `justify-between` pushes the first and last to the edges and spreads the rest, and
`gap-4` sets the space between them. That trio alone builds most navbars.

`flex-col` switches the direction to a column. `flex-1` tells one child to take all the leftover
space, which is how a sidebar keeps its width while the main area grows.

`grid` with `grid-cols-3` makes three equal columns; `gap-6` spaces both rows and columns.
`col-span-2` lets one item cover two of those columns.

A centred page container is two classes, not a media query: `max-w-5xl mx-auto`. Add `px-4` so the
content never touches the screen edge on a phone.

Layout classes read as the CSS they generate — `justify-between` is `justify-content: space-between`.
If you know flexbox, you already know these names.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<nav class="flex items-center justify-between px-6 py-3 bg-slate-900 text-white">
  <span class="font-bold">KMITL CE</span>
  <div class="flex gap-4 text-slate-300">
    <a href="#">Courses</a>
    <a href="#">Labs</a>
    <a href="#">Staff</a>
  </div>
</nav>

<main class="max-w-5xl mx-auto px-4 py-8">
  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-2 p-4 bg-white border border-slate-200 rounded">Featured course</div>
    <div class="p-4 bg-white border border-slate-200 rounded">CE 2201</div>
    <div class="p-4 bg-white border border-slate-200 rounded">CE 2305</div>
    <div class="col-span-2 p-4 bg-white border border-slate-200 rounded">CE 2410</div>
  </div>
</main>
```

### CSS

```
/* Empty — flex and grid come entirely from utilities. */
```

### Javascript

```

```

## Your Tasks
### 1. Build a navbar
Three classes: a flex row, vertically centred, with the ends pushed apart.

```
<nav class="flex items-center justify-between px-6 py-3 bg-slate-900 text-white">
  <span class="font-bold">KMITL CE</span>
  <a href="#" class="text-amber-300">Sign in</a>
</nav>
```

### 2. Space a row of links
`gap-4` replaces margins on each child, so nothing is left over at the ends.

```
<div class="flex gap-4">
  <a href="#">Courses</a>
  <a href="#">Labs</a>
  <a href="#">Staff</a>
</div>
```

### 3. Let one child grow
`flex-1` gives the main column every pixel the sidebar does not use.

```
<div class="flex gap-4">
  <aside class="w-48 p-3 bg-slate-100">Filters</aside>
  <section class="flex-1 p-3 bg-white">Results</section>
</div>
```

### 4. Lay out a card row
Three equal columns, one gap value for both axes.

```
<div class="grid grid-cols-3 gap-6">
  <div class="p-4 bg-white rounded shadow">CE 2103</div>
  <div class="p-4 bg-white rounded shadow">CE 2201</div>
  <div class="p-4 bg-white rounded shadow">CE 2305</div>
</div>
```

### 5. Centre the page content
`mx-auto` centres the capped box; `px-4` keeps a margin on small screens.

```
<main class="max-w-5xl mx-auto px-4 py-8">
  <h1 class="text-2xl font-bold text-slate-900">Course catalogue</h1>
</main>
```

## Exercises

### Exercise 1: Navbar with a logo
Build a navbar with `ce-logo.svg` on the left, three links on the right and a navy background. Use
`flex`, `items-center` and `justify-between` only — no margins.

### Exercise 2: justify comparison
Render the same three boxes four times with `justify-start`, `justify-center`, `justify-between` and
`justify-around`. Describe the spacing each produces.

### Exercise 3: Sidebar layout
Make a two-column page: a `w-64` sidebar and a `flex-1` main area. Resize the preview and report which
column changes width.

### Exercise 4: Featured grid
Build a six-cell `grid-cols-3` where the first cell uses `col-span-2`. Check in DevTools which grid
lines that cell starts and ends on.

### Exercise 5: Course card row
Show three course cards from `courses.json` data you type by hand, each with a title, instructor and
seat count, laid out with `grid grid-cols-3 gap-6` inside a `max-w-5xl mx-auto` container.

## Quizes

### Q1. Which class set puts a logo on the left and links on the right of one bar?
1. `grid grid-cols-2 gap-4`
2. `flex items-center justify-between`
3. `flex flex-col items-center`
4. `block text-right`

### Q2. What does `flex-1` do to a flex child?
1. Fixes its width at one spacing unit
2. Makes it the first item in the row
3. Makes it grow to fill the remaining space
4. Gives it a `gap` of `0.25rem`

### Q3. `<div class="grid grid-cols-3 gap-6">` with four children produces what?
1. Four columns in one row
2. One column with four rows
3. Three columns and the fourth child hidden
4. Three columns, with the fourth child wrapping to a second row

### Q4. Which pair centres a capped-width container?
1. `w-full text-center`
2. `flex justify-center`
3. `max-w-5xl mx-auto`
4. `items-center mx-4`

### Q5. Which class makes a flex container stack its children vertically?
1. `flex-col`
2. `items-start`
3. `flex-wrap`
4. `grid-rows-1`
