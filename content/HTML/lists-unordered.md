# Unordered lists

`<ul>` is a list whose order carries no meaning — swapping two items would not change what the list says. Each item is an `<li>`. `<li>` is the only element allowed as a direct child of `<ul>`; a stray `<p>` between items is invalid and the browser will move it, not honour it.

A list can nest: an entire `<ul>` may sit inside one `<li>`, giving that single item a sub-list. The nested list goes *before* the parent `<li>`'s closing tag, never between two sibling `<li>` elements.

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
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Write a plain unordered list
Order does not matter here, so `<ul>` is the honest choice.

```
<ul>
  <li>Python</li>
  <li>C++</li>
  <li>JavaScript</li>
</ul>
```

### 2. Fix an invalid child
A `<p>` cannot sit directly inside a `<ul>` — move its text into an `<li>`.

```
<ul>
  <li>First point</li>
  <li>Second point, now wrapped correctly</li>
</ul>
```

### 3. Nest a list one level
The child `<ul>` goes inside the parent `<li>`, before it closes.

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

### 4. Nest a list two levels deep
Each nested `<ul>` still lives inside an `<li>`, however deep it goes.

```
<ul>
  <li>Faculty
    <ul>
      <li>Computer Engineering
        <ul>
          <li>Web Development</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

### 5. Put a link inside each item
An `<li>` can hold more than plain text — here each item wraps an `<a>`.

```
<ul>
  <li><a href="#lectures">Lectures</a></li>
  <li><a href="#labs">Labs</a></li>
</ul>
```

## Exercises

### Exercise 1: Favourite tools
List your three favourite programming tools in a `<ul>` and justify why order does not matter here.

### Exercise 2: Course tree
Build a nested `<ul>` two levels deep: three KMITL subjects, each with two topics inside it.

### Exercise 3: Repair loose text
Given three lines of plain text meant to be a list, wrap each one in an `<li>` inside a single `<ul>`.

### Exercise 4: Sidebar of links
Build a `<ul>` of five navigation links, each `<li>` wrapping one `<a>`.

### Exercise 5: Find the invalid child
Put a `<p>` directly between two `<li>` elements inside a `<ul>`. Render it, open DevTools' Elements panel, and report where the browser actually moved that `<p>`.

## Quizes

### Q1. Which element should hold a set of items whose order carries no meaning?
1. `<ol>`
2. `<ul>`
3. `<dl>`
4. `<div>`

### Q2. Which is the only valid direct child of `<ul>`?
1. `<p>`
2. `<div>`
3. `<li>`
4. `<span>`

### Q3. Where must a nested `<ul>` be placed?
1. Inside the parent `<li>`
2. Directly inside the parent `<ul>`, between two `<li>` elements
3. After the parent list closes
4. Inside a `<head>`

### Q4. Can an `<li>` contain a link, an image, and text together?
1. No, an `<li>` may only contain plain text
2. Yes, an `<li>` can contain any flow content
3. Only if the list is nested
4. Only inside a `<dl>`

### Q5. A `<p>` is placed directly between two `<li>` siblings inside a `<ul>`. What does the browser do?
1. It renders the `<p>` exactly where it was written
2. It deletes the `<p>` entirely
3. It moves or restructures the markup so the DOM stays valid
4. It throws a parsing error and stops rendering the page
