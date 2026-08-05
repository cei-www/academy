# Shadows and filters

`box-shadow: offset-x offset-y blur spread color` drops a shadow behind an element's box; a negative
spread shrinks it, and `inset` moves it inside the box instead. `text-shadow` works the same way but
follows the glyph outlines instead of the box. `filter` reaches further — `drop-shadow()` shadows an
image's actual transparent shape rather than its rectangular box, and `blur()`, `brightness()` and
`grayscale()` post-process the whole element.

## Display
### HTML

```
<div class="card">Elevated card</div>
<h2 class="title">Glowing heading</h2>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; background: #F7F5F0; }

.card {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(15, 27, 51, 0.15);
}

.title {
  color: #0F1B33;
  text-shadow: 0 1px 2px rgba(15, 27, 51, 0.25);
}
```

### Javascript

```

```

## Your Tasks
### 1. Drop a shadow behind a card
Offset, blur, and a translucent color read as depth.

```
.card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
```

### 2. Shrink a shadow with negative spread
The fourth value, spread, can be negative to pull the shadow in from the box edges.

```
.chip { box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.3); }
```

### 3. Set a shadow inside the box
`inset` flips the shadow to the inside, useful for a pressed or recessed look.

```
.well { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); }
```

### 4. Add a text shadow
`text-shadow` uses the same offset/blur/color pattern, following the letterforms.

```
.title { text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25); }
```

### 5. Shadow a transparent PNG's real shape
`filter: drop-shadow()` follows the image's alpha channel; `box-shadow` would only shadow the
rectangle.

```
img.logo { filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3)); }
```

## Exercises

### Exercise 1: Card elevation
Give three cards increasing `box-shadow` blur/offset values so they read as increasingly "raised".

### Exercise 2: Pressed button
Style a button's `:active` state with an `inset` shadow so it looks pressed while held down.

### Exercise 3: Readable heading over an image
Add a `text-shadow` to a heading placed over a busy background image, and confirm it stays readable.

### Exercise 4: drop-shadow versus box-shadow
Apply `box-shadow` and `filter: drop-shadow()` to the same transparent-background image and compare
the results.

### Exercise 5: Grayscale on hover
Apply `filter: grayscale(100%)` to a card by default, removing it on `:hover`, with a `transition` so
the change is smooth.

## Quizes

### Q1. What does the fourth value in `box-shadow: 0 4px 12px -2px red` control?
1. The shadow's color
2. The blur radius
3. The spread — how much the shadow grows or shrinks from the box edges
4. The offset direction

### Q2. What does `inset` do to a `box-shadow`?
1. Nothing — it is not a valid keyword
2. Moves the shadow inside the box instead of behind it
3. Removes the shadow's blur
4. Doubles the shadow's size

### Q3. What does `text-shadow` follow, unlike `box-shadow`?
1. The element's border-radius
2. The actual glyph outlines of the text
3. The element's background color
4. Nothing — the two are identical

### Q4. Why use `filter: drop-shadow()` instead of `box-shadow` on a transparent PNG logo?
1. `drop-shadow()` follows the image's actual alpha shape, not its rectangular box
2. `box-shadow` cannot be used on images at all
3. `drop-shadow()` is faster to compute in every case
4. There is no difference between the two

### Q5. Which `filter` value removes all color from an element?
1. `blur(100%)`
2. `grayscale(100%)`
3. `brightness(0)`
4. `drop-shadow(gray)`
