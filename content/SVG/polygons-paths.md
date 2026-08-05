# Polygons and paths

`<polygon>` and `<polyline>` both take a `points` list of `x,y` pairs — `polygon` closes the shape
back to its start automatically; `polyline` does not. For anything more complex, `<path>` takes a `d`
attribute written in its own tiny language: `M x y` moves the pen without drawing, `L x y` draws a
straight line to a point, `C` draws a curve, and `Z` closes the path back to its start. Commands
chain one after another in the same string.

## Display
### HTML

```
<svg viewBox="0 0 300 100" width="300" height="100">
  <polygon points="20,80 50,20 80,80" fill="#F2A93B" />
  <polyline points="120,80 140,20 160,80 180,20 200,80" fill="none" stroke="#0F1B33" stroke-width="3" />
  <path d="M 240 20 L 280 20 L 280 60 Z" fill="#15803D" />
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
### 1. Draw a closed polygon
`points` lists each corner as `x,y`; `polygon` closes back to the first point automatically.

```
<polygon points="20,80 50,20 80,80" fill="#F2A93B" />
```

### 2. Draw an open polyline
`polyline` connects the points but does not close the shape.

```
<polyline points="0,50 50,0 100,50 150,0" fill="none" stroke="#0F1B33" stroke-width="3" />
```

### 3. Move without drawing
`M` positions the pen; nothing is drawn until the next command.

```
<path d="M 10 10 L 90 10" stroke="#6B4207" stroke-width="3" fill="none" />
```

### 4. Draw straight-line segments
Each `L` draws a line from the current point to the new one.

```
<path d="M 10 80 L 50 20 L 90 80 Z" fill="#15803D" />
```

### 5. Close a path
`Z` draws a final straight line back to where the path started.

```
<path d="M 10 10 L 90 10 L 50 80 Z" fill="#F2A93B" />
```

## Exercises

### Exercise 1: Triangle with polygon
Draw a filled triangle using `<polygon>` and three points.

### Exercise 2: Zigzag with polyline
Draw a five-point zigzag line using `<polyline>` with no fill.

### Exercise 3: Triangle with path
Redraw the same triangle from Exercise 1 using `<path>` with `M`, two `L` commands, and `Z`.

### Exercise 4: Compare polygon and path
Explain in one or two sentences when you would reach for `<polygon>` versus `<path>` for a simple
straight-edged shape.

### Exercise 5: Open shape with path
Draw an open zigzag with `<path>` using `M` and several `L` commands, with no `Z`, and confirm it
does not close.

## Quizes

### Q1. What does `<polygon points="0,0 10,0 5,10">` do that `<polyline>` with the same points does not?
1. Nothing — they are identical
2. It automatically closes the shape back to the first point
3. It cannot be filled
4. It requires a `d` attribute instead of `points`

### Q2. What does the `M` command do in a path's `d` attribute?
1. Draws a straight line
2. Moves the pen to a point without drawing
3. Draws a curve
4. Marks the end of the path

### Q3. What does `L 50 20` do?
1. Moves without drawing
2. Draws a straight line to `(50, 20)`
3. Draws a circle at `(50, 20)`
4. Sets the fill color

### Q4. What does `Z` do at the end of a path?
1. Nothing — it is optional decoration
2. Draws a straight line back to the path's starting point, closing it
3. Deletes the path
4. Reverses the direction of every command

### Q5. What format does the `points` attribute expect?
1. A single width and height
2. A list of `x,y` pairs
3. A CSS color value
4. A path's `d` string
