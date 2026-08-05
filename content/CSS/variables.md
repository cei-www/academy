# Custom properties and theming

A custom property is a value you name yourself. The name starts with `--`, and you read it back with
`var()`.

```
:root { --brand: #F2A93B; }
.btn  { background: var(--brand, #999); }   /* #999 if --brand is missing */
```

Declaring them on `:root` puts them on the document element, and because custom properties are
**inherited**, every element in the page can see them.

They resolve at computed-value time, on each element separately. That is the important part: a
component can redeclare `--brand` on itself and every `var(--brand)` inside it — including in rules
written elsewhere — picks up the new value. Custom properties cascade; a preprocessor variable
cannot.

A theme is therefore just a second set of declarations on a different selector: an attribute like
`[data-theme="dark"]`, or a `prefers-color-scheme` query.

## Display
### HTML

```
<div class="panel">
  <h2>Light</h2>
  <button class="btn" type="button">Enroll</button>
</div>

<div class="panel" data-theme="dark">
  <h2>Dark</h2>
  <button class="btn" type="button">Enroll</button>
</div>
```

### CSS

```
:root {
  --bg: #EEF1F4;
  --ink: #131A26;
  --brand: #F2A93B;
  --brand-ink: #6B4207;
  --radius: 8px;
}

[data-theme="dark"] { --bg: #0F1B33; --ink: #EEF1F4; }

.panel { background: var(--bg); color: var(--ink); padding: 16px; }

.btn {
  background: var(--brand); color: var(--brand-ink);
  border: 0; border-radius: var(--radius); padding: 8px 16px;
}
```

### Javascript

```
const root = document.documentElement;
const brand = getComputedStyle(root).getPropertyValue("--brand").trim();
console.log("brand token:", brand);
root.style.setProperty("--radius", "999px");
```

## Your Tasks
### 1. Declare a palette
Name tokens by role, not by colour, so a theme swap does not make the names lie.

```
:root {
  --bg: #EEF1F4;
  --surface: #FFFFFF;
  --ink: #131A26;
  --ink-soft: #4B5563;
  --brand: #F2A93B;
}
```

### 2. Read one with a fallback
The second argument of `var()` is used when the property is not set.

```
.badge { background: var(--accent, #DDE2E8); }
```

### 3. Override per component
Redeclaring the token on an ancestor retargets every `var()` inside it.

```
.card { --brand: #0F1B33; }        /* only inside .card */
.card .btn { background: var(--brand); }
```

### 4. Add a dark theme two ways
One follows the operating system, one follows an explicit user choice.

```
@media (prefers-color-scheme: dark) {
  :root { --bg: #0F1B33; --ink: #EEF1F4; }
}

[data-theme="dark"] { --bg: #0F1B33; --ink: #EEF1F4; }
```

### 5. Read and write from JavaScript
`getPropertyValue` returns the string with leading whitespace; `setProperty` sets an inline value.

```
const root = document.documentElement;
console.log(getComputedStyle(root).getPropertyValue("--bg").trim());

root.dataset.theme = "dark";
root.style.setProperty("--brand", "#0F1B33");
```

## Exercises

### Exercise 1: Tokenise a stylesheet
Take a page with five hard-coded hex codes and replace them all with tokens on `:root`. Change the
whole look by editing only the `:root` block.

### Exercise 2: Component override
Give a `.card` its own `--brand` and confirm in DevTools that the button inside it computes a
different `background` from an identical button outside.

### Exercise 3: Theme toggle
Add a button that flips `document.documentElement.dataset.theme` between `light` and `dark`, and
store the choice in `localStorage` so a reload keeps it.

### Exercise 4: Fallback proof
Use `var(--missing, #F2A93B)` and check the computed value in DevTools. Then declare `--missing` and
watch the computed value change without touching the rule.

### Exercise 5: Spacing scale
Define `--space-1` to `--space-4` and rebuild one component's `padding`, `gap` and `margin` using
only those tokens. Log all four with `getPropertyValue` to confirm they resolve.

## Quizes

### Q1. Which is a valid custom property declaration?
1. `$brand: #F2A93B;`
2. `@brand: #F2A93B;`
3. `--brand: #F2A93B;`
4. `var(--brand) = #F2A93B;`

### Q2. Why declare tokens on `:root`?
1. It is the only selector that accepts custom properties
2. Custom properties are inherited, so `:root` makes them visible to the whole document
3. It makes them `!important` automatically
4. It compiles them to static values at build time

### Q3. `:root { --c: red; } .box { --c: blue; } .box p { color: var(--c); }` — what colour is the paragraph?
1. Red, because `:root` has higher priority
2. Black, because `var()` cannot cross elements
3. Both, alternating on repaint
4. Blue, because the value is inherited from the nearest ancestor that set it

### Q4. What does `var(--gap, 12px)` do when `--gap` is not declared anywhere?
1. Uses `12px`
2. Makes the declaration invalid and skips it
3. Uses the initial value of the property
4. Throws a console error

### Q5. Which JavaScript reads the current value of `--brand` on the root element?
1. `document.documentElement.style.getPropertyValue("--brand")`
2. `document.documentElement.getAttribute("--brand")`
3. `getComputedStyle(document.documentElement).getPropertyValue("--brand")`
4. `CSS.var("--brand")`
