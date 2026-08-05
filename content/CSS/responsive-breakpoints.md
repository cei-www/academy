# Viewport and breakpoints

Nothing responsive works without this line in `<head>`. Without it a phone pretends to be a 980px
desktop and shrinks your page.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Write the small-screen layout first, plain and unconditional, then add `min-width` media queries that
*add* rules as space appears. Mobile-first means every query is an enhancement, never an undo.

Pick breakpoints where your own content breaks — the line where cards get too narrow to read — not
from device names. Phone sizes change; your content does not.

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

### 3. Stack a second breakpoint
Queries add up — a wider screen keeps the first query's rules and adds more.

```
@media (min-width: 60rem) {
  .layout { grid-template-columns: 220px 1fr 1fr; }
}
```

### 4. Pick a breakpoint from content, not a device
Narrow the window until your own layout breaks, and use that number.

```
/* found by testing, not copied from a device list */
@media (min-width: 37.5rem) { .cards { grid-template-columns: repeat(2, 1fr); } }
```

### 5. Convert a max-width query to mobile-first
`max-width` queries subtract from a desktop base; `min-width` queries add to a phone base.

```
/* before: desktop-first */
.cards { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 60rem) { .cards { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 40rem) { .cards { grid-template-columns: 1fr; } }

/* after: mobile-first */
.cards { grid-template-columns: 1fr; }
@media (min-width: 40rem) { .cards { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 60rem) { .cards { grid-template-columns: repeat(3, 1fr); } }
```

## Exercises

### Exercise 1: Find your own breakpoint
Build a three-card row. Narrow the window until the cards become unreadable, read the width in
DevTools' device toolbar, and use that number as your breakpoint. Justify it in one sentence.

### Exercise 2: Rewrite max-width as min-width
Take a stylesheet written with two `max-width` queries and convert it to mobile-first `min-width`.
The rendered result must be identical at every width.

### Exercise 3: Missing viewport tag
Remove the viewport meta tag from a page, load it on a narrow simulated phone width in DevTools, and
report what changed.

### Exercise 4: Device toolbar audit
Test one page at 360×640, 768×1024 and 1280×800. List every element that overflows horizontally.

### Exercise 5: Three-tier layout
Build a layout with a phone base and two `min-width` breakpoints, each adding one more column.

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

### Q3. Where should a breakpoint come from?
1. The width at which your own content stops working
2. The screen width of the current iPhone
3. Always 768px, the standard tablet width
4. The average width in your analytics

### Q4. In mobile-first CSS, what do later, wider `min-width` queries do to earlier rules?
1. Replace them entirely
2. Add to and build on them
3. Nothing — only the last query in the file applies
4. Disable them until the window is resized again

### Q5. What attribute in the viewport meta tag matches the CSS pixel width to the device?
1. `initial-scale=1`
2. `width=device-width`
3. `user-scalable=no`
4. `minimum-scale=1`
