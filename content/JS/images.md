# Images with JavaScript

An `<img>` on the page is an object in JavaScript. You can read it, change it, or build a new one.

Three things you will use constantly:

- `img.src = "..."` — swap the picture
- `img.alt = "..."` — keep the description in step with the picture
- `img.addEventListener("load" | "error", ...)` — images load *after* your code runs

Setting `src` only starts a download. Nothing is on screen yet — that is what the `load` event is for.

## Display
### HTML

```
<h2 id="caption">chip.png</h2>

<img id="photo" src="resources/img/chip.png" alt="A microchip labelled CE"
     width="200" height="200">

<p>
  <button id="next" type="button">Next image</button>
  <button id="broken" type="button">Load a missing file</button>
</p>

<div id="gallery"></div>
```

### CSS

```
#photo { border: 1px solid #cbd5e1; }
#gallery { display: flex; gap: 8px; margin-top: 12px; }
#gallery img { width: 90px; height: 90px; object-fit: cover; }
button { margin-right: 6px; }
```

### Javascript

```
const files = [
  { src: "resources/img/chip.png",       alt: "A microchip labelled CE" },
  { src: "resources/img/profile.jpg",    alt: "Placeholder profile picture" },
  { src: "resources/img/campus-400.jpg", alt: "Night skyline of the KMITL campus" },
];

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
let i = 0;

photo.addEventListener("load", () => console.log("loaded", photo.naturalWidth + "x" + photo.naturalHeight));
photo.addEventListener("error", () => { caption.textContent = "could not load that file"; });

document.getElementById("next").addEventListener("click", () => {
  i = (i + 1) % files.length;
  photo.src = files[i].src;
  photo.alt = files[i].alt;
  caption.textContent = files[i].src.split("/").pop();
});

document.getElementById("broken").addEventListener("click", () => {
  photo.src = "resources/img/does-not-exist.jpg";
});

const gallery = document.getElementById("gallery");
files.forEach(f => {
  const img = document.createElement("img");
  img.src = f.src;
  img.alt = f.alt;
  gallery.appendChild(img);
});
```

## Your Tasks
### 1. Read an image from the page
`getElementById` gives you the element; its properties are the attributes.

```
const photo = document.getElementById("photo");
console.log(photo.src, photo.alt);
```

### 2. Swap the picture
Change `alt` whenever you change `src` — otherwise the description now describes the wrong image.

```
photo.src = "resources/img/profile.jpg";
photo.alt = "Placeholder profile picture";
```

### 3. Create an image in JavaScript
Build the element, set it up, then put it on the page.

```
const img = document.createElement("img");
img.src = "resources/img/campus-400.jpg";
img.alt = "Night skyline of the KMITL campus";
document.body.appendChild(img);
```

### 4. Wait for it to load
`naturalWidth` is the file's real size, and it is only known once the image has arrived.

```
photo.addEventListener("load", () => {
  console.log(photo.naturalWidth + " x " + photo.naturalHeight);
});
```

### 5. Handle a missing file
A broken image should not be a silent dead end.

```
photo.addEventListener("error", () => {
  photo.alt = "Image unavailable";
  console.log("failed to load:", photo.src);
});
```

## Exercises

### Exercise 1: Slideshow
Put three images in an array and add Previous and Next buttons that step through it, wrapping at both ends.

### Exercise 2: Size report
Load `campus.jpg`, `campus-800.jpg` and `campus-400.jpg` in turn, logging each `naturalWidth`, then explain why reading it immediately after setting `src` gives 0.

### Exercise 3: Fallback image
When an image fails to load, swap in `resources/img/chip.png` and set an alt saying the original was unavailable. Test with a file name that does not exist.

### Exercise 4: Build a gallery from data
Loop over an array of `{ src, alt }` objects, creating one `<figure>` per item with an `<img>` and a
`<figcaption>`, and append them all to a container.

### Exercise 5: Filter by tag
`resources/data/gallery.json` has the same shape plus a `tags` array. Paste its contents in as a
literal and render only the entries tagged `"svg"`; the AJAX lessons will fetch it instead.

## Quizes

### Q1. How do you change which picture an `<img>` shows?
1. `img.href = "new.jpg"`
2. `img.src = "new.jpg"`
3. `img.image = "new.jpg"`
4. `img.file = "new.jpg"`

### Q2. Which method creates a new `<img>` element?
1. `document.newElement("img")`
2. `document.createElement("img")`
3. `new Image` is the only way
4. `document.querySelector("img")`

### Q3. What does `naturalWidth` report?
1. The width the image is displayed at on screen
2. The width of the image file itself, in pixels
3. The width of the element's parent container
4. The `width` attribute written in the HTML

### Q4. Which event fires when an image finishes downloading?
1. `ready`
2. `complete`
3. `load`
4. `render`

### Q5. Given `img.src = "big.jpg"; console.log(img.naturalWidth);`, why is `0` logged?
1. `naturalWidth` only works on images created with `createElement`
2. The assignment starts the download, and the file has not arrived yet when the next line runs
3. `naturalWidth` is spelled wrong and returns a default of 0
4. The image must be appended to the document before it has any width
