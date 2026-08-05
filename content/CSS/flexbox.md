# Flexbox

Flexbox arranges items in a row or column and makes it easy to align, space, and reorder them without floats or manual positioning.

## Display
### HTML

```
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

### CSS

```
.container {
  display: flex;
  gap: 8px;
}

.item {
  padding: 12px;
  border: 1px solid black;
}
```

### Javascript

```

```

## Your tasks
### Row of boxes
Lay out three `<div>` children side by side.

```
.container {
  display: flex;
}
```

### Center everything
Center children both horizontally and vertically inside a container.

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Exercises

### Exercise 1: Space between
Use `justify-content: space-between` to push items to opposite ends of a row.

### Exercise 2: Column direction
Stack items vertically instead of horizontally with `flex-direction: column`.

### Exercise 3: Grow one item
Make one child expand to fill remaining space with `flex-grow: 1`.

## Quizes

### Q1. Which property turns a container into a flex layout?
1. `display: flex;`
2. `layout: flex;`
3. `flex: true;`
4. `position: flex;`

### Q2. Which property aligns items along the main axis?
1. `align-items`
2. `justify-content`
3. `flex-wrap`
4. `text-align`

### Q3. What does `flex-direction: column` do?
1. Adds a vertical scrollbar
2. Stacks flex items top to bottom instead of left to right
3. Splits the container into newspaper-style columns
4. Reverses the order of items
