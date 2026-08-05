# Font size

The `font-size` property controls how large text renders. Values can be pixels (`16px`), relative units (`1.2rem`), or keywords (`large`).

## Display
### HTML

```
<h1>Big heading</h1>
<p class="fine-print">Small print at the bottom.</p>
```

### CSS

```
h1 {
  font-size: 32px;
}

.fine-print {
  font-size: 12px;
}
```

### Javascript

```

```

## Your tasks
### Make h1 bigger
Set the `<h1>` font size to `32px`.

```
h1 {
  font-size: 32px;
}
```

### Make small print
Set a `<p class="fine-print">` to `12px`.

```
.fine-print {
  font-size: 12px;
}
```

## Exercises

### Exercise 1: Rem units
Set the body font size to `1rem` and a heading to `2rem`, then explain in one sentence why `rem` scales with the user's browser settings.

### Exercise 2: Responsive heading
Make an `<h1>` shrink to `24px` on small screens using a media query.

### Exercise 3: Scale a whole section
Give a `<section>` a font size of `1.1rem` so every paragraph inside inherits a slightly larger size.

## Quizes

### Q1. Which CSS property changes how large text appears?
1. `text-scale`
2. `font-weight`
3. `font-size`
4. `text-height`

### Q2. Which unit scales relative to the root element's font size?
1. `px`
2. `rem`
3. `vh`
4. `deg`

### Q3. What will `font-size: 200%;` do compared to the parent element?
1. Shrink the text to half size
2. Double the text size
3. Nothing, percentages are invalid here
4. Make the text bold instead of larger
