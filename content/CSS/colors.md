# Colors and backgrounds

CSS has two color properties you will use constantly: `color` sets the text color, and
`background-color` sets the color painted behind the element. The notations a color value can be
written in — names, hex, `rgb()`, `hsl()` — are covered in *HTML colors*; this lesson is about the
properties that consume them.

`color` is inherited, so setting it on `body` reaches every descendant that does not override it.
`background-color` is not inherited — each element paints its own, and the default is transparent,
which is why a nested box shows whatever its ancestor painted until you give it a background.

`opacity` takes a number from 0 to 1 and fades the whole element at once — text, background and
children together. It does not change the color values themselves, so an `rgba()` background is the
better tool when only the background should fade.

Body text needs a contrast ratio of at least 4.5:1 against its background to stay readable; DevTools
prints the ratio next to any color swatch in the Styles panel.

## Display
### HTML

```
<h1>CE color demo</h1>
<p>This paragraph inherits its color from <code>body</code>.</p>
<p class="note">This one paints its own background.</p>
<p class="faded">This one is faded with opacity.</p>
```

### CSS

```
body {
  color: #131A26;
  background-color: #EEF1F4;
  font-family: system-ui, sans-serif;
}

h1 { color: #0F1B33; }

.note {
  color: #6B4207;
  background-color: #F2A93B;
  padding: 8px;
}

.faded {
  background-color: rgb(15, 27, 51);
  color: white;
  padding: 8px;
  opacity: 0.4;
}
```

### Javascript

```

```

## Your Tasks
### 1. Set the text color
`color` styles the text itself, not the box around it.

```
h1 { color: #0F1B33; }
```

### 2. Paint a background
`background-color` fills the element's box, padding included.

```
.note { background-color: #F2A93B; padding: 8px; }
```

### 3. Inherit a color from `body`
Set the text color once; every descendant that does not override it follows.

```
body {
  color: #131A26;
  background-color: #EEF1F4;
}
```

### 4. Fade an element
`opacity: 0.4` keeps 40% of the element visible, background and text together.

```
.faded { opacity: 0.4; }
```

### 5. Fade only the background
An alpha channel on `background-color` leaves the text fully opaque.

```
.panel { background-color: rgba(15, 27, 51, 0.4); color: #131A26; }
```

## Exercises

### Exercise 1: Text versus background
Give one paragraph a navy `color` and an amber `background-color`, then swap the two values. Describe
what changed and which property controls which part of the box.

### Exercise 2: Inheritance check
Set `color: #6B4207` on `body` only, then add a `<p>` containing a `<strong>`. Explain which
elements changed color and why the page background did not.

### Exercise 3: Warning box
Build a box with a navy background and white text, 12px of padding. Check its contrast ratio in
DevTools and report the number.

### Exercise 4: opacity versus rgba
Give a card `opacity: 0.5` and note what happens to its heading and border. Then reach the same
visual result on the background alone using `rgba(15, 27, 51, 0.5)`.

### Exercise 5: Fix an unreadable pair
Style a paragraph `color: #DDE2E8` on `background-color: #EEF1F4`. Measure the contrast in DevTools,
then change one of the two colors until the ratio passes 4.5:1.

## Quizes

### Q1. Which property sets the color of text?
1. `text-color`
2. `color`
3. `font-color`
4. `background-color`

### Q2. Which of these two properties is inherited by descendants?
1. `background-color`
2. `color`
3. Both are inherited
4. Neither is inherited

### Q3. `body { color: #6B4207; }` is the only color rule on the page. What color is a `<p>` inside a `<div>` inside `body`?
1. Black, because `color` does not cross element boundaries
2. `#6B4207`, because `color` is inherited
3. Black, because only the `<div>` inherits it
4. Transparent

### Q4. What does `opacity: 0.3` affect?
1. Only the element's background color
2. Only the element's text
3. The whole element — text, background and children
4. Nothing, unless a background color is set

### Q5. What is the minimum contrast ratio recommended for normal body text?
1. 1.5:1
2. 3:1
3. 4.5:1
4. 10:1
