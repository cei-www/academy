# Introduction to Tailwind

Tailwind CSS is a *utility-first* framework. Instead of inventing a class name and writing rules for
it in a stylesheet, you compose small single-purpose classes directly in the markup: `p-4` sets
padding, `bg-white` sets a background, `rounded` rounds the corners.

The same card written both ways:

```
<!-- hand-written: .card { padding: 1rem; background: #fff; border-radius: 4px; } -->
<div class="card">…</div>

<!-- utilities: no stylesheet at all -->
<div class="p-4 bg-white rounded">…</div>
```

The trade-off is real. The markup gets verbose, and you read a list of classes instead of one
meaningful name. In return you never argue about naming, never leave dead CSS behind when a component
is deleted, and every value comes from one shared scale instead of a hand-picked pixel.

Load Tailwind with one `<script>` tag. This browser build compiles in the page, which is right for
learning and prototyping; real projects compile Tailwind at build time.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="p-6 bg-slate-100">
  <div class="max-w-sm p-4 bg-white rounded shadow">
    <h2 class="text-xl font-bold text-slate-900">CE Web Development</h2>
    <p class="mt-2 text-slate-600">Second-year elective, KMITL.</p>
    <button class="mt-4 px-4 py-2 bg-amber-400 text-amber-900 rounded font-medium">
      Enrol
    </button>
  </div>
</div>
```

### CSS

```
/* Tailwind writes the CSS. This box stays empty in Tailwind lessons. */
```

### Javascript

```

```

## Your Tasks
### 1. Load Tailwind
Put the tag at the **top of the HTML box**, not in the Javascript box — the playground appends the JS
after the markup, so a script placed there loads too late to style it.

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<p class="text-2xl text-slate-900">Styled by Tailwind.</p>
```

### 2. Style a first element
Each class does one thing. Read them left to right: size, weight, color.

```
<h1 class="text-3xl font-bold text-slate-900">Course catalogue</h1>
```

### 3. Rewrite a hand-written rule
Every declaration becomes one class. Nothing is left in the stylesheet.

```
<!-- was: .note { padding: 8px; color: #6B4207; background: #F2A93B; } -->
<p class="p-2 text-amber-900 bg-amber-400">Registration closes on Friday.</p>
```

### 4. Build a box from the scale
`p-4` is `1rem`, `bg-slate-100` is a light grey, `rounded` is a small radius.

```
<div class="p-4 bg-slate-100 rounded">
  <p class="text-slate-700">CE 2103 — Web Application Development</p>
</div>
```

### 5. Check what a class produced
Open DevTools, select the element, and read the Styles panel — a utility is an ordinary CSS rule.

```
<div class="p-4">Inspect me: the rule is .p-4 { padding: 1rem }</div>
```

## Exercises

### Exercise 1: Move the script tag
Cut the `<script>` tag out of the HTML box and paste it into the Javascript box. Render, describe what
you see, then put it back and say why the position matters.

### Exercise 2: Two ways, same result
Build a 300px-wide grey box with 16px of padding twice — once with a class and a CSS rule you write,
once with utilities only. Confirm in DevTools that the computed padding matches.

### Exercise 3: Course card
Make a card for `CE 2103` with a white background, padding, a rounded corner, a shadow, a bold title
and a grey subtitle. Use utilities only.

### Exercise 4: Count the classes
Take your card from Exercise 3 and list every utility you used, with the one CSS declaration each
produces. Read them from the DevTools Styles panel, not from memory.

### Exercise 5: Delete test
Delete the card's markup. Explain what would still be left behind in a hand-written CSS project, and
what is left behind here.

## Quizes

### Q1. What does "utility-first" mean?
1. You compose many small single-purpose classes in the markup instead of naming components
2. You write CSS first, then apply it with one class name per component
3. Tailwind generates component names such as `.card` for you automatically
4. The framework ships ready-made widgets you drop into the page

### Q2. In this playground, where must the Tailwind `<script>` tag go?
1. In the Javascript box, on the first line
2. In the CSS box as an `@import`
3. At the top of the HTML box
4. Anywhere — the order does not matter

### Q3. What does `<div class="p-4 bg-white rounded">` produce?
1. Padding of 4px, a white background, and fully round corners
2. A 4-column grid with a white background
3. Nothing, until a matching `.p-4` rule is written in the stylesheet
4. Padding of `1rem`, a white background, and a small corner radius

### Q4. Which is a real advantage of utilities over hand-written CSS?
1. The HTML file becomes shorter
2. Class names describe the meaning of the component
3. Deleting the markup also deletes the styles, so no dead CSS accumulates
4. The browser applies utilities faster than ordinary CSS rules

### Q5. The browser build used in these lessons is suitable for what?
1. Production sites, because it compiles faster than a build step
2. Only pages that contain no JavaScript
3. Nothing — it is a fallback for browsers without CSS support
4. Learning and prototyping; production compiles Tailwind at build time
