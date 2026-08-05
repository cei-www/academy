# Landmark elements and document outline

Tags carry meaning, not only appearance. A `<div>` says "a box"; `<nav>` says "these are the site's
navigation links". Landmark elements name the regions of a page: `<header>` is introductory content,
`<nav>` is a block of navigation links, `<main>` is the content unique to this page, `<article>` is a
self-contained item that would still make sense pasted elsewhere, `<section>` is a thematic group
with its own heading, `<aside>` is related but separate content, `<footer>` closes a page or section.

Use one `<main>` and one `<h1>` per page, and let heading levels descend without skipping. That order
is the document outline, and it is how a screen-reader user jumps around a page.

## Display
### HTML

```
<header>
  <h1>CE WebDev Academy</h1>
  <nav>
    <a href="#main">Home</a>
    <a href="#courses">Courses</a>
  </nav>
</header>

<main id="main">
  <article>
    <h2>Week 1: HTML</h2>
    <p>The document skeleton, text and links.</p>
  </article>
</main>

<footer><p>CE-KMITL</p></footer>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 0; color: #131A26; }
header, main, footer { padding: 12px 16px; }
header { background: #0F1B33; color: #EEF1F4; }
nav a { color: #F2A93B; margin-right: 12px; }
```

### Javascript

```
const marks = document.querySelectorAll("header, nav, main, aside, footer");
console.log("landmarks on this page:", marks.length);
console.log("h1 count:", document.querySelectorAll("h1").length);
```

## Your Tasks
### 1. Give the page one main region
Everything unique to this page goes inside `<main>`; site-wide chrome stays outside it.

```
<header><h1>CE WebDev Academy</h1></header>
<main>
  <h2>Announcements</h2>
  <p>Lab 3 is due on Friday.</p>
</main>
<footer><p>CE-KMITL</p></footer>
```

### 2. Wrap a self-contained item in article
An `<article>` should still make sense if it were pasted onto another page.

```
<article>
  <h2>Week 1: HTML</h2>
  <p>The document skeleton, text and links.</p>
</article>
```

### 3. Group related content with section
A `<section>` needs its own heading — without one, it is not a meaningful thematic group.

```
<section>
  <h2>Prerequisites</h2>
  <p>Comfortable with variables and functions in any language.</p>
</section>
```

### 4. Close the page with a footer
`<footer>` can close either the whole page or a single `<article>` or `<section>`.

```
<footer><p>CE-KMITL</p></footer>
```

### 5. Check the heading order with a script
The outline is only valid if heading levels never skip on the way down.

```
document.querySelectorAll("h1, h2, h3").forEach(function (h) {
  console.log(h.tagName, h.textContent);
});
```

## Exercises

### Exercise 1: Rewrite a div soup
Take a page built from `<div id="header">`, `<div id="nav">`, `<div id="content">` and
`<div id="footer">` and replace each with the correct landmark element.

### Exercise 2: Article or section
Write one `<article>` for a blog post and one `<section>` inside it for its comments, then explain
in one sentence why they are not swapped.

### Exercise 3: Outline check
Build a page with `h1`, `h2`, `h3` in a valid order. Then run
`document.querySelectorAll("h1,h2,h3").forEach(h => console.log(h.tagName, h.textContent))` and read
the outline in the console.

### Exercise 4: Landmark count
Build a page with a header, a nav, a main and a footer, then confirm in the console that
`document.querySelectorAll("header, nav, main, footer").length` is `4`.

### Exercise 5: Full skeleton
Assemble a page skeleton using every landmark element covered here, each holding one line of
placeholder content.

## Quizes

### Q1. How many `<main>` elements should a page have?
1. One per page
2. One per `<section>`
3. As many as there are headings
4. None — `<main>` is only for single-page apps

### Q2. What does `<article>` represent?
1. Any block of styled text
2. A self-contained item that would still make sense pasted elsewhere
3. The page's single required heading
4. A synonym for `<div>`

### Q3. What does `<section>` require to be meaningful?
1. A `class` attribute
2. Its own heading
3. At least one `<article>` nested inside it
4. Nothing — it works exactly like `<div>`

### Q4. What happens to the document outline if heading levels skip, e.g. `h1` straight to `h3`?
1. Nothing — the browser renders it identically
2. The outline becomes harder to navigate for screen-reader users
3. The page fails to validate as HTML
4. The skipped heading is automatically inserted

### Q5. Which of these is a landmark element?
1. `<span>`
2. `<b>`
3. `<aside>`
4. `<br>`
