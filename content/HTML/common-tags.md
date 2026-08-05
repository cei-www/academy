# Common Tags

Beyond headings and paragraphs, a working web page is built from a small, high-value vocabulary: links, images, lists, tables, forms, and containers. Choosing the right element from this set is an engineering decision, because each element carries a *default role*, *default behaviour*, and *default keyboard interaction* that you would otherwise have to re-implement by hand.

Elements fall into two broad content categories that determine how they participate in layout:

- **Flow / block-level** — default `display: block`, occupies a full line: `<div>`, `<p>`, `<section>`, `<ul>`, `<table>`
- **Phrasing / inline** — default `display: inline`, flows within a line of text: `<span>`, `<a>`, `<em>`, `<strong>`, `<code>`

Two containers exist purely for grouping and carry **no semantics at all**: `<div>` (block) and `<span>` (inline). Reach for them only when no semantic element fits — they are the assembly language of markup.

Some elements are load-bearing for accessibility and should never be faked:

- `<a href>` navigates and is keyboard-focusable by default. A `<div onclick>` is neither.
- `<button>` activates on both `Enter` and `Space` and exposes the `button` role.
- `<img alt="...">` needs *descriptive* alt text, or `alt=""` when the image is purely decorative so screen readers skip it. Omitting `alt` entirely is a defect, not a neutral choice.
- `<label for="...">` binds text to a form control, enlarging its hit target and making it announceable.

## Display
### HTML

```
<article>
  <h2>Deliverables</h2>
  <ul>
    <li>Source code on <a href="https://example.com">the repository</a></li>
    <li>A one-page <span class="tag">design note</span></li>
  </ul>
  <figure>
    <img src="resources/img/campus-400.jpg" alt="Night skyline of the KMITL campus"
         width="400" height="225">
    <figcaption>Figure 1: Deployment site</figcaption>
  </figure>
  <button type="button">Submit report</button>
</article>
```

### CSS

```
.tag {
  background: #fde68a;
  padding: 0 4px;
}

figure {
  margin: 16px 0;
}
```

### Javascript

```

```

## Your Tasks
### 1. Create a safe external link
Link out to another site so it opens in a new browsing context, without exposing the opener to the destination page.

```
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Read the specification
</a>
```

### 2. Add an accessible image with a caption
Pair an image with its caption using `<figure>` and `<figcaption>` so the association is machine-readable, not merely visual.

```
<figure>
  <img src="resources/img/box-model.svg" alt="Diagram of the CSS box model"
       width="360" height="240">
  <figcaption>Figure 2: The CSS box model</figcaption>
</figure>
```

### 3. Choose the correct list type
Use an ordered list when sequence carries meaning, and an unordered list when it does not.

```
<h3>Build steps (order matters)</h3>
<ol>
  <li>Install dependencies</li>
  <li>Compile the sources</li>
  <li>Run the test suite</li>
</ol>

<h3>Supported browsers (order is arbitrary)</h3>
<ul>
  <li>Chromium</li>
  <li>Firefox</li>
  <li>Safari</li>
</ul>
```

### 4. Build a labelled form control
Bind a `<label>` to an `<input>` so clicking the label focuses the field, and mark the field as required.

```
<form>
  <label for="student-id">Student ID</label>
  <input id="student-id" name="studentId" type="text" required
         pattern="[0-9]{8}" placeholder="12345678">
  <button type="submit">Register</button>
</form>
```

### 5. Mark up tabular data correctly
Render a real table with a header row scoped for assistive technology. Tables are for data, never for page layout.

```
<table>
  <caption>Latency measurements</caption>
  <thead>
    <tr><th scope="col">Trial</th><th scope="col">RTT (ms)</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>12.4</td></tr>
    <tr><td>2</td><td>11.9</td></tr>
  </tbody>
</table>
```

## Exercises

### Exercise 1: Semantic navigation bar
Build a site header containing a `<nav>` with four links, one of which marks the current page using `aria-current="page"`. Explain why a list of links inside `<nav>` is preferable to four bare `<a>` elements separated by `|` characters.

### Exercise 2: Alt text judgement
Write appropriate `alt` values for three images: a company logo that also acts as a home link, a bar chart showing quarterly revenue, and a decorative divider flourish. Justify each choice in one sentence, including any case where `alt=""` is correct.

### Exercise 3: Nested data structure
Model a two-level course outline (three modules, each with two to four topics) using nested `<ol>` and `<ul>` elements. Then re-express the same information as a definition list (`<dl>`/`<dt>`/`<dd>`) and argue which representation better matches the data.

### Exercise 4: Form with multiple input types
Construct a registration form using at least five distinct input types (`text`, `email`, `number`, `date`, `radio`, `checkbox`, or `select`). Every control must have an associated `<label>`, and at least two must use native validation attributes such as `required`, `min`, `max`, or `pattern`.

### Exercise 5: De-`div` a page
Take an existing page of your own (or the markup from the previous lesson) and count its `<div>` elements. Replace every one you can with a semantic element, then report the before/after count and list the three replacements you consider most valuable, with reasons.

## Quizes

### Q1. Which attribute defines the destination of an `<a>` element?
1. `src`
2. `href`
3. `link`
4. `target`

### Q2. What is the correct use of `alt=""` (an empty alt attribute) on an `<img>`?
1. It is always invalid; every image requires descriptive text
2. It marks the image as decorative so assistive technology skips it
3. It tells the browser to display the filename instead
4. It is equivalent to omitting the `alt` attribute entirely

### Q3. Which pair correctly describes the *default* display behaviour of these elements?
1. `<div>` is inline and `<span>` is block-level
2. Both `<div>` and `<span>` are block-level
3. `<div>` is block-level and `<span>` is inline
4. Neither participates in normal document flow

### Q4. Why is `<button type="button">Save</button>` preferable to `<div onclick="save()">Save</div>`?
1. The `<div>` cannot have an event listener attached to it
2. The `<button>` is focusable and operable by keyboard by default, and exposes a button role
3. The `<div>` version is slower because it triggers an extra layout pass
4. There is no difference once the `<div>` is styled to look like a button

### Q5. Given the markup below, why will clicking the visible text *not* focus the input?
```
<label for="email">Email</label>
<input id="user-email" type="email">
```
1. `<label>` cannot be associated with an `<input>` of type `email`
2. The `for` attribute must reference the input's `name`, not its `id`
3. The `for` value does not match the input's `id`, so no association is formed
4. The input is missing a `required` attribute, which disables label binding
