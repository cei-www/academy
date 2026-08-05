# Media and responsive images

`<video>` and `<audio>` embed a player. `controls` shows the buttons, `poster` is the still frame
shown before playback, `preload` hints how much to fetch (`none`, `metadata`, `auto`), and `muted`
is what browsers require before they will autoplay anything. Nested `<source>` elements let the
browser pick the first format it supports, and the text between the tags is the fallback message.

For images there are two different problems. **Art direction** — a different crop for a narrow
screen — is `<picture>` with `<source media="…">`; the browser takes the first matching `<source>`
and falls back to the `<img>`, which is the element that actually renders. **Resolution switching**
— the same picture at several sizes — is `srcset` with widths plus `sizes`. This course ships
`campus-400.jpg` (400px wide), `campus-800.jpg` (800px) and `campus.jpg` (1600px), so you describe
them as `campus-400.jpg 400w, campus-800.jpg 800w, campus.jpg 1600w`, then tell the browser with
`sizes` how wide the slot will be. It multiplies that width by the device pixel ratio and downloads
the smallest candidate that still covers it.

Add `loading="lazy"` for images below the fold, `decoding="async"` so decoding does not block
rendering, and always `width` and `height` so the space is reserved and the page does not jump.

## Display
### HTML

```
<h2>Art direction</h2>
<picture>
  <source media="(max-width: 600px)" srcset="resources/img/campus-400.jpg">
  <img src="resources/img/banner.jpg" alt="KMITL campus at night"
       width="1600" height="400">
</picture>

<h2>Resolution switching</h2>
<img src="resources/img/campus-800.jpg"
     srcset="resources/img/campus-400.jpg 400w,
             resources/img/campus-800.jpg 800w,
             resources/img/campus.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 600px"
     alt="Main building of the KMITL campus"
     width="800" height="450" loading="lazy" decoding="async">
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
img { max-width: 100%; height: auto; display: block; }
h2 { color: #0F1B33; font-size: 16px; }
picture img { object-fit: cover; }
```

### Javascript

```
const img = document.querySelector("img[srcset]");
const report = () => console.log("chosen:", img.currentSrc, "| dpr:", devicePixelRatio);
img.complete ? report() : img.addEventListener("load", report);
```

## Your Tasks
### 1. Switch resolution
`w` values describe each file, `sizes` describes the slot on the page.

```
<img src="resources/img/campus-800.jpg"
     srcset="resources/img/campus-400.jpg 400w,
             resources/img/campus-800.jpg 800w,
             resources/img/campus.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 600px"
     alt="KMITL campus" width="800" height="450">
```

### 2. Change the crop, not just the size
`<picture>` swaps files by media query; `alt` and the real dimensions stay on the `<img>`.

```
<picture>
  <source media="(min-width: 900px)" srcset="resources/img/banner.jpg">
  <img src="resources/img/campus-400.jpg" alt="KMITL campus"
       width="400" height="225">
</picture>
```

### 3. Keep the layout still and the load cheap
Reserve the box, defer offscreen work, and let the decode happen off the main thread.

```
<img src="resources/img/campus-400.jpg" alt="Lecture hall"
     width="400" height="225" loading="lazy" decoding="async">
```

### 4. Embed a video
There is no video file in this course, so read this as a shape to copy. The browser tries each
`<source>` in order and shows the last line only if it can play none of them.

```
<video controls poster="resources/img/campus-800.jpg"
       width="800" height="450" preload="metadata" muted>
  <source src="lecture.webm" type="video/webm">
  <source src="lecture.mp4" type="video/mp4">
  <p>Your browser cannot play this video. <a href="lecture.mp4">Download it</a>.</p>
</video>
```

### 5. Embed audio
`preload="none"` fetches nothing until the user presses play, which matters on mobile data.

```
<audio controls preload="none">
  <source src="lecture.ogg" type="audio/ogg">
  <source src="lecture.mp3" type="audio/mpeg">
  <p>No audio support. <a href="lecture.mp3">Download the recording</a>.</p>
</audio>
```

## Exercises

### Exercise 1: Which file was chosen
Render the starter, then log `document.querySelector("img[srcset]").currentSrc` at two window
widths. Report the two file names and explain why they differ.

### Exercise 2: Network evidence
Open DevTools' Network tab, filter to images, and reload with the window narrow and then wide.
Report the kilobytes downloaded each time.

### Exercise 3: Wrong sizes
Change `sizes` to `100vw` while the image still renders in a 300px column. Say which file the
browser now downloads and why that is wasteful.

### Exercise 4: Portrait crop
Use `<picture>` so screens under 500px get `profile.jpg` and wider screens get `banner.jpg`, with
correct `width` and `height` on the `<img>`.

### Exercise 5: Layout shift
Load `campus.jpg` twice, once with `width` and `height` and once without, with text below each.
Throttle the network to Slow 3G and describe what the text does in each case.

## Quizes

### Q1. In a `<picture>`, which element actually renders?
1. The first `<source>`
2. The `<img>`
3. `<picture>` itself
4. Whichever `<source>` has a `type`

### Q2. What does `800w` in a `srcset` describe?
1. The width of the slot on the page
2. The minimum window width for using that file
3. The maximum file size in kilobytes
4. The intrinsic width of that image file in pixels

### Q3. Why does `srcset` need `sizes`?
1. To set the CSS width of the image
2. Because `srcset` is ignored without it
3. To tell the browser how wide the image will render before layout is known
4. To list the file sizes so the smallest is picked

### Q4. `sizes="(max-width: 600px) 100vw, 600px"` on a 400px-wide phone with a device pixel ratio of 2. Which candidate fits best?
1. `campus-400.jpg`
2. `campus-800.jpg`
3. `campus.jpg`
4. The file in `src`, because `srcset` is a hint only

### Q5. Which attribute shows the still frame before a video plays?
1. `preload`
2. `thumbnail`
3. `poster`
4. `muted`
