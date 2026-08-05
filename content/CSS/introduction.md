# Introduction

CSS (Cascading Style Sheets) decides how HTML looks — color, size, spacing, layout. HTML says what
a thing is; CSS says how it is presented. Attaching CSS to a page is covered in *Adding CSS* back in
Basic HTML; this group is about the language itself.

```
h1 { color: #0F1B33; }   /* selector { property: value; } */
```

`h1` is the **selector** — it picks which elements the rule applies to. `{ }` is the **declaration
block**. Inside it, each `property: value` pair is one **declaration**, and every declaration ends
with a semicolon. One rule can hold as many declarations as you like.

`/* … */` is a comment; CSS has no `//`. When two equally specific rules set the same property, the
later one wins — a more specific selector can win too, which the Advanced group covers.

## Display
### HTML

```
<h1>CE WebDev Academy</h1>
<p>HTML gives this page its structure.</p>
<p class="note">CSS gives it style. Change a value and press Render.</p>
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
### 1. Name the parts of a rule
Selector, declaration block, property, value — four words that describe every rule you will write.

```
h1 { color: #0F1B33; }
/* h1 = selector, { } = declaration block, color = property, #0F1B33 = value */
```

### 2. Write a rule
One selector, then any number of declarations inside the braces.

```
p {
  color: #4B5563;
  font-size: 18px;
}
```

### 3. Put several declarations in one rule
Each declaration ends with a semicolon, so the browser knows where the next one starts.

```
.note {
  background-color: #F2A93B;
  padding: 8px;
  font-weight: 700;
}
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

### Exercise 1: Label the parts
Write one rule with three declarations, then label its selector, declaration block, and each
property and value by name.

### Exercise 2: One rule, four declarations
Write a single rule for `h1` that sets `color`, `background-color`, `padding` and `text-align`.

### Exercise 3: Break it on purpose
Delete the semicolon after the first of two declarations. Open the DevTools Styles panel and report
which declarations the browser kept and which it dropped.

### Exercise 4: Predict the winner
Write two rules for `p` that both set `background-color`. Predict the color that appears, then
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

### Q2. In `h1 { color: #0F1B33; }`, what is `h1`?
1. The property
2. The value
3. The selector
4. The declaration block

### Q3. A stylesheet contains `p { color: teal; }` and then `p { color: #0F1B33; }`. What color is the paragraph text?
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
