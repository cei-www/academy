# Theme tokens with @theme

`@theme` registers a custom design token and Tailwind generates the matching utilities for it
automatically. Declare `--color-brand: #0F1B33` and `bg-brand`, `text-brand` and `border-brand` all
become available, with no extra configuration file. This is how a project's own palette — the
university's navy and amber, say — becomes first-class utilities alongside Tailwind's built-in ones.

Like `@apply`, `@theme` only works inside a `<style type="text/tailwindcss">` block, and in this
playground that block has to live in the HTML box, because the CSS box's plain `<style>` is invisible
to Tailwind.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<style type="text/tailwindcss">
  @theme {
    --color-brand: #0F1B33;
    --color-accent: #F2A93B;
  }
</style>

<header class="p-4 bg-brand text-white">KMITL CE</header>
<button class="mt-2 px-4 py-2 rounded bg-accent text-slate-900">Enrol</button>
```

### CSS

```
/* Empty on purpose — @theme must live in the tailwindcss style block in the HTML box. */
```

### Javascript

```

```

## Your Tasks
### 1. Register a brand colour
`@theme` makes the value available under a name Tailwind turns into utilities.

```
<style type="text/tailwindcss">
  @theme { --color-brand: #0F1B33; }
</style>
```

### 2. Use the generated utilities
Once declared, `bg-brand`, `text-brand` and `border-brand` all exist, just like built-in colours.

```
<header class="p-4 bg-brand text-white">KMITL CE</header>
```

### 3. Add a second token
Multiple `--color-*` declarations in one `@theme` block each generate their own utility set.

```
@theme {
  --color-brand: #0F1B33;
  --color-accent: #F2A93B;
}
```

### 4. Compose a navbar with the brand colour
Swap a hard-coded `bg-slate-900` for `bg-brand` so the colour has one source of truth.

```
<nav class="flex items-center justify-between px-6 py-3 bg-brand text-white">
  <span class="font-bold">KMITL CE</span>
</nav>
```

### 5. Verify in DevTools
Inspect an element using `bg-brand` and confirm the generated rule reads the `--color-brand` value.

```
/* DevTools Styles panel: .bg-brand { background-color: var(--color-brand); } */
```

## Exercises

### Exercise 1: Two theme tokens
Add `--color-brand: #0F1B33` and `--color-accent: #F2A93B` with `@theme`, then use `bg-brand` and
`text-accent`. Verify the generated rules in the DevTools Styles panel.

### Exercise 2: Replace hard-coded colours
Take a navbar and button that use `bg-slate-900` and `bg-amber-400` directly, and switch both to
`@theme`-registered `bg-brand` and `bg-accent` instead.

### Exercise 3: A spacing token
`@theme` also accepts `--spacing-*` and other namespaces. Register `--spacing-gutter: 1.75rem` and use
it via an arbitrary-adjacent utility, then describe what changed.

### Exercise 4: One theme, many components
Build a navbar, a button and a card that all reference `bg-brand` or `text-brand`. Change the token
once and confirm all three update.

### Exercise 5: Mini-project — course catalogue page
Build one page: a navbar with `ce-logo.svg` and three links using `bg-brand`, a heading, and a card
grid built from an array of six courses — one column on phones, three from `md` up. Cards come from
one template function, buttons from one `@apply` class, and the palette comes from `@theme`.

## Quizes

### Q1. What does `@theme { --color-brand: #0F1B33; }` make available?
1. A CSS variable only, usable with `var(--color-brand)`
2. A replacement for the whole default colour palette
3. A `brand` breakpoint prefix
4. Utilities such as `bg-brand`, `text-brand` and `border-brand`

### Q2. Where must an `@theme` block live in this playground?
1. In the CSS box, so it is scoped to the stylesheet
2. In a `<style type="text/tailwindcss">` block inside the HTML box
3. In the Javascript box, as a template string
4. It can go in either box interchangeably

### Q3. After declaring `--color-accent`, which utility becomes available?
1. `accent-color` only, no Tailwind class
2. `bg-accent`, among others
3. Nothing — `@theme` only affects colours named `brand`
4. `--tw-accent`, a variable with no matching class

### Q4. What is the main benefit of a theme token over a hard-coded value like `bg-[#0F1B33]`?
1. It renders faster
2. It gives the colour one name and one source of truth, reused as a real utility
3. It disables the default Tailwind palette
4. It is required before any custom colour can be used at all

### Q5. Which namespace prefix does a theme colour token use?
1. `--font-*`
2. `--spacing-*`
3. `--color-*`
4. `--breakpoint-*`
