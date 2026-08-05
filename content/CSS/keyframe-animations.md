# Keyframe animations

`@keyframes` describes a named sequence for movement that is not a simple A-to-B change — several
steps, a loop, or a pause partway through. The `animation` shorthand attaches a keyframe sequence to
an element, and `animation-fill-mode: forwards` keeps the last keyframe's values after the run
instead of snapping back to the unanimated style.

Motion can make people ill. Every animation needs a `prefers-reduced-motion` escape.

## Display
### HTML

```
<div class="chip">I fade in</div>
```

### CSS

```
.chip {
  padding: 12px;
  background: #EEF1F4;
  animation: fade-up 600ms ease-out both;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .chip { animation: none; }
}
```

### Javascript

```

```

## Your Tasks
### 1. Define keyframes and attach them
The shorthand order is name, duration, timing, delay, iteration count.

```
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.badge { animation: pulse 1.2s ease-in-out infinite; }
```

### 2. Keep the end state
Without a fill mode the element jumps back to its unanimated style the moment the run ends.

```
.toast {
  animation: fade-up 400ms ease-out forwards;
}
```

### 3. Loop forever
`infinite` repeats the sequence with no natural end.

```
.spinner { animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
```

### 4. Stagger several elements
`animation-delay` on each element offsets when its run starts, even though every one shares one
`@keyframes` block.

```
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
```

### 5. Guard every animation with reduced motion
One media query can disable every `animation` on the page at once.

```
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

## Exercises

### Exercise 1: Rotate a chip
Make an element rotate 360 degrees over two seconds, once, using `@keyframes` and a `rotate()`
transform. Keep the final orientation with `animation-fill-mode`.

### Exercise 2: Staggered entrance
Animate four cards in with the same keyframes but `animation-delay` values of 0, 100, 200 and 300ms.

### Exercise 3: Infinite spinner
Build a loading spinner that rotates forever with `animation: spin 1s linear infinite`.

### Exercise 4: Multi-step pulse
Write a `@keyframes` block with three steps (0%, 50%, 100%) that scales an element up and back down.

### Exercise 5: Reduced motion
Wrap every animation on the page in a `prefers-reduced-motion` guard, then enable the emulation in
DevTools' rendering panel and confirm the page is still usable and still legible.

## Quizes

### Q1. `.box { animation: slide 500ms; }` where `slide` ends at `opacity: 1` from a start of `0`. The element's own rule sets `opacity: 0`. What happens after 500ms?
1. It stays fully visible
2. It jumps back to `opacity: 0`, because no fill mode was set
3. The animation restarts automatically
4. The declaration is invalid and nothing animates

### Q2. What does `animation-fill-mode: forwards` do?
1. Runs the animation forwards only, never in reverse
2. Keeps the last keyframe's values after the animation ends
3. Speeds the animation up
4. Makes the animation loop forever

### Q3. What does `infinite` do in the `animation` shorthand?
1. Sets the duration to as long as possible
2. Repeats the keyframe sequence with no natural end
3. Runs the animation once, very slowly
4. Is not a valid value

### Q4. How can several elements share one `@keyframes` block but start at different times?
1. They cannot — each needs its own `@keyframes`
2. Using different `animation-delay` values on each element
3. By nesting one `@keyframes` inside another
4. By setting `animation-play-state: staggered`

### Q5. What is the correct response to `prefers-reduced-motion: reduce`?
1. Hide the animated elements entirely
2. Ignore it; it only applies to video
3. Slow every animation down to ten seconds
4. Remove or shorten the motion while keeping the content and its end state
