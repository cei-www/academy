# Text, groups and reuse

`<text x="..." y="...">` places text at a baseline point, styled with the usual font properties as
CSS. `<tspan>` inside it repositions or restyles part of the same text block. `<g>` groups several
shapes so they can be transformed or styled together as one unit — a class or `transform` on the
`<g>` applies to everything inside it. `<use href="#id">` stamps a copy of any element defined
elsewhere, so one shape can be drawn many times without repeating its markup.

## Display
### HTML

```
<svg viewBox="0 0 300 120" width="300" height="120">
  <defs>
    <circle id="dot" r="8" fill="#F2A93B" />
  </defs>

  <text x="20" y="30" class="label">CE <tspan fill="#F2A93B">Web</tspan> Lab</text>

  <g class="badge" transform="translate(20, 60)">
    <rect width="80" height="30" rx="6" fill="#0F1B33" />
    <text x="10" y="20" fill="#EEF1F4">Enrolled</text>
  </g>

  <use href="#dot" x="200" y="30" />
  <use href="#dot" x="230" y="30" />
  <use href="#dot" x="260" y="30" />
</svg>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
svg { border: 1px solid #DDE2E8; }
.label { font-size: 18px; fill: #0F1B33; }
```

### Javascript

```

```

## Your Tasks
### 1. Place text at a point
`x`/`y` set the text's baseline start position, not a bounding box corner.

```
<text x="10" y="30" fill="#0F1B33">CE Web Lab</text>
```

### 2. Style part of a text block
`<tspan>` restyles or repositions a portion of the surrounding `<text>`.

```
<text x="10" y="30">CE <tspan fill="#F2A93B">Web</tspan> Lab</text>
```

### 3. Group shapes together
A `<g>` lets several shapes share one `class` or `transform`.

```
<g class="badge">
  <rect width="60" height="24" fill="#0F1B33" />
  <text x="8" y="16" fill="#fff">New</text>
</g>
```

### 4. Move a whole group
`transform="translate(x, y)"` on a `<g>` shifts everything inside it together.

```
<g transform="translate(50, 20)">
  <circle r="10" fill="#F2A93B" />
</g>
```

### 5. Reuse a shape with use
Define once inside `<defs>`, then stamp copies wherever needed.

```
<defs><circle id="dot" r="6" fill="#F2A93B" /></defs>
<use href="#dot" x="10" y="10" />
<use href="#dot" x="30" y="10" />
```

## Exercises

### Exercise 1: Styled text
Render a heading with `<text>`, using a `<tspan>` to highlight one word in a different color.

### Exercise 2: Grouped badge
Build a rounded rectangle with text inside it, grouped with `<g>` so both move together.

### Exercise 3: Move a group
Apply `transform="translate(...)"` to a `<g>` and confirm every shape inside it shifts as one.

### Exercise 4: Reusable icon
Define a small shape once inside `<defs>`, then use `<use>` to place three copies at different
positions.

### Exercise 5: Group versus repeat
Explain in one or two sentences why `<use>` is preferable to copy-pasting the same shape's markup
three times.

## Quizes

### Q1. What do `x`/`y` set on a `<text>` element?
1. The top-left corner of a bounding box
2. The baseline start position of the text
3. The font size
4. Nothing — text is always centred automatically

### Q2. What does `<tspan>` let you do?
1. Nothing — it is not a real SVG element
2. Restyle or reposition part of the text inside a `<text>` element
3. Create a new, separate text block
4. Only change the font family, not color

### Q3. What does a `<g>` element do?
1. Draws a visible grid
2. Groups shapes so they can share a class or transform as one unit
3. Only works inside `<defs>`
4. Removes shapes from the render tree

### Q4. What does `<use href="#dot">` do?
1. Deletes the element with id `dot`
2. Stamps a copy of the referenced element at the `<use>` element's position
3. Moves the original element instead of copying it
4. Only works for `<text>` elements

### Q5. Why define a shape inside `<defs>` before using it with `<use>`?
1. `<defs>` is required syntax with no functional purpose
2. Elements inside `<defs>` are not rendered directly, only referenced by `<use>`
3. `<defs>` makes the shape load faster
4. `<use>` cannot reference elements outside `<defs>`
