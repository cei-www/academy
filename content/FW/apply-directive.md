# The @apply directive

Tailwind's own answer to a repeated class list is `@apply`, which folds a set of utilities into one
normal CSS class. It is justified for markup you cannot loop over in JavaScript — a hand-written
navbar, or HTML produced by something else you do not control. Reach for it sparingly: a stylesheet
full of `@apply` rules is the same naming and drift problem you were trying to leave behind.

`@apply` and any other Tailwind-specific syntax must live inside a `<style type="text/tailwindcss">`
block, because Tailwind's browser build only scans blocks with that exact `type`. This playground
emits the CSS box as a plain `<style>` with no `type` attribute, which Tailwind ignores — so that
block has to go in the **HTML** box, typically right under the script tag.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<style type="text/tailwindcss">
  .btn {
    @apply px-4 py-2 rounded font-medium bg-amber-400 text-amber-900;
    @apply hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-slate-900;
  }
</style>

<nav class="flex items-center justify-between px-6 py-3 bg-slate-900 text-white">
  <span class="font-bold">KMITL CE</span>
  <button class="btn">Enrol</button>
</nav>
```

### CSS

```
/* Empty on purpose — see the note above about the tailwindcss style block. */
```

### Javascript

```

```

## Your Tasks
### 1. Extract a button with `@apply`
Justified here: the navbar is hand-written markup, and the button appears in several places.

```
<style type="text/tailwindcss">
  .btn { @apply px-4 py-2 rounded font-medium bg-amber-400 text-amber-900 hover:bg-amber-500; }
</style>
```

### 2. Put the block in the right box
The style block must sit in the HTML box, because the CSS box emits a plain, untyped `<style>`.

```
<style type="text/tailwindcss">
  .btn { @apply px-4 py-2 rounded; }
</style>
```

### 3. Spread `@apply` across lines
Multiple `@apply` lines in one rule are allowed, and read more clearly than one long line.

```
.btn {
  @apply px-4 py-2 rounded font-medium;
  @apply bg-amber-400 text-amber-900 hover:bg-amber-500;
}
```

### 4. Add a second variant class
`.btn-ghost` can share none of `.btn`'s rule and still stay short, since each utility is one word.

```
.btn-ghost { @apply px-4 py-2 rounded font-medium border border-slate-300 text-slate-700; }
```

### 5. Know when not to reach for it
If the markup comes from a `card()` template function, a JS constant is the right tool, not `@apply`.

```
const CARD = "p-4 bg-white border border-slate-200 rounded-lg shadow"; /* not @apply */
```

## Exercises

### Exercise 1: Two button variants
Write `.btn` with the shared utilities and `.btn-ghost` with only the differences. Explain what would
break if you copied the full class list into both instead.

### Exercise 2: Move the style block
Put your `<style type="text/tailwindcss">` block in the CSS box instead of the HTML box. Render,
describe what happens to the styling, then move it back and explain why.

### Exercise 3: A card link with @apply
Build a `.card-link` class with `@apply` covering padding, background, border and a hover shadow, and
use it on three `<a>` elements.

### Exercise 4: Refactor away from @apply
Take a `.tag` class built with `@apply` and rewrite the same three elements using the plain utility
classes directly instead. Compare the two versions' line counts.

### Exercise 5: Justify or replace
For each of three UI pieces (a badge, a repeated card, a one-off banner), decide whether `@apply` or a
JS template function is the better fit, and explain your choice in one sentence each.

## Quizes

### Q1. Why must a Tailwind style block go in the HTML box in this playground?
1. Because the CSS box loads after the markup
2. Because the CSS box emits a plain `<style>` with no `type`, which Tailwind ignores
3. Because `@apply` is not valid CSS syntax
4. Because the CSS box only accepts one rule at a time

### Q2. When is `@apply` the reasonable choice?
1. For every component, to keep the markup short
2. For repeated markup you cannot generate in a loop
3. Whenever a class list is longer than three utilities
4. Never — `@apply` was removed in Tailwind v4

### Q3. What attribute value does the style block need for Tailwind to scan it?
1. `type="text/css"`
2. `type="text/tailwindcss"`
3. No `type` attribute at all
4. `data-tailwind="true"`

### Q4. What is the risk of overusing `@apply`?
1. It makes the page slower to render
2. A stylesheet full of `@apply` recreates the same drift problem utilities avoid
3. It is not valid inside a `<style>` block
4. It disables hover and focus variants

### Q5. What does `.btn { @apply px-4 py-2 rounded; }` produce?
1. A CSS custom property named `--btn`
2. A regular `.btn` class carrying the padding and border-radius those utilities set
3. A Tailwind plugin registration
4. Nothing, until `.btn` is also given as a utility in the HTML
