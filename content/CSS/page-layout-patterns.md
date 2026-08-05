# Common page layout patterns

Flexbox is not only for one row of buttons — the same properties build whole-page structure. A
**sticky footer** stays at the bottom of a short page and below the content on a long one:
`min-height: 100vh` and `flex-direction: column` on the page, `flex: 1` on the main area pushes the
footer down without it ever needing `position: fixed`.

A **sidebar layout** is a `flex` row: a fixed-width nav and a `flex: 1` main area that takes the rest.
**Centring** a card on the page, both axes at once, is `display: flex` with `align-items: center` and
`justify-content: center` on the parent — no margin math, no `position: absolute`.

## Display
### HTML

```
<div class="shell">
  <header>CE WebDev Academy</header>

  <div class="body">
    <nav class="sidebar">
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
.sidebar { width: 160px; background: #EEF1F4; padding: 12px; }
.sidebar a { display: block; color: #6B4207; padding: 6px 0; }
main { flex: 1; padding: 16px; }
```

### Javascript

```

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
.sidebar { width: 200px; }
main { flex: 1; }
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

### 5. Stack the sidebar under the content on a narrow screen
`flex-direction` can switch per breakpoint, without touching the markup.

```
.body { display: flex; flex-direction: row; }

@media (max-width: 600px) {
  .body { flex-direction: column; }
}
```

## Exercises

### Exercise 1: App shell
Build a header, a sidebar + main row, and a footer using the sticky-footer pattern, so the footer
stays at the bottom even when the content is short.

### Exercise 2: Centred sign-in card
Centre a 320px-wide card both horizontally and vertically on a full-height page.

### Exercise 3: Equal-height cards
Lay out three cards of different content lengths in a row and confirm in DevTools that they render
the same height without any `height` rule.

### Exercise 4: Responsive sidebar
Take the sidebar layout from the Display and make it stack above the main content once the window is
narrower than 600px.

### Exercise 5: Compare with position
Rebuild the centred card from Exercise 2 using `position: absolute` and negative margins instead of
flex, then write one sentence on which approach is easier to keep centred if the card's size changes.

## Quizes

### Q1. What makes a sticky footer stay at the bottom of a short page?
1. `position: fixed` on the footer
2. `flex: 1` on the main content area, inside a full-height flex column
3. A large `margin-top` on the footer
4. `overflow: hidden` on the body

### Q2. In a sidebar layout built with `display: flex`, what keeps the sidebar's width fixed while the main area fills the rest?
1. `flex: 1` on the sidebar and a fixed width on `main`
2. A fixed `width` on the sidebar and `flex: 1` on `main`
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

### Q5. What is a simple way to make a sidebar layout stack vertically on a narrow screen?
1. Delete the sidebar entirely below a breakpoint
2. Change `flex-direction` from `row` to `column` inside a media query
3. Switch `display: flex` to `display: none`
4. Flexbox cannot respond to screen width at all
