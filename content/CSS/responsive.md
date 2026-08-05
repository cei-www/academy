# Responsive design overview

You have now met breakpoints and fluid values on their own. A real page combines them: a mobile-first
base layout with `min-width` queries that add columns, sized with `rem`/`ch`/`clamp()` so type and
spacing follow the user's own settings, and preference queries that respond to how they like to browse
— not just how wide their window is.

## Display
### HTML

```
<h1>CE Web Lab</h1>
<div class="cards">
  <div class="card">Lectures</div>
  <div class="card">Labs</div>
  <div class="card">Grades</div>
</div>
```

### CSS

```
h1 { font-size: clamp(1.5rem, 4vw + 1rem, 3rem); color: #0F1B33; }

.cards { display: grid; gap: 1rem; }       /* one column: the phone layout */

.card {
  padding: 1rem;
  background: #EEF1F4;
  border: 1px solid #DDE2E8;
}

@media (min-width: 40rem) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 60rem) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
```

### Javascript

```

```

## Your Tasks
### 1. Add the viewport meta tag
Every responsive lesson assumes it. Put it in `<head>` before anything else.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 2. Write a mobile-first query
The base rule is the phone. The query only adds columns.

```
.layout { display: grid; gap: 1rem; }

@media (min-width: 48rem) {
  .layout { grid-template-columns: 220px 1fr; }
}
```

### 3. Make type fluid with clamp()
Lower bound, a viewport-relative middle, upper bound — no query needed.

```
body { font-size: clamp(1rem, 0.9rem + 0.4vw, 1.25rem); }
p    { max-width: 65ch; }
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

### Exercise 1: Find your own breakpoint
Build a three-card row. Narrow the window until the cards become unreadable, read the width in
DevTools' device toolbar, and use that number as your breakpoint. Justify it in one sentence.

### Exercise 2: Rewrite max-width as min-width
Take a stylesheet written with two `max-width` queries and convert it to mobile-first `min-width`.
The rendered result must be identical at every width.

### Exercise 3: Fluid heading
Give `h1` a `clamp()` size, then read its computed `font-size` in DevTools at 360px, 768px and
1440px. Record the three values and confirm the clamps hold.

### Exercise 4: Two preference queries
Add `prefers-reduced-motion` and `prefers-color-scheme` blocks, then toggle both from DevTools'
rendering panel and confirm the page changes without resizing.

### Exercise 5: Device toolbar audit
Test one page at 360×640, 768×1024 and 1280×800. List every element that overflows horizontally and
fix each with a relative unit rather than a new breakpoint.

## Quizes

### Q1. What happens if the viewport meta tag is missing?
1. Media queries stop working entirely
2. The phone renders at a wide virtual width and scales the page down
3. The page loads at 100% zoom but ignores CSS
4. Nothing; it only affects printing

### Q2. What does mobile-first mean in practice?
1. Base rules describe the small screen; `min-width` queries add to them
2. Base rules describe the desktop; `max-width` queries subtract from them
3. Every rule lives inside a media query
4. Separate stylesheets are served to phones

### Q3. `font-size: clamp(1rem, 2vw, 2rem)` in a 1600px-wide viewport. What is the computed size?
1. `1rem`
2. `2rem`
3. `32vw`
4. `1.5rem`

### Q4. Where should a breakpoint come from?
1. The width at which your own content stops working
2. The screen width of the current iPhone
3. Always 768px, the standard tablet width
4. The average width in your analytics

### Q5. Which media query asks about the user rather than the window?
1. `(min-width: 40rem)`
2. `(orientation: landscape)`
3. `(prefers-reduced-motion: reduce)`
4. `(min-resolution: 2dppx)`
