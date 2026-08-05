# Page layout with semantic tags

The div-based shell works visually but tells assistive technology nothing about what each box is.
Swap `<div class="header">` for `<header>`, `<div class="sidebar">` for `<nav>`, `<div
class="content">` for `<main>`, and `<div class="footer">` for `<footer>` — the exact same flexbox
CSS still applies, because layout is controlled by `display: flex`, not by which tag you use.

This is the landmark pattern from Advanced HTML's Semantic and accessibility lessons, applied to a
full page shell: the same visual result, now reachable by a screen reader's landmark navigation.

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
```

### Javascript

```
const marks = document.querySelectorAll("header, nav, main, footer");
console.log("landmarks in this layout:", marks.length);
```

## Your Tasks
### 1. Swap the header div for `<header>`
The CSS selector changes from a class to the element itself; the flex rules do not change at all.

```
<header>CE WebDev Academy</header>
```

```
header { background: #0F1B33; color: #EEF1F4; padding: 10px 16px; }
```

### 2. Swap the sidebar div for `<nav>`
A named `<nav>` is a landmark a screen reader user can jump to directly.

```
<nav aria-label="Main">
  <a href="#">Lectures</a>
</nav>
```

### 3. Swap the content div for `<main>`
There should be exactly one `<main>` per page, holding what is unique to it.

```
<main>Page-specific content goes here.</main>
```

### 4. Swap the footer div for `<footer>`
`<footer>` closes the page, same as it did the `<div class="footer">` before.

```
<footer>CE-KMITL</footer>
```

### 5. Confirm the flex layout still works
Layout comes from `display: flex` on the parent, not from which tag the children are.

```
.body { display: flex; }
nav { width: 160px; }
main { flex: 1; }
```

## Exercises

### Exercise 1: Rebuild with landmarks
Take the div-based shell from the previous lesson and rewrite it using `<header>`, `<nav>`,
`<main>` and `<footer>`, confirming the page looks pixel-identical.

### Exercise 2: Landmark count
Log `document.querySelectorAll("header, nav, main, footer").length` in the console and confirm it
matches the number of landmark regions on your page.

### Exercise 3: Accessibility tree check
Open DevTools' Accessibility panel and confirm `<nav>` now announces a "navigation" role, where the
div version announced nothing.

### Exercise 4: Two navs
Add a second `<nav>` for a "Course sections" list inside `<main>`, and give both `<nav>` elements a
distinguishing `aria-label`.

### Exercise 5: One main only
Explain in one sentence why a page should have only one `<main>`, even if it has several `<section>`
elements inside it.

## Quizes

### Q1. What changes when you swap `<div class="header">` for `<header>` in a flex layout?
1. The flex CSS has to be rewritten entirely
2. Nothing about the layout — only the semantic meaning changes
3. `<header>` cannot be a flex child
4. The page becomes unresponsive

### Q2. Why does `<nav>` communicate more than `<div class="sidebar">`?
1. It renders with a different default width
2. It is announced as a navigation landmark to assistive technology
3. `<nav>` is required for CSS `flex` to work
4. There is no real difference

### Q3. How many `<main>` elements should one page have?
1. One per `<section>`
2. Exactly one
3. As many as there are columns
4. None — `<main>` is deprecated

### Q4. What controls the visual layout in this lesson's Display — the tag names or the CSS?
1. The tag names — `<nav>` is always 160px wide
2. The CSS (`display: flex` and its related properties)
3. Both equally, with tag name taking priority
4. Neither — the browser picks a default layout

### Q5. What is the main benefit of using landmark elements over generic divs for the same visual layout?
1. Faster page load
2. Smaller CSS file size
3. Assistive technology can navigate the page by region
4. It removes the need for any CSS at all
