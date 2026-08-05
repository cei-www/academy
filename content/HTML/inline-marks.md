# Highlights, edits and scripts

`<mark>` highlights text relevant to the current context — a search match, not just "make this
yellow". `<small>` marks fine print such as legal text or disclaimers, a meaning beyond its default
smaller size. `<sub>` and `<sup>` position text below or above the baseline, for chemical formulas,
footnote markers and exponents. `<del>` and `<ins>` mark a deletion and an insertion — tracked
changes, usually rendered with strikethrough and underline.

## Display
### HTML

```
<p>Search results for <mark>fetch</mark> in "AJAX: Fetch and GET".</p>

<p>Course fee: 1,200 THB<br><small>Prices include VAT and may change each semester.</small></p>

<p>Water is H<sub>2</sub>O; the area of a circle is πr<sup>2</sup>.</p>

<p><del>Deadline: Friday</del> <ins>Deadline: Monday</ins></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
mark { background: #F2A93B; color: #6B4207; padding: 0 2px; }
small { color: #4B5563; }
del { color: #B91C1C; }
ins { color: #15803D; text-decoration: underline; }
```

### Javascript

```

```

## Your Tasks
### 1. Highlight a search match
`<mark>` says "this is relevant right now", not just "color this text".

```
<p>Result: "fetch" appears in <mark>fetch</mark>(url).</p>
```

### 2. Add fine print
`<small>` carries meaning — disclaimers, terms, legal text — beyond a smaller font size.

```
<p>29 THB/month.<br><small>Cancel anytime. Terms apply.</small></p>
```

### 3. Write a subscript
`<sub>` positions text below the baseline, for chemical formulas and footnote markers.

```
<p>Carbon dioxide is CO<sub>2</sub>.</p>
```

### 4. Write a superscript
`<sup>` positions text above the baseline, for exponents and ordinal suffixes.

```
<p>2<sup>10</sup> equals 1024.</p>
```

### 5. Track an edit
`<del>` and `<ins>` show what changed without erasing the history of the change.

```
<p><del>Room ECC-401</del> <ins>Room ECC-402</ins></p>
```

## Exercises

### Exercise 1: Search results
Write three lines of search-result text where the matched word in each is wrapped in `<mark>`.

### Exercise 2: Pricing footnote
Show a course fee with `<small>` fine print explaining what it includes.

### Exercise 3: Two formulas
Write water (`H2O`) and carbon dioxide (`CO2`) using `<sub>` for the correct digits.

### Exercise 4: Exponent expression
Write "the area of a circle is πr²" using `<sup>` for the exponent.

### Exercise 5: Revision history
Write a sentence showing an edited deadline or room number using `<del>` for the old value and
`<ins>` for the new one.

## Quizes

### Q1. What does `<mark>` represent?
1. Any text the author wants colored yellow
2. Text highlighted as relevant to the current context, such as a search match
3. A required form field
4. A footnote reference

### Q2. What does `<small>` mean beyond a smaller font size?
1. Nothing — it is purely visual
2. Fine print, such as disclaimers or legal text
3. A synonym for `<span>`
4. Text that should not be indexed by search engines

### Q3. Which element renders text below the baseline?
1. `<sup>`
2. `<sub>`
3. `<small>`
4. `<mark>`

### Q4. Given `<p><del>10</del> <ins>12</ins> seats</p>`, what does this represent?
1. A form validation error
2. A tracked change — the seat count was edited from 10 to 12
3. A typo the browser will auto-correct
4. Two separate, unrelated numbers

### Q5. Which pair of elements marks a deletion and an insertion?
1. `<sub>` and `<sup>`
2. `<mark>` and `<small>`
3. `<del>` and `<ins>`
4. `<s>` and `<u>`
