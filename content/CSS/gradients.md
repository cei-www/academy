# Gradients

A gradient is a smooth transition between two or more colours, used anywhere a solid colour or an
image could go — `background`, `border-image`, even `color` via a background-clip trick.
`linear-gradient(direction, color-stop, color-stop, ...)` blends along a straight line;
`radial-gradient(shape, color-stop, ...)` blends outward from a centre point. Named colour stops can
each carry a position, like `#F2A93B 40%`, to control exactly where one colour ends and the next
begins.

## Display
### HTML

```
<div class="banner">Course registration open</div>
<div class="badge">New</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.banner {
  padding: 24px;
  border-radius: 8px;
  color: #fff;
  background: linear-gradient(135deg, #0F1B33, #4B5563);
}

.badge {
  display: inline-block;
  margin-top: 12px;
  padding: 10px;
  border-radius: 50%;
  width: 60px; height: 60px;
  text-align: center; line-height: 40px;
  color: #6B4207;
  background: radial-gradient(circle, #F2A93B, #C97C0E);
}
```

### Javascript

```

```

## Your Tasks
### 1. Blend two colours in a straight line
`linear-gradient(direction, from, to)` is the simplest form.

```
.banner { background: linear-gradient(135deg, #0F1B33, #4B5563); }
```

### 2. Blend outward from a centre point
`radial-gradient` starts at the centre by default and spreads to the edges.

```
.badge { background: radial-gradient(circle, #F2A93B, #C97C0E); }
```

### 3. Control where a colour stop lands
A percentage after a colour pins exactly where it reaches full strength.

```
.progress { background: linear-gradient(90deg, #15803D 60%, #EEF1F4 60%); }
```

### 4. Layer three or more colours
Gradients are not limited to two stops.

```
.rainbow { background: linear-gradient(90deg, #F2A93B, #15803D, #0F1B33); }
```

### 5. Fade an image into a solid colour
Layer a gradient over a background image using multiple `background` values, comma-separated.

```
.hero {
  background: linear-gradient(rgba(15,27,51,0.7), rgba(15,27,51,0.7)), url("resources/img/campus-800.jpg");
  background-size: cover;
}
```

## Exercises

### Exercise 1: Banner gradient
Give a banner a diagonal `linear-gradient` between two brand colours.

### Exercise 2: Radial badge
Build a circular badge with a `radial-gradient` background.

### Exercise 3: Hard-edged progress bar
Use two colour stops at the same percentage in a `linear-gradient` to create a sharp edge instead of
a blend, for a simple progress indicator.

### Exercise 4: Three-colour gradient
Build a gradient with three colour stops and describe in one sentence where each colour is strongest.

### Exercise 5: Image overlay
Layer a translucent gradient over a background image so text placed on top of it stays readable.

## Quizes

### Q1. What does `linear-gradient(135deg, red, blue)` produce?
1. A solid colour, whichever is listed last
2. A blend from red to blue along a diagonal line
3. A blend that starts at the centre and spreads outward
4. A striped pattern, not a gradient

### Q2. Where does a `radial-gradient` start by default?
1. The top-left corner
2. A centre point, spreading outward
3. The bottom edge
4. It requires an explicit starting point or it is invalid

### Q3. What does a percentage after a colour, like `red 40%`, control?
1. The colour's opacity
2. Where that colour stop reaches full strength
3. How many times the colour repeats
4. Nothing — percentages are not valid in gradients

### Q4. How many colour stops can one gradient have?
1. Exactly two
2. At most three
3. Two or more — there is no fixed limit
4. Only one

### Q5. How would you fade a background image under a translucent colour?
1. It is not possible in CSS
2. List a gradient and the image together in `background`, separated by a comma
3. Use `filter: fade()`
4. Set `opacity` on the whole element
