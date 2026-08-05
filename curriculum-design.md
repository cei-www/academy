# Curriculum Design — Web Development for CE Year 2 (English Program)

## Design principles

1. **Eight top-level groups, in teaching order** — Basic (HTML → CSS → JS) → Advanced (HTML → CSS → JS) → AJAX → Framework
2. **Basic lessons stay short** — three to six lines of explanation, then straight into code. The playground does the teaching.
3. **Advanced lessons go deeper** — mechanisms such as the cascade, closures, and the event loop get real explanation, but never more than about one screenful.
4. **Every lesson keeps the same shape** — 5 Your Tasks, 5 Exercises, 5 Quizzes.
5. **No build step anywhere** — the framework group uses a browser CDN so every lesson runs in the playground as-is.

---

## Proposed file structure

`toc.json` carries the Basic/Advanced grouping. Files stay flat inside each language folder, exactly as the current architecture intends.

```
content/
  HTML/   ← serves both Basic HTML and Advanced HTML
  CSS/    ← serves both Basic CSS  and Advanced CSS
  JS/     ← serves both Basic JS   and Advanced JS
  AJAX/   ← new
  FW/     ← new (Framework)
```

---

## 1. Basic HTML — 6 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Introduction | `HTML/introduction.md` | What HTML is; tag, element, attribute; the minimal page skeleton |
| 2 | Text & Headings | `HTML/text.md` | `h1`–`h6`, `p`, `br`, `strong`, `em` |
| 3 | Links & Images | `HTML/links-images.md` | `a href`, relative vs absolute paths, `img src` and `alt` |
| 4 | Lists | `HTML/lists.md` | `ul`, `ol`, `li`, nesting |
| 5 | Tables | `HTML/tables.md` | `table`, `tr`, `th`, `td`, `thead`/`tbody` |
| 6 | Forms | `HTML/forms.md` | `form`, `input`, `label`, `select`, `textarea`, `button` |

## 2. Basic CSS — 6 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Introduction | `CSS/introduction.md` | What CSS is; three ways to apply it; `selector { property: value }` |
| 2 | Selectors | `CSS/selectors.md` | Element, class, and ID selectors; grouping with commas |
| 3 | Colors & Background | `CSS/colors.md` | `color`, `background-color`; named, hex, and `rgb()` values |
| 4 | Text & Font | `CSS/text.md` | `font-family`, `font-size`, `font-weight`, `text-align` |
| 5 | Box Model | `CSS/box-model.md` | Content, padding, border, margin; `box-sizing` |
| 6 | Display & Layout | `CSS/display.md` | `block` vs `inline`, `width`/`height`, `display: none` |

## 3. Basic JS — 7 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Introduction | `JS/introduction.md` | What JavaScript does; the `<script>` tag; `console.log()` |
| 2 | Variables & Data Types | `JS/variables.md` | `let`/`const`; string, number, boolean; template literals |
| 3 | Operators & Conditions | `JS/conditions.md` | Arithmetic operators, `===`, `&&`/`\|\|`, `if`/`else` |
| 4 | Loops | `JS/loops.md` | `for`, `while`, `for...of` |
| 5 | Functions | `JS/functions.md` | Declaration, parameters, `return`, arrow functions |
| 6 | Arrays & Objects | `JS/arrays-objects.md` | Creating, reading, iterating; `push`, `length`, dot notation |
| 7 | DOM & Events | `JS/dom-events.md` | `querySelector`, `textContent`, `addEventListener('click')` |

## 4. Advanced HTML — 4 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Semantic & Accessibility | `HTML/semantic.md` | `header`/`nav`/`main`/`footer`/`article`; the accessibility tree; basic ARIA |
| 2 | Advanced Forms | `HTML/forms-advanced.md` | Input types; `required`/`pattern`/`min`; native validation; `fieldset` |
| 3 | Media & Responsive Images | `HTML/media.md` | `video`/`audio`, `picture`, `srcset`, `loading="lazy"` |
| 4 | Meta, SEO & Open Graph | `HTML/meta-seo.md` | `meta description`, viewport, `og:` tags, favicon |

## 5. Advanced CSS — 6 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Cascade & Specificity | `CSS/specificity.md` | The `(ID, class, type)` tuple; source order; `!important` |
| 2 | Flexbox | `CSS/flexbox.md` | Main and cross axis; `justify-content`, `align-items`; the `flex` shorthand |
| 3 | Grid | `CSS/grid.md` | `grid-template-columns`, the `fr` unit, `gap`, `repeat(auto-fit, minmax())` |
| 4 | Responsive Design | `CSS/responsive.md` | Media queries, mobile-first, `rem` and `clamp()` |
| 5 | Custom Properties & Theming | `CSS/variables.md` | `--token`, `var()`, dark mode with `prefers-color-scheme` |
| 6 | Transitions & Animations | `CSS/animation.md` | `transition`, `transform`, `@keyframes`, `prefers-reduced-motion` |

