# Text overview

You have now met headings and paragraphs on their own. A real page combines them: a heading
hierarchy that outlines the page, paragraphs that carry the content, and inline emphasis where a
word or phrase genuinely needs it.

## Display
### HTML

```
<h1>CE WebDev Academy</h1>

<h2>Course description</h2>
<p>
  This    course     covers
  HTML, CSS and JavaScript.
</p>

<h3>Grading</h3>
<p>Attendance is <strong>required</strong>. Late work is <em>usually</em> accepted.</p>

<blockquote>Structure first, style second.</blockquote>

<hr>

<p>Room ECC-703<br>CE-KMITL</p>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Build a heading hierarchy
One `<h1>`, then `<h2>` for each section, then `<h3>` inside a section. No skipped levels.

```
<h1>Computer Engineering</h1>
<h2>Year 2</h2>
<h3>Semester 1</h3>
<h2>Year 3</h2>
```

### 2. Add a paragraph under a section
A section's heading is followed by the text it introduces.

```
<h2>Course description</h2>
<p>This course covers HTML, CSS and JavaScript.</p>
```

### 3. Mark importance inside a paragraph
`<strong>` for importance, `<em>` for stress, both inside the flow of a sentence.

```
<p>The exam is <strong>on Monday</strong>, and it is <em>closed book</em>.</p>
```

### 4. Insert a quote between two sections
`<blockquote>` is a block; `<hr>` after it separates the sections that follow.

```
<blockquote>Semantic markup is the cheapest accessibility work there is.</blockquote>
<hr>
<p>Next section.</p>
```

### 5. Close with a contact block
An address is one paragraph whose lines must stay apart with `<br>`.

```
<p>
  Rathachai Chawuthai<br>
  CE-KMITL
</p>
```

## Exercises

### Exercise 1: Outline a syllabus
Write a page with one `<h1>`, three `<h2>` sections and at least two `<h3>` under one of them, each
followed by a paragraph.

### Exercise 2: Full page assembly
Combine everything from this group: a heading hierarchy, at least one paragraph with `<strong>`/`<em>`,
a `<blockquote>` with a following `<hr>`, and a contact block using `<br>`.

### Exercise 3: Replace the wrong tags
Take `<p><b>Warning</b>: submit <i>before</i> midnight.</p>` and rewrite it with the semantic
elements, then explain in one sentence what changed for a screen-reader user.

### Exercise 4: `<br>` audit
Write a two-line address and a two-paragraph description inside the same page. Use `<br>` in exactly
one of them and say why the other one must not have it.

### Exercise 5: Read the outline
Render your syllabus page, open DevTools' Elements panel, and list the heading elements in document
order. Report any level you skipped.

## Quizes

### Q1. How many `<h1>` elements should a normal page have?
1. As many as you like, one per section
2. One
3. Exactly six, one per level
4. None — `<h1>` is reserved for the site name

### Q2. What does `<strong>` add that `<b>` does not?
1. A larger font size
2. Meaning — it marks the content as important
3. A different colour
4. Nothing; they are identical

### Q3. Your source says `<p>KMITL    Bangkok</p>` with four spaces. What does the browser show?
1. Four spaces between the words
2. A line break between the words
3. One space between the words
4. The words joined with no space

### Q4. When is `<br>` the right element?
1. To leave a blank line between two paragraphs
2. To push content down the page
3. To start a new section
4. To break a line inside a single block of text, such as an address

### Q5. A section titled with `<h2>` needs a sub-section. Which heading should it use?
1. `<h1>`
2. `<h3>`
3. `<h4>`
4. `<h2>` again
