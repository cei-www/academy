# Text and fonts

`font-family` takes a list, called the font stack. The browser tries each name in order and uses the
first one installed, so the last entry must be a generic family — `sans-serif`, `serif` or
`monospace` — which always resolves to something.

`font-size` in `px` is a fixed size. `rem` is a multiple of the root font size, 16px by default, so
`1.5rem` is 24px and every `rem` size on the page scales together when a reader enlarges their
browser font. Prefer `rem` for text. (`em` behaves differently and compounds; that is the Advanced
lesson.)

`font-weight` accepts `normal`, `bold`, or a number from 100 to 900 in steps of 100.

Write `line-height` with no unit — `1.5` means 1.5 times *this* element's own font size, so a large
heading and small body text each get sensible spacing.

`text-align` positions the text inside its box, and `text-decoration` adds or removes the underline,
which is how you strip the default line off a link.

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
### 1. Set a font stack
Quote any family name that contains a space, and end with a generic family.

```
body {
  font-family: "Segoe UI", system-ui, Arial, sans-serif;
}
```

### 2. Size text in `rem`
`1.5rem` is 1.5 × the root size — 24px by default, and larger if the reader has enlarged their font.

```
h2 { font-size: 1.5rem; }
```

### 3. Set the weight
`700` is what `bold` maps to; the numeric form gives you the in-between weights.

```
h1 { font-weight: 700; }

.lead { font-weight: 300; }
```

### 4. Give the text room to breathe
No unit on `line-height`, so each element computes it from its own `font-size`.

```
body { line-height: 1.6; }
```

### 5. Align text and remove an underline
`text-decoration: none` strips the browser's default link underline.

```
.lead { text-align: center; }

a { text-decoration: none; }
```

## Exercises

### Exercise 1: Build a stack
Give `body` a four-name font stack ending in `sans-serif`, then insert a font name you know is not
installed as the first entry. Confirm in DevTools which family the browser actually used.

### Exercise 2: px versus rem
Set one heading to `24px` and another to `1.5rem`. Change the browser's default font size to 20px
and report what happened to each heading.

### Exercise 3: A weight scale
Show the same sentence five times at weights 300, 400, 500, 700 and 900, labelled with its number.

### Exercise 4: Readable paragraph
Take a paragraph of at least eight lines and tune `line-height` from `1` to `2`. State which value
you would ship and why.

### Exercise 5: Link styling
Style links so they have no underline normally but gain one on `:hover`, and make sure colour alone
is never the only signal that text is a link.

## Quizes

### Q1. Why does a font stack end with `sans-serif` or `serif`?
1. It sets the fallback text colour
2. It is a generic family the browser can always resolve
3. It forces the browser to download the font
4. It is required syntax after any quoted name

### Q2. The root font size is 16px. How large is `font-size: 1.25rem`?
1. 1.25px
2. 16px
3. 20px
4. 25px

### Q3. Why is `line-height` usually written without a unit?
1. Units are not allowed on `line-height`
2. The unitless number is a multiplier of each element's own font size
3. It makes the line height fixed for the whole page
4. It is the only way to write a value smaller than 1

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
