# Styling Images

HTML decides *which* image appears. CSS decides how it fits the space around it.

Three rules cover most of it:

- `max-width: 100%; height: auto;` — never let an image spill out of its container
- `object-fit` — how the picture fills a box when their shapes do not match
- `background-image` — for decoration that is not content, so it needs no `<img>` at all

When the box and the file are different shapes, the picture must either stretch or crop.
`object-fit` is how you choose.

## Display
### HTML

```
<h2>object-fit on a square box</h2>

<div class="row">
  <img class="thumb fill"    src="resources/img/banner.jpg" alt="fill">
  <img class="thumb cover"   src="resources/img/banner.jpg" alt="cover">
  <img class="thumb contain" src="resources/img/banner.jpg" alt="contain">
</div>

<div class="hero">
  <h3>Background image</h3>
</div>
```

### CSS

```
.row { display: flex; gap: 12px; }

.thumb {
  width: 120px;
  height: 120px;
  border: 1px solid #cbd5e1;
}

.fill    { object-fit: fill; }     /* squashed to fit  */
.cover   { object-fit: cover; }    /* cropped to fill  */
.contain { object-fit: contain; }  /* letterboxed      */

.hero {
  height: 140px;
  margin-top: 16px;
  padding: 12px;
  color: #fff;
  background-image: url("resources/img/campus-800.jpg");
  background-size: cover;
  background-position: center;
}
```

### Javascript

```

```

## Your Tasks
### 1. Make an image responsive
Without this pair, a wide image overflows its column on a phone.

```
img {
  max-width: 100%;
  height: auto;
}
```

### 2. Crop instead of squash
`cover` fills the box and trims the overflow, keeping the picture's proportions.

```
.thumb {
  width: 160px;
  height: 160px;
  object-fit: cover;
}
```

### 3. Make a round avatar
A circle is just a border radius of half the width.

```
.avatar {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
}
```

### 4. Use a background image
Decoration belongs in CSS, not in the markup — a background image has no `alt` and is invisible to
screen readers, which is exactly right for decoration.

```
.hero {
  height: 200px;
  background-image: url("resources/img/banner.jpg");
  background-size: cover;
  background-position: center;
}
```

### 5. Choose the focal point
When `cover` crops, `object-position` decides which part survives.

```
.thumb {
  object-fit: cover;
  object-position: top;   /* keep the top of the picture */
}
```

## Exercises

### Exercise 1: Compare the three fits
Show `banner.jpg` three times in the same 150×150 box with `fill`, `cover`, and `contain`. Write one sentence for each describing what happened to the picture.

### Exercise 2: Card with a cover photo
Build a card 280px wide: a 160px-tall photo on top using `object-fit: cover`, then a heading and a
paragraph below it.

### Exercise 3: `<img>` or `background-image`?
Put `chip.png` on a page twice — once as an `<img>`, once as a CSS background — then say which suits
a product photo and which a page texture.

### Exercise 4: Avatar row
Make a row of four circular avatars from `profile.jpg`, each 64px, with a 2px white ring around them.

### Exercise 5: Overlay text on a photo
Put a heading over `campus-800.jpg`, add a dark translucent layer between photo and text, then
check the contrast — light grey on a busy photo fails.

## Quizes

### Q1. Which pair stops an image from overflowing its container?
1. `width: 100%; height: 100%;`
2. `max-width: 100%; height: auto;`
3. `object-fit: fill;`
4. `display: block;`

### Q2. What does `object-fit: cover` do?
1. Stretches the image to the box's exact shape, distorting it
2. Fills the box while keeping proportions, cropping whatever does not fit
3. Shrinks the image until all of it is visible, leaving empty space
4. Repeats the image until the box is full

### Q3. Which value shows the whole image with empty space around it?
1. `fill`
2. `cover`
3. `contain`
4. `none`

### Q4. When is `background-image` the better choice over `<img>`?
1. Always — it downloads faster
2. When the picture is decoration rather than content, so it needs no alt text
3. When the image is a photograph
4. When the image must be announced by a screen reader

### Q5. `.avatar` is 96×96 and shows a 600×600 photo. Which rule set makes a round, undistorted avatar?
1. `border-radius: 50%;` alone
2. `object-fit: contain; border-radius: 50%;`
3. `object-fit: cover; border-radius: 50%;`
4. `background-size: cover; border-radius: 50%;`
