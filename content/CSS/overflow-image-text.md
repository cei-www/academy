# Overflow with images and text

An `<img>` rarely matches its box's exact aspect ratio. `object-fit: cover` scales it to fill the box
and crops the excess; `contain` scales it to fit entirely inside, leaving empty space instead.
`object-position` then chooses which part of the image stays visible when `cover` crops it.

Text overflows differently. A long word or URL with no spaces can overflow its box even when
`overflow: hidden` is set on the parent — `overflow-wrap: anywhere` lets the browser break it. To
truncate a single line with an ellipsis, three properties must work together: `white-space: nowrap`
(stop wrapping), `overflow: hidden` (clip the rest) and `text-overflow: ellipsis` (show `…`).

## Display
### HTML

```
<div class="gallery">
  <img class="cover" src="resources/img/banner.jpg" alt="Wide banner cropped to a square">
  <img class="contain" src="resources/img/banner.jpg" alt="Wide banner shown in full">
</div>

<p class="truncate">CE221 Data Structures and Algorithms — Semester 1, Section 2, Lab 4</p>

<p class="break">https://ce.kmitl.ac.th/webdev/lessons/very-long-slug-that-has-no-spaces-in-it</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.gallery { display: flex; gap: 8px; }
.gallery img { width: 160px; height: 160px; border: 1px solid #DDE2E8; }
.cover { object-fit: cover; object-position: center; }
.contain { object-fit: contain; background: #EEF1F4; }

.truncate {
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #EEF1F4;
  padding: 6px;
}

.break { max-width: 260px; overflow-wrap: anywhere; background: #EEF1F4; padding: 6px; }
```

### Javascript

```

```

## Your Tasks
### 1. Crop an image to fill its box
`object-fit: cover` scales the image up and crops whatever does not fit.

```
img { width: 160px; height: 160px; object-fit: cover; }
```

### 2. Show the whole image, no cropping
`object-fit: contain` scales the image down to fit, leaving empty space on the shorter axis.

```
img { width: 160px; height: 160px; object-fit: contain; }
```

### 3. Choose which part of a cropped image stays visible
`object-position` shifts the crop, the same way `background-position` shifts a background image.

```
img { object-fit: cover; object-position: top; }
```

### 4. Truncate one line of text with an ellipsis
All three properties are required together — dropping any one breaks the effect.

```
.title {
  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 5. Break a long unbroken string
A URL or a long code with no spaces needs `overflow-wrap`, not `text-overflow`.

```
.long-url { max-width: 240px; overflow-wrap: anywhere; }
```

## Exercises

### Exercise 1: Gallery crop
Lay out four square thumbnails from `resources/img/banner.jpg`, each cropped with `object-fit:
cover`, and compare `object-position: top` against `object-position: bottom` on two of them.

### Exercise 2: Contain vs cover
Render the same wide image twice at a square 200×200px box, once with `cover` and once with
`contain`, and describe the visual difference in one sentence.

### Exercise 3: Truncated course list
Build a list of five long course titles in a 220px-wide column, each truncated to one line with an
ellipsis.

### Exercise 4: Break a long link
Render a URL with no spaces in a 200px-wide box, first with no overflow handling (watch it overflow
the box), then fixed with `overflow-wrap: anywhere`.

### Exercise 5: Diagnose a missing ellipsis
Given a `.title { max-width: 200px; text-overflow: ellipsis; }` rule that shows no `…`, find which
two properties are missing and add them.

## Quizes

### Q1. What does `object-fit: cover` do to an image that does not match its box's aspect ratio?
1. Stretches it to fill the box, distorting the image
2. Scales it to fill the box completely, cropping the excess
3. Leaves it at its natural size, ignoring the box
4. Adds empty space around it

### Q2. What is the difference between `object-fit: cover` and `object-fit: contain`?
1. There is no difference
2. `cover` crops to fill the box; `contain` scales down to fit entirely inside it
3. `contain` always distorts the image; `cover` never does
4. `cover` only works on `<div>`, not `<img>`

### Q3. Which three properties must all be set for a single-line text ellipsis to work?
1. `overflow-wrap`, `word-break`, `hyphens`
2. `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`
3. `text-align: center`, `overflow: auto`, `white-space: pre`
4. `display: block`, `width: auto`, `overflow: scroll`

### Q4. Why might a long URL overflow its box even with `overflow: hidden` set on the parent?
1. `overflow: hidden` only works on images
2. A single unbroken word has no space for the browser to wrap at, without `overflow-wrap`
3. URLs are always rendered at a fixed minimum width
4. `overflow: hidden` disables `max-width`

### Q5. What does `object-position: top` do when combined with `object-fit: cover`?
1. Moves the image element itself to the top of the page
2. Chooses to keep the top portion of the image visible when the sides are cropped
3. Adds a top border to the image
4. Has no effect unless `object-fit: contain` is also set
