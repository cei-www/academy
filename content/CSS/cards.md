# Rounded corners and profile cards

`border-radius` rounds a box's corners. One value rounds all four corners equally — `border-radius:
12px` — a bigger value rounds them more, and a value at least half the box's shortest side turns a
square into a full circle or a rectangle into a pill (`border-radius: 999px`).

Four values set each corner separately, in clockwise order from the top-left: `border-radius: 12px
12px 0 0` rounds only the top, which is how a card's image sits flush with its header while the
bottom stays square. On a photo, `border-radius: 50%` combined with a square `width`/`height` and
`object-fit: cover` turns it into a clean, uncropped-looking circular avatar.

## Display
### HTML

```
<div class="card">
  <img class="avatar" src="resources/img/profile.jpg" alt="Rathachai C.">
  <div class="body">
    <h3>Rathachai C.</h3>
    <p>Instructor, CE-KMITL</p>
  </div>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
.card {
  display: flex; align-items: center; gap: 12px;
  width: 260px; padding: 14px; border: 1px solid #DDE2E8; border-radius: 12px; background: #fff;
}
.avatar {
  width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
}
.body h3 { margin: 0; font-size: 15px; color: #0F1B33; }
.body p { margin: 2px 0 0; font-size: 12px; color: #6B4207; }
```

### Javascript

```

```

## Your Tasks
### 1. Round every corner equally
One value applies to all four corners.

```
.box { border-radius: 12px; }
```

### 2. Round only the top corners
Four values go clockwise from the top-left: top-left, top-right, bottom-right, bottom-left.

```
.box { border-radius: 12px 12px 0 0; }
```

### 3. Turn a square into a circle
A radius of 50% on an equal `width`/`height` box makes a perfect circle.

```
.avatar { width: 56px; height: 56px; border-radius: 50%; }
```

### 4. Keep a circular photo uncropped-looking
`object-fit: cover` fills the circle without stretching the image.

```
.avatar { object-fit: cover; }
```

### 5. Build a pill-shaped button
A radius at least half the shorter side rounds the ends into a full pill.

```
.pill { padding: 8px 20px; border-radius: 999px; }
```

## Exercises

### Exercise 1: Four cards, four radii
Render the same card four times with `border-radius` set to `0`, `8px`, `20px` and `50%`. Describe
what `50%` does to a rectangular card versus a square avatar.

### Exercise 2: Header-only rounding
Build a card with an image across the full top and a rounded top only — `border-radius: 12px 12px 0
0` — so the bottom stays square above the card's own border.

### Exercise 3: Circular avatar, three sizes
Render the same photo as a 32px, 56px and 96px circular avatar, keeping `border-radius: 50%` and
matching `width`/`height` at each size.

### Exercise 4: Broken circle
Give an avatar `width: 56px; height: 70px; border-radius: 50%;` and describe, in one sentence, why it
renders as an oval instead of a circle.

### Exercise 5: A row of profile cards
Build three cards side by side, each with a circular avatar, a name, and a role, laid out with
`display: flex` and a `gap`.

## Quizes

### Q1. What does `border-radius: 8px` do on a `<div>`?
1. Rounds only the top-left corner
2. Rounds all four corners by 8px
3. Adds an 8px border
4. Has no effect without `border` also set

### Q2. In `border-radius: 12px 12px 0 0`, which corners are rounded?
1. All four
2. The two bottom corners
3. The two top corners
4. Only the top-left corner

### Q3. What two things does a photo need to render as a perfect circle with `border-radius: 50%`?
1. A `border` and a `background-color`
2. Equal `width` and `height`
3. `position: absolute`
4. A `border-radius` of exactly `100px`

### Q4. What does `object-fit: cover` do on a circular avatar image?
1. Stretches the image to fill the box, distorting it
2. Fills the box while cropping the overflow, keeping proportions
3. Shrinks the image to fit inside with empty space around it
4. Removes the image's rounded corners

### Q5. What does `border-radius: 999px` produce on a short, wide button?
1. An error — the value is too large
2. Fully rounded, pill-shaped ends
3. Square corners, since the value exceeds the box size
4. A circle, regardless of the button's width
