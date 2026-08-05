# Advanced pseudo-classes

Beyond `:hover`, a family of pseudo-classes select elements by their position or structural role.
`:first-child`/`:last-child` match an element only if it is literally the first or last child of its
parent. `:nth-child(n)` is more flexible — a number, or a formula like `2n` for every even child.
`:not(selector)` excludes anything matching its argument. `:focus-within` matches a container while
any descendant of it has focus, not just the container itself. `:has(selector)` matches a parent based
on what is *inside* it — a "parent selector", finally possible without JavaScript.

## Display
### HTML

```
<ul class="steps">
  <li>Install</li>
  <li>Configure</li>
  <li>Deploy</li>
  <li>Monitor</li>
</ul>

<div class="field-group">
  <label for="q">Search</label>
  <input id="q" type="text">
</div>

<div class="card has-badge">
  <span class="badge">New</span>
  <p>Card with a badge inside.</p>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.steps li:first-child { font-weight: 700; }
.steps li:nth-child(2n) { background: #EEF1F4; }
.steps li:not(:last-child) { border-bottom: 1px solid #DDE2E8; }

.field-group:focus-within { outline: 2px solid #F2A93B; padding: 4px; }

.card:has(.badge) { border: 2px solid #F2A93B; }
```

### Javascript

```

```

## Your Tasks
### 1. Style the first child
`:first-child` matches only if the element is literally first among its siblings.

```
li:first-child { font-weight: 700; }
```

### 2. Stripe every other row
`:nth-child(2n)` matches every even-positioned child.

```
li:nth-child(2n) { background: #EEF1F4; }
```

### 3. Exclude the last item
`:not()` takes any selector as its argument and excludes matches.

```
li:not(:last-child) { border-bottom: 1px solid #DDE2E8; }
```

### 4. Highlight a group while typing inside it
`:focus-within` matches the container while any descendant has focus.

```
.field-group:focus-within { outline: 2px solid #F2A93B; }
```

### 5. Select a parent by what it contains
`:has()` matches based on descendants — a parent selector.

```
.card:has(.badge) { border: 2px solid #F2A93B; }
```

## Exercises

### Exercise 1: Striped list
Style a list so every even row has a light background, using `:nth-child(2n)`.

### Exercise 2: First and last
Give a list's first item bold text and its last item no bottom border, using `:first-child` and
`:not(:last-child)`.

### Exercise 3: Focus a form group
Wrap a label and input in a container, style it with `:focus-within`, and confirm it highlights while
the input has focus, not only when the container itself is clicked.

### Exercise 4: Parent selector with :has
Style a `.card` differently only when it contains a `.badge` element, using `:has(.badge)`.

### Exercise 5: Combine two
Write one selector using both `:nth-child` and `:not()` together, and explain in one sentence what it
targets.

## Quizes

### Q1. What does `li:first-child` match?
1. The first `<li>` anywhere on the page
2. An `<li>` only if it is literally the first child of its parent
3. Every odd-positioned `<li>`
4. Nothing — `:first-child` is not valid CSS

### Q2. What does `:nth-child(2n)` select?
1. Only the second child
2. Every even-positioned child
3. Every odd-positioned child
4. The last two children

### Q3. What does `:not(:last-child)` exclude?
1. Every element except the first child
2. Only the last child
3. Every child that has no siblings
4. Nothing — `:not()` cannot take a pseudo-class argument

### Q4. When does `:focus-within` match a container?
1. Never — it is not a real pseudo-class
2. Only when the container itself is focused
3. When the container or any of its descendants has focus
4. Only on `<form>` elements

### Q5. What makes `:has()` different from other pseudo-classes here?
1. It matches based on what an element contains, acting as a parent selector
2. It only works with `:hover`
3. It requires JavaScript to function
4. It matches only text nodes
