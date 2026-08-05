# Paragraphs and emphasis

`<p>` marks a paragraph. Use a new `<p>` for a new thought. `<br>` is only a forced line break
*inside* one block of text — an address, a line of a poem — never a way to add space between
paragraphs.

`<strong>` means the content is important, `<em>` means it is stressed or emphasised — both are
announced by screen readers. `<b>` and `<i>` only change the letters' shape and carry no meaning, so
prefer the semantic pair.

`<blockquote>` wraps quoted material, and `<hr>` marks a thematic break between sections. HTML
collapses whitespace: any run of spaces, tabs and newlines in your source renders as a single space.

## Display
### HTML

```
<p>
  This    course     covers
  HTML, CSS and JavaScript.
</p>

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
### 1. Write two paragraphs
Two separate thoughts need two `<p>` elements, not one paragraph split by `<br>`.

```
<p>HTML gives a document its structure.</p>
<p>CSS then decides how that structure looks.</p>
```

### 2. Break a line inside a paragraph
An address is one paragraph whose lines must stay apart.

```
<p>
  Rathachai Chawuthai<br>
  1 Chalong Krung Road<br>
  Ladkrabang, Bangkok 10520
</p>
```

### 3. Mark importance and emphasis
`<strong>` for importance, `<em>` for stress.

```
<p>The exam is <strong>on Monday</strong>, and it is <em>closed book</em>.</p>
```

### 4. Quote a source
`<blockquote>` is a block; `<hr>` after it separates the sections.

```
<blockquote>Semantic markup is the cheapest accessibility work there is.</blockquote>
<hr>
<p>Next section.</p>
```

### 5. Prove whitespace collapsing
Extra spaces and line breaks in the source still render as a single space.

```
<p>Many     spaces
and
lines collapse to one space each.</p>
```

## Exercises

### Exercise 1: Replace the wrong tags
Take `<p><b>Warning</b>: submit <i>before</i> midnight.</p>` and rewrite it with the semantic
elements, then explain in one sentence what changed for a screen-reader user.

### Exercise 2: `<br>` audit
Write a two-line address and a two-paragraph description. Use `<br>` in exactly one of them and say
why the other one must not have it.

### Exercise 3: Prove whitespace collapsing
Type a paragraph with ten spaces and two newlines in the middle of a sentence. Render it, then state
how many spaces actually appear.

### Exercise 4: Quote and divide
Write two short sections separated by a `<blockquote>` and a `<hr>`.

### Exercise 5: Count the paragraphs
Render a page with five `<p>` elements, open the console, and use
`document.querySelectorAll("p").length` to confirm the count.

## Quizes

### Q1. What does `<strong>` add that `<b>` does not?
1. A larger font size
2. Meaning — it marks the content as important
3. A different color
4. Nothing; they are identical

### Q2. Your source says `<p>KMITL    Bangkok</p>` with four spaces. What does the browser show?
1. Four spaces between the words
2. A line break between the words
3. One space between the words
4. The words joined with no space

### Q3. When is `<br>` the right element?
1. To leave a blank line between two paragraphs
2. To push content down the page
3. To start a new section
4. To break a line inside a single block of text, such as an address

### Q4. What does `<blockquote>` mark?
1. A sidebar note
2. Quoted material
3. A warning message
4. A code sample

### Q5. Two separate thoughts appear on a page, joined by a single `<br>` instead of two `<p>` elements. What is wrong with this?
1. Nothing; `<br>` and separate paragraphs are interchangeable
2. `<br>` is invalid outside a `<p>`
3. It loses the paragraph boundary a screen reader and CSS both rely on
4. The browser will refuse to render the second thought
