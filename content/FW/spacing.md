# Spacing and sizing

Tailwind's spacing scale steps in `0.25rem`. The number in the class is the number of steps, so `p-1`
is `0.25rem`, `p-4` is `1rem` (16px at the default font size) and `p-8` is `2rem`. One scale for
padding, margin, width, height and gap keeps a page visually consistent.

`p` is padding and `m` is margin. A side suffix narrows it: `t` top, `r` right, `b` bottom, `l` left,
`x` both horizontal sides, `y` both vertical. So `px-4 py-2` is the standard button padding, and
`mb-6` is bottom margin only.

Margins can be negative — `-mt-4` pulls an element up by `1rem`, useful for overlapping a card onto a
banner. Padding cannot.

Sizes use the same numbers plus a few keywords: `w-64`, `h-32`, `w-full` (100%), `max-w-md` (a
readable column width), `min-h-screen` (at least the viewport height).

For gaps between siblings, `gap-4` works on a flex or grid container. `space-y-4` works anywhere: it
adds top margin to every child except the first.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="p-6 bg-slate-100 min-h-screen">
  <div class="max-w-md mx-auto space-y-4">
    <div class="p-2 bg-white">p-2 — 0.5rem</div>
    <div class="p-4 bg-white">p-4 — 1rem</div>
    <div class="px-4 py-8 bg-white">px-4 py-8</div>
    <div class="flex gap-4">
      <div class="w-24 h-16 bg-amber-300"></div>
      <div class="w-24 h-16 bg-amber-400"></div>
      <div class="flex-1 h-16 bg-slate-300"></div>
    </div>
  </div>
</div>
```

### CSS

```
/* Empty — Tailwind supplies every rule used above. */
```

### Javascript

```

```

## Your Tasks
### 1. Read the scale
Multiply the number by `0.25rem`. Check each one in the DevTools Styles panel.

```
<div class="p-1">0.25rem</div>
<div class="p-4">1rem</div>
<div class="p-8">2rem</div>
```

### 2. Pad one axis
`px` and `py` are the two you will use most; a button rarely wants equal padding all round.

```
<button class="px-4 py-2 bg-amber-400 text-amber-900 rounded">Enrol</button>
```

### 3. Space a stack
`space-y-4` puts `1rem` between children and nothing above the first or below the last.

```
<div class="space-y-4">
  <p class="p-3 bg-white">CE 2103</p>
  <p class="p-3 bg-white">CE 2201</p>
  <p class="p-3 bg-white">CE 2305</p>
</div>
```

### 4. Pull an element up
A negative top margin overlaps the element with what sits above it.

```
<div class="h-24 bg-slate-800"></div>
<div class="-mt-8 mx-4 p-4 bg-white rounded shadow">Overlapping card</div>
```

### 5. Constrain a column
`max-w-md` caps the width; `mx-auto` centres it in whatever space is left.

```
<article class="max-w-md mx-auto p-4 bg-white">
  <p class="text-slate-700">Long text stays readable when the column is capped.</p>
</article>
```

## Exercises

### Exercise 1: Build the scale
Show six boxes using `p-1`, `p-2`, `p-3`, `p-4`, `p-6` and `p-8`. Label each with the `rem` value it
produces, then verify all six in DevTools.

### Exercise 2: Button padding
Make three buttons with `px-2 py-1`, `px-4 py-2` and `px-6 py-3`. Say which reads as small, normal and
large, and give the pixel padding of each.

### Exercise 3: Gap or space?
Lay out four boxes twice — once in a `flex` row with `gap-4`, once in a plain `div` with `space-y-4`.
Explain in one sentence why `gap-4` does nothing on the second one.

### Exercise 4: Full-height page
Build a page with `min-h-screen`, a header, a `flex-1` main area and a footer, so the footer sits at
the bottom even when the content is short.

### Exercise 5: Overlap a banner
Put a `h-32` navy banner at the top and a white card that overlaps it by `1rem` using a negative
margin. Confirm the computed `margin-top` in DevTools is `-16px`.

## Quizes

### Q1. What padding does `p-6` apply?
1. 6px
2. 0.6rem
3. 1.5rem
4. 6rem

### Q2. Which class adds padding on the left and right only?
1. `py-4`
2. `pl-4`
3. `p-4`
4. `px-4`

### Q3. `<div class="max-w-md mx-auto">` inside a wide parent does what?
1. Stretches the box to the full width of the parent
2. Caps the box width and centres it horizontally
3. Caps the box width and pins it to the left
4. Sets a minimum width and centres the text

### Q4. When does `gap-4` have no effect?
1. When the container is not a flex or grid container
2. When the children have their own padding
3. When the container has `mx-auto`
4. When there are fewer than three children

### Q5. Which is impossible in Tailwind's spacing utilities?
1. `-mt-4`
2. `mx-auto`
3. `-p-4`
4. `py-0`
