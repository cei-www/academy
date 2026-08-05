# CSS hacks and workarounds

A "CSS hack" is a workaround for a gap modern CSS did not originally cover well. The most common one
you will still meet is the **clearfix**: floated children do not add to their parent's height, so a
container with only floated content collapses to zero height. `.clearfix::after { content: ""; 
display: table; clear: both; }` forces the parent to account for its floated children.

Reach for `@supports` to check whether a browser understands a feature before relying on it, instead
of guessing. Treat `!important` as a last resort, not a habit — it wins every specificity fight,
which makes the *next* override painful; almost every layout hack here has a modern replacement
(flexbox and grid make clearfix unnecessary in new code).

## Display
### HTML

```
<div class="clearfix box">
  <div class="floated">Floated child</div>
</div>
<p>Text after the box — without the clearfix, this line would overlap the float above.</p>

<div class="feature-demo">@supports check: see the console.</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.box { border: 2px solid #DDE2E8; background: #EEF1F4; }
.floated { float: left; padding: 10px; background: #F2A93B; color: #6B4207; }

.clearfix::after { content: ""; display: table; clear: both; }

@supports (display: grid) {
  .feature-demo { border-left: 4px solid #15803D; padding: 6px; }
}
```

### Javascript

```
console.log("supports grid:", CSS.supports("display", "grid"));
console.log("supports has():", CSS.supports("selector(:has(a))"));
```

## Your Tasks
### 1. Reproduce the collapsed-parent bug
A parent with only floated children has zero visible height until it is fixed.

```
.box { border: 2px solid #DDE2E8; }   /* the border collapses around nothing */
.floated { float: left; }
```

### 2. Apply the clearfix
The `::after` pseudo-element forces the parent to include the floated content's height.

```
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

### 3. Check for feature support before using it
`@supports` only applies its block in browsers that understand the given property/value pair.

```
@supports (display: grid) {
  .layout { display: grid; }
}
```

### 4. Check support from JavaScript
`CSS.supports` answers the same question a script can act on.

```
if (CSS.supports("display", "flex")) {
  console.log("flex is supported");
}
```

### 5. Replace a hack with a modern layout
Most float-based layouts are simpler and more robust rebuilt with flexbox.

```
/* old: floats + clearfix */
.old .item { float: left; width: 33%; }
.old::after { content: ""; display: table; clear: both; }

/* new: flexbox, no clearfix needed */
.new { display: flex; }
.new .item { flex: 1; }
```

## Exercises

### Exercise 1: Fix the collapse
Build a bordered container with two floated children and no height set, confirm the border collapses
to nothing, then fix it with a clearfix and confirm the border now wraps the content.

### Exercise 2: Feature-gate a rule
Write a `@supports` block that only applies `display: grid` in browsers that support it, with a
flexbox fallback outside the block.

### Exercise 3: Query support in JS
Log `CSS.supports("display", "grid")` and `CSS.supports("gap", "10px")` in the console and report
both results.

### Exercise 4: Rebuild without floats
Take the floated three-column layout from Exercise 1's spirit and rebuild it with `display: flex`
instead, with no clearfix required.

### Exercise 5: When `!important` is defensible
Describe, in one or two sentences, a narrow situation where `!important` might be the least-bad
option, and why it should still be rare.

## Quizes

### Q1. Why does a container with only floated children collapse to zero height?
1. `float` always sets `height: 0`
2. Floated elements do not contribute to their parent's height by default
3. It is a rendering bug present in only one browser
4. Containers ignore all children by default

### Q2. What does the clearfix's `::after` rule do?
1. Removes the floated elements from the page
2. Forces the parent to account for the floated children's height
3. Centres the floated children
4. Converts the floats into flex items automatically

### Q3. What does `@supports (display: grid) { … }` do?
1. Forces every browser to support grid
2. Applies its rules only in browsers that understand `display: grid`
3. Disables grid everywhere except in supporting browsers
4. Has no effect — `@supports` is not valid CSS

### Q4. Why should `!important` be used sparingly?
1. It has no real effect in modern browsers
2. It overrides normal specificity, making future overrides harder to reason about
3. It is only valid inside media queries
4. It slows down page rendering significantly

### Q5. What is the modern replacement for most float-based layout hacks?
1. Table-based layout
2. Flexbox or grid
3. `!important` on every rule
4. There is no modern replacement; floats remain the only option
