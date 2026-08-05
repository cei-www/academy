# Building components overview

A real component is just a long class list. The problem starts when you need that list three times.
Copy-paste is the wrong answer: the fourth copy will drift.

In a page that already runs JavaScript, keep the list in one place — a `const` string, or a template
function that returns the element. Change the constant and every card changes.

Tailwind's own answer is `@apply`, which folds utilities into a normal class — justified for markup
you cannot loop over, but used sparingly, since a stylesheet full of `@apply` is the naming problem
you left behind. `@theme` registers a design token and generates its utilities automatically:
`--color-brand` becomes `bg-brand`, `text-brand` and `border-brand`.

Both must live in a `<style type="text/tailwindcss">` block. This playground emits the CSS box as a
plain `<style>` with no `type`, which Tailwind ignores, so put that block in the **HTML** box.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<style type="text/tailwindcss">
  @theme { --color-brand: #0F1B33; }
  .btn { @apply px-4 py-2 rounded font-medium bg-amber-400 text-amber-900 hover:bg-amber-500; }
</style>

<nav class="flex items-center justify-between px-6 py-3 bg-brand text-white">
  <span class="font-bold">KMITL CE</span>
  <button class="btn">Enrol</button>
</nav>

<main class="max-w-5xl mx-auto px-4 py-8">
  <h1 class="mb-6 text-2xl font-bold text-slate-900">Course catalogue</h1>
  <div id="cards" class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</main>
```

### CSS

```
/* Empty on purpose — see the note above about the tailwindcss style block. */
```

### Javascript

```
const CARD = "p-4 bg-white border border-slate-200 rounded-lg shadow";

const courses = [
  { code: "CE 2103", title: "Web Application Development", seats: 40 },
  { code: "CE 2201", title: "Data Structures", seats: 60 },
  { code: "CE 2305", title: "Computer Networks", seats: 45 },
];

const card = (c) => `<article class="${CARD}">
  <h3 class="font-bold text-slate-900">${c.code}</h3>
  <p class="text-sm text-slate-600">${c.title}</p>
  <p class="mt-2 text-xs text-slate-500">${c.seats} seats</p>
</article>`;

document.getElementById("cards").innerHTML = courses.map(card).join("");
```

## Your Tasks
### 1. Name the class list once
One constant, used everywhere. Editing it changes every card at once.

```
const CARD = "p-4 bg-white border border-slate-200 rounded-lg shadow";
el.className = CARD;
```

### 2. Write a template function
The function owns both the markup and the classes, so a card can never be half-updated.

```
const card = (c) => `<article class="${CARD}">
  <h3 class="font-bold text-slate-900">${c.code}</h3>
  <p class="text-sm text-slate-600">${c.title}</p>
</article>`;
```

### 3. Extract a button with `@apply`
Justified here: the navbar is hand-written markup, and the button appears in several places.

```
<style type="text/tailwindcss">
  .btn {
    @apply px-4 py-2 rounded font-medium bg-amber-400 text-amber-900;
    @apply hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-slate-900;
  }
</style>
```

### 4. Add a theme color
`@theme` registers the value, and Tailwind generates `bg-brand`, `text-brand` and `border-brand`.

```
<style type="text/tailwindcss">
  @theme { --color-brand: #0F1B33; }
</style>

<header class="p-4 bg-brand text-white">KMITL CE</header>
```

### 5. Compose, do not nest
Build the navbar from the same utilities you already know; only the button is extracted.

```
<nav class="flex items-center justify-between px-6 py-3 bg-brand text-white">
  <span class="font-bold">KMITL CE</span>
  <button class="btn">Enrol</button>
</nav>
```

## Exercises

### Exercise 1: One constant, three cards
Render three course cards from an array with a single `CARD` constant. Change `rounded-lg` to
`rounded-none` in the constant and confirm all three cards change.

### Exercise 2: Two button variants
Write `.btn` with the shared utilities and `.btn-ghost` with only the differences. Explain what would
break if you copied the full class list into both.

### Exercise 3: Move the style block
Put your `<style type="text/tailwindcss">` block in the CSS box instead. Render, describe what happens
to the styling, then move it back and explain why.

### Exercise 4: Theme token
Add `--color-brand: #0F1B33` and `--color-accent: #F2A93B` with `@theme`, then use `bg-brand` and
`text-accent`. Verify the generated rules in the DevTools Styles panel.

### Exercise 5: Mini-project — course catalogue page
Build one page: a navbar with `ce-logo.svg` and three links, a heading, and a card grid built from an
array of six courses — one column on phones, three from `md` up. Cards come from one template
function, buttons from one `@apply` class, and nothing goes in the CSS box.

## Quizes

### Q1. Why must a Tailwind style block go in the HTML box in this playground?
1. Because the CSS box loads after the markup
2. Because the CSS box emits a plain `<style>` with no `type`, which Tailwind ignores
3. Because `@apply` is not valid CSS syntax
4. Because the CSS box only accepts one rule at a time

### Q2. What is the main risk of copying a long class list into five elements?
1. The page loads more slowly
2. Tailwind generates the same rule five times
3. The copies drift apart when one of them is edited
4. Duplicate classes are ignored by the browser

### Q3. When is `@apply` the reasonable choice?
1. For every component, to keep the markup short
2. For repeated markup you cannot generate in a loop
3. Whenever a class list is longer than three utilities
4. Never — `@apply` was removed in Tailwind v4

### Q4. What does `@theme { --color-brand: #0F1B33; }` make available?
1. A CSS variable only, usable with `var(--color-brand)`
2. A replacement for the whole default color palette
3. A `brand` breakpoint prefix
4. Utilities such as `bg-brand`, `text-brand` and `border-brand`

### Q5. With `const CARD = "p-4 bg-white rounded"`, what does `` `<div class="${CARD} shadow">` `` produce?
1. A div with padding, a white background, rounded corners and a shadow
2. A div with a shadow only, because `${CARD}` is not evaluated in an attribute
3. A syntax error, since a class attribute cannot hold a template value
4. A div with padding and a shadow, but no background
