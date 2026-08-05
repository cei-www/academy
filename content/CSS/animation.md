# Transitions and animations overview

A transition animates a property between two states. You declare it once on the element, and it fires
whenever the value changes — on `:hover`, on `:focus-visible`, on a class toggled by JavaScript.

```
transition: <property> <duration> <timing-function> <delay>;
```

Only two properties are cheap to animate: `transform` and `opacity`. The compositor handles them
without recalculating the page. Animating `width`, `height`, `top`, `margin` or `padding` forces
layout on every frame — animate `transform: translate()` or `scale()` instead.

`@keyframes` describes a named sequence for movement that is not a simple A-to-B change. The
`animation` shorthand attaches it, and `animation-fill-mode: forwards` keeps the last keyframe's
values after the run instead of snapping back.

Motion can make people ill. Every animation you write needs a `prefers-reduced-motion` escape.

## Display
### HTML

```
<button class="btn" type="button">Hover or tab to me</button>
<div class="chip">I fade in</div>
```

### CSS

```
.btn {
  padding: 10px 20px;
  border: 0;
  border-radius: 8px;
  background: #F2A93B;
  color: #6B4207;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.btn:hover,
.btn:focus-visible { transform: translateY(-2px) scale(1.03); }

.chip {
  margin-top: 16px;
  padding: 12px;
  background: #EEF1F4;
  animation: fade-up 600ms ease-out both;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .btn, .chip { transition: none; animation: none; }
}
```

### Javascript

```

```

## Your Tasks
### 1. Write a transition
Name the property, not `all` — `all` animates things you did not intend.

```
.card {
  transition: transform 200ms ease, opacity 200ms ease;
}
```

### 2. Move without touching layout
`translate` shifts the painted element; `top` would reflow the page.

```
.card:hover { transform: translateY(-4px); }   /* cheap  */
.card:hover { top: -4px; }                     /* costly */
```

### 3. Trigger on keyboard focus too
`:focus-visible` shows the effect for keyboard users without a ring on every mouse click.

```
.btn:hover,
.btn:focus-visible {
  transform: scale(1.05);
}
```

### 4. Define keyframes and attach them
The shorthand order is name, duration, timing, delay, iteration count.

```
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.badge { animation: pulse 1.2s ease-in-out infinite; }
```

### 5. Keep the end state
Without a fill mode the element jumps back to its unanimated style the moment the run ends.

```
.toast {
  animation: fade-up 400ms ease-out forwards;
}
```

## Exercises

### Exercise 1: Cheap versus costly
Animate one card with `transform: translateY()` and another with `top`. Record both in DevTools'
performance panel and report which one triggers layout on each frame.

### Exercise 2: Button with three states
Give a button a transition, then distinct `:hover`, `:active` and `:focus-visible` styles. Tab to it
with the keyboard and confirm the focus style appears.

### Exercise 3: Rotate a chip
Make `chip.png` rotate 360 degrees over two seconds, once, using `@keyframes` and a `rotate()`
transform. Keep the final orientation with `animation-fill-mode`.

### Exercise 4: Staggered entrance
Animate four cards in with the same keyframes but `animation-delay` values of 0, 100, 200 and 300ms.

### Exercise 5: Reduced motion
Wrap every animation on the page in a `prefers-reduced-motion` guard, then enable the emulation in
DevTools' rendering panel and confirm the page is still usable and still legible.

## Quizes

### Q1. Which pair of properties is cheapest to animate?
1. `width` and `height`
2. `top` and `left`
3. `margin` and `padding`
4. `transform` and `opacity`

### Q2. What does `transition: transform 300ms ease 100ms` mean?
1. Animate `transform` for 300ms after a 100ms delay
2. Animate `transform` for 100ms after a 300ms wait
3. Animate `transform` 300 times with easing
4. Animate every property for 300ms starting at frame 100

### Q3. `.box { animation: slide 500ms; }` where `slide` ends at `opacity: 1` from a start of `0`. The element's own rule sets `opacity: 0`. What happens after 500ms?
1. It stays fully visible
2. It jumps back to `opacity: 0`, because no fill mode was set
3. The animation restarts automatically
4. The declaration is invalid and nothing animates

### Q4. Why prefer `:focus-visible` over `:focus` for a hover-like effect?
1. It is faster to evaluate
2. It works in older browsers
3. It shows the effect for keyboard navigation without firing on every mouse click
4. It also matches the element's children

### Q5. What is the correct response to `prefers-reduced-motion: reduce`?
1. Hide the animated elements entirely
2. Ignore it; it only applies to video
3. Slow every animation down to ten seconds
4. Remove or shorten the motion while keeping the content and its end state
