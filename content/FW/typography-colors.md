# Typography and colours

Text size is a named scale, not a pixel value: `text-sm`, `text-base`, `text-lg`, `text-xl`,
`text-2xl`, `text-3xl`. Each one sets a matching `line-height` too, so headings do not need tuning.
Weight is `font-medium`, `font-semibold`, `font-bold`. `leading-tight` and `leading-relaxed` override
line height; `tracking-tight` and `tracking-wide` change letter spacing. `text-center` aligns.

Every colour comes in eleven shades from `50` (almost white) to `950` (almost black), with `500` in
the middle. The prefix picks the property: `text-slate-700` for body text, `bg-amber-100` for a
highlight, `border-slate-200` for a hairline. `slate` and `amber` are the stock scales closest to this
site's navy and amber.

`border` alone gives a 1px border — you still need a `border-*` colour class or it uses the default.
`rounded`, `rounded-lg` and `rounded-full` set corner radius; `shadow`, `shadow-md` and `shadow-lg`
set elevation.

Add `/` and a number for opacity: `bg-slate-900/80` is the same navy at 80% alpha, which is how you
build a readable overlay on a photo.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="p-6 bg-slate-100 space-y-4">
  <h1 class="text-3xl font-bold tracking-tight text-slate-900">Course notice</h1>
  <p class="text-base leading-relaxed text-slate-700">
    CE 2103 moves to Lab 4 from next week. Bring your laptop.
  </p>
  <p class="p-3 text-sm text-amber-900 bg-amber-100 border border-amber-200 rounded">
    Registration closes on Friday at 16:00.
  </p>
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
### 1. Set a heading
Size and weight are separate classes, so any size can be any weight.

```
<h1 class="text-3xl font-bold text-slate-900">Department of Computer Engineering</h1>
```

### 2. Make body text readable
Pure black on white is harsh; `slate-700` on white is the usual body pairing.

```
<p class="text-base leading-relaxed text-slate-700">
  Lectures are on Monday, labs on Thursday.
</p>
```

### 3. Build a highlight box
Light background, dark ink of the same hue, matching border — one family, three shades.

```
<div class="p-3 text-amber-900 bg-amber-100 border border-amber-200 rounded">
  Deadline extended to Sunday.
</div>
```

### 4. Round and lift a card
`shadow-md` reads as raised; keep radius and shadow consistent across a page.

```
<div class="p-4 bg-white border border-slate-200 rounded-lg shadow-md">
  <p class="font-medium text-slate-900">Lab 4, Building E</p>
</div>
```

### 5. Overlay text on a colour
The `/80` suffix sets alpha, so what is behind stays partly visible.

```
<div class="p-4 text-white bg-slate-900/80 rounded">
  Readable over any background.
</div>
```

## Exercises

### Exercise 1: The size ladder
Print the same sentence six times, from `text-sm` to `text-3xl`. Read each computed `font-size` and
`line-height` in DevTools and write the pairs down.

### Exercise 2: Shade pairs
Build three notice boxes — amber, slate and one other family — each using the `100` background, `200`
border and `900` text of its own scale. Say which pairing is easiest to read.

### Exercise 3: Tracking on a heading
Set one heading `tracking-tight` and a copy of it `tracking-wide`. Report both computed
`letter-spacing` values and say which suits a large heading.

### Exercise 4: Photo caption
Put `campus-800.jpg` in a rounded box and lay a `bg-slate-900/70` caption bar across its bottom with
white text. Check the caption stays readable over the brightest part of the photo.

### Exercise 5: Card polish
Take a plain card and add, one at a time, `border`, `border-slate-200`, `rounded-lg` and `shadow-md`.
Note what changed after each step.

## Quizes

### Q1. Which class makes text the largest?
1. `text-lg`
2. `text-xl`
3. `text-3xl`
4. `text-base`

### Q2. What does `bg-slate-900/80` produce?
1. A navy background 80px tall
2. A navy background at 80% opacity
3. Navy text on an 80% white background
4. An 80px blur behind the element

### Q3. In a colour scale, which shade is the lightest?
1. `50`
2. `100`
3. `500`
4. `950`

### Q4. `<p class="text-sm font-bold text-slate-700 text-center">` does what?
1. Small bold grey text, left aligned
2. Large bold grey text, centred
3. Small regular grey text, centred
4. Small bold grey text, centred

### Q5. You wrote `border` but see no visible line change in colour. Why?
1. `border` only works on flex children
2. `border` sets the width; the colour still comes from a `border-*` class
3. `border` needs `rounded` before it renders
4. Borders are disabled unless the element has a background
