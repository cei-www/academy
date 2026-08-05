# Page layout patterns overview

You have now met four eras of page layout on their own: tables (why not to), div plus flexbox,
semantic tags, and responsive reflow. The tag names barely matter to the CSS — `display: flex` and
its related properties are what actually position things — but they matter enormously to anyone using
a screen reader, which is why the modern approach uses `<header>`/`<nav>`/`<main>`/`<footer>`.

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
    <main>Main content area — grows to fill the rest of the row.</main>
  </div>

  <footer>CE-KMITL</footer>
</div>
```

### CSS

```
html, body { height: 100%; margin: 0; font-family: system-ui, sans-serif; }

.shell { display: flex; flex-direction: column; min-height: 100vh; }
header, footer { background: #0F1B33; color: #EEF1F4; padding: 10px 16px; }
.body { display: flex; flex: 1; }
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
const marks = document.querySelectorAll("header, nav, main, footer");
console.log("landmarks in this layout:", marks.length);
```

## Your Tasks
### 1. Build a sticky footer
`flex: 1` on the main area is what pushes the footer to the bottom.

```
.shell { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }
```

### 2. Add a fixed-width sidebar
The sidebar keeps a set width; the main area takes whatever is left.

```
.body { display: flex; }
nav { width: 200px; }
main { flex: 1; }
```

### 3. Use landmark elements, not generic divs
The exact same flex CSS applies, but now a screen reader can navigate the regions by name.

```
<header>...</header>
<nav aria-label="Main">...</nav>
<main>...</main>
<footer>...</footer>
```

### 4. Centre a card on the page
Both axes at once, with no margin arithmetic.

```
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

### 5. Stack the sidebar under the content on a narrow screen
`flex-direction` can switch per breakpoint, without touching the markup.

```
.body { display: flex; flex-direction: row; }

@media (max-width: 600px) {
  .body { flex-direction: column; }
  nav { width: auto; }
}
```

## Exercises

### Exercise 1: App shell
Build a header, a nav + main row, and a footer using landmark elements and the sticky-footer
pattern, so the footer stays at the bottom even when the content is short.

### Exercise 2: Centred sign-in card
Centre a 320px-wide card both horizontally and vertically on a full-height page.

### Exercise 3: Equal-height cards
Lay out three cards of different content lengths in a row and confirm in DevTools that they render
the same height without any `height` rule.

### Exercise 4: Responsive sidebar
Take the sidebar layout from the Display and make it stack above the main content once the window is
narrower than 600px.

### Exercise 5: Name the three eras
In one or two sentences each, describe what problem div+flexbox solved over table layout, and what
problem semantic tags solved over div+flexbox.

## Quizes

### Q1. What makes a sticky footer stay at the bottom of a short page?
1. `position: fixed` on the footer
2. `flex: 1` on the main content area, inside a full-height flex column
3. A large `margin-top` on the footer
4. `overflow: hidden` on the body

### Q2. Why is table-based page layout discouraged today?
1. It renders slower than any other technique
2. It mixes structure with presentation, hurts accessibility and does not reflow well
3. `<table>` was removed from the HTML specification
4. It cannot hold any CSS styling

### Q3. What does swapping a `<div class="header">` for `<header>` change in a flex layout?
1. The flex CSS must be rewritten entirely
2. Nothing visually — only the semantic meaning changes
3. `<header>` cannot be a flex child
4. It breaks the sticky footer pattern

### Q4. Which combination centres a box on both axes inside its parent?
1. `justify-content: center` alone
2. `align-items: center` alone
3. `display: flex` with both `align-items: center` and `justify-content: center`
4. `margin: center`

### Q5. What is a simple way to make a sidebar layout stack vertically on a narrow screen?
1. Delete the sidebar entirely below a breakpoint
2. Change `flex-direction` from `row` to `column` inside a media query
3. Switch `display: flex` to `display: none`
4. Flexbox cannot respond to screen width at all
