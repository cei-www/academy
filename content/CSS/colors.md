# Colors and backgrounds

CSS has two colour properties you will use constantly: `color` sets the text colour, and
`background-color` sets the colour painted behind the element.

A colour value can be written three ways:

- a name — `teal`, `red`, about 140 of them
- a hex code — `#F2A93B`, two hex digits each for red, green and blue
- an rgb function — `rgb(242, 169, 59)`, each channel from 0 to 255

`color` is inherited, so setting it on `body` reaches every descendant that does not override it.
`background-color` is not inherited — each element paints its own, and the default is transparent.

`opacity` takes a number from 0 to 1 and fades the whole element at once — text, background and
children together. It does not change the colour values themselves.

Body text needs a contrast ratio of at least 4.5:1 against its background to stay readable; DevTools
prints the ratio next to any colour swatch in the Styles panel.

## Display
### HTML

```
<h1>CE colour demo</h1>
<p>This paragraph inherits its colour from <code>body</code>.</p>
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
### 1. Set a text colour by name
Names are quick to type and fine for a throwaway test.

```
h1 { color: teal; }
```

### 2. Use a hex code
Every hex code is `#RRGGBB`, two digits per channel, `00` to `ff`.

```
h1 { color: #0F1B33; }
```

### 3. Use `rgb()`
The same colour written as three 0–255 channels.

```
.note { background-color: rgb(242, 169, 59); }
```

### 4. Inherit a colour from `body`
Set the text colour once; every descendant that does not override it follows.

```
body {
  color: #131A26;
  background-color: #EEF1F4;
}
```

### 5. Fade an element
`opacity: 0.4` keeps 40% of the element visible, background included.

```
.faded { opacity: 0.4; }
```

## Exercises

### Exercise 1: Three notations, one colour
Set `h1`, `h2` and `h3` to the same amber — once as a name, once as `#F2A93B`, once as `rgb()`.
Confirm in DevTools that all three compute to the same value.

### Exercise 2: Inheritance check
Set `color: #6B4207` on `body` only, then add a `<p>` containing a `<strong>`. Explain which
elements changed colour and why the page background did not.

### Exercise 3: Warning box
Build a box with a navy background and white text, 12px of padding. Check its contrast ratio in
DevTools and report the number.

### Exercise 4: Fade a card
Give a card `opacity: 0.5` and note what happens to its heading and border. Then reach the same
visual result on the background alone using `rgba(15, 27, 51, 0.5)`.

### Exercise 5: Fix an unreadable pair
Style a paragraph `color: #DDE2E8` on `background-color: #EEF1F4`. Measure the contrast in DevTools,
then change one of the two colours until the ratio passes 4.5:1.

## Quizes

### Q1. Which property sets the colour of text?
1. `text-color`
2. `color`
3. `font-color`
4. `background-color`

### Q2. Which value is not a valid CSS colour?
1. `#F2A93B`
2. `rgb(242, 169, 59)`
3. `teal`
4. `colour(amber)`

### Q3. `body { color: #6B4207; }` is the only colour rule on the page. What colour is a `<p>` inside a `<div>` inside `body`?
1. Black, because `color` does not cross element boundaries
2. `#6B4207`, because `color` is inherited
3. Black, because only the `<div>` inherits it
4. Transparent

### Q4. What does `opacity: 0.3` affect?
1. Only the element's background colour
2. Only the element's text
3. The whole element — text, background and children
4. Nothing, unless a background colour is set

### Q5. What is the minimum contrast ratio recommended for normal body text?
1. 1.5:1
2. 3:1
3. 4.5:1
4. 10:1
