# Basic shapes

SVG ships a handful of ready-made shape elements, each with its own attributes instead of a generic
path. `<rect>` needs `x`, `y`, `width`, `height`, and optionally `rx`/`ry` for rounded corners.
`<circle>` needs a centre `cx`/`cy` and radius `r`. `<ellipse>` is the same but with separate `rx`/`ry`
radii. `<line>` connects two points, `x1`/`y1` to `x2`/`y2`. Every shape can carry `fill` and `stroke`
as attributes directly, in addition to CSS.

## Display
### HTML

```
<svg viewBox="0 0 300 100" width="300" height="100">
  <rect x="10" y="10" width="60" height="60" rx="8" fill="#F2A93B" />
  <circle cx="120" cy="40" r="30" fill="#0F1B33" />
  <ellipse cx="200" cy="40" rx="40" ry="25" fill="#15803D" />
  <line x1="260" y1="10" x2="290" y2="70" stroke="#6B4207" stroke-width="4" />
</svg>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
svg { border: 1px solid #DDE2E8; }
```

### Javascript

```

```

## Your Tasks
### 1. Draw a rectangle
`x`/`y` place the top-left corner; `width`/`height` set its size.

```
<rect x="10" y="10" width="80" height="50" fill="#F2A93B" />
```

### 2. Round the corners
`rx`/`ry` round a rectangle's corners, same idea as CSS `border-radius`.

```
<rect x="10" y="10" width="80" height="50" rx="10" fill="#F2A93B" />
```

### 3. Draw a circle
`cx`/`cy` place the centre; `r` sets the radius.

```
<circle cx="50" cy="50" r="30" fill="#0F1B33" />
```

### 4. Draw an ellipse
`rx`/`ry` let the two radii differ, unlike a circle's single `r`.

```
<ellipse cx="50" cy="50" rx="40" ry="20" fill="#15803D" />
```

### 5. Draw a line
A line has no fill — only a visible `stroke`.

```
<line x1="0" y1="0" x2="100" y2="100" stroke="#6B4207" stroke-width="3" />
```

## Exercises

### Exercise 1: Shape row
Draw a rectangle, a circle, an ellipse and a line side by side in one `viewBox`.

### Exercise 2: Rounded card
Draw a rounded rectangle that looks like a card, with `rx` and `ry` both set.

### Exercise 3: Traffic light
Draw three stacked circles in red, yellow and green inside one SVG.

### Exercise 4: Diagonal grid
Draw four `<line>` elements forming an X pattern inside a square `viewBox`.

### Exercise 5: Mix fill and stroke
Give one shape both a `fill` and a different-colored `stroke`, and describe what each one affects.

## Quizes

### Q1. Which attributes place a `<rect>`'s top-left corner?
1. `cx`/`cy`
2. `x`/`y`
3. `top`/`left`
4. `x1`/`y1`

### Q2. What does `rx` do on a `<rect>`?
1. Sets the rectangle's rotation
2. Rounds its corners
3. Sets its horizontal position
4. Nothing — `rx` is only valid on `<ellipse>`

### Q3. What does `<circle>` use instead of separate `rx`/`ry`?
1. A single `r` for its radius
2. `width`/`height`
3. `d`, a path string
4. `size`

### Q4. What can a `<line>` have that shows it visually?
1. `fill` only
2. `stroke`, since a line has no interior to fill
3. Neither `fill` nor `stroke`
4. `background-color`

### Q5. Which two attributes does `<ellipse>` use for its two radii?
1. `r` and `radius`
2. `cx` and `cy`
3. `rx` and `ry`
4. `width` and `height`
