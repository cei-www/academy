# Grid utilities

`grid` turns an element into a grid container; `grid-cols-3` makes three equal columns in one class,
no `repeat()` to write by hand. `gap-6` spaces both rows and columns at once. `col-span-2` lets one
item cover two of those columns, useful for a featured card in an otherwise even grid.

A centred page container is two classes, not a media query: `max-w-5xl mx-auto`. Add `px-4` so the
content never touches the screen edge on a phone.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

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
/* Empty — grid comes entirely from utilities. */
```

### Javascript

```

```

## Your Tasks
### 1. Lay out a card row
Three equal columns, one gap value for both axes.

```
<div class="grid grid-cols-3 gap-6">
  <div class="p-4 bg-white rounded shadow">CE 2103</div>
  <div class="p-4 bg-white rounded shadow">CE 2201</div>
  <div class="p-4 bg-white rounded shadow">CE 2305</div>
</div>
```

### 2. Span two columns
`col-span-2` makes one item wider than its siblings, without leaving the grid.

```
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 p-4 bg-white">Featured</div>
  <div class="p-4 bg-white">Small</div>
</div>
```

### 3. Centre the page content
`mx-auto` centres the capped box; `px-4` keeps a margin on small screens.

```
<main class="max-w-5xl mx-auto px-4 py-8">
  <h1 class="text-2xl font-bold text-slate-900">Course catalogue</h1>
</main>
```

### 4. Overflow into a new row
More children than columns simply wrap to the next row automatically.

```
<div class="grid grid-cols-3 gap-4">
  <div class="p-3 bg-white">1</div>
  <div class="p-3 bg-white">2</div>
  <div class="p-3 bg-white">3</div>
  <div class="p-3 bg-white">4</div>
</div>
```

### 5. Combine grid with a centred container
The container caps and centres the whole page; the grid arranges what is inside it.

```
<main class="max-w-5xl mx-auto px-4">
  <div class="grid grid-cols-2 gap-6">...</div>
</main>
```

## Exercises

### Exercise 1: Featured grid
Build a six-cell `grid-cols-3` where the first cell uses `col-span-2`. Check in DevTools which grid
lines that cell starts and ends on.

### Exercise 2: Course card row
Show three course cards from `courses.json` data you type by hand, each with a title, instructor and
seat count, laid out with `grid grid-cols-3 gap-6` inside a `max-w-5xl mx-auto` container.

### Exercise 3: Wrapping grid
Add a seventh card to a `grid-cols-3` grid and confirm it wraps to a new row automatically.

### Exercise 4: Two-column dashboard
Build a `grid-cols-2` dashboard with four widgets, and give one a `col-span-2` to make it the header.

### Exercise 5: Centered narrow container
Build a `max-w-2xl mx-auto px-4` container and compare its width against a `max-w-5xl mx-auto px-4`
one at the same viewport width.

## Quizes

### Q1. `<div class="grid grid-cols-3 gap-6">` with four children produces what?
1. Four columns in one row
2. One column with four rows
3. Three columns and the fourth child hidden
4. Three columns, with the fourth child wrapping to a second row

### Q2. Which pair centres a capped-width container?
1. `w-full text-center`
2. `flex justify-center`
3. `max-w-5xl mx-auto`
4. `items-center mx-4`

### Q3. What does `col-span-2` do to a grid item?
1. Doubles its height
2. Makes it cover two columns instead of one
3. Moves it to the second row
4. Hides the second column entirely

### Q4. What does `grid-cols-3` set in one class?
1. Three equal-width columns
2. Three rows
3. A 3px gap between items
4. Three levels of nesting

### Q5. Why add `px-4` to a `max-w-5xl mx-auto` container?
1. It has no real effect
2. It keeps content from touching the screen edge on narrow viewports
3. It centres the container instead of `mx-auto`
4. It sets the container's max width instead of `max-w-5xl`
