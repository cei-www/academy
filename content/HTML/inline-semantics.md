# Inline text semantics overview

You have now met code/technical text, quotations/abbreviations/dates, and highlights/edits/scripts
on their own. Each marks a specific kind of meaning inside a sentence — none of them are just "make
this look different"; every one has a reason a screen reader or a search engine cares about.

## Display
### HTML

```
<p>Call <code>fetch(url)</code> to start a request. Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<p>As <cite>the CE-KMITL handbook</cite> puts it, <q>attendance is mandatory for all labs</q>.</p>

<p>Search results for <mark>fetch</mark> in "AJAX: Fetch and GET".</p>

<p>Water is H<sub>2</sub>O. <del>Deadline: Friday</del> <ins>Deadline: Monday</ins>.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
code { background: #EEF1F4; padding: 1px 5px; border-radius: 4px; font-family: monospace; }
kbd { background: #131A26; color: #EEF1F4; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
cite { font-style: italic; }
mark { background: #F2A93B; color: #6B4207; padding: 0 2px; }
del { color: #B91C1C; }
ins { color: #15803D; text-decoration: underline; }
```

### Javascript

```

```

## Your Tasks
### 1. Mark a code fragment
`<code>` is for a short piece of code inline with text, not a whole block.

```
<p>Call <code>document.querySelector()</code> to find an element.</p>
```

### 2. Quote a source
`<cite>` names the source; `<q>` wraps the quoted words and renders its own quotation marks.

```
<p>As <cite>the syllabus</cite> states, <q>labs start on time</q>.</p>
```

### 3. Highlight a search match
`<mark>` says "this is relevant right now", not just "color this text".

```
<p>Result: "fetch" appears in <mark>fetch</mark>(url).</p>
```

### 4. Write a subscript formula
`<sub>` positions text below the baseline, for chemical formulas.

```
<p>Carbon dioxide is CO<sub>2</sub>.</p>
```

### 5. Track an edit
`<del>` and `<ins>` show what changed without erasing the history of the change.

```
<p><del>Room ECC-401</del> <ins>Room ECC-402</ins></p>
```

## Exercises

### Exercise 1: Document a function
Write one paragraph describing a function, using `<code>` for its name and `<var>` for each
parameter name.

### Exercise 2: Blockquote with attribution
Quote a two-sentence passage inside `<blockquote>`, with a `<footer>` naming the source using
`<cite>`.

### Exercise 3: Search results
Write three lines of search-result text where the matched word in each is wrapped in `<mark>`.

### Exercise 4: Two formulas
Write water (`H2O`) and carbon dioxide (`CO2`) using `<sub>` for the correct digits.

### Exercise 5: Revision history
Write a sentence showing an edited deadline or room number using `<del>` for the old value and
`<ins>` for the new one.

## Quizes

### Q1. What does `<code>` mark?
1. A block quotation
2. A fragment of code
3. A citation for a source
4. Emphasised text

### Q2. What is the difference between `<blockquote>` and `<q>`?
1. `<blockquote>` is for a block-level quotation; `<q>` is for a short inline quotation
2. There is no difference
3. `<q>` can only appear inside `<blockquote>`
4. `<blockquote>` requires a `cite` attribute; `<q>` does not

### Q3. What does `<mark>` represent?
1. Any text the author wants colored yellow
2. Text highlighted as relevant to the current context, such as a search match
3. A required form field
4. A footnote reference

### Q4. Which element renders text below the baseline?
1. `<sup>`
2. `<sub>`
3. `<small>`
4. `<mark>`

### Q5. Which pair of elements marks a deletion and an insertion?
1. `<sub>` and `<sup>`
2. `<mark>` and `<small>`
3. `<del>` and `<ins>`
4. `<s>` and `<u>`
