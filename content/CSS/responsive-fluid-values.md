# Fluid values and user preferences

Use relative units so the layout follows the user's font size: `rem` for spacing and type, `%` and
`fr` for widths, `ch` for line length. `clamp(min, preferred, max)` gives fluid type in one line,
scaling smoothly between the two bounds instead of jumping at a breakpoint.

Media queries also ask about the user, not just the window: `prefers-reduced-motion` and
`prefers-color-scheme` are queries too, and both deserve a response with no extra switch required.

## Display
### HTML

```
<h1>CE Web Lab</h1>
<p>Line length stays readable no matter how wide the window gets.</p>
```

### CSS

```
h1 { font-size: clamp(1.5rem, 4vw + 1rem, 3rem); color: #0F1B33; }
p  { max-width: 65ch; color: #4B5563; }

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

@media (prefers-color-scheme: dark) {
  body { background: #131A26; color: #EEF1F4; }
}
```

### Javascript

```

```

## Your Tasks
### 1. Make type fluid with clamp()
Lower bound, a viewport-relative middle, upper bound — no query needed.

```
body { font-size: clamp(1rem, 0.9rem + 0.4vw, 1.25rem); }
```

### 2. Bound a line's length for readability
`ch` is roughly one character's width, so `65ch` keeps prose scannable at any window size.

```
p { max-width: 65ch; }
```

### 3. Use rem so spacing follows the user's font size
`rem` scales with the root font size; a fixed `px` value does not.

```
.card { padding: 1rem; margin-bottom: 1.5rem; }
```

### 4. Respect reduced motion
Users who ask for less movement get a still page. This is a one-block obligation.

```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 5. Follow the system color scheme
Query the preference and repaint; do not ask the user to flip a switch first.

```
@media (prefers-color-scheme: dark) {
  body { background: #131A26; color: #EEF1F4; }
  .card { background: #0F1B33; border-color: #4B5563; }
}
```

## Exercises

### Exercise 1: Fluid heading
Give `h1` a `clamp()` size, then read its computed `font-size` in DevTools at 360px, 768px and
1440px. Record the three values and confirm the clamps hold.

### Exercise 2: Line length audit
Add `max-width: 65ch` to a long paragraph, widen the window to full screen, and confirm the text
never stretches edge to edge.

### Exercise 3: rem versus px
Change the root font size in DevTools, then compare a `1rem`-padded box against a `16px`-padded box
and report which one changed.

### Exercise 4: Two preference queries
Add `prefers-reduced-motion` and `prefers-color-scheme` blocks, then toggle both from DevTools'
rendering panel and confirm the page changes without resizing.

### Exercise 5: clamp() bounds
`font-size: clamp(1rem, 2vw, 2rem)` in a 1600px-wide viewport. Compute what size actually applies and
explain why the clamp caps it there.

## Quizes

### Q1. What does `clamp(1rem, 2vw, 2rem)` do?
1. Always renders at exactly `2vw`
2. Scales with the viewport between a 1rem floor and a 2rem ceiling
3. Picks whichever of the three values is largest, always
4. Is invalid CSS outside of `font-size`

### Q2. `font-size: clamp(1rem, 2vw, 2rem)` in a 1600px-wide viewport. What is the computed size?
1. `1rem`
2. `2rem`
3. `32vw`
4. `1.5rem`

### Q3. Why use `ch` for a paragraph's `max-width`?
1. It is a fixed 16px unit
2. It approximates one character's width, keeping line length readable regardless of font size
3. It only works inside `<textarea>`
4. It is identical to `%`

### Q4. Which media query asks about the user rather than the window?
1. `(min-width: 40rem)`
2. `(orientation: landscape)`
3. `(prefers-reduced-motion: reduce)`
4. `(min-resolution: 2dppx)`

### Q5. Why prefer `rem` over `px` for spacing and type?
1. `rem` cannot be used inside media queries
2. `rem` scales with the user's root font size; `px` stays fixed regardless of their settings
3. There is no real difference between the two
4. `px` is not supported in modern browsers
