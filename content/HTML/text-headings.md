# Headings

`<h1>` to `<h6>` are the six heading levels. `<h1>` is the page's one main title; each level below it
opens a sub-section. Do not skip levels — an `<h4>` directly under an `<h2>` reads as a missing
section to a screen reader, which lets its users jump through the page by heading.

Choose the level for the structure it expresses, never for the size it happens to render at — size
is CSS's job, and this course has not reached CSS yet.

## Display
### HTML

```
<h1>CE WebDev Academy</h1>

<h2>Course description</h2>
<h3>Grading</h3>

<h2>Contact</h2>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Write the one main title
`<h1>` should appear once per page.

```
<h1>Computer Engineering</h1>
```

### 2. Open a section
`<h2>` starts a section under the page's `<h1>`.

```
<h2>Year 2</h2>
```

### 3. Open a sub-section
`<h3>` nests one level under the `<h2>` it belongs to — no skipping to `<h4>`.

```
<h2>Year 2</h2>
<h3>Semester 1</h3>
```

### 4. Add a sibling section
Two `<h2>` elements are two sections at the same level, not nested inside each other.

```
<h2>Year 2</h2>
<h2>Year 3</h2>
```

### 5. Fix a skipped level
A `<h4>` straight under a `<h2>` skips `<h3>` — insert the missing level.

```
<h2>Grading</h2>
<h3>Assignments</h3>
<h4>Late policy</h4>
```

## Exercises

### Exercise 1: Outline a syllabus
Write one `<h1>`, three `<h2>` sections, and at least two `<h3>` under one of them.

### Exercise 2: Read the outline
Render your syllabus page, open DevTools' Elements panel, and list the heading elements in document
order.

### Exercise 3: Find the skipped level
Given a page with `<h1>`, `<h2>`, then `<h4>`, identify which level is missing and insert it.

### Exercise 4: Explain the rule
Write one sentence on why heading level should never be chosen for its default font size.

### Exercise 5: Multi-chapter outline
Build a three-level outline for a book: one `<h1>` title, two `<h2>` chapters, two `<h3>` sections
inside one chapter.

## Quizes

### Q1. How many `<h1>` elements should a normal page have?
1. As many as you like, one per section
2. One
3. Exactly six, one per level
4. None — `<h1>` is reserved for the site name

### Q2. Why should heading levels not be skipped?
1. Browsers refuse to render a skipped level
2. It breaks CSS entirely
3. Screen-reader users jump through a page by heading level, so a skip reads as a missing section
4. Skipped levels are automatically renumbered

### Q3. What should decide a heading's level?
1. The font size it should render at
2. The section's position in the page's structure
3. Whether it fits on one line
4. The order it was written in, regardless of structure

### Q4. A page has `<h1>`, `<h2>`, then `<h4>` with no `<h3>` between them. What is wrong?
1. Nothing; this is a valid structure
2. The `<h4>` should be a `<h1>` instead
3. A heading level was skipped
4. Two `<h2>` elements are required before a `<h4>`

### Q5. A section titled with `<h2>` needs a sub-section. Which heading should it use?
1. `<h1>`
2. `<h3>`
3. `<h4>`
4. `<h2>` again
