# Centering elements

CSS has no single `center` property — which technique you need depends on what you are centering.
Centering **text** inside its own box is `text-align: center`. Centering a **block-level box**
horizontally inside its parent is `margin: 0 auto` on a box with a set `width`. Centering something
on **both axes at once** — a card, a spinner, a login form — is `display: flex` with `align-items:
center` and `justify-content: center` on the parent.

A fourth technique, useful when the parent cannot become a flex container, is
`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);` — offset to the middle,
then pull back by half the element's own size.

## Display
### HTML

```
<p class="text-demo">This paragraph's text is centred.</p>

<div class="block-demo">A block box centred horizontally in its parent.</div>

<div class="flex-demo">
  <div class="card">Centred on both axes</div>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.text-demo { text-align: center; background: #EEF1F4; padding: 8px; }

.block-demo { width: 240px; margin: 0 auto; background: #EEF1F4; padding: 8px; text-align: center; }

.flex-demo {
  display: flex; align-items: center; justify-content: center;
  height: 140px; background: #EEF1F4;
}
.card { background: #F2A93B; color: #6B4207; padding: 12px 20px; border-radius: 6px; }
```

### Javascript

```

```

## Your Tasks
### 1. Centre text inside its box
`text-align: center` only affects inline content, not the box itself.

```
p { text-align: center; }
```

### 2. Centre a block box horizontally
The box needs an explicit `width` — `auto` margins split the remaining space evenly.

```
.box { width: 300px; margin: 0 auto; }
```

### 3. Centre on both axes with flex
This is the pattern you will reach for most — a card, a spinner, a modal.

```
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```

### 4. Centre with absolute positioning and transform
Useful when the parent already has other content and cannot become a flex container.

```
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 5. Choose the right technique
Text, a single block, or both axes — each has its own tool; do not reach for `position: absolute`
by default.

```
/* text only        → text-align: center
   one block, 1 axis → margin: 0 auto
   both axes         → display: flex + align-items + justify-content */
```

## Exercises

### Exercise 1: Centred heading
Centre a page's `<h1>` text without affecting anything else on the page.

### Exercise 2: Centred fixed-width box
Give a 400px box `margin: 0 auto` inside a wider page and confirm it sits in the middle.

### Exercise 3: Centred login card
Build a 320px-wide "sign in" card, centred on both axes inside a full-height page, using flex.

### Exercise 4: Centred badge with transform
Centre a small badge inside a relatively positioned parent using `position: absolute` and
`transform: translate(-50%, -50%)`.

### Exercise 5: Break it on purpose
Remove `align-items: center` from a flex-centred card and describe, in one sentence, which axis
stops being centred.

## Quizes

### Q1. Which property centres inline text inside its own box?
1. `justify-content: center`
2. `text-align: center`
3. `align-items: center`
4. `margin: auto`

### Q2. What does a block box need before `margin: 0 auto` will centre it?
1. `display: inline`
2. An explicit `width`
3. `position: absolute`
4. `text-align: center`

### Q3. Which pair of properties centres a flex child on both axes?
1. `text-align` and `vertical-align`
2. `align-items: center` and `justify-content: center` on the parent
3. `margin: auto` on all four sides
4. `float: center`

### Q4. What does `transform: translate(-50%, -50%)` do after `top: 50%; left: 50%;`?
1. Nothing — the two together are redundant
2. Pulls the element back by half its own width and height, centring it exactly
3. Rotates the element 50 degrees
4. Doubles the element's size

### Q5. Which technique is the best default for centering a card on both axes?
1. `position: absolute` with no other rules
2. `text-align: center` on the card itself
3. `display: flex` with `align-items: center` and `justify-content: center` on the parent
4. `float: center`
