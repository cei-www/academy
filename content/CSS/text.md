# Text overview

You have now met text styling in three pieces: `color`, the font stack and size, and weight with
spacing and alignment. A real page combines all three — a consistent look comes from applying them
together, not from picking properties one at a time.

## Display
### HTML

```
<h1>KMITL Computer Engineering</h1>
<p class="lead">Second-year web development, semester 1.</p>
<p>Body text at one rem with a comfortable line height. Long paragraphs are much easier to read
when the lines are spaced about one and a half times the font size.</p>
<p><a href="#">A link with its underline removed</a></p>
```

### CSS

```
body {
  font-family: "Segoe UI", system-ui, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #131A26;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #0F1B33;
}

.lead {
  font-size: 1.25rem;
  text-align: center;
  color: #4B5563;
}

a { color: #6B4207; text-decoration: none; }
```

### Javascript

```

```

## Your Tasks
### 1. Style a heading in one pass
Color, weight and size together give a heading its identity.

```
h1 {
  color: #0F1B33;
  font-weight: 700;
  font-size: 2rem;
}
```

### 2. Build a readable body paragraph
Font stack, size and line height work together to make long text comfortable to read.

```
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
```

### 3. Style a lead paragraph
A lead paragraph is usually larger, centred and a softer color than body text.

```
.lead {
  font-size: 1.25rem;
  text-align: center;
  color: #4B5563;
}
```

### 4. Style a link
Give it its own color and remove the default underline.

```
a {
  color: #6B4207;
  text-decoration: none;
}
```

### 5. Build a consistent scale
`h1`, `h2` and body text should share one font stack and a proportional size scale.

```
body, h1, h2 { font-family: system-ui, sans-serif; }
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
```

## Exercises

### Exercise 1: Style an article
Combine everything from this group: give a heading its own color and weight, a lead paragraph its
own size and alignment, body text a font stack and line height, and a link a color with no
underline.

### Exercise 2: Style guide page
List `h1`, `h2`, a lead paragraph and a link, each showing its own rules and a one-line note on why
you chose those values.

### Exercise 3: Fix an inconsistent page
Given three paragraphs with three different font stacks, unify them into one consistent stack.

### Exercise 4: Hover feedback
Style links so they have no underline normally but gain one on `:hover`, and make sure color alone
is never the only signal that text is a link.

### Exercise 5: Readable long-form text
Take a paragraph of at least eight lines, and choose a font size, line height and color you would
actually ship for a course reading page. Justify each choice in one sentence.

## Quizes

### Q1. Why does a font stack end with `sans-serif` or `serif`?
1. It sets the fallback text color
2. It is a generic family the browser can always resolve
3. It forces the browser to download the font
4. It is required syntax after any quoted name

### Q2. The root font size is 16px. How large is `font-size: 1.25rem`?
1. 1.25px
2. 16px
3. 20px
4. 25px

### Q3. Which set of declarations together gives a heading its own consistent look?
1. `color`, `font-weight` and `font-size` used together
2. `color` alone is always enough
3. `line-height` alone controls a heading's appearance
4. `text-align` replaces the need for `color`

### Q4. Which declaration removes the underline from a link?
1. `text-decoration: none;`
2. `text-underline: off;`
3. `font-style: normal;`
4. `border-bottom: none;`

### Q5. `body { font-size: 1rem; line-height: 1.5; }` and `h1 { font-size: 2rem; }`. What line height does the `h1` use?
1. 24px, inherited from `body`
2. 48px, because the multiplier is applied to the `h1`'s own size
3. 16px
4. The browser default, because `line-height` is not inherited
