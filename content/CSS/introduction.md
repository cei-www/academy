# Introduction

CSS (Cascading Style Sheets) decides how HTML looks — colour, size, spacing, layout. HTML says what
a thing is; CSS says how it is presented.

There are three ways to attach it:

- inline — a `style` attribute on one element
- internal — a `<style>` block in the `<head>`
- external — a separate file linked with `<link rel="stylesheet" href="style.css">`

Use external for real work. One file styles every page, the browser caches it, and the markup stays
readable.

```
h1 { color: #0F1B33; }   /* selector { property: value; } */
```

`h1` is the selector, `{ }` is the declaration block, and every `property: value` declaration ends
with a semicolon. `/* … */` is a comment; CSS has no `//`. When two equally specific rules set the
same property, the later one wins — a more specific selector can win too, which the Advanced group
covers.

## Display
### HTML

```
<h1>CE WebDev Academy</h1>
<p>HTML gives this page its structure.</p>
<p class="note">CSS gives it style. Change a value and press Render.</p>
<p style="color: #6B4207;">This paragraph is styled inline.</p>
```

### CSS

```
/* selector { property: value; } */
body {
  font-family: system-ui, sans-serif;
  background-color: #EEF1F4;
  color: #131A26;
}

h1 { color: #0F1B33; }

.note {
  background-color: #F2A93B;
  padding: 8px;
}
```

### Javascript

```

```

## Your Tasks
### 1. Link an external stylesheet
The `<link>` goes in the `<head>`, and `href` is relative to the HTML file.

```
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

### 2. Write a rule
One selector, then any number of declarations inside the braces.

```
p {
  color: #4B5563;
  font-size: 18px;
}
```

### 3. Style a single element inline
Fine for a quick test, bad for a real site — the rule cannot be reused or cached.

```
<p style="color: #6B4207; background-color: #F2A93B;">Notice me</p>
```

### 4. Comment out a declaration
The browser skips anything between `/*` and `*/`, so the element keeps its other declarations.

```
h1 {
  color: #0F1B33;
  /* font-size: 40px; */
}
```

### 5. Let the later rule win
Both selectors are equally specific, so the second `color` replaces the first.

```
h1 { color: teal; }
h1 { color: #0F1B33; }   /* the heading is navy */
```

## Exercises

### Exercise 1: Three ways, one paragraph
Colour the same paragraph navy three times — inline, in a `<style>` block, and from a linked file.
Remove them one at a time and record which colour survives each removal.

### Exercise 2: One rule, four declarations
Write a single rule for `h1` that sets `color`, `background-color`, `padding` and `text-align`.

### Exercise 3: Break it on purpose
Delete the semicolon after the first of two declarations. Open the DevTools Styles panel and report
which declarations the browser kept and which it dropped.

### Exercise 4: Predict the winner
Write two rules for `p` that both set `background-color`. Predict the colour that appears, then
render the page and check whether you were right.

### Exercise 5: Comment out a whole rule
Comment out a complete rule, selector and all, so the element falls back to the browser default.
Confirm in DevTools that the rule is absent, not merely crossed out.

## Quizes

### Q1. Which line is a complete CSS declaration?
1. `color: #0F1B33;`
2. `h1 { }`
3. `.note`
4. `<style>`

### Q2. Why is an external stylesheet preferred for a real site?
1. Inline styles are not supported by modern browsers
2. It loads before the HTML is parsed
3. Hex colours only work in an external file
4. One file styles every page and the browser caches it

### Q3. A stylesheet contains `p { color: teal; }` and then `p { color: #0F1B33; }`. What colour is the paragraph text?
1. The browser default black
2. teal, because it was declared first
3. navy `#0F1B33`, because it was declared last
4. Neither — the conflicting rules cancel each other out

### Q4. Which is a valid CSS comment?
1. `// hidden`
2. `<!-- hidden -->`
3. `# hidden`
4. `/* hidden */`

### Q5. In `.note { padding: 8px; }`, what is `8px`?
1. The selector
2. The property
3. The value
4. The declaration block
