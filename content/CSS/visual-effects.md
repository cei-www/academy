# Visual effects overview

You have now met shadows and gradients on their own. Together they are what makes flat boxes read as
raised cards, glowing badges, and hero banners — depth and colour blending, with no images needed for
either.

## Display
### HTML

```
<div class="card">Elevated card</div>
<div class="banner">Registration open</div>
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

.banner {
  margin-top: 12px;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  background: linear-gradient(135deg, #0F1B33, #4B5563);
  box-shadow: 0 6px 16px rgba(15, 27, 51, 0.3);
}
```

### Javascript

```

```

## Your Tasks
### 1. Drop a shadow behind a card
Offset, blur, and a translucent colour read as depth.

```
.card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
```

### 2. Set a shadow inside the box
`inset` flips the shadow to the inside, useful for a pressed or recessed look.

```
.well { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); }
```

### 3. Blend two colours in a straight line
`linear-gradient(direction, from, to)` is the simplest gradient form.

```
.banner { background: linear-gradient(135deg, #0F1B33, #4B5563); }
```

### 4. Combine a gradient with a shadow
A gradient background and a `box-shadow` on the same element compose without conflict.

```
.banner {
  background: linear-gradient(135deg, #0F1B33, #4B5563);
  box-shadow: 0 6px 16px rgba(15, 27, 51, 0.3);
}
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

### Exercise 2: Gradient banner with shadow
Build a banner with a diagonal gradient background and a soft shadow beneath it.

### Exercise 3: Radial badge
Build a circular badge with a `radial-gradient` background and a small shadow.

### Exercise 4: Pressed button
Style a button's `:active` state with an `inset` shadow so it looks pressed while held down.

### Exercise 5: Choose the tool
For "a raised card", "a glowing button" and "a two-colour banner", state in one sentence each which
of shadow, gradient, or both you would use.

## Quizes

### Q1. What does the fourth value in `box-shadow: 0 4px 12px -2px red` control?
1. The shadow's colour
2. The blur radius
3. The spread — how much the shadow grows or shrinks from the box edges
4. The offset direction

### Q2. What does `linear-gradient(135deg, red, blue)` produce?
1. A solid colour, whichever is listed last
2. A blend from red to blue along a diagonal line
3. A blend that starts at the centre and spreads outward
4. A striped pattern, not a gradient

### Q3. Can a `box-shadow` and a gradient `background` be used on the same element?
1. No — an element can have only one visual effect at a time
2. Yes — they compose independently, one behind the box, one filling it
3. Only if the element has no border
4. Only inside a `<canvas>`

### Q4. Why use `filter: drop-shadow()` instead of `box-shadow` on a transparent PNG logo?
1. `drop-shadow()` follows the image's actual alpha shape, not its rectangular box
2. `box-shadow` cannot be used on images at all
3. `drop-shadow()` is faster to compute in every case
4. There is no difference between the two

### Q5. Where does a `radial-gradient` start by default?
1. The top-left corner
2. A centre point, spreading outward
3. The bottom edge
4. It requires an explicit starting point or it is invalid
