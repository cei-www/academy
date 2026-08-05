# The calc() function

`calc()` computes a value from an expression that can mix units — something a plain CSS value can
never do. `width: calc(100% - 240px)` means "fill the parent, minus a fixed 240px sidebar", and it
recalculates automatically whenever the parent resizes.

`calc()` supports `+`, `-`, `*` and `/`. Spaces around `+` and `-` are required; `*` and `/` do not
need them, but at least one side of `*`/`/` must be a plain number, not two units.

## Display
### HTML

```
<div class="layout">
  <aside class="sidebar">Sidebar — 240px</aside>
  <main class="content">Main content fills the rest of the row.</main>
</div>
```

### CSS

```
.layout { display: flex; gap: 12px; }

.sidebar {
  width: 240px;
  padding: 12px;
  background-color: #EEF1F4;
}

.content {
  width: calc(100% - 240px - 12px);
  padding: 12px;
  border: 1px solid #DDE2E8;
}
```

### Javascript

```

```

## Your Tasks
### 1. Subtract a fixed sidebar width from the full row
`calc(100% - 240px)` reserves exactly 240px before filling the rest.

```
.content { width: calc(100% - 240px); }
```

### 2. Account for a gap between the columns too
Every fixed amount you subtract, including gaps, has to be inside the same `calc()`.

```
.content { width: calc(100% - 240px - 12px); }
```

### 3. Scale a spacing unit with multiplication
`calc()` can multiply a variable-free value the same way a spreadsheet formula would.

```
.section { margin-bottom: calc(1rem * 2); }
```

### 4. Mix percentage and pixel units in one offset
Centring a fixed-width box needs half the parent minus half the box.

```
.tooltip {
  left: calc(50% - 60px);   /* half the parent, minus half a 120px-wide box */
}
```

### 5. Split space evenly with division
`calc(100% / 3)` gives three equal columns without a grid or flexbox property.

```
.col { width: calc(100% / 3); }
```

## Exercises

### Exercise 1: Sidebar layout
Build a fixed 200px sidebar and a main column with `width: calc(100% - 200px)` sitting next to it.

### Exercise 2: Account for the gap
Add a 16px gap between the two columns from Exercise 1 and adjust the `calc()` so the row still fits
without wrapping.

### Exercise 3: Centre a fixed-width tooltip
Position a 100px-wide tooltip so its centre lines up with its parent's centre, using
`calc(50% - 50px)`.

### Exercise 4: Three equal columns
Lay out three boxes at `calc(100% / 3)` each, then check in DevTools that they fill the row exactly.

### Exercise 5: Break it on purpose
Remove the spaces around the `-` in a `calc()` expression, note what the browser does with the
declaration, then put the spaces back.

## Quizes

### Q1. What can `calc()` do that a plain CSS value cannot?
1. Change colours dynamically
2. Combine two different units in one expression
3. Animate a property
4. Select an element by class

### Q2. Which spacing rule does `calc()` require around `+` and `-`?
1. No spaces are allowed
2. Spaces are required on both sides
3. Spaces are only required before the operator
4. Spacing does not matter for any operator

### Q3. What does `width: calc(100% - 240px)` mean?
1. Exactly 240px wide
2. 100% of the parent's width, ignoring the 240px
3. The parent's full width minus a fixed 240px
4. 240px more than the parent's width

### Q4. What does `calc(100% / 3)` produce?
1. One third of the parent's width
2. 100% divided into 3px steps
3. A CSS error — division is not supported
4. The parent's width times 3

### Q5. To centre a 120px-wide element inside its parent using `left`, which expression is correct?
1. `left: calc(50% - 60px)`
2. `left: calc(50% - 120px)`
3. `left: calc(100% - 60px)`
4. `left: 50%`
