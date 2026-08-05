# Code and technical text

Four inline elements carry technical meaning that plain text does not. `<code>` marks a fragment of
code — a function name, a file path, a snippet. `<pre>` preserves whitespace and line breaks exactly
as written, so wrapping code in `<pre><code>…</code></pre>` is how a multi-line block keeps its
indentation. `<kbd>` marks a key the user should press; `<samp>` marks sample output a program
produced; `<var>` marks a variable or placeholder name in running text.

## Display
### HTML

```
<p>Call <code>fetch(url)</code> to start a request.</p>

<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<p>The console prints <samp>undefined</samp> if the value was never set.</p>

<p>Replace <var>n</var> with the array's length.</p>

<pre><code>function add(a, b) {
  return a + b;
}</code></pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
code, kbd, samp, pre { font-family: "SFMono-Regular", Consolas, monospace; }
code, samp { background: #EEF1F4; padding: 1px 5px; border-radius: 4px; }
kbd { background: #131A26; color: #EEF1F4; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
var { font-style: italic; color: #0F1B33; }
pre { background: #151B26; color: #E5E9F0; padding: 12px; border-radius: 6px; overflow-x: auto; }
pre code { background: none; padding: 0; color: inherit; }
```

### Javascript

```

```

## Your Tasks
### 1. Mark a code fragment
`<code>` is for a short piece of code inline with text, not a whole block.

```
<p>Call <code>document.querySelector()</code> to find an element.</p>
```

### 2. Preserve a multi-line block
`<pre>` keeps every space and line break; nest `<code>` inside it for a code block.

```
<pre><code>if (x > 0) {
  console.log("positive");
}</code></pre>
```

### 3. Show a keyboard shortcut
Each key gets its own `<kbd>`, chained with plain text between them.

```
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
```

### 4. Mark sample output
`<samp>` is for text a program printed, distinct from `<code>` you would type.

```
<p>The function returns <samp>NaN</samp> for invalid input.</p>
```

### 5. Mark a placeholder name
`<var>` tells the reader this word stands for a value, not a literal keyword.

```
<p>Replace <var>filename</var> with your own file's name.</p>
```

## Exercises

### Exercise 1: Document a function
Write one paragraph describing a function, using `<code>` for its name and `<var>` for each
parameter name.

### Exercise 2: Shortcut list
Build a list of three keyboard shortcuts, each using `<kbd>` for every key.

### Exercise 3: Code block
Wrap a 4-line JavaScript snippet in `<pre><code>` and confirm the indentation renders exactly as
typed.

### Exercise 4: Input and output
Write two paragraphs — one showing sample code with `<code>`, one showing what it would print with
`<samp>` — and explain the difference in one sentence.

### Exercise 5: Style check
Give `<kbd>` a distinct background so it visually reads as a physical key, separate from `<code>`.

## Quizes

### Q1. What does `<code>` mark?
1. A block quotation
2. A fragment of code
3. A citation for a source
4. Emphasised text

### Q2. Why nest `<code>` inside `<pre>` for a multi-line snippet?
1. `<pre>` alone does not render monospace text
2. `<pre>` preserves whitespace and line breaks; `<code>` marks it as code
3. `<code>` is required for the browser to run the snippet
4. Nesting is not necessary — either tag alone is equivalent

### Q3. What is `<kbd>` for?
1. Sample program output
2. A key or key combination the user should press
3. A variable name
4. A block of preserved whitespace

### Q4. What is the difference between `<code>` and `<samp>`?
1. There is no difference; they are aliases
2. `<code>` marks code you would type; `<samp>` marks output a program produced
3. `<samp>` is only for error messages
4. `<code>` cannot appear inside a paragraph

### Q5. What does `<var>` mark?
1. A CSS custom property
2. A placeholder or variable name in running text
3. A JavaScript `var` declaration specifically
4. A validated form field
