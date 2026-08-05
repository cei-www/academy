# Display and sizing

Every element starts with a default `display`. A block box begins on a new line and fills the
available width — `<div>`, `<p>`, `<h1>`. An inline box sits inside a line of text and is only as
wide as its content — `<span>`, `<a>`, `<strong>`.

`width` and `height` are ignored on an inline box, and its vertical padding overlaps the
neighbouring lines instead of pushing them apart. `display: inline-block` fixes both: the box stays
in the text flow but accepts a size, which is how tags, chips and small buttons are built.

`max-width` caps a width without forcing it, so `max-width: 60ch` holds a paragraph at a readable
line length and still shrinks on a phone. `display: none` removes the element entirely — no box, no space. `visibility: hidden` keeps the
space and only hides what is drawn in it. `overflow` decides what happens to content too big for a
fixed-size box: `visible` (the default), `hidden`, `scroll` or `auto`.

## Display
### HTML

```
<p>Inline <span class="tag">CPE</span> <span class="tag">Year 2</span> chips in a sentence.</p>

<div class="col">
  <p>This column is capped with max-width, so the lines stay readable on a wide window.</p>
</div>

<div class="scroller">
  <p>This box is 60px tall, so the rest of its content scrolls.</p>
  <p>Second paragraph inside the scroller.</p>
</div>

<p class="gone">display: none — no box at all</p>
<p class="ghost">visibility: hidden — the space stays</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; }

.tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  color: #6B4207;
  background-color: #F2A93B;
}

.col { max-width: 40ch; }

.scroller {
  height: 60px;
  overflow: auto;
  border: 1px solid #DDE2E8;
}

.gone  { display: none; }
.ghost { visibility: hidden; }
```

### Javascript

```

```

## Your Tasks
### 1. Give an inline element a size
`inline-block` keeps the element in the line of text but lets `width`, `height` and vertical padding
work.

```
.tag {
  display: inline-block;
  padding: 2px 10px;
  width: 90px;
}
```

### 2. Turn a link into a block
A block link fills its container, so the whole row becomes clickable.

```
nav a {
  display: block;
  padding: 8px 12px;
}
```

### 3. Cap the line length
`max-width` limits the box on a wide screen without stopping it from shrinking on a narrow one.

```
.col {
  max-width: 60ch;
  margin: 0 auto;
}
```

### 4. Hide something two ways
Pick `none` to reclaim the space, `hidden` to hold the layout still.

```
.gone  { display: none; }
.ghost { visibility: hidden; }
```

### 5. Contain the overflow
`auto` adds a scrollbar only when the content actually overflows.

```
.scroller {
  height: 120px;
  overflow: auto;
}
```

## Exercises

### Exercise 1: Inline resists sizing
Give a `<span>` `width: 200px` and `height: 80px`, render it, then add `display: inline-block`.
Report the rendered size in DevTools before and after.

### Exercise 2: Tag row
Build five course tags on one line — amber background, rounded corners, 2px by 10px padding — using
`inline-block` only.

### Exercise 3: Readable column
Put a 200-word paragraph in a container with `max-width: 65ch` and `margin: 0 auto`. Resize the
window and describe what the column does at 400px and at 1600px.

### Exercise 4: Two kinds of hiding
Show three boxes in a row. Hide the middle one with `display: none`, screenshot it, then hide it
with `visibility: hidden` and screenshot again. Explain the difference in one sentence.

### Exercise 5: Overflow choices
Put a long list in a 100px-tall box and try `visible`, `hidden`, `scroll` and `auto`. Say which one
you would use for a chat panel and why.

## Quizes

### Q1. Which element is inline by default?
1. `<div>`
2. `<p>`
3. `<span>`
4. `<section>`

### Q2. Why does `width: 200px` do nothing to a `<span>`?
1. `width` only accepts percentages on inline elements
2. An inline box is sized by its content, so `width` does not apply
3. `<span>` has no default styling at all
4. The value needs `!important`

### Q3. `.chip { display: inline-block; width: 100px; }` on three chips in a paragraph. What happens?
1. Each chip becomes 100px wide and they stay on the same line
2. Each chip becomes 100px wide and each starts a new line
3. The chips ignore the width and hug their text
4. The chips stack and fill the paragraph's width

### Q4. What is the difference between `display: none` and `visibility: hidden`?
1. There is none; they are aliases
2. `display: none` removes the box and its space; `visibility: hidden` keeps the space
3. `visibility: hidden` removes the element from the DOM
4. `display: none` only hides the text, not the background

### Q5. Which `overflow` value shows a scrollbar only when the content does not fit?
1. `visible`
2. `hidden`
3. `scroll`
4. `auto`
