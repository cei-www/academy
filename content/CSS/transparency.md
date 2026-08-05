# Color transparency

*Colors and backgrounds* covered `opacity`, which fades a whole element — text, background and
children together. An alpha channel is different: it fades only the color it is attached to, leaving
everything else in the element fully opaque. Three notations carry one: `rgba(r, g, b, a)`,
`hsla(h, s%, l%, a)`, and an 8-digit hex, `#RRGGBBAA`, where the last two digits are the alpha channel
— `00` fully transparent, `ff` fully opaque.

`transparent` is a keyword worth its own name: it is exactly `rgba(0, 0, 0, 0)`, fully see-through
regardless of which "color" you'd expect. Stacking several translucent boxes lets their colors mix
visually — useful for overlays and tinted panels — but it also stacks their *contrast* against
whatever sits underneath, which is worth checking, not assuming.

## Display
### HTML

```
<div class="photo">
  <div class="tint red"></div>
  <div class="tint blue"></div>
  <div class="caption">rgba(0,0,0,.55) caption over rgba tints</div>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
.photo {
  position: relative; width: 260px; height: 140px;
  background: linear-gradient(135deg, #0F1B33, #15803D);
  border-radius: 8px; overflow: hidden;
}
.tint { position: absolute; inset: 0; }
.tint.red  { background: rgba(185, 28, 28, 0.35); }
.tint.blue { background: hsla(220, 70%, 40%, 0.25); }
.caption {
  position: absolute; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.55); color: #fff; padding: 6px 10px; font-size: 12px;
}
```

### Javascript

```

```

## Your Tasks
### 1. Fade only a background, not the text
An alpha channel on `background-color` leaves the text on top fully opaque.

```
.panel { background-color: rgba(15, 27, 51, 0.4); color: #fff; }
```

### 2. Write the same alpha color in hsla()
Hue, saturation and lightness, plus a fourth alpha value from 0 to 1.

```
.panel { background-color: hsla(220, 70%, 40%, 0.4); }
```

### 3. Write the same alpha color as 8-digit hex
The last two hex digits are the alpha channel, `00` to `ff`.

```
.panel { background-color: #0F1B3366; }  /* ~40% opaque */
```

### 4. Use the transparent keyword
`transparent` is exactly `rgba(0,0,0,0)` — fully see-through, no color of its own.

```
.ghost-btn { background: transparent; border: 1px solid #0F1B33; }
```

### 5. Stack two translucent layers
Two overlapping alpha colors visually mix into a third color where they overlap.

```
<div style="position:absolute; inset:0; background: rgba(185,28,28,.35);"></div>
<div style="position:absolute; inset:0; background: rgba(15,27,51,.35);"></div>
```

## Exercises

### Exercise 1: Three notations, one transparency
Write the same 40%-transparent navy three ways — `rgba()`, `hsla()`, and 8-digit hex. Confirm all
three render identically.

### Exercise 2: Readable caption over a photo
Build the photo caption pattern above: a `rgba(0,0,0,0.55)` bar over an image, and check its text
contrast in DevTools.

### Exercise 3: opacity vs alpha, side by side
Render the same card twice: once with `opacity: 0.5` on the whole card, once with only its
`background-color` given an alpha channel. Compare what happens to the card's text in each.

### Exercise 4: Two overlapping tints
Layer two `position: absolute` boxes with different translucent colors over one background and
describe the mixed color that appears where they overlap.

### Exercise 5: transparent as a default state
Build a button with `background: transparent` normally, that switches to a solid `background-color`
on `:hover`.

## Quizes

### Q1. What is the key difference between `opacity: 0.5` and an alpha channel on `background-color`?
1. They are identical in every case
2. `opacity` fades the whole element; an alpha channel fades only that one color
3. Alpha channels only work in `rgba()`, never `hsla()` or hex
4. `opacity` only works on images

### Q2. In `#0F1B3366`, what do the last two digits represent?
1. The blue channel, repeated
2. The alpha channel
3. A CSS comment
4. The saturation

### Q3. What color does the keyword `transparent` represent?
1. White at 50% opacity
2. `rgba(0, 0, 0, 0)` — fully see-through
3. The nearest ancestor's background color
4. Black at full opacity

### Q4. Two translucent colored boxes overlap. What happens where they overlap?
1. Only the top box's color shows, fully opaque
2. Their colors visually mix together
3. The overlap area becomes fully transparent
4. The browser reports an error

### Q5. Which value in `hsla(220, 70%, 40%, 0.4)` is the alpha channel?
1. `220`
2. `70%`
3. `40%`
4. `0.4`
