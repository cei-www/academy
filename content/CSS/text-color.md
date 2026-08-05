# Text Color

The `color` property in CSS controls the color of an element's text. It accepts several value formats — named colors (e.g. `red`), hex codes (e.g. `#ff0000`), or functions like `rgb()` and `rgba()`.

## Display
### HTML

```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
```

### CSS

```
h1 {
  color: green;
}

h2 {
  color: red;
}
```

### Javascript

```

```

## Your Tasks
### Change h1 color
To change h1 to blue

```
h1 {
  color: blue;
}
```

### Change h2 color
To change h2 to yellow

```
h2 {
  color: yellow;
}
```

## Exercises

### Exercise 1: Named Colors
Using the HTML from the Display section, change the `<h1>` text color to `purple` using a named color.

### Exercise 2: Hex Codes
Change the `<h2>` text color to `#ff9900` using a hex color code.

### Exercise 3: RGB Values
Add a `<p>` element below the headings. Set its text color to `rgb(100, 100, 100)` using the `rgb()` function.

### Exercise 4: RGBA & Opacity
Add a `<span>` inside your paragraph. Give it the text color `rgba(0, 0, 255, 0.5)` so it appears as a semi-transparent blue.

### Exercise 5: Coloring Multiple Elements
Give both `<h1>` and `<h2>` the same text color, `teal`, using a single CSS rule with a grouped selector (e.g. `h1, h2 { ... }`).

## Quizes

### Q1. Which CSS property is used to set the color of text?
1. `text-color`
2. `color`
3. `font-color`
4. `text-style`

### Q2. What does the `color` property change on an element like `<h1>` or `<p>`?
1. The color of the entire webpage
2. The color of the element's background
3. The color of the text itself
4. The color of the border around the element

### Q3. Which of the following is a valid way to write a color value in CSS?
1. `#ff0000`
2. `color(255, 0, 0)`
3. `rgb: 255,0,0`
4. `colour: red`

### Q4. Given `h2 { color: red; }` followed later by `h2 { color: yellow; }` in the same stylesheet, what color does h2 become?
1. Both colors mix into orange
2. red
3. It causes a CSS error and no color is applied
4. yellow

### Q5. Given the CSS below:
```
h1 { color: blue; }
.title { color: green; }
```
and this HTML: `<h1 class="title">Hello</h1>` — what color will "Hello" be?

1. blue, because element selectors are applied first
2. green, because a class selector has higher specificity than an element selector
3. black, the browser default, since the rules conflict
4. It won't render because of the conflicting rules