## 6. Advanced JS — 7 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Scope, Hoisting & Closure | `JS/scope-closure.md` | Block scope, the temporal dead zone, closures, a counter factory |
| 2 | Array Methods | `JS/array-methods.md` | `map`, `filter`, `reduce`, `find`, `sort`, and chaining them |
| 3 | Destructuring & Spread | `JS/destructuring.md` | `{a, b} =`, `[x, ...rest]`, spread copies, default parameters |
| 4 | Objects, `this` & Classes | `JS/classes.md` | Methods, `this`, `class`, constructors, `#private` fields |
| 5 | DOM Manipulation | `JS/dom-advanced.md` | Creating and removing elements, `classList`, event delegation, `event.target` |
| 6 | Error Handling | `JS/errors.md` | `try`/`catch`/`finally`, `throw`, custom `Error` types |
| 7 | Async JavaScript | `JS/async.md` | The event loop; callbacks → Promises → `async`/`await` |

## 7. AJAX — 5 lessons

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | What is AJAX | `AJAX/introduction.md` | Full page loads vs async updates; HTTP methods and status codes; JSON |
| 2 | Fetch & GET | `AJAX/fetch-get.md` | `fetch()`, `res.json()`, `async`/`await`, query strings |
| 3 | Render to DOM | `AJAX/render.md` | Looping an array into elements; loading and empty states |
| 4 | POST, PUT & DELETE | `AJAX/fetch-post.md` | `method`, `headers`, `body: JSON.stringify()` |
| 5 | Errors & CORS | `AJAX/errors-cors.md` | `res.ok`, network failures, what CORS is and why requests break |

> Every lesson in this group uses a free public API (JSONPlaceholder) so it runs from the playground immediately.

## 8. Framework — Tailwind CSS — 6 lessons

Uses the **Tailwind CSS v4 browser build via CDN**. One script tag in the HTML box and utility classes work immediately — no `npm install`, no build step, which matches this project's constraints exactly.

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

| # | Lesson | File | Covers |
| --- | --- | --- | --- |
| 1 | Introduction to Tailwind | `FW/introduction.md` | What utility-first means; how it differs from hand-written CSS; CDN setup; a first class |
| 2 | Spacing & Sizing | `FW/spacing.md` | `p-4`, `m-2`, `w-full`, `max-w-md`, `space-y-4`; the 0.25rem scale |
| 3 | Typography & Colors | `FW/typography-colors.md` | `text-xl`, `font-bold`, `text-slate-700`, `bg-amber-100`; the 50–950 palette |
| 4 | Layout: Flex & Grid | `FW/layout.md` | `flex`, `items-center`, `justify-between`, `gap-4`, `grid grid-cols-3` |
| 5 | Responsive & States | `FW/responsive-states.md` | Mobile-first prefixes `sm:`/`md:`/`lg:`; `hover:`, `focus:`, `dark:` |
| 6 | Building Components | `FW/components.md` | Assembling a real button, card, and navbar; managing repeated classes; `@apply`; mini project |

**Notes on running Tailwind in the playground**

- `pgLoadStarter()` builds the srcdoc as `<style>CSS</style> + HTML + <script>JS</script>`, and the iframe has **no** `sandbox` attribute — so a CDN script is allowed to load.
- Lessons therefore put `<script src="…">` in the **HTML box**, not the JS box, because the JS box is appended after the markup.
- Tailwind v4 theme customisation requires `<style type="text/tailwindcss">`, and the playground's CSS box cannot set a `type` attribute — so lesson 6 teaches placing it in the HTML box instead.
- The CDN could not be exercised end-to-end from this sandbox (outbound browser network is blocked here). Worth running `python -m http.server 8000` locally and checking one lesson before building the whole group.

> **Scope note.** Tailwind is a CSS framework. It does not cover components, state, or SPA architecture. If a JS framework (Vue or React) is also wanted, it can be added as a ninth group.

---

## Totals

| Group | Lessons |
| --- | --- |
| Basic HTML | 6 |
| Basic CSS | 6 |
| Basic JS | 7 |
| Advanced HTML | 4 |
| Advanced CSS | 6 |
| Advanced JS | 7 |
| AJAX | 5 |
| Framework (Tailwind CSS) | 6 |
| **Total** | **47** |

At 5 tasks + 5 exercises + 5 quizzes per lesson: **235 tasks, 235 exercises, 235 quizzes**.

---

## Proposed build plan — three phases

- **Phase 1** — all Basic lessons (19) plus the complete new `toc.json`
- **Phase 2** — all Advanced lessons (17)
- **Phase 3** — AJAX and Framework/Tailwind (11)

The nine existing files carry forward with adjustments. `introduction`, `box-model`, `variables`, and `functions` move to the Basic side and get trimmed. `selectors`, `flexbox`, `text-color`, and `text-font-size` are already deep, so their advanced material splits out into the Advanced groups.
