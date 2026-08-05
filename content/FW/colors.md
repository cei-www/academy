# Colors

Every color comes in eleven shades from `50` (almost white) to `950` (almost black), with `500` in
the middle. The prefix picks the property: `text-slate-700` for body text, `bg-amber-100` for a
highlight, `border-slate-200` for a hairline. `slate` and `amber` are the stock scales closest to
this site's navy and amber.

`border` alone gives a 1px border — you still need a `border-*` color class or it uses the default.
`rounded`, `rounded-lg` and `rounded-full` set corner radius; `shadow`, `shadow-md` and `shadow-lg`
set elevation. Add `/` and a number for opacity: `bg-slate-900/80` is the same navy at 80% alpha,
which is how you build a readable overlay on a photo.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="p-6 bg-slate-100 space-y-4">
  <p class="p-3 text-sm text-amber-900 bg-amber-100 border border-amber-200 rounded">
    Registration closes on Friday at 16:00.
  </p>
  <div class="p-4 bg-white border border-slate-200 rounded-lg shadow-md">
    <p class="font-medium text-slate-900">Lab 4, Building E</p>
  </div>
  <div class="relative">
    <div class="h-24 bg-slate-700 rounded-lg"></div>
    <p class="absolute inset-0 p-4 text-white bg-slate-900/80 rounded-lg">Overlay at 80%</p>
  </div>
</div>
```

### CSS

```
/* Empty — every style above comes from a utility class. */
```

### Javascript

```

```

## Your Tasks
### 1. Color body text
`slate-700` on white is a common readable body pairing, softer than pure black.

```
<p class="text-slate-700">Lectures are on Monday, labs on Thursday.</p>
```

### 2. Build a highlight box
Light background, dark ink of the same hue, matching border — one family, three shades.

```
<div class="p-3 text-amber-900 bg-amber-100 border border-amber-200 rounded">
  Deadline extended to Sunday.
</div>
```

### 3. Add a border color
`border` alone sets width only — pair it with a `border-*` color class.

```
<div class="border border-slate-200 rounded p-3">Bordered box</div>
```

### 4. Round and lift a card
`shadow-md` reads as raised; keep radius and shadow consistent across a page.

```
<div class="p-4 bg-white border border-slate-200 rounded-lg shadow-md">
  <p class="font-medium text-slate-900">Lab 4, Building E</p>
</div>
```

### 5. Overlay text on a color
The `/80` suffix sets alpha, so what is behind stays partly visible.

```
<div class="p-4 text-white bg-slate-900/80 rounded">
  Readable over any background.
</div>
```

## Exercises

### Exercise 1: Shade pairs
Build three notice boxes — amber, slate and one other family — each using the `100` background, `200`
border and `900` text of its own scale. Say which pairing is easiest to read.

### Exercise 2: Photo caption
Put `campus-800.jpg` in a rounded box and lay a `bg-slate-900/70` caption bar across its bottom with
white text. Check the caption stays readable over the brightest part of the photo.

### Exercise 3: Card polish
Take a plain card and add, one at a time, `border`, `border-slate-200`, `rounded-lg` and `shadow-md`.
Note what changed after each step.

### Exercise 4: Opacity comparison
Build the same overlay at `/40`, `/70` and `/90` opacity, and compare how readable the background
stays at each.

### Exercise 5: Rounded corners
Compare `rounded`, `rounded-lg` and `rounded-full` on the same square box, and describe each result.

## Quizes

### Q1. What does `bg-slate-900/80` produce?
1. A navy background 80px tall
2. A navy background at 80% opacity
3. Navy text on an 80% white background
4. An 80px blur behind the element

### Q2. In a color scale, which shade is the lightest?
1. `50`
2. `100`
3. `500`
4. `950`

### Q3. You wrote `border` but see no visible line change in color. Why?
1. `border` only works on flex children
2. `border` sets the width; the color still comes from a `border-*` class
3. `border` needs `rounded` before it renders
4. Borders are disabled unless the element has a background

### Q4. Which class gives a fully circular corner radius?
1. `rounded`
2. `rounded-lg`
3. `rounded-full`
4. `rounded-circle`

### Q5. Which shade sits in the middle of an eleven-step color scale?
1. `50`
2. `500`
3. `900`
4. `950`
