# Description lists

A description list pairs terms with their descriptions — a glossary, a set of metadata fields, or an FAQ. `<dl>` wraps the whole list, `<dt>` holds the term and `<dd>` holds the description that follows it.

The pairing is flexible: one `<dt>` may be followed by several `<dd>` elements when a term has more than one description, and several `<dt>` in a row may share one `<dd>` when two terms mean the same thing.

## Display
### HTML

```
<dl>
  <dt>HTML</dt>
  <dd>Describes the structure of a page.</dd>
  <dt>CSS</dt>
  <dd>Describes how that structure looks.</dd>
</dl>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Define one term
`<dt>` holds the term, `<dd>` the description that follows it.

```
<dl>
  <dt>API</dt>
  <dd>A set of rules for one program to talk to another.</dd>
</dl>
```

### 2. Give one term two descriptions
Two `<dd>` elements in a row both belong to the `<dt>` before them.

```
<dl>
  <dt>Cache</dt>
  <dd>A temporary store of data for faster access.</dd>
  <dd>Also used as a verb: "to cache a response".</dd>
</dl>
```

### 3. Share one description between two terms
Two `<dt>` elements in a row can share the `<dd>` that follows.

```
<dl>
  <dt>Front-end</dt>
  <dt>Client-side</dt>
  <dd>Code that runs in the user's browser.</dd>
</dl>
```

### 4. Build a metadata list
A `<dl>` also suits key-value pairs, not just word definitions.

```
<dl>
  <dt>Course code</dt>
  <dd>01076021</dd>
  <dt>Credits</dt>
  <dd>3</dd>
</dl>
```

### 5. Title the glossary
A heading before the `<dl>` is not part of the list, but it names what follows.

```
<h2>Glossary</h2>
<dl>
  <dt>DOM</dt>
  <dd>The browser's live tree representation of a page.</dd>
</dl>
```

## Exercises

### Exercise 1: Five-term glossary
Write a `<dl>` with five web-development terms and their one-line descriptions.

### Exercise 2: One term, two meanings
Give one term two `<dd>` entries describing two different meanings of the same word.

### Exercise 3: Shared description
Give two terms that mean the same thing one shared `<dd>`.

### Exercise 4: Course metadata
Build a `<dl>` of key-value pairs for a course: code, title, credits and instructor.

### Exercise 5: Inspect the pairing
Render a `<dl>` with an unusual grouping (two `<dt>`, one `<dd>`), open DevTools, and confirm the browser kept the pairing you wrote.

## Quizes

### Q1. Which element wraps a description list?
1. `<list>`
2. `<dl>`
3. `<ul>`
4. `<def>`

### Q2. In a `<dl>`, which element holds the term being described?
1. `<dd>`
2. `<li>`
3. `<dt>`
4. `<dfn>`

### Q3. Can a `<dt>` be followed by more than one `<dd>`?
1. No, exactly one `<dd>` is allowed per `<dt>`
2. Yes, several `<dd>` may follow one `<dt>`
3. Only if the second `<dd>` is nested inside the first
4. Only inside a `<ul>`

### Q4. What is a `<dl>` well suited for besides word definitions?
1. Navigation menus
2. Ranked lists
3. Key-value metadata, like a set of course details
4. Long-form paragraphs

### Q5. Two `<dt>` elements appear in a row, followed by one `<dd>`. What does that mean?
1. This markup is invalid and will not render
2. Both terms share that one description
3. Only the second `<dt>` is described
4. The `<dd>` belongs to neither term
