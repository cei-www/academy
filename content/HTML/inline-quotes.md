# Quotations, abbreviations and dates

`<blockquote>` is a quoted block long enough to stand on its own; `<q>` is a short quotation inline
with text, and the browser adds the quotation marks for you. `<cite>` names the source being quoted —
a book, a paper, a person's work. `<abbr title="…">` expands an abbreviation on hover and for screen
readers. `<time datetime="…">` marks a machine-readable date or time alongside human-readable text.

## Display
### HTML

```
<blockquote cite="https://www.w3.org/">
  <p>The Web is more a social creation than a technical one.</p>
  <footer>— <cite>Tim Berners-Lee</cite></footer>
</blockquote>

<p>As <cite>the CE-KMITL handbook</cite> puts it, <q>attendance is mandatory for all labs</q>.</p>

<p>Read the <abbr title="Hypertext Markup Language">HTML</abbr> spec before the next lab.</p>

<p>The lab report is due on <time datetime="2026-09-01">September 1, 2026</time>.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
blockquote { border-left: 4px solid #F2A93B; margin: 0; padding: 8px 16px; color: #4B5563; }
blockquote footer { font-size: 13px; margin-top: 6px; }
cite { font-style: italic; }
abbr { text-decoration: underline dotted; cursor: help; }
time { color: #6B4207; font-weight: 600; }
```

### Javascript

```

```

## Your Tasks
### 1. Quote a longer passage
`<blockquote>` can hold multiple elements, not just one paragraph.

```
<blockquote cite="https://example.com/source">
  <p>A quotation long enough to stand as its own block.</p>
</blockquote>
```

### 2. Quote inline
`<q>` renders its own quotation marks — do not type them yourself.

```
<p>She said <q>the deadline is Friday</q> during the lecture.</p>
```

### 3. Name a source
`<cite>` names the work or person being quoted, not the quotation itself.

```
<p>As <cite>the CE-KMITL handbook</cite> states, attendance is required.</p>
```

### 4. Expand an abbreviation
`title` supplies the expansion; the browser shows it on hover and to assistive technology.

```
<abbr title="Application Programming Interface">API</abbr>
```

### 5. Mark a machine-readable date
`datetime` is the value software reads; the text between the tags is what a visitor sees.

```
<time datetime="2026-09-01">1 September 2026</time>
```

## Exercises

### Exercise 1: Blockquote with attribution
Quote a two-sentence passage inside `<blockquote>`, with a `<footer>` naming the source using
`<cite>`.

### Exercise 2: Inline quote
Write a sentence that quotes someone using `<q>`, and confirm in DevTools that the browser rendered
its own quotation marks.

### Exercise 3: Three abbreviations
Mark three technical abbreviations (`HTML`, `CSS`, `API`) with `<abbr title="…">` in one paragraph.

### Exercise 4: Event date
Write a sentence announcing an event, marking its date with `<time datetime="…">` using the correct
ISO format.

### Exercise 5: Source vs quotation
Take a sentence that quotes a person and mixes up `<cite>` and `<q>` (using `<cite>` for the words
actually spoken). Fix it and explain the difference in one sentence.

## Quizes

### Q1. What is the difference between `<blockquote>` and `<q>`?
1. `<blockquote>` is for a block-level quotation; `<q>` is for a short inline quotation
2. There is no difference
3. `<q>` can only appear inside `<blockquote>`
4. `<blockquote>` requires a `cite` attribute; `<q>` does not

### Q2. What does `<cite>` mark?
1. The quoted words themselves
2. The source or work being referenced
3. A citation number, like a footnote
4. A block of preserved whitespace

### Q3. What does the `title` attribute on `<abbr>` provide?
1. A tooltip with the full expansion of the abbreviation
2. The pronunciation of the abbreviation
3. A link to a glossary page
4. Nothing — it is purely decorative

### Q4. What is the purpose of the `datetime` attribute on `<time>`?
1. It sets the page's time zone
2. It gives a machine-readable value while the visible text stays human-readable
3. It triggers a calendar reminder automatically
4. It is required for the element to render at all

### Q5. Does `<q>` add its own quotation marks?
1. No — you must type them yourself
2. Yes — the browser renders them automatically
3. Only if `cite` is present
4. Only in `lang="en"` pages
