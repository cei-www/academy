# Styling SVG

SVG shapes accept `fill`, `stroke`, `stroke-width` and more as either plain attributes right on the
element, or as CSS properties in a `<style>` block or an external stylesheet — CSS wins when both are
present, same specificity rules as any other CSS. Inline SVG can use `class` exactly like HTML, so
`:hover` and other pseudo-classes work on shapes too. `stroke-dasharray` turns a solid outline into a
dashed one, useful for borders and progress rings alike.

## Display
### HTML

```
<svg viewBox="0 0 300 100" width="300" height="100">
  <circle class="dot" cx="50" cy="50" r="35" />
  <rect x="120" y="20" width="60" height="60" class="card" />
  <circle cx="240" cy="50" r="35" fill="none" stroke="#0F1B33" stroke-width="4"
          stroke-dasharray="10 5" />
</svg>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
svg { border: 1px solid #DDE2E8; }

.dot { fill: #F2A93B; transition: fill 200ms ease; }
.dot:hover { fill: #0F1B33; }

.card { fill: #EEF1F4; stroke: #DDE2E8; stroke-width: 2; }
```

### Javascript

```

```

## Your Tasks
### 1. Fill and stroke with attributes
Both can be set directly on the element, without any CSS.

```
<circle cx="50" cy="50" r="30" fill="#F2A93B" stroke="#6B4207" stroke-width="3" />
```

### 2. Fill and stroke with CSS
The same properties work in a stylesheet, and CSS wins over the plain attribute.

```
circle { fill: #F2A93B; stroke: #6B4207; stroke-width: 3; }
```

### 3. Use a class
`class` on an SVG element works exactly like on any HTML element.

```
<circle class="dot" cx="50" cy="50" r="30" />
```
```
.dot { fill: #F2A93B; }
```

### 4. Add a hover effect
Pseudo-classes apply to SVG shapes the same as any other styled element.

```
.dot:hover { fill: #0F1B33; }
```

### 5. Dash a stroke
`stroke-dasharray` alternates dash and gap lengths along the outline.

```
<circle cx="50" cy="50" r="30" fill="none" stroke="#0F1B33" stroke-dasharray="8 4" />
```

## Exercises

### Exercise 1: Attribute styling
Style three shapes' `fill` and `stroke` using only plain attributes, no CSS.

### Exercise 2: CSS styling with classes
Rebuild the same three shapes using `class` and a `<style>` block instead of attributes.

### Exercise 3: Hover color change
Give a shape a smooth `fill` transition on `:hover`.

### Exercise 4: Dashed border
Style a rectangle's `stroke` with `stroke-dasharray` to look like a cut-here line.

### Exercise 5: CSS overrides attributes
Set `fill="red"` as an attribute on a shape and `fill: blue;` in CSS for the same shape, reload, and
report which one wins.

## Quizes

### Q1. Which wins when both a `fill` attribute and a CSS `fill` rule target the same shape?
1. The attribute always wins
2. The CSS rule, following normal CSS specificity rules
3. Neither applies — the shape renders unstyled
4. Whichever was declared first in the file, regardless of type

### Q2. Can SVG shapes use `class` like HTML elements?
1. No — SVG has no concept of classes
2. Yes — `class` works exactly the same way
3. Only on `<svg>` itself, not on shapes inside it
4. Only with a special `svg-class` attribute

### Q3. Does `:hover` work on SVG shapes?
1. No — pseudo-classes are HTML-only
2. Yes — SVG elements support `:hover` and other pseudo-classes
3. Only on `<rect>`, not other shapes
4. Only with JavaScript assistance

### Q4. What does `stroke-dasharray="8 4"` do?
1. Sets the stroke's color to two alternating values
2. Alternates 8 units of dash with 4 units of gap along the outline
3. Sets the stroke's width to 8, then 4
4. Rotates the shape by 8 then 4 degrees

### Q5. Which SVG property has no effect on a `<line>`?
1. `stroke`
2. `stroke-width`
3. `fill`, since a line has no interior
4. `stroke-dasharray`
