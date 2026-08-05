# Flexbox utilities

`flex` turns an element into a flex container; its children sit in a row by default. `items-center`
aligns them on the cross axis, `justify-between` pushes the first and last to the edges and spreads
the rest, and `gap-4` sets the space between them — no margins needed. That trio alone builds most
navbars.

`flex-col` switches the direction to a column. `flex-1` tells one child to take all the leftover
space, which is how a sidebar keeps its own width while the main area grows to fill whatever is left.

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

<div class="flex gap-4 p-4">
  <aside class="w-48 p-3 bg-slate-100">Filters</aside>
  <section class="flex-1 p-3 bg-white border border-slate-200">Results</section>
</div>
```

### CSS

```
/* Empty — flex comes entirely from utilities. */
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

### 4. Stack vertically
`flex-col` switches the main axis to vertical.

```
<div class="flex flex-col gap-2">
  <p>First line</p>
  <p>Second line</p>
</div>
```

### 5. Compare justify options
`justify-start`, `justify-center`, `justify-between` and `justify-around` each space children
differently along the main axis.

```
<div class="flex justify-between p-2 bg-slate-100">
  <span>A</span><span>B</span><span>C</span>
</div>
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

### Exercise 4: Vertical stack
Build a `flex-col` stack of three cards with a consistent `gap`.

### Exercise 5: Centre one item
Use `items-center justify-center` on a flex container with fixed height to centre a single child both
ways.

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

### Q3. Which class makes a flex container stack its children vertically?
1. `flex-col`
2. `items-start`
3. `flex-wrap`
4. `grid-rows-1`

### Q4. What does `gap-4` do inside a `flex` container?
1. Sets the space between children, with no margins needed
2. Sets the container's padding only
3. Sets a fixed width on every child
4. Only works inside `grid`, not `flex`

### Q5. What does `items-center` align?
1. Children along the main axis
2. Children along the cross axis
3. Text alignment only, not layout
4. Nothing unless `justify-center` is also set
