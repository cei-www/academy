# Box model

Every element the browser renders is a box with four layers: the content, then `padding` inside the
border, then the `border` itself, then `margin` — empty space that pushes other boxes away.

![The four regions of the CSS box model: margin, border, padding, content](resources/img/box-model.svg)

`padding` and `margin` take one to four values, clockwise from the top. `padding: 10px 20px` is 10px
top and bottom, 20px left and right; `margin: 0 auto` centres a box in its parent. `border` is
shorthand for width, style and colour, and `border-radius` rounds the corners.

By default `width` sizes the *content* only, so `width: 300px` with `padding: 20px` and a `2px`
border occupies 300 + 40 + 4 = 344px and overflows a 320px column. `box-sizing: border-box` makes
`width` include the padding and border, keeping the box exactly 300px, which is why nearly every
project starts with `* { box-sizing: border-box; }`. Vertical margins between neighbours collapse:
20px under one box and 30px above the next gives a 30px gap, not 50px.

## Display
### HTML

```
<div class="card">
  <h2>CPE231 Databases</h2>
  <p>3 credits — Tuesday 13:00, Lab 4</p>
</div>

<div class="card">
  <h2>CPE221 Data Structures</h2>
  <p>3 credits — Thursday 09:00, Lab 2</p>
</div>
```

### CSS

```
* { box-sizing: border-box; }

body {
  background-color: #EEF1F4;
  font-family: system-ui, sans-serif;
}

.card {
  width: 300px;
  padding: 16px 20px;
  margin: 0 0 16px 0;
  border: 2px solid #DDE2E8;
  border-radius: 8px;
  background-color: white;
}

.card h2 {
  margin: 0 0 8px 0;
  color: #0F1B33;
}
```

### Javascript

```

```

## Your Tasks
### 1. Add padding inside a box
Padding sits between the content and the border, and the background paints under it.

```
.card {
  padding: 16px 20px;   /* 16px top and bottom, 20px left and right */
}
```

### 2. Push boxes apart with margin
Margin is outside the border and always transparent.

```
.card {
  margin: 0 0 16px 0;   /* top right bottom left */
}
```

### 3. Draw a border
Width, style, colour — in that order, in one declaration.

```
.card {
  border: 2px solid #DDE2E8;
}
```

### 4. Round the corners
One radius for all four corners; `50%` on a square gives a circle.

```
.card { border-radius: 8px; }

.avatar { border-radius: 50%; }
```

### 5. Make `width` mean the whole box
Without the reset this card renders 344px wide; with it, 300px.

```
* { box-sizing: border-box; }

.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #DDE2E8;
}
```

## Exercises

### Exercise 1: Read the box in DevTools
Select a card, open the Computed tab's box diagram, and write down its content width, padding,
border and margin as four numbers.

### Exercise 2: Prove the arithmetic
Set `box-sizing: content-box` on a card with `width: 300px`, `padding: 20px` and a `2px` border.
Measure the rendered width in DevTools, then switch to `border-box` and measure again.

### Exercise 3: Four values, four sides
Give a box `padding: 4px 8px 16px 32px` and label a screenshot with which number went where.

### Exercise 4: Watch margins collapse
Stack two paragraphs with `margin-bottom: 20px` and `margin-top: 30px`. Measure the real gap in
DevTools and say which value won.

### Exercise 5: Course card
Build a 320px card with a 1px border, 8px radius, 16px padding, a heading, a paragraph, and 24px of
space to the card below it.

## Quizes

### Q1. Which layer sits between the content and the border?
1. `margin`
2. `padding`
3. `outline`
4. `gap`

### Q2. What does `padding: 10px 20px` mean?
1. 10px on all four sides, then 20px extra on the left
2. 10px top and bottom, 20px left and right
3. 10px left and right, 20px top and bottom
4. 10px top, 20px right, and nothing elsewhere

### Q3. Under the default `box-sizing`, how wide is a box with `width: 300px`, `padding: 20px` and `border: 2px solid`?
1. 300px
2. 322px
3. 344px
4. 360px

### Q4. What does `box-sizing: border-box` change?
1. `width` starts to include the padding and border
2. It removes the border from the box
3. It stops margins from collapsing
4. It makes padding transparent

### Q5. One box has `margin-bottom: 20px`, the next has `margin-top: 30px`. What is the gap between them?
1. 20px
2. 30px
3. 50px
4. 0px
