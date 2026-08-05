# Responsive and states overview

Tailwind is mobile-first. An unprefixed utility applies at **every** width. A prefixed one applies
from its breakpoint **up**: `md:grid-cols-3` means three columns on medium screens and wider, and
says nothing about phones. So write the phone layout first, then add prefixes for larger screens.

The breakpoints are `sm` 40rem, `md` 48rem, `lg` 64rem, `xl` 80rem. `grid-cols-1 md:grid-cols-2
lg:grid-cols-3` is the standard card grid: one column, then two, then three.

The same prefix syntax covers interaction states — `hover:bg-amber-500`, `focus:ring-2`,
`active:scale-95`, `disabled:opacity-50`. Prefer `focus-visible:` over `focus:` for the focus ring so
keyboard users see it and mouse users do not, and never remove it without a replacement.

Put `group` on a parent and `group-hover:` on a descendant to style a child when the parent is
hovered — a whole card can react to one hover without JavaScript.

`dark:` applies in dark mode. In v4 that follows the operating system's `prefers-color-scheme` by
default; switching to a manual `.dark` class means declaring a custom variant in a Tailwind style
block, which the next lesson shows.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="p-4 bg-slate-100 dark:bg-slate-900">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <a href="#" class="group block p-4 bg-white rounded shadow hover:shadow-lg">
      <h3 class="font-bold text-slate-900 group-hover:text-amber-600">CE 2103</h3>
      <p class="text-sm text-slate-600">Web Application Development</p>
    </a>
    <div class="p-4 bg-white rounded shadow">CE 2201</div>
    <div class="p-4 bg-white rounded shadow">CE 2305</div>
  </div>

  <button class="mt-4 px-4 py-2 bg-amber-400 text-amber-900 rounded
                 hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-slate-900
                 disabled:opacity-50">Enrol</button>
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

### 3. Add hover and focus
`focus-visible:` shows the ring for keyboard users only. Tab to the button to see it.

```
<button class="px-4 py-2 bg-amber-400 text-amber-900 rounded
               hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-slate-900">
  Enrol
</button>
```

### 4. Show a disabled state
`disabled:` styles the real HTML state, so the button is also genuinely unclickable.

```
<button disabled class="px-4 py-2 bg-slate-300 rounded disabled:opacity-50
                        disabled:cursor-not-allowed">Full</button>
```

### 5. React as a group
`group` marks the parent; `group-hover:` styles any descendant when that parent is hovered.

```
<a href="#" class="group block p-4 bg-white rounded hover:bg-slate-50">
  <h3 class="font-bold text-slate-900 group-hover:text-amber-600">CE 2410</h3>
  <p class="text-sm text-slate-600">Hover anywhere on the card.</p>
</a>
```

## Exercises

### Exercise 1: Three-stage grid
Build six cards that show one per row on phones, two from `md` and three from `lg`. Narrow the preview
until each breakpoint fires and note the width where it changes.

### Exercise 2: Responsive text
Set a heading `text-xl md:text-3xl`. Read the computed `font-size` in DevTools at a narrow and a wide
width and report both values.

### Exercise 3: Full state set
Give one button a hover, a focus-visible, an active and a disabled style. Reach the focus ring with
the Tab key, not the mouse.

### Exercise 4: Group hover card
Make a card where hovering it lifts the shadow, tints the title amber and reveals an arrow that is
`opacity-0` until `group-hover:opacity-100`.

### Exercise 5: Why is `md:` not applying?
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

### Q3. Which prefix shows a focus ring for keyboard users but not for mouse clicks?
1. `focus:`
2. `active:`
3. `hover:`
4. `focus-visible:`

### Q4. What must you add to the parent for `group-hover:` to work on a child?
1. `hover`
2. `group`
3. `peer`
4. `relative`

### Q5. By default in the v4 browser build, when does `dark:bg-slate-900` take effect?
1. Always, because dark mode is the default
2. When the operating system reports a dark color scheme
3. When a `.dark` class is on `<html>`, with no extra setup
4. Only after you call a JavaScript API to enable it
