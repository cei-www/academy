# Font family and size

`font-family` takes a list, called the font stack. The browser tries each name in order and uses the
first one installed, so the last entry must be a generic family — `sans-serif`, `serif` or
`monospace` — which always resolves to something. Quote any name that contains a space.

`font-size` in `px` is a fixed size. `rem` is a multiple of the root font size, 16px by default, so
`1.5rem` is 24px, and every `rem` size on the page scales together when a reader enlarges their
browser font. Prefer `rem` for text.

## Display
### HTML

```
<h1>KMITL Computer Engineering</h1>
<p>Body text set with a font stack and a rem-based size.</p>
```

### CSS

```
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
}
```

### Javascript

```

```

## Your Tasks
### 1. Set a font stack
Quote any family name that contains a space, and end with a generic family.

```
body {
  font-family: "Segoe UI", system-ui, Arial, sans-serif;
}
```

### 2. Add a generic fallback
Without a generic family at the end, an unusual system could show nothing readable at all.

```
p { font-family: "Trebuchet MS", sans-serif; }
```

### 3. Size text in `rem`
`1.5rem` is 1.5 × the root size — 24px by default, and larger if the reader enlarges their font.

```
h2 { font-size: 1.5rem; }
```

### 4. Size text in `px`
A fixed size that does not grow with the reader's font setting.

```
.caption { font-size: 13px; }
```

### 5. Set the body's base size
Every other `rem` value on the page scales from this one.

```
body { font-size: 1rem; }
```

## Exercises

### Exercise 1: Build a stack
Give `body` a four-name font stack ending in `sans-serif`, then insert a font name you know is not
installed as the first entry. Confirm in DevTools which family the browser actually used.

### Exercise 2: `px` versus `rem`
Set one heading to `24px` and another to `1.5rem`. Change the browser's default font size to 20px
and report what happened to each heading.

### Exercise 3: Two font stacks
Give headings a serif stack and body text a sans-serif stack, each ending in the right generic
family.

### Exercise 4: A missing generic family
Remove the generic family from the end of a stack and pick every named font that does not exist.
Report what the browser falls back to.

### Exercise 5: Consistent scale
Set `h1`, `h2` and body text all in `rem`, in a 2:1.5:1 ratio, and check the computed pixel sizes in
DevTools.

## Quizes

### Q1. Why does a font stack end with `sans-serif` or `serif`?
1. It sets the fallback text color
2. It is a generic family the browser can always resolve
3. It forces the browser to download the font
4. It is required syntax after any quoted name

### Q2. Which font name must be wrapped in quotes?
1. `Arial`
2. `sans-serif`
3. `"Segoe UI"`
4. `serif`

### Q3. The root font size is 16px. How large is `font-size: 1.25rem`?
1. 1.25px
2. 16px
3. 20px
4. 25px

### Q4. What is the main advantage of `rem` over `px` for body text?
1. `rem` renders faster in the browser
2. Every `rem` size scales together when the reader changes their font setting
3. `rem` is required inside a font stack
4. `px` cannot be used on headings

### Q5. A font stack has no generic family at the end and none of the named fonts are installed. What happens?
1. The browser refuses to render the text
2. The browser falls back to its own default font
3. The text disappears entirely
4. The first named font is downloaded automatically
