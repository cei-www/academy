# Box-sizing and collapsing margins

By default `width` sizes the *content* only, so `width: 300px` with `padding: 20px` and a `2px`
border occupies 300 + 40 + 4 = 344px and can overflow a narrower column. `box-sizing: border-box`
makes `width` include the padding and border, keeping the box exactly 300px — which is why nearly
every project starts with `* { box-sizing: border-box; }`.

Vertical margins between neighbours also collapse: 20px under one box and 30px above the next gives
a 30px gap, not 50px.

## Display
### HTML

```
<div class="box">300px wide, with padding and a border</div>
```

### CSS

```
* { box-sizing: border-box; }

.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #DDE2E8;
  background-color: #EEF1F4;
}
```

### Javascript

```

```

## Your Tasks
### 1. See the default add up
Under `box-sizing: content-box` (the default), padding and border add to the declared width.

```
.box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #DDE2E8;
}
/* renders 344px wide */
```

### 2. Reset with `border-box`
`border-box` folds the padding and border back inside the declared width.

```
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #DDE2E8;
}
/* renders exactly 300px wide */
```

### 3. Apply it to every element
A single universal rule near the top of the stylesheet fixes the whole page at once.

```
* { box-sizing: border-box; }
```

### 4. Fix a percentage column that overflows
Without `border-box`, padding pushes a percentage-wide column past its parent.

```
* { box-sizing: border-box; }

.col { width: 50%; padding: 16px; }
```

### 5. Watch margins collapse
Stacked vertical margins do not add; the larger one wins.

```
.card { margin-bottom: 20px; }
.card + .card { margin-top: 30px; }
/* real gap is 30px, not 50px */
```

## Exercises

### Exercise 1: Prove the arithmetic
Set `box-sizing: content-box` on a box with `width: 300px`, `padding: 20px` and a `2px` border.
Measure the rendered width in DevTools, then switch to `border-box` and measure again.

### Exercise 2: Read the Computed tab
Select the box in DevTools, open the Computed tab, and confirm the rendered width matches your
calculation for both `box-sizing` values.

### Exercise 3: Two-column overflow
Build two `width: 50%` columns with 16px padding side by side without `border-box`, and describe
what happens; then add `border-box` and describe the fix.

### Exercise 4: Watch margins collapse
Stack two paragraphs with `margin-bottom: 20px` and `margin-top: 30px`. Measure the real gap in
DevTools and say which value won.

### Exercise 5: Universal reset
Add `* { box-sizing: border-box; }` to a page with several padded, bordered boxes and confirm none
of their rendered widths changed from their declared `width`.

## Quizes

### Q1. Under the default `box-sizing`, how wide is a box with `width: 300px`, `padding: 20px` and `border: 2px solid`?
1. 300px
2. 322px
3. 344px
4. 360px

### Q2. What does `box-sizing: border-box` change?
1. `width` starts to include the padding and border
2. It removes the border from the box
3. It stops margins from collapsing
4. It makes padding transparent

### Q3. One box has `margin-bottom: 20px`, the next has `margin-top: 30px`. What is the gap between them?
1. 20px
2. 30px
3. 50px
4. 0px

### Q4. Why do most projects start their stylesheet with `* { box-sizing: border-box; }`?
1. It is required for `padding` to work at all
2. It makes declared widths behave predictably once padding and borders are added
3. It disables the default `content-box` value entirely
4. It is only needed for flexbox layouts

### Q5. A `width: 50%` column with `padding: 16px` overflows its parent under `content-box`. What fixes it?
1. Removing the padding
2. Setting `box-sizing: border-box` on the column
3. Switching `width` to `auto`
4. Adding a `margin` instead of `padding`
