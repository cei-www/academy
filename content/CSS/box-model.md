# Box model

Every element is a rectangular box made of four layers, from the inside out: content, padding, border, and margin.

## Display
### HTML

```
<div class="box">Box model</div>
```

### CSS

```
.box {
  padding: 16px;
  border: 2px solid black;
  margin-bottom: 20px;
}
```

### Javascript

```

```

## Your tasks
### Add padding and a border
Give a `<div>` some breathing room and a visible edge.

```
div {
  padding: 16px;
  border: 2px solid black;
}
```

### Add margin between boxes
Push two `<div>` elements apart.

```
div {
  margin-bottom: 20px;
}
```

## Exercises

### Exercise 1: Box-sizing
Set `box-sizing: border-box` on a box with both `width` and `padding` set, and describe what changes.

### Exercise 2: Different sides
Give a box `10px` padding on top and bottom, but `20px` on left and right.

### Exercise 3: Remove default spacing
Remove the default margin on `<body>` so a colored `<div>` touches the edge of the window.

## Quizes

### Q1. Which layer sits closest to an element's content?
1. Margin
2. Border
3. Padding
4. Outline

### Q2. What does `margin` control?
1. Space inside the border, around the content
2. Space outside the border, between elements
3. The thickness of the border itself
4. The element's text color

### Q3. Which shorthand sets padding to 10px on all four sides?
1. `padding: 10px;`
2. `padding: 10px 0;`
3. `padding-all: 10px;`
4. `padding: 10;`
