# Cascade and specificity

When two rules set the same property on the same element, the browser picks a winner. It compares
specificity first, and only falls back to source order on a tie.

Specificity is a three-number tuple `(id, class, type)`:

- `id` — how many `#id` selectors
- `class` — how many `.class`, `[attr]` and `:pseudo-class` parts
- `type` — how many element names and `::pseudo-elements`

Compare left to right, like version numbers. One id beats any number of classes, because
`(1,0,0) > (0,20,0)`. `#main p` is `(1,0,1)`; `.card .title` is `(0,2,0)`; `a:hover` is `(0,1,1)`.

Inheritance is not part of this contest. An inherited value only applies when *no* rule matches the
element at all, so any matching rule — however weak — beats a value inherited from the parent.

`!important` jumps above the whole tuple. Needing it means your selectors have escalated into a war;
the fix is to lower the other rule, not to add another weapon.

## Display
### HTML

```
<div id="panel">
  <p class="note important">Which color wins?</p>
  <p class="note">Only one class here.</p>
</div>
```

### CSS

```
p              { color: #4B5563; }   /* (0,0,1) */
.note          { color: #0F1B33; }   /* (0,1,0) */
.note.important { color: #6B4207; }  /* (0,2,0) */
#panel p       { color: #F2A93B; }   /* (1,0,1) — wins on both */

#panel {
  padding: 12px;
  background: #EEF1F4;
  border: 1px solid #DDE2E8;
}
```

### Javascript

```

```

## Your Tasks
### 1. Count a tuple
Write the specificity of each selector as a comment before you predict the winner.

```
nav a.active     { }  /* (0,1,2) */
#site-nav a      { }  /* (1,0,1) */
ul li a:hover    { }  /* (0,1,3) */
```

### 2. Break a tie with source order
Two selectors with identical specificity: the one written later wins.

```
.btn { background: #0F1B33; }
.btn { background: #F2A93B; }   /* this one applies */
```

### 3. Beat a class without adding an id
Repeat the class instead of reaching for `#id` or `!important`.

```
.btn.btn { background: #F2A93B; }   /* (0,2,0) beats (0,1,0) */
```

### 4. Neutralise specificity with `:where()`
Everything inside `:where()` counts as zero, so defaults stay easy to override.

```
:where(.card) h2 { color: #0F1B33; }   /* (0,0,1) only */

h2 { color: #6B4207; }                 /* (0,0,1), later — wins */
```

### 5. Keep selectors flat
One class per element, no descendant chains. Specificity stays `(0,1,0)` everywhere and nothing
escalates.

```
.card__title { font-size: 20px; }
.card__body  { color: #4B5563; }
```

## Exercises

### Exercise 1: Predict then verify
Write four rules for the same paragraph with tuples `(0,0,1)`, `(0,1,0)`, `(0,2,0)` and `(1,0,1)`.
Predict the winner, then confirm it in DevTools — struck-through declarations are the losers.

### Exercise 2: Inheritance versus a matching rule
Set `color` on `body` and a different `color` on `a`. Explain in one sentence why the link ignores
the inherited value even though `body` is a more "important" element.

### Exercise 3: Remove an `!important`
Take a rule that only works with `!important` and make it work without, by lowering the specificity
of the rule it was fighting. Report both tuples.

### Exercise 4: Zero-specificity defaults
Write a small reset for `.prose` headings using `:where()`, then override one heading with a plain
type selector. Show in DevTools that the `:where()` rule loses.

### Exercise 5: Flatten a chain
Rewrite `#main .sidebar ul li a.link` as a single class selector without changing what it matches
visually. State the tuple before and after.

## Quizes

### Q1. What is the specificity of `#nav ul li.active a`?
1. `(0,2,3)`
2. `(1,3,1)`
3. `(2,1,2)`
4. `(1,1,3)`

### Q2. `.a.b.c.d` and `#x` both set `color` on one element. Which wins?
1. `#x`, because a single id outranks any number of classes
2. `.a.b.c.d`, because it has four parts
3. Whichever appears later in the stylesheet
4. Neither; the browser reports a conflict and uses the initial value

### Q3. Two rules have identical specificity. What decides the winner?
1. The shorter selector
2. The one in the file loaded first
3. The one that appears later in source order
4. Alphabetical order of the property values

### Q4. What does `:where(.card)` contribute to specificity?
1. The same as `.card`
2. Nothing — it always counts as zero
3. One id
4. It doubles the specificity of the rest of the selector

### Q5. Given `p { color: red; }` and a parent `div { color: blue; }`, what color is the text in `<div><p>Hi</p></div>`?
1. Blue, because the parent's rule is inherited and applied last
2. Black, because the two rules cancel out
3. Red, because a rule that matches the element beats an inherited value
4. Blue, because `div` is a container and containers win
