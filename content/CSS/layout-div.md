# Page layout with div and flexbox

The next step past table layout was the generic, meaning-free `<div>`, combined with CSS for the
actual positioning. A `<div class="sidebar">` carries no built-in meaning — the class name is only a
hook for CSS — but `display: flex` on a container finally gives real, reflowable control over rows,
columns and sizing that a table's grid never had.

A **sticky footer** stays at the bottom of a short page and below the content on a long one:
`min-height: 100vh` and `flex-direction: column` on the page, `flex: 1` on the main area. A
**sidebar layout** is a `flex` row: a fixed-width sidebar and a `flex: 1` content area.

## Display
### HTML

```
<div class="shell">
  <div class="header">CE WebDev Academy</div>

  <div class="body">
    <div class="sidebar">
      <a href="#">Lectures</a>
      <a href="#">Labs</a>
      <a href="#">Grades</a>
    </div>
    <div class="content">Main content area — grows to fill the rest of the row.</div>
  </div>

  <div class="footer">CE-KMITL</div>
</div>
```

### CSS

```
html, body { height: 100%; margin: 0; font-family: system-ui, sans-serif; }

.shell { display: flex; flex-direction: column; min-height: 100vh; }
.header, .footer { background: #0F1B33; color: #EEF1F4; padding: 10px 16px; }
.body { display: flex; flex: 1; }
.sidebar { width: 160px; background: #EEF1F4; padding: 12px; }
.sidebar a { display: block; color: #6B4207; padding: 6px 0; }
.content { flex: 1; padding: 16px; }
```

### Javascript

```

```

## Your Tasks
### 1. Build a sticky footer
`flex: 1` on the content area is what pushes the footer to the bottom.

```
.shell { display: flex; flex-direction: column; min-height: 100vh; }
.content { flex: 1; }
```

### 2. Add a fixed-width sidebar
The sidebar keeps a set width; the content area takes whatever is left.

```
.body { display: flex; }
.sidebar { width: 200px; }
.content { flex: 1; }
```

### 3. Centre a card on the page
Both axes at once, with no margin arithmetic.

```
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

### 4. Make two columns the same height
Flex items on the same row stretch to match the tallest one by default.

```
.row { display: flex; }
.col { flex: 1; background: #EEF1F4; }
/* both columns are as tall as the taller one, automatically */
```

### 5. Notice what div-based layout still lacks
Every box is a `<div>` — nothing here tells a screen reader which part is the navigation or the main
content. That gap is what the next lesson fixes.

```
<!-- visually correct, semantically empty -->
<div class="sidebar">...</div>
<div class="content">...</div>
```

## Exercises

### Exercise 1: App shell
Build a header, a sidebar + content row, and a footer using divs and the sticky-footer pattern, so
the footer stays at the bottom even when the content is short.

### Exercise 2: Centred sign-in card
Centre a 320px-wide card both horizontally and vertically on a full-height page.

### Exercise 3: Equal-height cards
Lay out three `<div>` cards of different content lengths in a row and confirm in DevTools that they
render the same height without any `height` rule.

### Exercise 4: Compare with the table version
Rebuild the header/sidebar/content/footer skeleton from the table layout lesson using divs and flex
instead, and write one sentence on which was easier to get right.

### Exercise 5: Check the accessibility tree
Open DevTools' Accessibility panel on this div-based layout and report what role (if any) it
announces for the sidebar and content divs.

## Quizes

### Q1. What makes a sticky footer stay at the bottom of a short page?
1. `position: fixed` on the footer
2. `flex: 1` on the content area, inside a full-height flex column
3. A large `margin-top` on the footer
4. `overflow: hidden` on the body

### Q2. In a div-based sidebar layout built with `display: flex`, what keeps the sidebar's width fixed while the content area fills the rest?
1. `flex: 1` on the sidebar and a fixed width on `.content`
2. A fixed `width` on the sidebar and `flex: 1` on `.content`
3. `flex-wrap: wrap` on the container
4. `align-items: stretch` on the sidebar alone

### Q3. Which combination centres a box on both axes inside its parent?
1. `justify-content: center` alone
2. `align-items: center` alone
3. `display: flex` with both `align-items: center` and `justify-content: center`
4. `margin: center`

### Q4. Why do flex items on the same row usually end up the same height with no `height` rule set?
1. Flexbox forces a fixed height of 100px by default
2. `align-items` defaults to `stretch`, so items stretch to match the tallest
3. It is a browser bug that most sites work around
4. Only `<div>` elements do this; other elements do not

### Q5. What does a `<div class="sidebar">` communicate to a screen reader, on its own?
1. "This is the site's navigation"
2. Nothing — `<div>` carries no built-in semantic meaning
3. "This is the main content"
4. The same thing a `<nav>` element would
