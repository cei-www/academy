# HTML colors

A color value can be written four common ways. A **name** — `teal`, `tomato` — about 140 of them,
readable but limited. A **hex code** — `#F2A93B` — two hex digits each for red, green and blue, `00`
to `ff`. An **rgb function** — `rgb(242, 169, 59)` — the same three channels as decimal numbers, `0` to
`255`. An **hsl function** — `hsl(38, 87%, 59%)` — hue as a 0–360 degree position on a color wheel,
then saturation and lightness as percentages, often the easiest to reason about by hand.

Adding a fourth alpha channel makes a color partly transparent: `rgba(242, 169, 59, 0.5)` or
`hsla(38, 87%, 59%, 0.5)`. A hex color can do the same with two extra digits, `#F2A93B80`.

## Display
### HTML

```
<div id="swatches"></div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
#swatches { display: flex; gap: 8px; flex-wrap: wrap; }
.swatch { width: 92px; height: 60px; border-radius: 6px; display: flex; align-items: flex-end;
  padding: 4px; color: #fff; font-size: 11px; text-shadow: 0 1px 2px rgba(0,0,0,.5); }
```

### Javascript

```
const colors = [
  { label: "teal", value: "teal" },
  { label: "#F2A93B", value: "#F2A93B" },
  { label: "rgb(15,27,51)", value: "rgb(15, 27, 51)" },
  { label: "hsl(150,65%,35%)", value: "hsl(150, 65%, 35%)" },
  { label: "rgba(185,28,28,.6)", value: "rgba(185, 28, 28, 0.6)" },
];

document.getElementById("swatches").innerHTML = colors
  .map(c => `<div class="swatch" style="background:${c.value}">${c.label}</div>`)
  .join("");
```

## Your Tasks
### 1. Use a named color
About 140 names are built in, no punctuation needed.

```
<p style="color: teal;">Named color</p>
```

### 2. Use a hex code
Two hex digits each for red, green, blue — `00` to `ff`.

```
<p style="color: #F2A93B;">Hex color</p>
```

### 3. Use rgb()
The same channels, written as decimal numbers 0–255.

```
<p style="color: rgb(242, 169, 59);">RGB color</p>
```

### 4. Use hsl()
Hue is a position on a color wheel, 0–360; saturation and lightness are percentages.

```
<p style="color: hsl(38, 87%, 59%);">HSL color</p>
```

### 5. Add transparency with an alpha channel
A fourth value fades the color without changing the element's opacity as a whole.

```
<p style="background: rgba(185, 28, 28, 0.5);">Semi-transparent</p>
```

## Exercises

### Exercise 1: One color, four notations
Pick one color and write it as a name (if it has one), a hex code, an `rgb()`, and an `hsl()`. Confirm
all four render identically.

### Exercise 2: Build a swatch grid
Render five colors as swatches from a JS array, each swatch's background set from the array's value,
as the Display above does.

### Exercise 3: Fade a background
Take one background color and render it at four different alpha values (1, 0.75, 0.5, 0.25) side by
side.

### Exercise 4: Lighten with hsl()
Take one `hsl()` color and render three versions with the same hue and saturation but different
lightness values. Describe what changes.

### Exercise 5: Convert by hand
Given `rgb(15, 27, 51)`, write the equivalent hex code, and explain how each channel maps to two hex
digits.

## Quizes

### Q1. In a hex color like `#F2A93B`, what does each pair of digits represent?
1. Hue, saturation, lightness
2. Red, green and blue channels, `00` to `ff`
3. Opacity, then two unused digits
4. A named color lookup index

### Q2. What range does each channel take in `rgb(242, 169, 59)`?
1. 0 to 1
2. 0 to 100
3. 0 to 255
4. 0 to 360

### Q3. In `hsl(38, 87%, 59%)`, what does the first number represent?
1. A percentage of red
2. A hue, as a 0–360 degree position on a color wheel
3. The alpha channel
4. A hex digit pair

### Q4. What does the fourth value in `rgba(185, 28, 28, 0.5)` control?
1. A fourth color channel with no visual effect
2. The element's alpha (transparency)
3. The border width
4. The saturation

### Q5. What is a limitation of named colors compared to hex, rgb or hsl?
1. Named colors cannot be used in CSS at all
2. Only about 140 exist, far fewer than the full color range
3. Named colors are always fully transparent
4. Named colors only work inside `<body>`
