# Typography

Text size is a named scale, not a pixel value: `text-sm`, `text-base`, `text-lg`, `text-xl`,
`text-2xl`, `text-3xl`. Each one sets a matching `line-height` too, so headings do not need tuning by
hand. Weight is `font-medium`, `font-semibold`, `font-bold`. `leading-tight` and `leading-relaxed`
override line height on their own; `tracking-tight` and `tracking-wide` change letter spacing.
`text-center` aligns.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="p-6 space-y-3">
  <h1 class="text-3xl font-bold tracking-tight text-slate-900">Course notice</h1>
  <p class="text-base leading-relaxed text-slate-700">
    CE 2103 moves to Lab 4 from next week. Bring your laptop.
  </p>
  <p class="text-sm text-slate-500 text-center">Updated Monday</p>
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
### 1. Set a heading size
Each size step also carries a matching line-height, tuned for that size.

```
<h1 class="text-3xl font-bold text-slate-900">Department of Computer Engineering</h1>
```

### 2. Set body text
`text-base` is the default reading size, paired with a comfortable line-height.

```
<p class="text-base text-slate-700">
  Lectures are on Monday, labs on Thursday.
</p>
```

### 3. Relax the line height
`leading-relaxed` opens up the space between lines for longer paragraphs.

```
<p class="text-base leading-relaxed">
  A longer paragraph reads more comfortably with extra line spacing.
</p>
```

### 4. Tighten a heading's letter spacing
`tracking-tight` pulls large headline text together slightly.

```
<h1 class="text-3xl font-bold tracking-tight">Web Development</h1>
```

### 5. Centre text
`text-center` works on any block-level text container.

```
<p class="text-sm text-center">Updated Monday</p>
```

## Exercises

### Exercise 1: The size ladder
Print the same sentence six times, from `text-sm` to `text-3xl`. Read each computed `font-size` and
`line-height` in DevTools and write the pairs down.

### Exercise 2: Weight comparison
Render the same word in `font-medium`, `font-semibold` and `font-bold`, and compare their computed
`font-weight` values.

### Exercise 3: Tracking on a heading
Set one heading `tracking-tight` and a copy of it `tracking-wide`. Report both computed
`letter-spacing` values and say which suits a large heading.

### Exercise 4: Line height comparison
Render one long paragraph with `leading-tight` and another with `leading-relaxed`, and compare their
readability.

### Exercise 5: Build a notice heading
Combine size, weight, tracking and colour classes into one heading, and identify which class does
which job.

## Quizes

### Q1. Which class makes text the largest?
1. `text-lg`
2. `text-xl`
3. `text-3xl`
4. `text-base`

### Q2. Does each text size class also set a line-height?
1. No — line-height must always be set separately
2. Yes — each size step carries a matching line-height by default
3. Only `text-base` sets a line-height
4. Only headings get an automatic line-height

### Q3. What does `tracking-tight` change?
1. Line height
2. Letter spacing
3. Font weight
4. Text alignment

### Q4. `<p class="text-sm font-bold text-slate-700 text-center">` does what?
1. Small bold grey text, left aligned
2. Large bold grey text, centred
3. Small regular grey text, centred
4. Small bold grey text, centred

### Q5. Which class sets font weight to bold?
1. `text-bold`
2. `weight-bold`
3. `font-bold`
4. `strong`
