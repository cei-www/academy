# Character entities

Some characters cannot be typed literally in HTML because the browser would try to parse them as
markup. `&lt;` and `&gt;` write a literal `<` and `>`; `&amp;` writes a literal `&`, which would
otherwise start another entity.

A few more are just convenient: `&nbsp;` is a non-breaking space that keeps two words from wrapping
onto separate lines, and `&copy;` writes `©`. Every entity starts with `&` and ends with `;`.

## Display
### HTML

```
<p>Use &lt;p&gt; to write a paragraph tag as literal text.</p>
<p>Save &amp; Continue is a common button label.</p>
<p>&copy; 2026 KMITL Computer Engineering</p>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Write a literal `<`
`&lt;` renders as `<` without the browser trying to start a tag.

```
<p>Type &lt;h1&gt; to start a heading.</p>
```

### 2. Write a literal `&`
Typing a bare `&` risks being read as the start of another entity, so escape it.

```
<p>Terms &amp; Conditions</p>
```

### 3. Keep two words together
`&nbsp;` stops a line break from falling between them.

```
<p>10&nbsp;MB maximum file size</p>
```

### 4. Add a copyright notice
`&copy;` renders the © symbol without a special keyboard shortcut.

```
<p>&copy; 2026 CE WebDev Academy</p>
```

### 5. Write an em dash
`&mdash;` renders a long dash, useful for an aside inside a sentence.

```
<p>Office hours &mdash; Tuesdays, 13:00 to 16:00.</p>
```

## Exercises

### Exercise 1: Show example code as text
Write a paragraph that displays `<strong>bold</strong>` as visible text, not as a rendered
`<strong>` element.

### Exercise 2: Footer with copyright
Build a footer paragraph with `&copy;`, the current year, and the department name.

### Exercise 3: Prevent an awkward wrap
Use `&nbsp;` to keep "10 MB" from splitting across two lines in a narrow paragraph.

### Exercise 4: Break it on purpose
Write a paragraph with a bare, un-escaped `<` followed by ordinary text. Render it and report what
the browser did with the rest of the paragraph.

### Exercise 5: Five entities
List five character entities and, for each, the character it renders.

## Quizes

### Q1. Which entity writes a literal `<`?
1. `&lt;`
2. `&gt;`
3. `&amp;`
4. `&lte;`

### Q2. Which entity must you use to write a literal `&`?
1. `&and;`
2. `&amp;`
3. `&et;`
4. You can always type `&` directly

### Q3. Why can't you always type `<` directly in the text of a page?
1. The keyboard does not support it
2. The browser would try to parse it as the start of a tag
3. It is reserved for CSS only
4. It only breaks inside a `<script>` element

### Q4. What does `&nbsp;` do?
1. Deletes the space between two words
2. Adds a line break between two words
3. Adds a space that will not be used as a line-wrap point
4. Adds two spaces instead of one

### Q5. A paragraph contains a bare, un-escaped `<` followed by text that is not a real tag name. What typically happens?
1. The page fails to load entirely
2. The browser silently drops the rest of the document
3. The browser tries to parse it as markup, often hiding or mangling the following text
4. The `<` is automatically escaped for you
