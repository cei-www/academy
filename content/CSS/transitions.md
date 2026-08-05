# Transitions

A transition animates a property between two states. You declare it once on the element, and it
fires whenever the value changes — on `:hover`, on `:focus-visible`, on a class toggled by
JavaScript.

```
transition: <property> <duration> <timing-function> <delay>;
```

Only two properties are cheap to animate: `transform` and `opacity`. The compositor handles them
without recalculating the page. Animating `width`, `height`, `top`, `margin` or `padding` forces
layout on every frame — animate `transform: translate()` or `scale()` instead.

## Display
### HTML

```
<button class="btn" type="button">Hover or tab to me</button>
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

### 4. Add a delay
The fourth value in the shorthand waits before the transition begins.

```
.tooltip { transition: opacity 150ms ease 300ms; }
```

### 5. Transition more than one property
List several `property duration easing` groups, separated by commas.

```
.card {
  transition: transform 200ms ease, box-shadow 200ms ease, opacity 200ms ease;
}
```

## Exercises

### Exercise 1: Cheap versus costly
Animate one card with `transform: translateY()` and another with `top`. Record both in DevTools'
performance panel and report which one triggers layout on each frame.

### Exercise 2: Button with three states
Give a button a transition, then distinct `:hover`, `:active` and `:focus-visible` styles. Tab to it
with the keyboard and confirm the focus style appears.

### Exercise 3: Delayed tooltip
Give a tooltip a `transition` with a delay, so it does not appear the instant the pointer arrives.

### Exercise 4: Multiple properties
Transition `transform`, `box-shadow` and `opacity` together on one hover card, listing all three in
one `transition` declaration.

### Exercise 5: `all` versus named
Compare `transition: all 200ms ease` against listing the two properties you actually change, and
explain in one sentence why the named version is safer.

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

### Q3. Why does animating `top` cost more than animating `transform: translateY()`?
1. `top` is not supported in modern browsers
2. `top` forces layout recalculation on every frame; `transform` is handled by the compositor
3. There is no real difference
4. `transform` only works on images

### Q4. Why prefer `:focus-visible` over `:focus` for a hover-like effect?
1. It is faster to evaluate
2. It works in older browsers
3. It shows the effect for keyboard navigation without firing on every mouse click
4. It also matches the element's children

### Q5. Why avoid `transition: all`?
1. It is invalid CSS
2. It also animates properties you did not intend to
3. It only works on `:hover`
4. It disables `:focus-visible`
