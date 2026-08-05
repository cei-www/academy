# Grouping and combinators

A comma groups selectors — `h1, h2, h3 { … }` applies one block to all three, instead of writing the
block three times. A space means *descendant*: `.menu a` matches an `<a>` at any depth inside `.menu`.
A `>` means *direct child*: `.menu > a` matches only a link that is `.menu`'s own child.

**Priority**: combinators add no weight of their own. `.menu a` and `.menu > a` have exactly the same
priority — the difference between them is *which* elements match, not which rule wins a conflict.

## Display
### HTML

```
<nav class="menu">
  <a href="#">Home</a>
  <ul>
    <li><a href="#">CE221 Data Structures</a></li>
    <li><a href="#">CE231 Databases</a></li>
  </ul>
</nav>
```

### CSS

```
h1, h2, h3 { color: #0F1B33; }

.menu a   { color: #6B4207; }     /* any link inside .menu     */
.menu > a { font-weight: 700; }   /* only .menu's own children */
```

### Javascript

```

```

## Your Tasks
### 1. Group selectors with a comma
One block applies to every selector listed.

```
h1, h2, h3 { color: #0F1B33; }
```

### 2. Match any depth with a space
A descendant combinator reaches into nested elements, however deep.

```
.menu a { color: #6B4207; }
```

### 3. Match only a direct child with `>`
The child combinator stops one level down.

```
.menu > a { font-weight: 700; }
```

### 4. Group two combined selectors
Grouping and combinators work together in the same rule.

```
.menu a, .footer a { text-decoration: none; }
```

### 5. Compare priority, not just matches
Same weight, different match — this is about coverage, not which rule wins.

```
.menu a   { color: #6B4207; }   /* same priority as the rule below */
.menu > a { color: #0F1B33; }   /* more specific match, not more priority */
```

## Exercises

### Exercise 1: Group, then override
Style `h1`, `h2` and `h3` with one grouped rule, then add a second rule that changes `h3` only.

### Exercise 2: Two levels deep
Write markup where `.menu a` matches a link but `.menu > a` does not. Explain in one sentence why.

### Exercise 3: Group across combinators
Style every link inside `.menu` or `.footer` with one grouped rule using the descendant combinator.

### Exercise 4: Count the matches
Open DevTools, press Ctrl+F in the Elements panel, and type `.menu a`. Report how many elements the
selector matches, then repeat with `.menu > a`.

### Exercise 5: Priority or coverage?
In one sentence, explain whether `.menu > a` beats `.menu a` in a priority conflict, or whether it
just matches a smaller set of elements.

## Quizes

### Q1. What does a comma do between two selectors?
1. It requires both to match the same element at once
2. It applies one rule block to every selector listed
3. It is a syntax error
4. It only works inside a media query

### Q2. What does `nav a` (a space) match?
1. Only an `<a>` that is a direct child of `<nav>`
2. Every `<a>` anywhere inside a `<nav>`
3. The `<a>` that comes immediately after a `<nav>`
4. Every `<nav>` that sits inside an `<a>`

### Q3. What does `nav > a` match?
1. Every `<a>` anywhere inside a `<nav>`
2. Only an `<a>` that is a direct child of a `<nav>`
3. The `<a>` that comes immediately after a `<nav>`
4. Every `<nav>` that sits inside an `<a>`

### Q4. Given `<div class="menu"><ul><li><a>Home</a></li></ul></div>`, which rule colors the link?
1. `.menu > a { color: red; }`
2. `.menu a { color: red; }`
3. `a > .menu { color: red; }`
4. `.menu.a { color: red; }`

### Q5. Does `.menu > a` have higher priority than `.menu a`?
1. Yes, `>` always adds extra weight
2. No, both have the same priority — `>` only narrows which elements match
3. Yes, but only when nested three levels deep
4. Priority does not apply to combinators at all
