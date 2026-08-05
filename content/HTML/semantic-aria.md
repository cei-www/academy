# ARIA and the accessibility tree

From your markup the browser builds an **accessibility tree**: every node gets a role, a name and a
state. Native elements fill that in for free — a `<button>` is already a button. ARIA attributes only
patch what HTML cannot express, so a native element beats ARIA every time.

`aria-label` names an element with no visible text of its own. `aria-current="page"` marks which link
in a nav is the current page. `aria-hidden="true"` removes purely decorative content — like an icon
glyph — from the tree, so assistive technology skips it.

## Display
### HTML

```
<a class="skip" href="#main">Skip to content</a>

<nav aria-label="Main">
  <a href="#main" aria-current="page">Home</a>
  <a href="#courses">Courses</a>
</nav>

<main id="main">
  <button type="button" aria-label="Close dialog">
    <span aria-hidden="true">&times;</span>
  </button>
</main>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; color: #131A26; }
nav a { color: #6B4207; margin-right: 12px; }
nav a[aria-current="page"] { text-decoration: underline; }

.skip { position: absolute; left: -9999px; background: #F2A93B; color: #6B4207; padding: 8px; }
.skip:focus { left: 8px; top: 8px; }
```

### Javascript

```
console.log("current page link:", document.querySelector("[aria-current]").textContent);
```

## Your Tasks
### 1. Name a navigation with no visible heading
`aria-label` supplies a name where no visible heading exists.

```
<nav aria-label="Main"> ... </nav>
```

### 2. Mark the current page
`aria-current="page"` states which link you are on, so it is announced and not only underlined.

```
<a href="/courses" aria-current="page">Courses</a>
```

### 3. Add a skip link
Make it the first focusable element so keyboard users can jump past the navigation.

```
<a class="skip" href="#main">Skip to content</a>
...
<main id="main"> ... </main>
```

### 4. Name an icon-only button
The glyph carries no text, so the button needs its own name.

```
<button type="button" aria-label="Close dialog">
  <span>&times;</span>
</button>
```

### 5. Hide a decorative glyph from the tree
`aria-hidden="true"` stops the icon from being announced twice alongside the button's own label.

```
<button type="button" aria-label="Close dialog">
  <span aria-hidden="true">&times;</span>
</button>
```

## Exercises

### Exercise 1: Keyboard test
Add a skip link, then press Tab from the address bar. Report which element receives focus first and
where the skip link lands you.

### Exercise 2: ARIA that is not needed
Write `<div role="button" tabindex="0">Send</div>` and a plain `<button>Send</button>`. List two
behaviours the native button gives you that the div does not.

### Exercise 3: Two labelled navigations
Build two `<nav>` landmarks on one page — "Main" and "Course sections" — each with a distinguishing
`aria-label`, and confirm in DevTools' Accessibility panel that both have distinct names.

### Exercise 4: Icon button pattern
Build a "delete" icon button using `aria-label` and `aria-hidden`, following the close-button pattern
in this lesson.

### Exercise 5: Multi-page current marker
Build a three-link nav where the middle link carries `aria-current="page"`, and style that state
distinctly with CSS.

## Quizes

### Q1. What is the accessibility tree?
1. The nesting of your CSS selectors
2. The list of files the browser downloaded
3. A tree of roles, names and states that assistive technology reads
4. The DOM with all `<div>` elements removed

### Q2. Which markup names a navigation region correctly?
1. `<nav title="Main">`
2. `<nav aria-label="Main">`
3. `<div class="nav-main">`
4. `<nav name="Main">`

### Q3. What does `aria-hidden="true"` do?
1. Deletes the element from the DOM
2. Removes the element from the accessibility tree, while it still renders visually
3. Makes the element invisible on screen
4. Disables the element so it cannot be clicked

### Q4. When should you reach for an ARIA attribute instead of a native HTML feature?
1. Always — ARIA is more powerful than native HTML
2. Only to patch what no native HTML element or attribute already expresses
3. Never — ARIA attributes are deprecated
4. Only inside `<div>` elements

### Q5. Given `<button aria-label="Close"><span aria-hidden="true">&times;</span></button>`, what does a screen reader announce?
1. "times, button"
2. "Close, button"
3. "Close times, button"
4. Nothing, because the content is hidden
