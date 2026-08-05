# Lists overview

HTML has three list types, and picking the right one is about meaning, not appearance — CSS can always change how a marker looks. `<ul>` is for items whose order does not matter. `<ol>` is for items whose order does. `<dl>` is for pairing terms with descriptions. All three only accept their matching child: `<li>` inside `<ul>`/`<ol>`, `<dt>`/`<dd>` inside `<dl>`.

Real pages usually need more than one list type on the same page — a navigation menu, a set of numbered steps and a glossary can all appear together, and nothing stops one list from nesting inside another list's item.

## Display
### HTML

```
<nav>
  <h2>On this page</h2>
  <ul>
    <li><a href="#steps">Enrolment steps</a></li>
    <li><a href="#glossary">Glossary</a></li>
  </ul>
</nav>

<h2 id="steps">Enrolment steps</h2>
<ol>
  <li>Log in to the KMITL student portal</li>
  <li>Choose your courses</li>
  <li>Pay the fee</li>
</ol>

<h2 id="glossary">Glossary</h2>
<dl>
  <dt>GPA</dt>
  <dd>Grade point average.</dd>
</dl>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Choose `<ul>` or `<ol>` for a scenario
A packing list has no required order, so it is unordered.

```
<ul>
  <li>Laptop</li>
  <li>Charger</li>
  <li>Student ID card</li>
</ul>
```

### 2. Choose `<dl>` over the other two
A set of "field: value" pairs is a description list, not bullets.

```
<dl>
  <dt>Room</dt>
  <dd>Building 12, Room 305</dd>
</dl>
```

### 3. Combine a `<ul>` and an `<ol>` on one page
Different sections can use different list types side by side.

```
<h2>Skills</h2>
<ul><li>HTML</li><li>CSS</li></ul>
<h2>Steps</h2>
<ol><li>Plan</li><li>Build</li></ol>
```

### 4. Nest a `<ul>` inside an `<ol>` item
Nesting is not limited to the same list type.

```
<ol>
  <li>Pick a topic
    <ul>
      <li>Web</li>
      <li>Mobile</li>
    </ul>
  </li>
</ol>
```

### 5. Recall the shared child rule
Every list type rejects anything except its own matching child element.

```
<!-- valid: -->
<ul><li>ok</li></ul>
<!-- invalid: a <p> can never sit directly inside <ul>, <ol> or <dl> -->
```

## Exercises

### Exercise 1: One-page reference
Build a page with a `<ul>` navigation menu, an `<ol>` of three steps and a `<dl>` of two terms, all on one page.

### Exercise 2: Justify the choice
For three real scenarios of your own (not from this lesson), state which list type fits and why.

### Exercise 3: Nested mix
Nest a `<dl>` inside one `<li>` of a `<ul>`, so one navigation item expands into a small glossary.

### Exercise 4: Table of contents
Build a `<ul>` of links that jump to the `id`s of the headings on your one-page reference from Exercise 1.

### Exercise 5: Review the invalid-child rule
Try placing a `<span>` directly inside a `<dl>`, outside any `<dt>`/`<dd>`. Report in DevTools where the browser put it.

## Quizes

### Q1. What should decide between `<ul>` and `<ol>`?
1. Whether you want bullets or numbers
2. Whether the order of the items carries meaning
3. How many items there are
4. Whether the items are single words or sentences

### Q2. Which list type suits a set of key-value pairs?
1. `<ul>`
2. `<ol>`
3. `<dl>`
4. `<table>` only, lists cannot hold pairs

### Q3. Can a `<ul>` be nested inside an `<ol>`'s item?
1. No, list types cannot mix
2. Yes, any list can nest inside any other list's item
3. Only `<dl>` can contain other lists
4. Only if both lists have the same number of items

### Q4. What do `<ul>`, `<ol>` and `<dl>` all have in common?
1. They all require a `start` attribute
2. They all only accept one specific type of child element
3. They all render with numbers by default
4. They cannot be styled with CSS

### Q5. A page needs a glossary of ten terms with one-line definitions. Which is the most semantically correct choice?
1. A `<ul>` with each item as "term — definition"
2. A `<table>` with two columns
3. A `<dl>` with `<dt>`/`<dd>` pairs
4. Ten separate `<p>` elements
