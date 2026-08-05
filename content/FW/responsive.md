# Responsive utilities

Tailwind is mobile-first. An unprefixed utility applies at **every** width. A prefixed one applies
from its breakpoint **up**: `md:grid-cols-3` means three columns on medium screens and wider, and
says nothing about phones on its own. Write the phone layout first, unprefixed, then add prefixes for
larger screens.

The breakpoints are `sm` 40rem, `md` 48rem, `lg` 64rem, `xl` 80rem. `grid-cols-1 md:grid-cols-2
lg:grid-cols-3` is the standard card grid: one column, then two, then three.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <div class="p-4 bg-white border border-slate-200 rounded">CE 2103</div>
  <div class="p-4 bg-white border border-slate-200 rounded">CE 2201</div>
  <div class="p-4 bg-white border border-slate-200 rounded">CE 2305</div>
</div>
```

### CSS

```
/* Empty — drag the preview divider to change its width and watch the grid reflow. */
```

### Javascript

```

```

## Your Tasks
### 1. Stack, then spread
The unprefixed class is the phone layout; each prefix overrides it from that width up.

```
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 bg-white">One</div>
  <div class="p-4 bg-white">Two</div>
  <div class="p-4 bg-white">Three</div>
</div>
```

### 2. Change direction by width
A column on phones, a row from `md` up.

```
<div class="flex flex-col md:flex-row gap-4">
  <aside class="md:w-64 p-3 bg-slate-100">Filters</aside>
  <section class="flex-1 p-3 bg-white">Results</section>
</div>
```

### 3. Resize text responsively
A smaller size on phones, larger from `md` up.

```
<h1 class="text-xl md:text-3xl font-bold">Course catalogue</h1>
```

### 4. Hide on small screens
`hidden md:block` removes an element on phones but shows it from `md` up.

```
<aside class="hidden md:block w-64">Filters</aside>
```

### 5. Read the breakpoint scale
Know the four named breakpoints and their widths, so a prefix's meaning is never a guess.

```
<!-- sm: 40rem, md: 48rem, lg: 64rem, xl: 80rem -->
```

## Exercises

### Exercise 1: Three-stage grid
Build six cards that show one per row on phones, two from `md` and three from `lg`. Narrow the preview
until each breakpoint fires and note the width where it changes.

### Exercise 2: Responsive text
Set a heading `text-xl md:text-3xl`. Read the computed `font-size` in DevTools at a narrow and a wide
width and report both values.

### Exercise 3: Sidebar that hides
Give a sidebar `hidden md:block`, and confirm it disappears entirely below `md`, not just visually.

### Exercise 4: Direction switch
Build a `flex-col md:flex-row` layout and confirm its direction actually flips at the `md`
breakpoint.

### Exercise 5: Why is md: not applying?
Write `<p class="md:text-red-600">` and view it on a narrow preview. Explain in one sentence why the
text is not red, then make it red on phones and slate from `md` up.

## Quizes

### Q1. Where does `md:grid-cols-3` apply?
1. Only on screens narrower than the `md` breakpoint
2. Only on screens exactly at the `md` width
3. At the `md` breakpoint and every width above it
4. At every width, because Tailwind is mobile-first

### Q2. `<div class="grid grid-cols-1 md:grid-cols-2">` on a 400px-wide screen shows what?
1. One column
2. Two columns
3. Three columns
4. No columns, because no breakpoint matched

### Q3. What does an unprefixed utility class apply to?
1. Only the largest breakpoint
2. Every screen width
3. Only phones
4. Nothing, until a prefix is added

### Q4. What does `hidden md:block` do?
1. Hides the element at every width
2. Hides it below `md`, shows it from `md` up
3. Shows it only below `md`
4. Has no effect — `hidden` cannot be combined with a prefix

### Q5. What is the `lg` breakpoint's width?
1. 40rem
2. 48rem
3. 64rem
4. 80rem
