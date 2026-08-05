# Introduction

HTML (HyperText Markup Language) describes the **structure** of a page: what is a heading, what is a
paragraph, what is a list. It does not decide how things look — that is CSS — and it is not a
programming language: there are no variables, conditions or loops.

You mark content up with **tags**. An opening tag `<p>`, some content, a closing tag `</p>`: together
they are one **element**. A few elements are *void* — no content, no closing tag — like `<br>` and
`<img>`. An **attribute** sits inside the opening tag and configures the element: in
`<html lang="en">`, the attribute `lang` has the value `"en"`.

Every page starts from the same skeleton:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My page</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

`<head>` holds information *about* the page; `<body>` holds what the reader sees. Elements nest, and
they must close in the reverse order they opened — `<p><strong>hi</strong></p>`, never
`<p><strong>hi</p></strong>`. Bad nesting forces the browser to guess, and your CSS and JavaScript
then act on a tree you did not intend. Anything inside `<!-- ... -->` is a comment the browser skips.

## Display
### HTML

```
<!-- Everything here lives inside <body> -->
<h1>CE WebDev Academy</h1>

<p>This page is <strong>structure</strong>, not decoration.</p>

<p>
  My name is Nattapong and I study Computer Engineering
  at KMITL.
</p>

<hr>

<p>Every visible thing above is an element nested inside another.</p>
```

### CSS

```
body {
  font-family: system-ui, sans-serif;
  color: #131A26;
  margin: 16px;
}

h1 { color: #0F1B33; }
```

### Javascript

```

```

## Your Tasks
### 1. Write the skeleton
Every document needs a doctype, an `<html>` root, a `<head>` and a `<body>`.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CE WebDev</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

### 2. Declare the language
`lang` tells screen readers which pronunciation to use and translation tools what to translate from.

```
<html lang="th">
```

### 3. Fix the encoding and the phone width
`utf-8` makes Thai characters render; the viewport tag stops a phone from zooming the page out.

```
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 4. Title the tab
`<title>` is the browser tab label, the bookmark name and the search-result headline.

```
<title>Nattapong — CE student at KMITL</title>
```

### 5. Nest one element inside another
Close the inner element before the outer one.

```
<p>I study <strong>web development</strong> at KMITL.</p>
```

## Exercises

### Exercise 1: Your own skeleton
Type a complete document from memory — doctype, `lang`, `charset`, viewport, `<title>`, `<body>` —
with one `<h1>` and one `<p>` about yourself.

### Exercise 2: Break the nesting
Write `<p><strong>KMITL</p></strong>`, render it, then open DevTools' Elements panel and report what
tree the browser actually built.

### Exercise 3: Head or body
For each of these say whether it belongs in `<head>` or `<body>`: the tab title, a heading, the
charset declaration, a photo, the viewport tag.

### Exercise 4: Comment it out
Write three paragraphs, then comment out the middle one so it disappears from the page but stays in
the source.

### Exercise 5: Count the attributes
List every attribute in the skeleton above with its value, and write one sentence per attribute
saying what it does.

## Quizes

### Q1. What is HTML responsible for?
1. The structure and meaning of the content
2. The colours and spacing of the page
3. The behaviour of buttons when they are clicked
4. Storing the data the page shows

### Q2. Which of these is a void element?
1. `<p>`
2. `<title>`
3. `<meta>`
4. `<body>`

### Q3. In `<html lang="en">`, what is `lang`?
1. A tag
2. An element
3. A value
4. An attribute

### Q4. Where does `<title>` belong?
1. Inside `<head>`
2. Inside `<body>`, at the top
3. Directly inside `<html>`, before `<head>`
4. Before `<!DOCTYPE html>`

### Q5. What does the browser display for `<p>Hello <!-- world --> KMITL</p>`?
1. `Hello world KMITL`
2. `Hello <!-- world --> KMITL`
3. `Hello KMITL`
4. Nothing — the comment breaks the paragraph
