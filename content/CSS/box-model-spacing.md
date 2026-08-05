# Padding, margin and border

Every element renders as a box with `padding` inside the border, the `border` itself, and `margin`
outside it — empty space that pushes other boxes away.

![The four regions of the CSS box model: margin, border, padding, content](resources/img/box-model.svg)

`padding` and `margin` take one to four values, clockwise from the top. `padding: 10px 20px` is 10px
top and bottom, 20px left and right; `margin: 0 auto` centres a box in its parent. `border` is
shorthand for width, style and colour, in that order, and `border-radius` rounds the corners.

## Display
### HTML

```
<div class="card">
  <h2>CE221 Data Structures</h2>
  <p>3 credits — Thursday 09:00, Lab 2</p>
</div>
```

### CSS

```
.card {
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

### 5. Combine all three on one card
Padding, border and margin stack independently — changing one does not move the others.

```
.card {
  padding: 16px 20px;
  border: 2px solid #DDE2E8;
  border-radius: 8px;
  margin: 0 0 16px 0;
}
```

## Exercises

### Exercise 1: Read the box in DevTools
Select a card, open the Computed tab's box diagram, and write down its padding, border and margin
as four numbers each.

### Exercise 2: Four values, four sides
Give a box `padding: 4px 8px 16px 32px` and label a screenshot with which number went where.

### Exercise 3: Centre with auto margins
Give a 400px-wide box `margin: 0 auto` inside a wider page and confirm it sits centred.

### Exercise 4: Round an avatar
Apply a 60×60px image and `border-radius: 50%` so it renders as a circle.

### Exercise 5: Course card
Build a card with a 1px border, 8px radius, 16px padding, a heading, a paragraph, and 24px of space
to the card below it.

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

### Q3. What does `margin: 0 auto` do to a box with a fixed width?
1. Removes all margin
2. Centres the box horizontally inside its parent
3. Stretches the box to fill its parent
4. Adds margin only above the box

### Q4. In `border: 2px solid #DDE2E8`, what order are the values given?
1. Colour, style, width
2. Style, colour, width
3. Width, style, colour
4. The order does not matter

### Q5. What does `border-radius: 50%` do to a square box?
1. Nothing — `border-radius` needs pixel values
2. Rounds only the top two corners
3. Renders the box as a circle
4. Removes the border entirely
