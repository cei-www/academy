# Text Color

The `color` property sets the *foreground* colour of an element — its text, and by default its `text-decoration` and `border-color` too, since both resolve to `currentColor` unless overridden. Unlike most properties, `color` is **inherited**: set it on `<body>` and every descendant adopts it until some rule says otherwise.

## Colour value formats

- **Named** — `red`, `teal`, `rebeccapurple` (148 keywords; fine for prototypes, poor for design systems)
- **Hexadecimal** — `#ff0000`, `#f00`, and with alpha `#ff000080`
- **`rgb()` / `rgba()`** — `rgb(255 0 0)`, `rgb(255 0 0 / 50%)` (modern space-separated syntax)
- **`hsl()`** — `hsl(0 100% 50%)`; hue/saturation/lightness makes programmatic variants (hover, disabled) far easier to derive than hex
- **`currentColor`** — the element's own computed `color`, useful for keeping icons and borders in sync
- **Custom properties** — `var(--brand)`, the basis of theming and dark mode

## Contrast is a requirement, not a preference

WCAG 2.1 defines a minimum contrast ratio between text and its background: **4.5:1** for normal text and **3:1** for large text (≥ 24 px, or ≥ 18.7 px bold) at level AA. Light grey on white looks elegant in a mockup and is unreadable on a laptop in daylight. Verify contrast with DevTools' colour picker rather than trusting your eye, and never rely on colour *alone* to convey meaning — roughly 1 in 12 men has a colour vision deficiency, so pair a red error state with an icon or text label.

## Display
### HTML

```
<article class="report">
  <h1>System Status</h1>
  <h2>Ingest pipeline</h2>
  <p>All nodes reporting <span class="ok">nominal</span>.</p>
  <p class="alert">Warning: queue depth exceeds threshold.</p>
</article>
```

### CSS

```
:root {
  --ink: #0f172a;
  --muted: #475569;
  --danger: #b91c1c;
  --success: #15803d;
}

.report  { color: var(--ink); }
h2       { color: var(--muted); }
.ok      { color: var(--success); font-weight: 600; }
.alert   { color: var(--danger); }
```

### Javascript

```

```

## Your Tasks
### 1. Set colour with each value format
Express the same visual colour four ways and confirm they render identically.

```
h1 { color: red; }                 /* named          */
h1 { color: #ff0000; }             /* hex            */
h1 { color: rgb(255 0 0); }        /* rgb()          */
h1 { color: hsl(0 100% 50%); }     /* hsl()          */
```

### 2. Exploit inheritance
Set the colour once at the root and let it cascade, overriding only where a different value is genuinely needed.

```
body {
  color: #0f172a;   /* inherited by every descendant */
}

.muted {
  color: #64748b;   /* the deliberate exception      */
}
```

### 3. Define a token-based palette
Declare colours as custom properties on `:root` and reference them, so a palette change is a one-line edit instead of a find-and-replace.

```
:root {
  --brand: #b45309;
  --ink: #0f172a;
}

h1 { color: var(--ink); }
a  { color: var(--brand); }
```

### 4. Use alpha for a semi-transparent foreground
Apply partial transparency to text, and note that `color` alpha affects only the glyphs — not the element's background.

```
.watermark {
  color: rgb(15 23 42 / 35%);
}
```

### 5. Keep decorations in sync with `currentColor`
Style a border and an underline so they automatically track whatever text colour the element ends up with.

```
.callout {
  color: var(--brand);
  border-left: 4px solid currentColor;
  text-decoration-color: currentColor;
  padding-left: 12px;
}
```

## Exercises

### Exercise 1: Semantic palette
Define five custom properties — `--ink`, `--muted`, `--brand`, `--danger`, `--success` — on `:root` and apply them across a small page. Explain why naming a token `--danger` is more maintainable than naming it `--red`.

### Exercise 2: HSL-derived variants
Pick a single brand hue and derive three states from it using `hsl()`: the base, a hover state 10% darker, and a disabled state 30% desaturated. Show all three as buttons and state why HSL made this easier than hex.

### Exercise 3: Contrast audit
Measure the contrast ratio of at least four text/background pairs on a page of your own using browser DevTools or a contrast checker. Report each ratio, mark it pass or fail against WCAG AA (4.5:1), and fix every failure.

### Exercise 4: Colour is not the only channel
Build a form validation message that indicates an error state. It must remain unambiguous when rendered in greyscale — combine colour with at least one non-colour cue (icon, weight, prefix text, or border style). Screenshot it in greyscale to prove it works.

### Exercise 5: Theme switch
Implement a light and a dark theme using custom properties redefined under a `[data-theme="dark"]` attribute selector or a `prefers-color-scheme` media query. Verify that contrast requirements are met in *both* themes, and report any colour you had to adjust per theme.

## Quizes

### Q1. Which CSS property sets the colour of an element's text?
1. `text-color`
2. `color`
3. `font-color`
4. `foreground`

### Q2. Which statement about the `color` property is correct?
1. It is not inherited, so every element must declare it explicitly
2. It is inherited by descendant elements unless they override it
3. It applies only to elements whose `display` is `inline`
4. It also sets the element's background colour

### Q3. Which of the following is **not** a valid CSS colour value?
1. `#ff9900`
2. `rgb(255 153 0 / 50%)`
3. `hsl(36 100% 50%)`
4. `colour(255, 153, 0)`

### Q4. Given the stylesheet `h1 { color: blue; }` and `.title { color: green; }` applied to `<h1 class="title">Hello</h1>`, what colour is the text, and why?
1. Blue, because type selectors are evaluated first
2. Green, because the class selector's specificity (0,1,0) outranks the type selector's (0,0,1)
3. Black, because the conflicting rules cancel out
4. Green, but only because it appears later in the stylesheet

### Q5. A designer specifies `#9ca3af` text on a `#ffffff` background (contrast ratio ≈ 2.5:1) for body copy. What is the correct engineering response?
1. Accept it; contrast ratios are stylistic guidance, not requirements
2. Accept it and add `font-weight: bold`, which exempts text from contrast rules
3. Reject it: normal-size text requires at least 4.5:1 for WCAG AA, so the colour must be darkened
4. Reject it and switch to a named colour, since hex values do not support contrast checking
