# Video and audio

`<video>` and `<audio>` embed a player. `controls` shows the buttons, `poster` is the still frame
shown before playback (video only), `preload` hints how much to fetch (`none`, `metadata`, `auto`),
and `muted` is what browsers require before they will allow autoplay.

Nested `<source>` elements let the browser pick the first format it supports, trying each in order.
The text between the tags is the fallback content, shown only if no `<source>` can play. This course
ships no actual video or audio file, so the Tasks below are markup to copy, not files that play here.

## Display
### HTML

```
<h2>Lecture recording — poster frame</h2>
<div class="player-mock">
  <img src="resources/img/campus-800.jpg" alt="Still frame a video player would show before playback">
  <span class="play-badge">&#9658; 12:34</span>
</div>
<p>A real embed uses the <code>&lt;video&gt;</code> markup shown in Task 1.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h2 { color: #0F1B33; font-size: 16px; }
.player-mock { position: relative; max-width: 480px; }
.player-mock img { display: block; width: 100%; height: auto; border-radius: 6px; }
.play-badge {
  position: absolute; left: 12px; bottom: 12px;
  background: rgba(15, 27, 51, 0.8); color: #EEF1F4;
  padding: 4px 10px; border-radius: 999px; font-size: 13px;
}
```

### Javascript

```

```

## Your Tasks
### 1. Embed a video with controls and a poster
`poster` shows before the first frame is decoded, so playback feels instant.

```
<video controls poster="resources/img/campus-800.jpg" width="800" height="450">
  <source src="lecture.mp4" type="video/mp4">
</video>
```

### 2. Offer more than one format
The browser tries each `<source>` in order and stops at the first it can play.

```
<video controls>
  <source src="lecture.webm" type="video/webm">
  <source src="lecture.mp4" type="video/mp4">
</video>
```

### 3. Add fallback content
This is only shown if none of the `<source>` elements can play.

```
<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <p>Your browser cannot play this video. <a href="lecture.mp4">Download it</a>.</p>
</video>
```

### 4. Meet the autoplay requirement
Most browsers block autoplay with sound; `muted` is what makes autoplay eligible at all.

```
<video autoplay muted loop>
  <source src="lecture.mp4" type="video/mp4">
</video>
```

### 5. Choose a preload value for the context
`preload="none"` fetches nothing until the user presses play — kinder to mobile data.

```
<audio controls preload="none">
  <source src="lecture.mp3" type="audio/mpeg">
</audio>
```

## Exercises

### Exercise 1: Build a video embed
Embed a video with `controls`, a `poster`, two `<source>` formats and fallback text.

### Exercise 2: Build an audio embed
Embed an audio player with `controls`, `preload="none"` and fallback text.

### Exercise 3: Autoplay without sound
Add `autoplay muted loop` to a video and describe, in one sentence, why the `muted` attribute is
required for this to work in most browsers.

### Exercise 4: Compare preload values
Set `preload="auto"` on one audio element and `preload="none"` on another. Open DevTools' Network
tab, reload, and report which one fetched data before you pressed play.

### Exercise 5: Trigger the fallback
Give a `<video>` a single `<source>` with a `type` no browser supports (e.g. `video/unknown`) and
confirm the fallback paragraph is what a visitor would see.

## Quizes

### Q1. What must accompany `autoplay` for most browsers to allow it?
1. `controls`
2. `loop`
3. `muted`
4. `preload="auto"`

### Q2. What does `preload="none"` do?
1. Fetches the whole file immediately
2. Fetches nothing until the user presses play
3. Fetches only the poster image
4. Disables the player entirely

### Q3. What happens when a browser cannot play any `<source>` inside a `<video>`?
1. The page fails to load
2. The fallback content between the tags is shown
3. The browser downloads a plugin automatically
4. The first `<source>` plays anyway, muted

### Q4. What does `poster` show on a `<video>`?
1. A caption below the player
2. The still frame shown before playback starts
3. The video's file size
4. A loading spinner

### Q5. In what order does the browser try `<source>` elements?
1. Alphabetically by `src`
2. The order they are written, stopping at the first it can play
3. Smallest file first
4. It tries all of them at once
