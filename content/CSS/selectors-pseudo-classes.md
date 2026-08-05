# Pseudo-classes

A pseudo-class selects a *state* rather than a distinct element. `a:hover` applies only while the
pointer is over the link — the element does not change, only whether the rule currently matches.

**Priority**: a pseudo-class counts the same weight as a class selector.

## Display
### HTML

```
<nav class="menu">
  <a href="#">Home</a>
  <a href="#">Courses</a>
</nav>

<button type="button">Register</button>
```

### CSS

```
.menu a { color: #6B4207; text-decoration: none; }
.menu a:hover { color: #F2A93B; }

button { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 6px 12px; }
button:hover { background: #F2A93B; }
```

### Javascript

```

```

## Your Tasks
### 1. Style a link's default state
The base rule applies whenever `:hover` is not active.

```
a { color: #6B4207; }
```

### 2. Add a hover state
`:hover` layers on top of the base rule only while the pointer is over the element.

```
a:hover { color: #F2A93B; }
```

### 3. Apply `:hover` to a button
Pseudo-classes work on any element, not only links.

```
button:hover { background: #F2A93B; }
```

### 4. Combine a pseudo-class with a combinator
`:hover` can follow a descendant or child combinator like any other selector.

```
.menu a:hover { text-decoration: underline; }
```

### 5. Compare priority with a class
`a:hover` and `.note` carry the same weight — whichever is written later wins a tie on the same
element.

```
.note { color: red; }
a:hover { color: teal; }
```

## Exercises

### Exercise 1: Hover feedback
Make every nav link change its background colour and gain an underline on `:hover`, keeping the text
readable in both states.

### Exercise 2: Button hover state
Style a button so it visibly changes on `:hover`, without changing its size or moving other content.

### Exercise 3: Predict the winner
Give one link both a class-based colour rule and an `a:hover` rule. Predict which colour shows while
hovering, then check.

### Exercise 4: Force the state in DevTools
Open DevTools, select the link, and use the "Force state" checkbox to lock `:hover` on. Confirm the
hover styles apply without moving the mouse.

### Exercise 5: Beyond hover
Explain in one or two sentences why a page that only reacts to `:hover` leaves out touch-screen and
keyboard users.

## Quizes

### Q1. When does `a:hover` apply?
1. Permanently, once the page loads
2. Only while the pointer is over the element
3. Only after the link has been clicked once
4. Only on touch-screen devices

### Q2. What kind of thing does a pseudo-class select?
1. A distinct HTML element
2. A state of an element, not a different element
3. Only elements with no class
4. Only the first element on the page

### Q3. What priority weight does a pseudo-class carry?
1. The same as a type selector
2. The same as a class selector
3. The same as an id selector
4. None — pseudo-classes cannot be overridden

### Q4. Which selector applies a `:hover` state only to links inside `.menu`?
1. `a:hover .menu`
2. `.menu a:hover`
3. `:hover.menu a`
4. `.menu:hover a`

### Q5. Why is relying only on `:hover` for important feedback a problem?
1. `:hover` does not work in any modern browser
2. Touch-screen and keyboard users may never trigger a hover state
3. `:hover` always has the lowest possible priority
4. `:hover` cannot be combined with any other selector
