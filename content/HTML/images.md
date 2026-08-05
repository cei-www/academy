# Working with Images

An image is added with `<img>`. It is a void element — no closing tag — and it needs two attributes:

- `src` — where the file is
- `alt` — what the image *says*, for screen readers and for when the file fails to load

Also give `width` and `height`. The browser then reserves the right amount of space before the image
arrives, so the page does not jump around while loading.

This course ships sample files in `resources/img/`, so you can use real images right away.

## Display
### HTML

```
<h2>Course cover</h2>

<figure>
  <img src="resources/img/campus-800.jpg" alt="Night skyline of the KMITL campus"
       width="800" height="450">
  <figcaption>Figure 1: KMITL campus</figcaption>
</figure>

<p>
  Vector logo:
  <img src="resources/img/ce-logo.svg" alt="CE WebDev Academy" width="120" height="40">
</p>
```

### CSS

```
img {
  max-width: 100%;
  height: auto;
}

figcaption {
  font-size: 13px;
  color: #4b5563;
}
```

### Javascript

```

```

## Your Tasks
### 1. Show an image
`src` is the path to the file, `alt` describes it.

```
<img src="resources/img/profile.jpg" alt="Profile picture of a student">
```

### 2. Reserve the space
Give the real pixel size of the file so the layout does not shift while it loads.

```
<img src="resources/img/campus-400.jpg" alt="KMITL campus" width="400" height="225">
```

### 3. Mark a decorative image
An image that adds nothing to the meaning gets an *empty* alt, so screen readers skip it. Leaving
`alt` out entirely is not the same thing — then the file name gets read out loud.

```
<img src="resources/img/chip.png" alt="" width="64" height="64">
```

### 4. Add a caption
`<figure>` ties an image and its caption together so the link is in the markup, not just visual.

```
<figure>
  <img src="resources/img/box-model.svg" alt="Diagram of the CSS box model" width="360" height="240">
  <figcaption>Figure 2: content, padding, border, margin</figcaption>
</figure>
```

### 5. Load below-the-fold images lazily
`loading="lazy"` tells the browser to fetch the file only when the user scrolls near it.

```
<img src="resources/img/banner.jpg" alt="Course banner"
     width="1600" height="400" loading="lazy">
```

## Exercises

### Exercise 1: Three formats
Put `campus-400.jpg`, `chip.png`, and `ce-logo.svg` on one page. Then write one sentence per file
saying why that format suits that picture — photo, transparent background, or flat shapes.

### Exercise 2: Broken image
Change one `src` to a file name that does not exist. Look at what the browser shows, then explain in
one sentence what `alt` did for you.

### Exercise 3: Alt text practice
Write the `alt` value for three cases: a photo of the campus, a logo that is also a link to the home
page, and a decorative divider. One of the three should be `alt=""` — say which and why.

### Exercise 4: Gallery
Build a row of four images from `resources/img/`, each inside a `<figure>` with its own caption.

### Exercise 5: Pick the right size
`campus.jpg` is 1600px wide but you only need a 400px thumbnail. Show it twice — once using
`campus.jpg` shrunk with `width="400"`, once using `campus-400.jpg`. Open DevTools' Network tab and
report how many kilobytes each version downloaded.

## Quizes

### Q1. Which attribute holds the path to the image file?
1. `href`
2. `src`
3. `link`
4. `file`

### Q2. What is `alt` for?
1. A tooltip that appears when you hover the image
2. A caption printed under the image
3. A text description for screen readers and for when the image fails to load
4. The title shown in the browser tab

### Q3. Which is written correctly?
1. `<img src="cat.jpg" alt="A cat">`
2. `<img src="cat.jpg" alt="A cat"></img>`
3. `<image src="cat.jpg" alt="A cat">`
4. `<img>cat.jpg</img>`

### Q4. Why give an `<img>` a `width` and `height`?
1. It is the only way to resize the picture
2. The browser reserves the space in advance, so the page does not jump while loading
3. It makes the file download faster
4. Without them the image will not display at all

### Q5. An image is purely decorative and adds no information. What should its `alt` be?
1. `alt="decoration"`
2. `alt=""`
3. Leave the `alt` attribute out entirely
4. `alt=" "` with a single space
