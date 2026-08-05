# Color

The `color` property sets an element's text colour. A value can be written three ways: a name like
`teal`, a hex code like `#F2A93B`, or an `rgb()` function like `rgb(242, 169, 59)`.

When two rules set `color` on the same element, the one written later in the stylesheet wins.

## Display
### HTML

```
<h1>CE WebDev Academy</h1>
<h2>Computer Engineering, KMITL</h2>
```

### CSS

```
h1 {
  color: teal;
}

h2 {
  color: #F2A93B;
}
```

### Javascript

```

```

## Your Tasks
### 1. Set a colour by name
Named colours are quick to type and fine for a first pass.

```
h1 { color: purple; }
```

### 2. Use a hex code
Every hex code is `#RRGGBB`, two digits per channel.

```
h2 { color: #ff9900; }
```

### 3. Use `rgb()`
The same colour system, written as three 0–255 channels.

```
p { color: rgb(100, 100, 100); }
```

### 4. Fade a colour with `rgba()`
The fourth number is alpha, from 0 (invisible) to 1 (solid).

```
span { color: rgba(0, 0, 255, 0.5); }
```

### 5. Colour two selectors at once
A comma groups selectors so one rule can apply to both.

```
h1, h2 { color: teal; }
```

## Exercises

### Exercise 1: Named colour
Change the `<h1>` text colour to `purple` using a named colour.

### Exercise 2: Hex code
Change the `<h2>` text colour to `#ff9900` using a hex code.

### Exercise 3: `rgb()` value
Add a `<p>` below the headings and set its text colour with `rgb(100, 100, 100)`.

### Exercise 4: `rgba()` and opacity
Add a `<span>` inside the paragraph and give it `rgba(0, 0, 255, 0.5)` so it looks semi-transparent.

### Exercise 5: One rule, two selectors
Give `<h1>` and `<h2>` the same colour, `teal`, using a single grouped rule.

## Quizes

### Q1. Which CSS property sets the colour of text?
1. `text-color`
2. `color`
3. `font-color`
4. `text-style`

### Q2. Which of these is a valid way to write a colour value?
1. `#ff0000`
2. `color(255, 0, 0)`
3. `rgb: 255, 0, 0`
4. `colour: red`

### Q3. `h2 { color: red; }` is followed later in the same file by `h2 { color: yellow; }`. What colour is `h2`?
1. Both mix into orange
2. red
3. It is a CSS error and no colour applies
4. yellow

### Q4. What does the fourth value in `rgba(0, 0, 255, 0.5)` control?
1. A fourth colour channel
2. The element's font size
3. How transparent the colour is
4. The colour's hue

### Q5. Which rule colours both `<h1>` and `<h2>` the same way, without writing two separate blocks?
1. `h1 h2 { color: teal; }`
2. `h1, h2 { color: teal; }`
3. `h1 > h2 { color: teal; }`
4. `h1 + h2 { color: teal; }`
