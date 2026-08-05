# Font Size

`font-size` sets the computed text size of an element. It is an inherited property, and — critically — it is the reference point for the `em`, `%`, `ex`, and `ch` units, which makes it one of the few properties whose value on a parent silently rewrites the meaning of its children's values.

## Units, and which to reach for

- **`px`** — an absolute CSS pixel. Predictable, but historically ignores the user's browser font-size preference when used on body text.
- **`rem`** — relative to the **root** (`<html>`) font size, normally 16 px. Composes cleanly: a value means the same thing anywhere in the tree. **Default choice for type.**
- **`em`** — relative to the **parent's** computed `font-size`. Compounds when nested: an `em` inside an `em` multiplies. Useful for padding that should scale with its own text, hazardous for font sizes in deep trees.
- **`%`** — behaves like `em` for `font-size` (`150%` ≡ `1.5em`).
- **`vw` / `vh`** — relative to viewport dimensions. Never use `vw` alone for body text: it prevents the user from zooming, which is an accessibility failure. Combine it inside `clamp()` instead.

## Accessibility and the root

A user who sets their browser's default text size to 20 px is telling you something. Sizing body text in `rem` honours that preference; sizing it in `px` overrides it. Never set `html { font-size: 62.5%; }` as a "1 rem = 10 px" convenience hack — it scales *down* every user's chosen default.

## Fluid type

Modern layouts scale type continuously rather than in media-query steps:

```css
h1 {
  font-size: clamp(1.75rem, 1.2rem + 2.5vw, 3rem);
}
```

`clamp(MIN, PREFERRED, MAX)` keeps the heading readable on a phone, fluid on a tablet, and bounded on a desktop — one declaration replacing three breakpoints. Including a `rem` term in the preferred value preserves zoom support.

## Display
### HTML

```
<article class="doc">
  <h1>Modular Type Scale</h1>
  <p class="lead">A lead paragraph sets the entry point of the page.</p>
  <p>Body copy sits at the base size, one rem by definition.</p>
  <p class="fine-print">Fine print remains legible at 0.8125rem.</p>
</article>
```

### CSS

```
:root {
  --step-0: 1rem;
  --step-1: 1.25rem;
  --step-2: 1.563rem;
  --step-3: 1.953rem;
}

.doc { font-size: var(--step-0); line-height: 1.6; }
h1   { font-size: clamp(1.75rem, 1.2rem + 2.5vw, var(--step-3)); }
.lead { font-size: var(--step-1); color: #475569; }
.fine-print { font-size: 0.8125rem; }
```

### Javascript

```

```

## Your Tasks
### 1. Size type in absolute and root-relative units
Set a heading with `px` and the same heading with `rem`, then change the browser's default font size and observe which one responds.

```
h1 { font-size: 32px; }    /* fixed: ignores user preference   */
h1 { font-size: 2rem; }    /* 2 × root size: honours preference */
```

### 2. Demonstrate `em` compounding
Nest three elements each sized in `em` and compute the resulting pixel value at every level.

```
.outer  { font-size: 1.5em; }   /* 16 × 1.5   = 24px */
.middle { font-size: 1.5em; }   /* 24 × 1.5   = 36px */
.inner  { font-size: 1.5em; }   /* 36 × 1.5   = 54px */
```

### 3. Build a modular scale with custom properties
Define a ratio-based scale once and reference it, instead of scattering magic numbers through the stylesheet.

```
:root {
  --step-0: 1rem;        /* base            */
  --step-1: 1.25rem;     /* base × 1.25     */
  --step-2: 1.563rem;    /* base × 1.25²    */
  --step-3: 1.953rem;    /* base × 1.25³    */
}

p  { font-size: var(--step-0); }
h3 { font-size: var(--step-1); }
h2 { font-size: var(--step-2); }
h1 { font-size: var(--step-3); }
```

### 4. Make a heading fluid with `clamp()`
Replace a media-query step with a single continuous declaration bounded at both ends.

```
h1 {
  font-size: clamp(1.75rem, 1.2rem + 2.5vw, 3rem);
  /* min 28px, grows with viewport, never exceeds 48px */
}
```

### 5. Pair size with line height
Set an unitless `line-height` so the ratio is inherited rather than a fixed length, which would break at other sizes.

```
body {
  font-size: 1rem;
  line-height: 1.6;      /* unitless: each child computes its own */
}

h1 {
  font-size: 2.5rem;
  line-height: 1.15;     /* large text needs a tighter ratio      */
}
```

## Exercises

### Exercise 1: Compute the cascade
Given `html { font-size: 16px; }`, `article { font-size: 1.25em; }`, and `article p { font-size: 0.875em; }`, calculate the rendered pixel size of a paragraph inside an article. Then state what that paragraph would be if the inner rule used `rem` instead, and explain the difference.

### Exercise 2: Build a type scale
Choose a modular ratio (1.2 minor third, 1.25 major third, or 1.333 perfect fourth), generate a six-step scale as custom properties, and apply it to a document with `h1`–`h4`, body text, and a caption. Show your arithmetic for each step.

### Exercise 3: Responsive heading, two ways
Implement the same responsive heading twice: once with a `min-width` media query switching between two fixed sizes, and once with `clamp()`. Compare the two approaches on the number of declarations, the smoothness of the transition, and maintainability.

### Exercise 4: Zoom and reflow test
Set body text in `px` on one page and `rem` on another. Zoom the browser to 200% and also change the browser's default font size to 24 px. Document what happens on each page and explain which passes WCAG 1.4.4 (Resize Text).

### Exercise 5: Optimise measure
Set a `max-width` in `ch` units on a text column so a line holds roughly 60–75 characters, and adjust `font-size` and `line-height` accordingly. Explain what the `ch` unit measures and why line length affects reading speed.

## Quizes

### Q1. Which CSS property controls how large text is rendered?
1. `text-scale`
2. `font-weight`
3. `font-size`
4. `line-height`

### Q2. What is `1rem` relative to?
1. The font size of the element's parent
2. The font size of the root (`<html>`) element
3. The width of the viewport
4. The browser's minimum readable font size

### Q3. Given `html { font-size: 16px; }` and a `<div class="a">` containing a `<div class="b">`, where `.a { font-size: 1.5em; }` and `.b { font-size: 2em; }`, what is the computed size of `.b`?
1. 32px
2. 24px
3. 48px
4. 16px

### Q4. Why is `font-size: 4vw` alone a poor choice for body text?
1. `vw` is not a valid unit for `font-size`
2. It scales only with height, not width, so it is unpredictable
3. It ignores the user's zoom and font-size preferences, failing accessibility requirements
4. It is computed only once at page load and never updates

### Q5. What does `font-size: clamp(1rem, 0.5rem + 2vw, 2rem)` guarantee?
1. The size is always exactly `0.5rem + 2vw`, regardless of viewport
2. The size follows `0.5rem + 2vw` but is never smaller than `1rem` nor larger than `2rem`
3. The size alternates between `1rem` and `2rem` at a breakpoint
4. The size is `1rem` on mobile and `2rem` on desktop, with nothing in between
