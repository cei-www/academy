# Display types: block and inline

Every element starts with a default `display`. A block box begins on a new line and fills the
available width — `<div>`, `<p>`, `<h1>`. An inline box sits inside a line of text and is only as
wide as its content — `<span>`, `<a>`, `<strong>`.

`width` and `height` are ignored on an inline box, and its vertical padding overlaps the
neighbouring lines instead of pushing them apart. `display: inline-block` fixes both: the box stays
in the text flow but accepts a size, which is how tags, chips and small buttons are built.

## Display
### HTML

```
<p>Inline <span class="tag">CE</span> <span class="tag">Year 2</span> chips in a sentence.</p>

<nav>
  <a href="#">Home</a>
  <a href="#">Courses</a>
</nav>
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

nav a {
  display: block;
  padding: 8px 12px;
}
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

### 3. Compare block and inline with no CSS at all
A `<div>` still starts a new line and fills the width; a `<span>` still hugs its text — this is the
browser default, before any rule is written.

```
<div>I fill the width</div>
<span>I hug my text</span>
```

### 4. See width ignored on an inline element
`width` and `height` do nothing to a plain `<span>` until it becomes `inline-block` or `block`.

```
span { width: 200px; }   /* no effect */
```

### 5. Build a row of tags
Several `inline-block` elements sit side by side on one line, each sized independently.

```
.tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
}
```

## Exercises

### Exercise 1: Inline resists sizing
Give a `<span>` `width: 200px` and `height: 80px`, render it, then add `display: inline-block`.
Report the rendered size in DevTools before and after.

### Exercise 2: Tag row
Build five course tags on one line — amber background, rounded corners, 2px by 10px padding — using
`inline-block` only.

### Exercise 3: Block link target
Turn three nav links into block-level rows and confirm in DevTools that each one's clickable area
now spans the full width of its container.

### Exercise 4: Div vs span, no CSS
Place a `<div>` and a `<span>` next to each other with no styling and describe, in one sentence, the
difference DevTools shows for their computed `display` and width.

### Exercise 5: Read the computed display
Select any element in DevTools' Computed tab and report its computed `display` value, then change it
and observe the layout change.

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

### Q4. What is `<div>`'s default `display` value?
1. `inline`
2. `inline-block`
3. `block`
4. `none`

### Q5. What does `display: inline-block` combine?
1. The sizing of a block box with the line-flow position of an inline box
2. Two inline elements into one
3. A block box that always fills 100% width
4. Nothing — it behaves identically to `inline`
