# Inline, internal and external CSS

CSS attaches to a page three ways. **Inline** is a `style` attribute on one element — fast to write,
but it cannot be reused and has to be repeated on every element that needs it. **Internal** is a
`<style>` block, usually in `<head>` — one set of rules for the whole page (in this playground, the CSS
box itself becomes that block). **External** is a separate `.css` file linked with
`<link rel="stylesheet" href="...">` — the browser caches it, and every page on a site can share it.

Precedence is not just "last one wins": an inline style always beats a selector-based rule from a
`<style>` block or a linked file, no matter which was written last, because a `style` attribute has
higher specificity than any selector. Between internal and external rules of equal specificity, the
one that appears later in the page wins.

## Display
### HTML

```
<link rel="stylesheet" href="resources/css/demo-style.css">

<p style="color: #B91C1C; font-weight: 700;">1. Inline — a style attribute on this paragraph.</p>
<p class="internal-demo">2. Internal — styled by this lesson's CSS box.</p>
<p class="external-demo">3. External — styled by a linked .css file.</p>
```

### CSS

```
/* Everything in this box is wrapped in a <style> tag — this IS internal CSS. */
.internal-demo { color: #6B4207; font-style: italic; }
```

### Javascript

```

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

### 4. Predict the winner when methods conflict
An inline style wins over any selector-based rule, internal or external, regardless of order.

```
<style> p { color: teal; } </style>
<p style="color: #B91C1C;">Always red, never teal</p>
```

### 5. Break the cascade on purpose
Delete the semicolon after the first of two internal declarations and see what the browser keeps.

```
<style>
  h1 { color: #0F1B33 font-size: 32px; }  /* missing semicolon */
</style>
```

## Exercises

### Exercise 1: Three ways, one element
Style the same paragraph with all three methods at once, each a different colour. Remove them one at
a time and record which colour wins at each step.

### Exercise 2: Inline beats external
Give a paragraph an external rule setting `color: teal` and an inline `style="color: red;"`. Predict
the result, then render and confirm.

### Exercise 3: Two internal rules
Write two `<style>` block rules for the same selector with different `color` values. Confirm the later
one wins.

### Exercise 4: Move styles from inline to internal
Take three elements sharing the same inline style and refactor them into one internal rule with a
shared class instead.

### Exercise 5: Comment out a whole rule
Comment out a complete internal rule, selector and all, so the element falls back to the browser
default. Confirm in DevTools that the rule is gone entirely, not just crossed out.

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

### Q3. A `<style>` sets `p { color: teal; }`, and the same `<p>` has `style="color: red;"`. What colour shows?
1. teal, because the internal rule was declared in the page's `<head>`
2. red, because an inline style always beats a selector-based rule
3. Neither — the browser reports an error
4. It alternates between the two colours

### Q4. Why is external CSS preferred for a real, multi-page site?
1. Inline styles are not supported by modern browsers
2. It loads before the HTML is parsed
3. One file styles every page and the browser caches it
4. Hex colours only work in an external file

### Q5. Between two internal rules of equal specificity targeting the same property, which wins?
1. The first one written
2. The one written later in the page
3. Neither — the browser picks arbitrarily
4. The shorter selector always wins
