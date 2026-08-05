# Lists

HTML has three list types. `<ul>` is an unordered list — the items belong together but their order
carries no meaning. `<ol>` is an ordered list — reordering the items would change what the list
means, as in installation steps or a ranking. Both hold `<li>` items.

Pick by meaning, not by whether you want bullets or numbers: CSS can change the marker on either one.

Only `<li>` may be a direct child of `<ul>` or `<ol>`. A stray `<p>` or `<div>` between the items is
invalid; put it *inside* an `<li>` instead. A nested list is also placed inside its parent `<li>`, not
between two of them.

`<ol start="5">` makes the numbering begin at 5, and `type` chooses the marker: `1`, `a`, `A`, `i`
or `I`.

A description list pairs terms with descriptions: `<dl>` wraps the list, `<dt>` is the term and
`<dd>` is the description. One `<dt>` may be followed by several `<dd>`, and several `<dt>` may share
one `<dd>`.

## Display
### HTML

```
<h2>Skills</h2>
<ul>
  <li>HTML</li>
  <li>CSS
    <ul>
      <li>Flexbox</li>
      <li>Grid</li>
    </ul>
  </li>
  <li>JavaScript</li>
</ul>

<h2>Enrolment steps</h2>
<ol>
  <li>Log in to the KMITL student portal</li>
  <li>Choose your courses</li>
  <li>Pay the fee</li>
</ol>
```

### CSS

```
body {
  font-family: system-ui, sans-serif;
  margin: 16px;
  color: #131A26;
}

li { margin-bottom: 4px; }
```

### Javascript

```

```

## Your Tasks
### 1. Write an unordered list
Order does not matter here, so `<ul>` is the honest choice.

```
<ul>
  <li>Python</li>
  <li>C++</li>
  <li>JavaScript</li>
</ul>
```

### 2. Write an ordered list
These steps only work in this order, so use `<ol>`.

```
<ol>
  <li>Open the terminal</li>
  <li>Run the local server</li>
  <li>Open localhost:8000</li>
</ol>
```

### 3. Nest a list
The child list goes inside the parent `<li>`, before its closing tag.

```
<ul>
  <li>Year 2
    <ul>
      <li>Web Development</li>
      <li>Data Structures</li>
    </ul>
  </li>
</ul>
```

### 4. Continue the numbering
`start` sets the first number; `type` sets the marker style.

```
<ol start="4" type="a">
  <li>Submit the form</li>
  <li>Wait for approval</li>
</ol>
```

### 5. Define terms with a description list
`<dt>` holds the term, `<dd>` the description that follows it.

```
<dl>
  <dt>HTML</dt>
  <dd>Describes the structure of a page.</dd>
  <dt>CSS</dt>
  <dd>Describes how that structure looks.</dd>
</dl>
```

## Exercises

### Exercise 1: Choose the type
Write two lists — your three favourite programming languages, and the three steps to submit an
assignment — and justify each choice of `<ul>` or `<ol>` in one sentence.

### Exercise 2: Course tree
Build a nested `<ul>` two levels deep: three KMITL subjects, each with two topics inside it.

### Exercise 3: Glossary
Write a `<dl>` with five web terms and their one-line descriptions. Give one term two `<dd>` entries.

### Exercise 4: Numbered from ten
Produce a list numbered 10, 11, 12, then a second list marked with lower-case Roman numerals.

### Exercise 5: Find the invalid child
Put a `<p>` directly between two `<li>` elements inside a `<ul>`. Render it, open DevTools' Elements
panel, and report where the browser actually moved that `<p>`.

## Quizes

### Q1. Which element should hold a ranked top-five list?
1. `<ul>`
2. `<ol>`
3. `<dl>`
4. `<li>`

### Q2. Which may be a direct child of `<ul>`?
1. `<p>`
2. `<div>`
3. `<li>`
4. `<span>`

### Q3. Where does a nested list go?
1. Inside the parent `<li>`
2. Directly inside the parent `<ul>`, between two `<li>` elements
3. After the parent list closes
4. Inside a `<dd>`

### Q4. What does `<ol start="3" type="A">` produce for two items?
1. `3.` and `4.`
2. `A.` and `B.`
3. `C.` and `D.`
4. `3A.` and `3B.`

### Q5. In a `<dl>`, which element holds the term being described?
1. `<dd>`
2. `<li>`
3. `<dt>`
4. `<dfn>`
