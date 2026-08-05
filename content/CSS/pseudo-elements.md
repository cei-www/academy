# Pseudo-elements

A pseudo-element styles a *part* of an element that is not its own tag in the markup. `::before` and
`::after` insert generated content just inside an element's start or end — they need `content` (even
`content: ""`) or nothing renders. `::first-letter` and `::first-line` style just the opening letter
or line of text. `::selection` styles text while the visitor highlights it, and `::placeholder`
styles an `<input>`'s placeholder text.

**Priority**: written with a double colon, pseudo-elements target real rendered content and combine
with any selector, same as a pseudo-class would.

## Display
### HTML

```
<p class="quote">The web is for everyone.</p>
<input type="text" placeholder="Type your student ID">
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.quote::before { content: "\201C"; color: #F2A93B; font-size: 1.4em; }
.quote::after { content: "\201D"; color: #F2A93B; font-size: 1.4em; }
.quote::first-letter { font-weight: 700; }

input::placeholder { color: #9CA3AF; font-style: italic; }

::selection { background: #F2A93B; color: #6B4207; }
```

### Javascript

```

```

## Your Tasks
### 1. Insert generated content before an element
`::before` needs a `content` value, even an empty string, or nothing shows.

```
.quote::before { content: "\201C"; }
```

### 2. Insert generated content after an element
`::after` works the same way, appended just inside the element's closing tag.

```
.quote::after { content: "\201D"; }
```

### 3. Style just the first letter
`::first-letter` targets only the opening character of the element's text.

```
.quote::first-letter { font-weight: 700; font-size: 1.2em; }
```

### 4. Style placeholder text
`::placeholder` targets an `<input>`'s placeholder, separately from its typed value.

```
input::placeholder { color: #9CA3AF; }
```

### 5. Style the highlighted-text selection
`::selection` applies while the visitor drags to select text.

```
::selection { background: #F2A93B; color: #6B4207; }
```

## Exercises

### Exercise 1: Decorative quote marks
Use `::before` and `::after` to add opening and closing curly quotes around a `<p class="quote">`,
with no quote characters typed in the HTML itself.

### Exercise 2: Drop cap
Style a paragraph's `::first-letter` to be noticeably larger and bolder than the rest of the text.

### Exercise 3: Custom placeholder style
Give an `<input>`'s `::placeholder` a muted colour and italic style, distinct from its typed text.

### Exercise 4: Custom selection colour
Set `::selection` to your site's accent colour and confirm it applies when you drag-select any text
on the page.

### Exercise 5: Missing content
Remove the `content` property from a `::before` rule, reload, and report what happened to the
generated content.

## Quizes

### Q1. What is required for `::before` to render anything?
1. Nothing — it always renders by default
2. A `content` property, even `content: ""`
3. A `display: block` declaration
4. A matching `::after` rule on the same element

### Q2. What does `::first-letter` target?
1. The first `<p>` on the page
2. Only the opening character of the element's text
3. The first word of every paragraph
4. Nothing — it is not a real pseudo-element

### Q3. What does `input::placeholder` style?
1. The input's typed value
2. The input's placeholder text specifically
3. The `<label>` associated with the input
4. The input's border colour

### Q4. When does `::selection` apply?
1. Permanently, once the page loads
2. While the visitor drag-selects text
3. Only inside `<input>` elements
4. Only after clicking a button

### Q5. How are pseudo-elements written, compared to pseudo-classes?
1. With a single colon, same as pseudo-classes
2. With a double colon (`::`)
3. With a `#` prefix
4. With a `.` prefix
