# What is SVG

SVG (Scalable Vector Graphics) describes images with shapes and numbers instead of pixels, so it
stays sharp at any zoom level — a logo drawn as SVG looks identical at 20px and 2000px. You can embed
it three ways: inline `<svg>...</svg>` right in the HTML (styleable and scriptable from the page),
`<img src="file.svg">` (simplest, but isolated from the page's CSS and JS), or `<object>` (keeps the
SVG's own internal styles).

Every `<svg>` needs a `viewBox="min-x min-y width height"` — the coordinate system its shapes are
drawn in — separate from the `width`/`height` attributes that set its on-page size. A shape at `x=50`
in a `viewBox="0 0 100 100"` sits at the halfway point, no matter how large the SVG is actually
displayed.

## Display
### HTML

```
<h1>Inline SVG</h1>
<svg viewBox="0 0 100 100" width="120" height="120">
  <circle cx="50" cy="50" r="40" fill="#F2A93B" />
</svg>

<h1>Same SVG, twice the size</h1>
<svg viewBox="0 0 100 100" width="240" height="240">
  <circle cx="50" cy="50" r="40" fill="#0F1B33" />
</svg>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h1 { font-size: 16px; color: #0F1B33; }
svg { display: block; margin-bottom: 16px; }
```

### Javascript

```

```

## Your Tasks
### 1. Embed SVG inline
Inline SVG is part of the page's own DOM — CSS and JS can reach into it directly.

```
<svg viewBox="0 0 100 100" width="80" height="80">
  <circle cx="50" cy="50" r="30" fill="#F2A93B" />
</svg>
```

### 2. Set the coordinate system with viewBox
`viewBox` defines the internal coordinate space; `width`/`height` set the on-page display size.

```
<svg viewBox="0 0 100 100" width="80" height="80">...</svg>
```

### 3. Scale without losing quality
The same `viewBox` at different `width`/`height` values stays crisp — no pixelation.

```
<svg viewBox="0 0 100 100" width="80" height="80">...</svg>
<svg viewBox="0 0 100 100" width="400" height="400">...</svg>
```

### 4. Embed with img instead
`<img>` is simplest but isolates the SVG from the page's own CSS and JS.

```
<img src="resources/img/ce-logo.svg" alt="Site logo" width="80">
```

### 5. Compare the embedding methods
Inline gives full control; `<img>` gives simplicity and caching; `<object>` sits between the two.

```
<!-- inline: styleable, scriptable -->
<svg viewBox="0 0 10 10"><rect width="10" height="10" fill="teal" /></svg>
<!-- img: simple, isolated -->
<img src="resources/img/ce-logo.svg" alt="Logo">
```

## Exercises

### Exercise 1: First inline SVG
Draw a single circle with inline SVG, using a `viewBox` and explicit `width`/`height`.

### Exercise 2: Same shape, two sizes
Render the same `viewBox` twice at different `width`/`height` values, and confirm the shape looks
identical, just scaled.

### Exercise 3: Off-center viewBox
Change the `viewBox`'s `min-x`/`min-y` values and observe how the visible shape shifts.

### Exercise 4: Embed with img
Reference an SVG file with `<img>`, and try (and fail) to style its internal shapes with a CSS rule
targeting them directly — note what happens.

### Exercise 5: Choose an embedding method
For "a site logo that never changes", "an icon that needs a hover color change" and "a chart drawn
by JavaScript", state which embedding method fits each, in one sentence.

## Quizes

### Q1. What does SVG stand for?
1. Simple Vector Graphics
2. Scalable Vector Graphics
3. Structured Vector Grid
4. Standard Visual Graphics

### Q2. What does `viewBox` define?
1. The SVG's on-page display size in pixels
2. The internal coordinate system the shapes are drawn in
3. The border color of the SVG
4. Whether the SVG is inline or external

### Q3. Why does inline SVG stay crisp when scaled up?
1. It does not — it pixelates like a raster image
2. Shapes are described with numbers and math, not fixed pixels
3. Browsers cache a high-resolution version automatically
4. `viewBox` forces a fixed resolution

### Q4. Which embedding method allows CSS and JavaScript on the page to reach into the SVG's shapes directly?
1. `<img src="file.svg">`
2. Inline `<svg>...</svg>` in the HTML
3. A CSS `background-image`
4. None of the methods allow this

### Q5. In `viewBox="0 0 100 100"`, what does a shape at `x=50` represent?
1. 50 pixels from the left, always
2. The halfway point of the coordinate space, regardless of display size
3. The shape's opacity
4. Nothing — `x=50` is invalid without units
