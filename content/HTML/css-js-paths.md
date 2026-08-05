# CSS, JS and file paths overview

CSS attaches to a page three ways: **inline** — a `style` attribute on one element, checked first but
impossible to reuse; **internal** — a `<style>` block (in this playground, the CSS box itself becomes
one); and **external** — a separate `.css` file linked with `<link rel="stylesheet" href="...">`, which
the browser caches and every page on a site can share.

A `<script>` tag blocks HTML parsing at the exact point it appears, so a classic script traditionally
sits just before `</body>` — everything above it has already rendered. A script in `<head>` needs
`defer` to run after parsing instead of blocking it. An external file is linked with
`<script src="path/to/file.js"></script>`; multiple scripts, inline or external, run in source order.

Both `href` and `src` follow the same path rules as a link: **relative** (`style.css`, `../lib/x.js`)
resolves from the current page's folder, **root-relative** (`/assets/style.css`) resolves from the
site's root no matter where the current page lives, and an **absolute URL**
(`https://cdn.example.com/x.js`) points to another site entirely.

## Display
### HTML

```
<link rel="stylesheet" href="resources/css/demo-style.css">

<p style="color: #B91C1C; font-weight: 700;">1. Inline — a style attribute on this paragraph.</p>
<p class="internal-demo">2. Internal — styled by this lesson's CSS box.</p>
<p class="external-demo" id="external-msg">3. External — waiting for the linked file...</p>

<script src="resources/js/demo-script.js"></script>
```

### CSS

```
/* Everything in this box is wrapped in a <style> tag — this IS internal CSS. */
.internal-demo { color: #6B4207; font-style: italic; }
```

### Javascript

```
/* This box becomes a script placed after the HTML above, so it runs after the
   external <script src="..."> has already executed and set #external-msg. */
console.log("inline script, running last, in source order");
```

## Your Tasks
### 1. Style one element inline
Fast to write, impossible to reuse — the rule lives only on that one element.

```
<p style="color: #B91C1C; font-weight: 700;">Inline styled</p>
```

### 2. Write internal CSS
A `<style>` block styles every matching element on the page, not just one.

```
<style>
  .note { color: #6B4207; font-style: italic; }
</style>
```

### 3. Link an external stylesheet
`href` is a relative path here — it resolves from this page's own folder.

```
<link rel="stylesheet" href="resources/css/demo-style.css">
```

### 4. Place a script correctly
Before `</body>` is the classic spot; in `<head>` it needs `defer` to avoid blocking parsing.

```
<head>
  <script src="app.js" defer></script>
</head>
```

### 5. Link an external JS file
`src` follows the same path rules as any `href` — relative, root-relative, or an absolute URL.

```
<script src="resources/js/demo-script.js"></script>
```

## Exercises

### Exercise 1: Three ways, one element
Style the same paragraph with all three CSS methods at once, giving each a different color. Remove
them one at a time and record which color wins at each step, and why.

### Exercise 2: Move a script without defer
Move a script that reads `document.getElementById(...)` from just before `</body>` up into `<head>`,
with no `defer`. Explain in one sentence why it now fails.

### Exercise 3: Fix it with defer
Add `defer` to the head script from Exercise 2 and explain why it now works again.

### Exercise 4: Relative vs root-relative
Write the same stylesheet link twice — once as a relative path, once as a root-relative path starting
with `/`. Explain a situation where the root-relative version keeps working and the relative one
breaks.

### Exercise 5: An external CDN script
Write a `<script src="https://...">` pointing at a CDN, as the Framework lessons do. Explain one
advantage (no file to host yourself) and one trade-off (the page now depends on that CDN being up).

## Quizes

### Q1. Which CSS method is checked first but hardest to reuse across elements?
1. Internal
2. External
3. Inline
4. All three are checked in a random order

### Q2. In this playground, what makes the CSS box's content "internal" CSS rather than external?
1. Nothing — it behaves exactly like a linked file
2. The platform wraps its contents in a `<style>` tag automatically
3. It is compiled into inline `style` attributes before rendering
4. Internal CSS does not really exist; it is the same as inline

### Q3. What happens when the HTML parser reaches a classic (non-`defer`) `<script>` tag?
1. Parsing continues immediately; the script runs whenever it is ready
2. Parsing pauses until the script is fetched and finished executing
3. The script is silently skipped
4. The rest of the page stops rendering permanently

### Q4. What does adding `defer` to a `<script>` in `<head>` change?
1. It prevents the script from ever running
2. It makes the script download in parallel and run after parsing, in source order
3. It moves the script to the bottom of the page automatically
4. It disables caching for that script

### Q5. What does a root-relative path like `/assets/style.css` resolve from?
1. The current page's own folder
2. The site's root, regardless of which folder the current page is in
3. Another domain entirely
4. The browser's downloads folder

