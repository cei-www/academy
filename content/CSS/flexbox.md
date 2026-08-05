# Flexbox

`display: flex` on a container lays its direct children out along one axis and aligns them across the
other. Everything is expressed in axes, not in left and down.

- **main axis** — chosen by `flex-direction` (`row` by default). `justify-content` distributes space
  along it.
- **cross axis** — perpendicular. `align-items` aligns across it; `align-self` overrides that for one
  item.

`gap` spaces items without margin arithmetic. `flex-wrap: wrap` lets items fall onto new lines;
without it they shrink instead, which is why long rows overflow.

The `flex` shorthand is `grow shrink basis`. The two you will type most differ only in the basis:

```
flex: 1;      /* 1 1 0    — equal widths, content ignored */
flex: auto;   /* 1 1 auto — wider content keeps a bigger share */
```

## Display
### HTML

```
<nav class="bar">
  <span class="brand">CE Web Lab</span>
  <a href="#">Lectures</a>
  <a href="#">Labs</a>
  <button class="signin" type="button">Sign in</button>
</nav>

<div class="row">
  <div class="cell">flex: 1</div>
  <div class="cell wide">flex: 2</div>
  <div class="cell">flex: 1</div>
</div>
```

### CSS

```
.bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: #EEF1F4;
}

.brand  { font-weight: 700; color: #0F1B33; }
.signin { margin-left: auto; }   /* spacer: eats all free space */

.row { display: flex; gap: 8px; margin-top: 16px; }

.cell { flex: 1; padding: 12px; text-align: center; border: 1px solid #DDE2E8; }

.wide { flex: 2; }
```

### Javascript

```

```

## Your Tasks
### 1. Centre on both axes
`justify-content` works on the main axis, `align-items` on the cross axis.

```
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
```

### 2. Switch the axis
With `column`, the main axis becomes vertical and the two alignment properties swap direction.

```
.stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;   /* now horizontal */
  gap: 8px;
}
```

### 3. Compare `flex: 1` and `flex: auto`
Same grow and shrink, different basis, very different widths.

```
.equal > *  { flex: 1; }      /* every child the same width */
.natural > * { flex: auto; }  /* long text gets more room   */
```

### 4. Push one item away
An `auto` margin absorbs the free space on that side. No spacer element needed.

```
.bar { display: flex; gap: 16px; }
.bar .signin { margin-left: auto; }
```

### 5. Wrap cards and exempt one item
`flex-wrap` allows new lines; `align-self` opts a single item out of `align-items`.

```
.cards { display: flex; flex-wrap: wrap; gap: 16px; }
.card  { flex: 1 1 260px; }

.cards .featured { align-self: stretch; }
```

## Exercises

### Exercise 1: Toolbar in one container
Build a bar with a brand on the left, three links, and a button pinned to the right — one flex
container, no spacer `<div>`.

### Exercise 2: Basis proved
Make two rows of three items whose text lengths differ a lot. Give row one `flex: 1` and row two
`flex: auto`. Read the computed widths in DevTools and explain the difference in one sentence.

### Exercise 3: Sticky footer
Use `flex-direction: column` on a container with `min-height: 100vh` so the footer sits at the bottom
even when the main content is short.

### Exercise 4: Card wall that wraps
Lay out six cards at `flex: 1 1 260px` and resize the window until they go from three per row to one.
Record the two widths at which the row count changes.

### Exercise 5: One odd item out
In a row of avatars aligned with `align-items: center`, push a single "new" badge to the top with
`align-self`, without touching the others.

## Quizes

### Q1. With `flex-direction: column`, which axis does `justify-content` control?
1. The horizontal axis
2. The vertical axis, because the main axis is now vertical
3. Both axes
4. Neither; it only works in `row`

### Q2. What is `flex: 1` shorthand for?
1. `flex-grow: 1; flex-shrink: 1; flex-basis: 0`
2. `flex-grow: 1; flex-shrink: 1; flex-basis: auto`
3. `flex-grow: 1; flex-shrink: 0; flex-basis: 100%`
4. `flex-grow: 0; flex-shrink: 1; flex-basis: 1px`

### Q3. Three items with very different text lengths sit in a row. Which makes them all the same width?
1. `flex: auto`
2. `flex: none`
3. `flex: 1`
4. `justify-content: space-between`

### Q4. What does `margin-left: auto` do to a flex item in a row?
1. Centres it in the container
2. Absorbs the free space on its left, pushing it and everything after it to the right
3. Adds a fixed left margin equal to the gap
4. Removes it from the flex layout

### Q5. Items overflow a `display: flex` row with default settings. Why did they not wrap?
1. `flex-wrap` defaults to `nowrap`, so items shrink instead
2. `gap` was not set
3. `align-items` defaults to `stretch`
4. Flex containers never wrap under any setting
