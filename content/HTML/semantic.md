# Semantic and accessibility overview

You have now met landmark elements and the document outline, and ARIA and the accessibility tree, on
their own. Tags carry meaning, not only appearance — browsers, search engines and screen readers all
read that meaning, and native elements fill in most of the accessibility tree for free.

Use one `<main>` and one `<h1>` per page, let heading levels descend without skipping, and reach for
ARIA only to patch what HTML cannot already express.

## Display
### HTML

```
<a class="skip" href="#main">Skip to content</a>

<header>
  <h1>CE WebDev Academy</h1>
  <nav aria-label="Main">
    <a href="#main" aria-current="page">Home</a>
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
nav a[aria-current="page"] { text-decoration: underline; }

.skip { position: absolute; left: -9999px; background: #F2A93B; color: #6B4207; padding: 8px; }
.skip:focus { left: 8px; top: 8px; }
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

### 2. Name two navigations
Two `<nav>` landmarks need distinguishing names, and `aria-label` supplies a name where no visible
heading exists.

```
<nav aria-label="Main"> ... </nav>
<nav aria-label="Course sections"> ... </nav>
```

### 3. Mark the current page
`aria-current="page"` states which link you are on, so it is announced and not only underlined.

```
<a href="/courses" aria-current="page">Courses</a>
```

### 4. Add a skip link
Make it the first focusable element so keyboard users can jump past the navigation.

```
<a class="skip" href="#main">Skip to content</a>
...
<main id="main"> ... </main>
```

### 5. Name an icon-only button
The glyph carries no text, so name the button and hide the decoration from the accessibility tree.

```
<button type="button" aria-label="Close dialog">
  <span aria-hidden="true">&times;</span>
</button>
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

### Exercise 4: Keyboard test
Add a skip link, then press Tab from the address bar. Report which element receives focus first and
where the skip link lands you.

### Exercise 5: ARIA that is not needed
Write `<div role="button" tabindex="0">Send</div>` and a plain `<button>Send</button>`. List two
behaviours the native button gives you that the div does not.

## Quizes

### Q1. How many `<main>` elements should a page have?
1. One per page
2. One per `<section>`
3. As many as there are headings
4. None — `<main>` is only for single-page apps

### Q2. What is the accessibility tree?
1. The nesting of your CSS selectors
2. The list of files the browser downloaded
3. A tree of roles, names and states that assistive technology reads
4. The DOM with all `<div>` elements removed

### Q3. Which markup names a navigation region correctly?
1. `<nav title="Main">`
2. `<nav aria-label="Main">`
3. `<div class="nav-main">`
4. `<nav name="Main">`

### Q4. When is a plain `<div>` the right choice?
1. Whenever you need a wrapper purely for layout or styling
2. Never — every element must be semantic
3. For the page's navigation links
4. For any element that has an `id`

### Q5. Given `<button aria-label="Close"><span aria-hidden="true">&times;</span></button>`, what does a screen reader announce?
1. "times, button"
2. "Close, button"
3. "Close times, button"
4. Nothing, because the content is hidden
