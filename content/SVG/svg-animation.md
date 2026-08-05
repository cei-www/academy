# Animating SVG

Inline SVG is part of the page's DOM, so the same CSS transitions and `@keyframes` animations used
on HTML elements work on SVG shapes too — `transition` on `fill`/`stroke`/`transform`, `@keyframes`
for multi-step motion. `transform-origin` needs care on SVG: without it, rotation and scale pivot
around the SVG's own origin `(0,0)`, not the shape's centre, which is why a spinner often needs an
explicit `transform-origin` set to its centre point.

## Display
### HTML

```
<svg viewBox="0 0 200 100" width="200" height="100">
  <circle class="pulse" cx="50" cy="50" r="20" fill="#F2A93B" />
  <rect class="spinner" x="130" y="30" width="40" height="40" fill="#0F1B33" />
</svg>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
svg { border: 1px solid #DDE2E8; }

.pulse {
  animation: pulse 1.2s ease-in-out infinite;
  transform-origin: 50px 50px;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.2); }
}

.spinner {
  animation: spin 2s linear infinite;
  transform-origin: 150px 50px;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Javascript

```

```

## Your Tasks
### 1. Transition a fill color
`transition` on SVG properties works exactly like on HTML.

```
circle { fill: #F2A93B; transition: fill 200ms ease; }
circle:hover { fill: #0F1B33; }
```

### 2. Animate with keyframes
`@keyframes` and `animation` apply to SVG shapes the same as anywhere else.

```
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.2); }
}
.pulse { animation: pulse 1.2s ease-in-out infinite; }
```

### 3. Set the pivot point for rotation
Without `transform-origin`, a shape rotates around the SVG's own `(0,0)`, not its own centre.

```
.spinner { transform-origin: 150px 50px; }
```

### 4. Animate a stroke offset
`stroke-dashoffset` combined with a transition can animate a line "drawing itself" in.

```
path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  transition: stroke-dashoffset 1s ease;
}
path.drawn { stroke-dashoffset: 0; }
```

### 5. Respect reduced motion
SVG animations need the same `prefers-reduced-motion` guard as any other motion.

```
@media (prefers-reduced-motion: reduce) {
  .pulse, .spinner { animation: none; }
}
```

## Exercises

### Exercise 1: Pulsing dot
Animate a circle's `transform: scale()` in a loop using `@keyframes`.

### Exercise 2: Spinning square
Animate a rectangle's rotation continuously, with the correct `transform-origin` so it spins around
its own centre.

### Exercise 3: Hover fill transition
Give a shape a smooth color transition on `:hover`.

### Exercise 4: Self-drawing line
Animate a `<path>`'s `stroke-dashoffset` from its full length to zero so it appears to draw itself.

### Exercise 5: Reduced motion guard
Wrap every SVG animation on the page in a `prefers-reduced-motion` guard.

## Quizes

### Q1. Do CSS transitions and `@keyframes` work on SVG shapes?
1. No — SVG requires a separate animation syntax
2. Yes — the same CSS animation tools used on HTML apply to SVG too
3. Only `transition`, never `@keyframes`
4. Only inside `<script>`, never in CSS

### Q2. What does `transform-origin` control on an SVG shape?
1. Its fill color
2. The pivot point that rotation and scale transform around
3. Its stroke width
4. Nothing — SVG ignores `transform-origin`

### Q3. What happens to a rotating shape with no `transform-origin` set?
1. It does not rotate at all
2. It rotates around the SVG's own `(0,0)` origin, not its own centre
3. It rotates around its own centre automatically
4. It throws a CSS error

### Q4. What does animating `stroke-dashoffset` from full length to zero create?
1. A fade-in effect
2. The appearance of the line drawing itself
3. A color change
4. No visible effect

### Q5. Why guard SVG animations with `prefers-reduced-motion`?
1. SVG animations are exempt from motion sensitivity concerns
2. Motion can still cause discomfort for some users, whether it is SVG or HTML
3. It is required for the animation to run at all
4. It only affects animation speed, not whether it plays
