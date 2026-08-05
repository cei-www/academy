# Responsive page layout

A sidebar layout that looks right at 1200px wide can crush a phone screen into two unreadable
slivers. `flex-direction` can switch inside a `@media` query, with no change to the markup at all —
the same `<header>`/`<nav>`/`<main>`/`<footer>` shell just stacks vertically below a breakpoint. This
lesson only covers reflowing a page shell; breakpoints and fluid values in general get their own
lesson in Responsive design, later in this group.

## Display
### HTML

```
<div class="shell">
  <header>CE WebDev Academy</header>

  <div class="body">
    <nav aria-label="Main">
      <a href="#">Lectures</a>
      <a href="#">Labs</a>
      <a href="#">Grades</a>
    </nav>
    <main>Resize the preview narrower than 500px to see the sidebar stack above the content.</main>
  </div>

  <footer>CE-KMITL</footer>
</div>
```

### CSS

```
html, body { height: 100%; margin: 0; font-family: system-ui, sans-serif; }

.shell { display: flex; flex-direction: column; min-height: 100vh; }
header, footer { background: #0F1B33; color: #EEF1F4; padding: 10px 16px; }
.body { display: flex; flex-direction: row; flex: 1; }
nav { width: 160px; background: #EEF1F4; padding: 12px; }
nav a { display: block; color: #6B4207; padding: 6px 0; }
main { flex: 1; padding: 16px; }

@media (max-width: 500px) {
  .body { flex-direction: column; }
  nav { width: auto; }
}
```

### Javascript

```

```

## Your Tasks
### 1. Stack the sidebar under the content on a narrow screen
`flex-direction` can switch per breakpoint, without touching the markup.

```
.body { display: flex; flex-direction: row; }

@media (max-width: 600px) {
  .body { flex-direction: column; }
}
```

### 2. Let a fixed-width sidebar go full width when stacked
A fixed `width` only makes sense in the row layout; drop it once the sidebar is on its own row.

```
@media (max-width: 600px) {
  nav { width: auto; }
}
```

### 3. Hide a non-essential region on small screens
Not every region has to survive every breakpoint.

```
@media (max-width: 400px) {
  .promo-banner { display: none; }
}
```

### 4. Reduce the header's padding on a narrow screen
Small tweaks inside a media query keep tight layouts comfortable, not just full reflows.

```
@media (max-width: 600px) {
  header { padding: 8px 12px; }
}
```

### 5. Test at more than one width
A layout is only "responsive" once you have actually checked it at several sizes, not just resized
the window once.

```
/* check in DevTools' device toolbar at 375px, 768px and 1280px */
```

## Exercises

### Exercise 1: Stack the shell
Take the semantic header/nav/main/footer shell and add a media query that stacks `nav` above `main`
below 600px.

### Exercise 2: Full-width sidebar when stacked
Confirm the sidebar's fixed width is removed once it stacks, so it does not leave empty space beside
it.

### Exercise 3: Three checkpoints
Test your stacked layout at 375px, 768px and 1280px in DevTools' device toolbar and describe what
changes at each width.

### Exercise 4: Hide a decorative element
Add an element that is only shown above 900px (e.g. a decorative banner), and confirm it disappears
below that width.

### Exercise 5: Compare to the table version
Explain in one or two sentences why the table-based layout from earlier in this group could not do
what this lesson's media query does.

## Quizes

### Q1. What lets a page shell reflow differently at different widths, with no markup changes?
1. `@media` queries changing CSS rules like `flex-direction`
2. Duplicating the HTML for each screen size
3. `<meta name="responsive">`
4. JavaScript is always required for this

### Q2. What does `flex-direction: column` do to a `.body { display: flex; flex-direction: row; }` layout inside a media query?
1. Nothing — `flex-direction` cannot be changed in a media query
2. Stacks the flex children vertically instead of side by side
3. Reverses the order of the children only
4. Removes flex layout entirely

### Q3. Why remove a fixed `width` from the sidebar once it stacks below the content?
1. Fixed widths are invalid inside media queries
2. Otherwise it leaves empty space beside it in the narrow, single-column layout
3. It has no effect either way
4. `width` only works with `flex-direction: row`

### Q4. What is the best way to confirm a layout is genuinely responsive?
1. Resize the window once and assume it works everywhere else
2. Test it at several representative widths, such as 375px, 768px and 1280px
3. Only test on the developer's own monitor
4. Read the CSS and trust it without checking the browser

### Q5. Why couldn't the table-based layout reflow the way this lesson's shell does?
1. Tables cannot be styled with CSS at all
2. A table's rigid row/column grid has no equivalent to switching `flex-direction`
3. `@media` queries only work on `<div>` elements
4. Tables are always full width, so there is nothing to reflow
