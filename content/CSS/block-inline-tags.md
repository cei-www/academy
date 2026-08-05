# Block and inline elements

*Display types* covered the concept — a block box starts a new line and fills the width, an inline
box sits inside a line of text. This lesson is the reference: which common tags default to which.

**Block-level:** `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`,
`<header>`, `<footer>`, `<nav>`, `<main>`, `<form>`, `<table>`, `<blockquote>`, `<hr>`, `<figure>`.

**Inline (text-level):** `<span>`, `<a>`, `<strong>`, `<em>`, `<code>`, `<small>`, `<abbr>`, `<sub>`,
`<sup>`, `<br>`.

**Inline-block by default:** `<img>`, `<input>`, `<button>`, `<select>`, `<textarea>` — these are
*replaced elements*: unlike text-level inline tags, they already accept `width` and `height` without
needing `display: inline-block` added.

## Display
### HTML

```
<p>Read the outlines: <span>span</span>, <a href="#">a</a> and <img src="resources/img/chip.png"
alt="chip" width="18"> sit inside this line of text.</p>

<div>div fills the width</div>
<h2>h2 fills the width</h2>
<button>button (inline-block by default)</button>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
span, a, img { outline: 2px solid #F2A93B; }
div, h2 { outline: 2px solid #0F1B33; }
button { outline: 2px solid #15803D; }
```

### Javascript

```

```

## Your Tasks
### 1. Spot the block tags in a page
`<div>`, headings, lists and `<section>` all start a new line and fill the width, unstyled.

```
<h1>Block</h1>
<section>Also block</section>
```

### 2. Spot the text-level inline tags
`<span>`, `<a>`, `<strong>` hug their content and sit inside a line, unstyled.

```
<p>An <strong>inline</strong> tag inside a sentence.</p>
```

### 3. Recognise a replaced element
`<img>` already accepts `width`/`height` with no extra `display` rule — it is inline-block already.

```
<img src="resources/img/chip.png" alt="chip" width="40" height="40">
```

### 4. Tell `<button>` apart from `<span>`
Both sit inside a line, but only `<button>` accepts `width`/`height` unstyled.

```
<button style="width: 120px;">Sized, works</button>
<span style="width: 120px;">Ignored</span>
```

### 5. Confirm a tag's default in DevTools
The Computed tab reports the real default, regardless of what you expect from memory.

```
<!-- select any tag, check Computed → display -->
```

## Exercises

### Exercise 1: Sort ten tags
Write ten tags from this lesson's lists on paper (or a comment), then sort them into block,
text-level inline, and inline-block-by-default, with no CSS to check yourself.

### Exercise 2: Outline a real page
Add `* { outline: 1px solid red; }` to any page and describe, without opening DevTools, which
outlined boxes span full width and which hug their content.

### Exercise 3: `<li>` is block, `<ul>` is block
Build a `<ul>` with three `<li>` items and confirm in DevTools that both the list and each item are
block-level, even though the list looks indented.

### Exercise 4: Style-less width test
Give a `<span>`, an `<a>`, and an `<img>` all `width: 100px` with no other CSS. Report which one
visibly changes size and explain why.

### Exercise 5: Build with the right tag
Lay out a byline "By <strong>Rathachai C.</strong>, CE-KMITL" using only tags from this lesson's
lists, choosing block or inline correctly for each part.

## Quizes

### Q1. Which of these is block-level by default?
1. `<span>`
2. `<strong>`
3. `<section>`
4. `<a>`

### Q2. Which of these is inline-block by default, without adding any CSS?
1. `<div>`
2. `<img>`
3. `<p>`
4. `<em>`

### Q3. Why does `<button>` accept `width` unstyled, but `<span>` does not?
1. `<button>` is block-level by default
2. `<button>` is a replaced element, inline-block by default
3. `<span>` cannot appear inside a `<p>`
4. There is no difference — both accept `width`

### Q4. Which tag always forces a line break, regardless of styling?
1. `<span>`
2. `<br>`
3. `<a>`
4. `<code>`

### Q5. What is the most reliable way to confirm a tag's real default `display`?
1. Guessing from the tag's name
2. Reading this lesson's lists and assuming every browser agrees
3. Checking DevTools' Computed tab on that element
4. Looking at the tag's `class` attribute
