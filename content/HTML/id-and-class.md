# Tags, id and class

A **tag** names what an element is — `<p>`, `<div>`, `<h1>`. Two attributes let you single out
specific elements beyond their tag name. `id` gives one element a unique name: at most one element on
the page may have any given `id`. `class` gives an element one or more reusable labels: many elements
can share the same class, and one element can carry several classes at once, space-separated.

Use `id` for the one-off element you will target once — a page's main heading, a specific form. Use
`class` for a repeatable role — every card, every warning box. CSS reaches them with `#id` and
`.class`; JavaScript reaches them with `document.getElementById("id")` and
`document.querySelectorAll(".class")`.

## Display
### HTML

```
<h1 id="page-title">Course catalogue</h1>

<div class="card highlight">CE 2103 — Web Application Development</div>
<div class="card">CE 2201 — Data Structures</div>
<div class="card">CE 2305 — Computer Networks</div>
```

### CSS

```
#page-title { color: #0F1B33; }
.card { padding: 8px; border: 1px solid #DDE2E8; margin-bottom: 4px; }
.card.highlight { border-color: #F2A93B; background: #FFF7E8; }
```

### Javascript

```
console.log("cards found:", document.querySelectorAll(".card").length);
console.log("title text:", document.getElementById("page-title").textContent);
```

## Your Tasks
### 1. Give one element a unique id
Only one element on the page should ever carry this exact `id`.

```
<h1 id="page-title">Course catalogue</h1>
```

### 2. Give several elements the same class
Every element sharing a class can be styled or selected together.

```
<div class="card">A</div>
<div class="card">B</div>
```

### 3. Put more than one class on an element
Classes are space-separated inside one `class` attribute.

```
<div class="card highlight">Featured</div>
```

### 4. Select by id in CSS
`#` targets the one element with that `id`.

```
#page-title { color: #0F1B33; }
```

### 5. Select by class in JavaScript
`querySelectorAll` returns every element carrying that class, as a list.

```
document.querySelectorAll(".card").forEach(el => console.log(el.textContent));
```

## Exercises

### Exercise 1: Duplicate id, broken expectations
Give two elements the same `id` on purpose. Confirm `getElementById` still returns something, then
explain why this is a bug even though the page does not crash.

### Exercise 2: Style by class, not id
Take three cards and style them all through one shared class, instead of three separate ids.

### Exercise 3: Combine two classes
Give one card both `card` and `highlight`, and write a rule for `.card.highlight` that only applies
when both are present.

### Exercise 4: Count elements by class
Use `document.querySelectorAll(".card").length` to log how many cards are on the page.

### Exercise 5: id vs class, in your own words
Write one sentence each explaining when you would reach for `id` and when for `class`, using an
example from this page.

## Quizes

### Q1. How many elements on a page should share the same `id`?
1. As many as needed
2. Exactly one
3. Exactly two
4. There is no limit

### Q2. Can one element have more than one class?
1. No, only one class per element
2. Yes, space-separated inside one `class` attribute
3. Yes, but only with a comma-separated list
4. Only `<div>` elements can have multiple classes

### Q3. Which CSS selector targets an element's `id`?
1. `.name`
2. `#name`
3. `*name`
4. `@name`

### Q4. What does `document.querySelectorAll(".card")` return?
1. The single first element with class `card`
2. A list of every element with class `card`
3. `true` or `false`
4. The number of elements with class `card`, as a plain number

### Q5. Which is the better fit for a "featured" style shared by several product cards?
1. A unique `id` on each card
2. A shared `class` on each card
3. Neither — inline styles only
4. A `<featured>` custom tag
