# Text and headings

`<h1>` to `<h6>` are the six heading levels. `<h1>` is the page's one main title; each level below it
opens a sub-section. Do not skip levels — an `<h4>` under an `<h2>` reads as a missing section to a
screen reader, which lets its users jump through the page by heading. Choose the level for the
structure it expresses, never for the size it happens to render at; size is CSS's job.

`<p>` marks a paragraph. Use a new `<p>` for a new thought. `<br>` is only a forced line break
*inside* one block of text — an address, a line of a poem — never a way to add space between
paragraphs.

`<strong>` means the content is important, `<em>` means it is stressed or emphasised. Both are
announced by screen readers. `<b>` and `<i>` only change the letters' shape and carry no meaning, so
prefer the semantic pair.

`<blockquote>` wraps quoted material, and `<hr>` marks a thematic break between sections. One last
rule: HTML collapses whitespace — any run of spaces, tabs and newlines in your source renders as a
single space.

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

<p>Room ECC-703<br>Faculty of Engineering, KMITL</p>
```

### CSS

```
body {
  font-family: system-ui, sans-serif;
  color: #131A26;
  margin: 16px;
}

blockquote {
  border-left: 4px solid #F2A93B;
  margin-left: 0;
  padding-left: 12px;
  color: #4B5563;
}
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

### 2. Write two paragraphs
Two separate thoughts need two `<p>` elements, not one paragraph split by `<br>`.

```
<p>HTML gives a document its structure.</p>
<p>CSS then decides how that structure looks.</p>
```

### 3. Break a line inside a paragraph
An address is one paragraph whose lines must stay apart.

```
<p>
  Nattapong Srisai<br>
  1 Chalong Krung Road<br>
  Ladkrabang, Bangkok 10520
</p>
```

### 4. Mark importance and emphasis
`<strong>` for importance, `<em>` for stress.

```
<p>The exam is <strong>on Monday</strong>, and it is <em>closed book</em>.</p>
```

### 5. Quote a source
`<blockquote>` is a block; `<hr>` after it separates the sections.

```
<blockquote>Semantic markup is the cheapest accessibility work there is.</blockquote>
<hr>
<p>Next section.</p>
```

## Exercises

### Exercise 1: Outline a syllabus
Write a page with one `<h1>`, three `<h2>` sections and at least two `<h3>` under one of them, each
followed by a paragraph.

### Exercise 2: Prove whitespace collapsing
Type a paragraph with ten spaces and two newlines in the middle of a sentence. Render it, then state
how many spaces actually appear.

### Exercise 3: Replace the wrong tags
Take `<p><b>Warning</b>: submit <i>before</i> midnight.</p>` and rewrite it with the semantic
elements, then explain in one sentence what changed for a screen-reader user.

### Exercise 4: `<br>` audit
Write a two-line address and a two-paragraph description. Use `<br>` in exactly one of them and say
why the other one must not have it.

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
