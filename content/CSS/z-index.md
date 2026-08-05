# z-index

`z-index` only compares elements that are **positioned** — `relative`, `absolute`, `fixed` or
`sticky`. On a `static` element (the default), `z-index` does nothing at all; that is the single most
common reason "my z-index isn't working."

Elements don't all compete on one global stack. Certain properties — a non-`static` position with a
`z-index`, `opacity` below 1, or a `transform` — create a new **stacking context**. Once a parent forms
one, every `z-index` inside it is only ever compared against its siblings *inside that same context*,
never against elements outside it, no matter how large the number.

## Display
### HTML

```
<div class="stage">
  <div class="card red">red · z-index 1</div>
  <div class="card blue">blue · z-index 3</div>
  <div class="card green">green · z-index 2</div>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; }
.stage { position: relative; height: 140px; }
.card {
  position: absolute; width: 160px; padding: 10px; color: #fff; font-weight: 700;
  top: 20px; border-radius: 6px;
}
.red   { left: 0px; top:10px;  background: #B91C1C; z-index: 1; }
.blue  { left: 60px;  top:-10px; background: #0F1B33; z-index: 3; }
.green { left: 120px; background: #15803D; z-index: 2; }
```

### Javascript

```

```

## Your Tasks
### 1. Give overlapping boxes an order
Higher `z-index` draws on top, but only among elements that are positioned.

```
.blue { position: absolute; z-index: 3; }
.red  { position: absolute; z-index: 1; }
```

### 2. See z-index fail on a static element
Without `position`, `z-index` is ignored — the element stays in normal stacking order.

```
.ignored { z-index: 999; }   /* does nothing without position: relative/absolute/fixed/sticky */
```

### 3. Fix it by adding position
Adding any non-`static` position value is what makes `z-index` start working.

```
.ignored { position: relative; z-index: 999; }
```

### 4. Create a stacking context with opacity
`opacity` below 1 creates a new context, trapping that subtree's `z-index` values inside it.

```
.group { opacity: 0.99; }   /* traps z-index values of everything inside .group */
```

### 5. Reason about two separate contexts
A `z-index: 9999` inside one stacking context can still lose to a `z-index: 1` in a different one,
if that context itself was drawn later.

```
<!-- .a's children can never out-stack .b's children if .b's context draws after .a's -->
```

## Exercises

### Exercise 1: Reorder three cards
Build the three-card overlap above, then change only the `z-index` values so blue ends up on the
bottom and red on top, without moving any `left` offsets.

### Exercise 2: The classic bug
Give an element `z-index: 100` with no `position` set, and confirm in DevTools that it still renders
below an unrelated `z-index: 1` positioned element. Fix it with one added declaration.

### Exercise 3: Trapped inside a context
Put a high-`z-index` child inside a parent with `opacity: 0.99`, and a sibling element outside with a
much lower `z-index`. Confirm which one actually ends up on top, and explain why.

### Exercise 4: A dropdown above everything
Build a small dropdown menu that must appear above a sibling card. Give both the minimum CSS needed
for the dropdown to reliably win.

### Exercise 5: Modal overlay
Build a full-page overlay (`position: fixed`, covering the viewport) with `z-index` high enough to sit
above every other element on a busy demo page.

## Quizes

### Q1. What is required for `z-index` to have any effect on an element?
1. Nothing — it always works
2. A non-`static` `position` value
3. A `width` and `height`
4. A parent with `display: flex`

### Q2. `.a { z-index: 999; }` (no position set) sits below `.b { position: relative; z-index: 1; }`. Why?
1. 999 is an invalid value
2. `.a` has no position, so its `z-index` is ignored entirely
3. `.b` was declared first in the stylesheet
4. `z-index` only works on the last three elements on a page

### Q3. Which of these creates a new stacking context?
1. `color: red;`
2. `opacity: 0.9;`
3. `text-align: center;`
4. `font-weight: 700;`

### Q4. A child has `z-index: 9999` inside a parent stacking context that itself draws behind another element. What happens?
1. The child always wins regardless, since 9999 is a very high number
2. The child can still lose — it is only compared within its own parent's context
3. `z-index` values above 1000 are invalid
4. The browser throws an error

### Q5. What is the most common reason `z-index` "isn't working"?
1. The value is too small
2. The element is not positioned (`static`)
3. `z-index` requires a `!important`
4. `z-index` only works on `<div>` elements
