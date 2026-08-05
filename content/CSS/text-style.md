# Weight, spacing and alignment

`font-weight` accepts `normal`, `bold`, or a number from 100 to 900 in steps of 100 — the number
gives you the in-between weights a font family provides.

Write `line-height` with no unit — `1.5` means 1.5 times *this* element's own font size, so a large
heading and small body text each get sensible spacing.

`text-align` positions text inside its box. `text-decoration` adds or removes the underline, which
is how you strip the default line off a link — but never let colour be the only signal that text is
a link.

## Display
### HTML

```
<h1>Course description</h1>
<p class="lead">Second-year web development, semester 1.</p>
<p>Longer paragraphs are easier to read when the lines are spaced about one and a half times the
font size, instead of packed tightly together.</p>
<p><a href="#">A link with its underline removed</a></p>
```

### CSS

```
body { line-height: 1.6; }

h1 { font-weight: 700; }

.lead {
  font-weight: 300;
  text-align: center;
}

a { text-decoration: none; }
```

### Javascript

```

```

## Your Tasks
### 1. Set the weight
`700` is what `bold` maps to; the numeric form gives you the in-between weights.

```
h1 { font-weight: 700; }
```

### 2. Give text room to breathe
No unit on `line-height`, so each element computes it from its own `font-size`.

```
p { line-height: 1.6; }
```

### 3. Centre a line of text
`text-align: center` positions the text inside its own box.

```
.lead { text-align: center; }
```

### 4. Remove a link's underline
`text-decoration: none` strips the browser's default line.

```
a { text-decoration: none; }
```

### 5. Combine weight and alignment
More than one property can style the same selector at once.

```
.lead {
  font-weight: 300;
  text-align: center;
}
```

## Exercises

### Exercise 1: A weight scale
Show the same sentence five times at weights 300, 400, 500, 700 and 900, labelled with its number.

### Exercise 2: Readable paragraph
Take a paragraph of at least eight lines and tune `line-height` from `1` to `2`. State which value
you would ship and why.

### Exercise 3: Link styling
Style links so they have no underline normally but gain one on `:hover`.

### Exercise 4: Three alignments
Show the same short paragraph three times, aligned `left`, `center` and `right`, and say which suits
body text and which suits a pull quote.

### Exercise 5: Heading style pass
Give `h1` a heavier weight, `h2` a lighter one, and both a consistent `line-height`.

## Quizes

### Q1. Why is `line-height` usually written without a unit?
1. Units are not allowed on `line-height`
2. The unitless number is a multiplier of each element's own font size
3. It makes the line height fixed for the whole page
4. It is the only way to write a value smaller than 1

### Q2. Which declaration removes the underline from a link?
1. `text-decoration: none;`
2. `text-underline: off;`
3. `font-style: normal;`
4. `border-bottom: none;`

### Q3. What does `font-weight: 300` produce compared to `font-weight: 700`?
1. A lighter weight than 700
2. A heavier weight than 700
3. The same weight, just written differently
4. An invalid value; weight must be `normal` or `bold`

### Q4. `body { font-size: 1rem; line-height: 1.5; }` and `h1 { font-size: 2rem; }`. What line height does `h1` use?
1. 24px, inherited from `body`
2. 48px, because the multiplier is applied to `h1`'s own size
3. 16px
4. The browser default, because `line-height` is not inherited

### Q5. Why should a link never rely on colour alone to show it is a link?
1. Colour is not supported on `<a>` elements
2. Some readers cannot rely on colour to tell links from plain text
3. `text-decoration` overrides colour automatically
4. Search engines ignore coloured text
