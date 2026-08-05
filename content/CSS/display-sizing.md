# Constraining and hiding content

`max-width` caps a width without forcing it, so `max-width: 60ch` holds a paragraph at a readable
line length and still shrinks on a phone. `display: none` removes the element entirely — no box, no
space. `visibility: hidden` keeps the space and only hides what is drawn in it.

`overflow` decides what happens to content too big for a fixed-size box: `visible` (the default),
`hidden`, `scroll` or `auto`.

## Display
### HTML

```
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
### 1. Cap the line length
`max-width` limits the box on a wide screen without stopping it from shrinking on a narrow one.

```
.col {
  max-width: 60ch;
}
```

### 2. Centre a capped column
A capped box needs `margin: 0 auto` to sit in the middle instead of hugging the left edge.

```
.col {
  max-width: 60ch;
  margin: 0 auto;
}
```

### 3. Hide something two ways
Pick `none` to reclaim the space, `hidden` to hold the layout still.

```
.gone  { display: none; }
.ghost { visibility: hidden; }
```

### 4. Contain the overflow
`auto` adds a scrollbar only when the content actually overflows.

```
.scroller {
  height: 120px;
  overflow: auto;
}
```

### 5. Choose the right overflow value
`scroll` always shows a scrollbar; `auto` shows one only when needed.

```
.chat-log {
  height: 300px;
  overflow: auto;   /* no bar until messages actually overflow */
}
```

## Exercises

### Exercise 1: Readable column
Put a 200-word paragraph in a container with `max-width: 65ch` and `margin: 0 auto`. Resize the
window and describe what the column does at 400px and at 1600px.

### Exercise 2: Two kinds of hiding
Show three boxes in a row. Hide the middle one with `display: none`, screenshot it, then hide it
with `visibility: hidden` and screenshot again. Explain the difference in one sentence.

### Exercise 3: Overflow choices
Put a long list in a 100px-tall box and try `visible`, `hidden`, `scroll` and `auto`. Say which one
you would use for a chat panel and why.

### Exercise 4: Measure the cap
Give a paragraph `max-width: 50ch`, then read its rendered width in DevTools' Computed tab at two
different window sizes.

### Exercise 5: Default overflow
Remove any `overflow` rule from a box shorter than its content and describe, in one sentence, what
`visible` (the default) does to the extra content.

## Quizes

### Q1. What does `max-width: 60ch` do on a wide screen?
1. Forces the box to exactly 60 characters wide
2. Caps the box at that width but lets it shrink narrower
3. Has no effect unless combined with `width`
4. Only applies to images

### Q2. What is the difference between `display: none` and `visibility: hidden`?
1. There is none; they are aliases
2. `display: none` removes the box and its space; `visibility: hidden` keeps the space
3. `visibility: hidden` removes the element from the DOM
4. `display: none` only hides the text, not the background

### Q3. Which `overflow` value shows a scrollbar only when the content does not fit?
1. `visible`
2. `hidden`
3. `scroll`
4. `auto`

### Q4. What is the default value of `overflow`?
1. `hidden`
2. `visible`
3. `auto`
4. `scroll`

### Q5. A box has `overflow: hidden` and content taller than its fixed height. What happens to the extra content?
1. It is clipped and not shown
2. A scrollbar appears
3. The box grows to fit it
4. The extra content overlaps the next element
