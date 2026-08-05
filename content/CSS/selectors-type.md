# Type and universal selectors

A type selector matches every element with that tag name — `p` matches every `<p>` on the page. The
universal selector `*` matches every element of any kind, useful for a page-wide default.

Type and universal selectors have the **lowest priority** of any selector kind: when another rule
targets the same element with a class, an ID or a pseudo-class, that other rule wins, no matter which
rule is written first.

## Display
### HTML

```
<h1 class="title">Course selectors</h1>
<p>Every paragraph looks the same with a type selector.</p>
<p>So does this one.</p>
```

### CSS

```
* { font-family: system-ui, sans-serif; }

h1 { color: teal; }
.title { color: #0F1B33; }

p { color: #4B5563; }
```

### Javascript

```

```

## Your Tasks
### 1. Select every element of a type
An element selector needs no change to the markup.

```
p { color: #4B5563; }
```

### 2. Set a page-wide default
`*` reaches every element, so it is where a font default belongs.

```
* { font-family: system-ui, sans-serif; }
```

### 3. Style two type selectors
Each type gets its own rule.

```
h1 { color: #0F1B33; }
h2 { color: #4B5563; }
```

### 4. Let the later rule win
Two rules for the same type selector: the one written later wins.

```
p { color: teal; }
p { color: #0F1B33; }
```

### 5. See a class outrank a type selector
Even though `h1` is written after `.title` here, the class still wins — priority does not depend on
source order between different kinds of selector.

```
.title { color: green; }
h1 { color: blue; }
```

## Exercises

### Exercise 1: Style every paragraph
Apply one type selector to colour every `<p>` on a page the same way.

### Exercise 2: Page-wide reset
Use `*` to set one font family for the whole page.

### Exercise 3: Predict the winner
Write two rules for `p`, both setting `color`. Predict which colour appears, then render the page
and check.

### Exercise 4: Add a class to one heading
Give one `<h1>` among several a class with its own `color` rule. Confirm the type selector's rule
still applies to the other headings.

### Exercise 5: Compare two selectors
Given `p` and `*` on the same page, say in one sentence which one matches more narrowly.

## Quizes

### Q1. What does the selector `p` match?
1. Only the first `<p>` on the page
2. Every `<p>` element on the page
3. Every element with `class="p"`
4. Nothing unless combined with another selector

### Q2. What does the universal selector `*` match?
1. Only elements with no class or id
2. Every element on the page
3. Only the `<body>` element
4. Elements listed in a comma-separated group only

### Q3. Which selector kind has the lowest priority?
1. ID selectors
2. Class selectors
3. Type and universal selectors
4. Pseudo-classes

### Q4. `.title { color: green; }` is followed later by `h1 { color: blue; }`, applied to `<h1 class="title">`. What colour is the text?
1. Blue, because it is written later
2. Green, because a class selector outranks a type selector regardless of order
3. Black, the browser default
4. It will not render because the rules conflict

### Q5. Is styling everything with `*` usually a good idea for real projects?
1. Yes, always use `*` for every property
2. Only for a small, deliberate page-wide default like a font family — broad rules elsewhere get hard to override
3. No, `*` is invalid CSS
4. `*` only works inside a media query
