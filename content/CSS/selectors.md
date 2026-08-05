# Selectors

A selector tells CSS which HTML elements a rule applies to. The three most common kinds are element selectors, class selectors, and ID selectors.

## Display
### HTML

```
<p>A plain paragraph.</p>
<p class="highlight">A highlighted paragraph.</p>
```

### CSS

```
p {
  color: gray;
}

.highlight {
  background: yellow;
}
```

### Javascript

```

```

## Your tasks
### Select every paragraph
Make all `<p>` elements gray.

```
p {
  color: gray;
}
```

### Select a class
Give every element with `class="highlight"` a yellow background.

```
.highlight {
  background: yellow;
}
```

## Exercises

### Exercise 1: ID selector
Select an element with `id="main-title"` and make it bold.

### Exercise 2: Grouped selector
Select both `h1` and `h2` in a single rule and set the same font family for both.

### Exercise 3: Descendant selector
Select only `<a>` tags that are inside a `<nav>` element.

## Quizes

### Q1. Which selector targets a class named `card`?
1. `#card`
2. `card`
3. `.card`
4. `*card`

### Q2. Which selector has the highest specificity?
1. `p`
2. `.intro`
3. `#header`
4. `*`

### Q3. What does `nav a` select?
1. Every `<a>` on the page
2. Only `<a>` elements inside a `<nav>`
3. A `<nav>` element that contains the word "a"
4. Nothing — it's invalid syntax
