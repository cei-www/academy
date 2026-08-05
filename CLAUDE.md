# Course viewer — project notes

A static, no-build web app for teaching web dev. A 3-level course menu (Language → Topic → Lesson)
loads markdown lessons on click, next to a live HTML/CSS/JS code playground. Pure HTML/CSS/vanilla
JS — no bundler, no framework, no npm install required to run it.

## How to run it

Fetch requests to `toc.json` and the `content/*.md` files fail over `file://` (CORS). Always serve
this folder over http:

```
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000/`.

## File structure

```
index.html      the whole app shell: header, footer, 3-column layout, code playground, CSS
app.js          loads toc.json, builds the nav tree, fetches + renders lessons, search, deep links
toc.json        table of contents — the single source of truth for menu structure and grouping
content/
  HTML/*.md
  CSS/*.md
  JS/*.md
  AJAX/*.md
  FW/*.md       lesson content, one markdown file per lesson
resources/
  img/          sample images used by lessons
  data/         JSON fixtures the AJAX lessons fetch
_spec/
  LESSON_SPEC.md  the authoring contract every lesson file follows
```

## The course: 8 groups, 50 lessons

Reading order is Basic (HTML → CSS → JS) → Advanced (HTML → CSS → JS) → AJAX → Framework (Tailwind).
Basic and Advanced share a language folder — the split lives in `toc.json`, not on disk, so
`CSS/selectors.md` (Basic) and `CSS/specificity.md` (Advanced) sit side by side. Advanced lessons
assume the Basic ones and deliberately do not re-teach them; when you edit one, check you are not
duplicating or contradicting its counterpart.

`_spec/LESSON_SPEC.md` is the contract: the exact heading schema, the ≤170-line cap, the 5 tasks /
5 exercises / 5 quizzes rule, the asset inventory, and house style. Read it before writing or editing
any lesson, and keep it in step if the schema ever changes. The Framework group needs one extra
thing: the Tailwind browser CDN `<script>` belongs at the top of the **HTML** fence, because the
playground appends the JS fence after the markup.

`index.html` contains two other inline `<script>` blocks below `app.js`'s `<script src>` tag:
one for the code playground (layout switching, live render, resizers), unrelated to the menu/lesson
system and safe to leave alone unless you're specifically changing the playground.

## Panel behaviour in index.html

All three columns collapse to a 48px strip via the chevron in their header — nav, playground
(`#pgToggle`), and lesson. `applySplit()` assigns the single `1fr` column: normally the playground,
but when the playground is collapsed it hands `1fr` to the lesson panel, then to the nav. Because of
this, any toolbar that must disappear when a panel collapses has to be styled from the stylesheet,
not an inline `style` attribute — an inline `display:flex` beats `.card.collapsed .pg-tools{display:none}`.

`pgLoadStarter()` stashes each lesson's starter code in `starter`, which the Reset button restores.
Reset takes two clicks — the first arms it and turns it amber for four seconds — so a student never
loses their work to a stray click, and no blocking `confirm()` is needed. The Back button calls
`history.back()` on the preview window; once a link has taken the preview to another origin that
throws, so it falls back to re-rendering, which returns to the student's own code either way.

The lesson font-size control (`A-`/`A+`, 80–200%) sets one `font-size` on `#mdBody`. Every `.mdout`
rule is expressed in `em` relative to `--md-base` (12.5px = 100%), so the whole lesson scales
together — keep new `.mdout` rules in `em`, never `px`. `app.js` only replaces `#mdBody`'s innerHTML,
so the chosen size survives navigating between lessons.

The console strip under the playground captures the preview iframe's output. `CONSOLE_HOOK` is a
string of JS injected into every `srcdoc`; it patches `console.log/info/warn/error/debug` and adds
`error` / `unhandledrejection` listeners, then `postMessage`s each entry to the parent, which filters
on `ev.source === out.contentWindow`. In the Full HTML layout the hook is slotted just inside
`<head>` so the doctype stays first. The console starts closed and `pgLoadStarter()` resets it closed
on every lesson change, but it keeps its open state across Render clicks so it stays usable while
debugging. `update(true)` (the Render button) clears the log and drops in a divider noting that the
preview reloaded; `update()` with no argument skips the divider, which is what the initial call wants.

The strip's height lives in the `openHeight` variable, not in CSS: `setConsoleOpen()` writes it as an
inline height when opening and clears it when closing. Putting the open height in a `.pg-console.open`
rule does not work — the drag writes an inline height, which wins over the class and leaves a tall
empty box behind after collapsing. The drag grip is a *sibling* above `.pg-console`, not a child, so
the box keeps its own full border and the grip's rule floats 4px clear of it. Move the grip inside the
box and its line stacks against the container's `border-top`, reading as a doubled rule.

Every message carries `text` (one-line preview) and, for objects/arrays/errors/elements, `full` (the
laid-out version) — the parent renders `full` behind a `▸` toggle rather than expanding by default.
Do all value formatting inside the hook, never on the parent: the preview's objects belong to another
realm, so `instanceof Error` and friends fail across the boundary.

The prompt at the bottom of the console calls `out.contentWindow.__pgEval(src)`, which the hook
defines. It uses indirect eval — `(0, eval)(src)` — so `var` and function declarations land in the
preview's global scope and stay available to later commands. `let`, `const`, and `class` cannot: eval
always scopes those to the single eval call. Rather than rewriting them to `var` (which would teach
the wrong scoping rules in a course that spends a lesson on exactly this), the hook prints a one-time
`info` note explaining it. If you touch `__pgEval`, keep that property — a REPL that silently drops
`let` bindings is a trap for students.

## Lesson assets live in resources/

`resources/img/` and `resources/data/` hold sample images and JSON fixtures — all generated for this
course, nothing third-party. Reference them with a root-relative path (`resources/img/campus-800.jpg`).
That works inside the playground too: the preview iframe uses `srcdoc`, whose base URL is the app's
own URL, so `<img src>` and `fetch()` resolve exactly as they would in a normal page. See
`resources/README.md` for the inventory and what each file is there to teach. Add new assets rather
than hot-linking to an external CDN — lessons have to keep working offline and without CORS setup.

## toc.json is the source of truth for hierarchy

`content/` is intentionally flat inside each language folder — no subfolders for topics. Grouping
("Text" containing "color" and "font size") exists only in `toc.json`, not on disk. This keeps file
management simple while still letting the menu render arbitrarily deep nesting.

Each node is either a group (`{ "name": ..., "children": [...] }`) or a leaf
(`{ "name": ..., "file": "LANG/slug.md" }`). Nesting depth isn't hardcoded in the CSS/JS — `app.js`
renders `details.l1` for depth 0 and `details.l2` for everything deeper, so a 4th level would reuse
`.l2` styling rather than needing new CSS.

## Adding a new lesson

1. Add a markdown file under `content/<LANG>/`, kebab-case filename (e.g. `content/CSS/z-index.md`),
   including a `## Display` section (see schema below) so the playground has starter code to load.
2. Add a leaf entry to `toc.json` pointing at that file.
3. Nothing else — the nav tree, search, and deep links all read from `toc.json` at runtime.

## Markdown lesson schema

Every lesson file should follow this shape (see `content/CSS/text-color.md` for a full example):

```
# Title

One or two sentence description.

## Display
### HTML

<fenced code block — starter HTML for the playground, blank fences are fine>

### CSS

<fenced code block — starter CSS for the playground, blank fences are fine>

### Javascript

<fenced code block — starter JS for the playground, blank fences are fine>

## Your tasks
### <short task name>
<instruction>
<fenced code block with the answer>

## Exercises
### Exercise N: <name>
<one paragraph prompt, no answer given>

## Quizes
### Q1. <question>
1. option
2. option
3. option
4. option
```

The `## Display` section is **not** shown in the rendered lesson text — `app.js` (`splitDisplaySection()`)
pulls its three fenced code blocks out and loads them into the playground's HTML/CSS/JS boxes via
`window.pgLoadStarter()` whenever that lesson is opened, then strips the section before handing the
rest of the markdown to `marked.parse()`. Every lesson needs this section, even if one or two of the
three fences are left empty (e.g. a CSS-only lesson still needs an `### HTML` fence, just empty) —
`app.js` doesn't currently handle a missing `## Display` block gracefully.

Rendered output relies on `marked.parse()` producing plain `<h1>`–`<h3>`, `<p>`, `<pre><code>`,
`<ol>/<li>`, and inline `<code>` — all styled generically under `.mdout` in `index.html`. After
`marked.parse()` runs, `app.js` wraps every remaining `<pre>` in a `.code-block` div and injects a
GitHub-style copy button (`enhanceCodeBlocks()` in `app.js`) — don't hand-wrap `<pre>` blocks in
markdown.

## Conventions

- kebab-case for all filenames — they end up in the URL as `?path=CSS/text-color.md`, so spaces or
  capitals would need encoding.
- No build step, no dependencies beyond `marked.js` (loaded from cdnjs in `index.html`). Keep it
  that way — the point of this project is that it's a single folder you can open with a static
  file server, nothing to `npm install`.
- Design tokens (colors, spacing) are CSS custom properties at the top of `index.html`'s `<style>`
  block (`--navy`, `--amber`, `--ink`, `--border`, etc.) — reuse them rather than hardcoding hex
  values in new CSS.
- Sharp/rectangular corners everywhere except the md lesson panel (`#mdPanel`), which is the one
  deliberately rounded surface, plus the code blocks and inline `<code>` inside it. Match this if
  you add new UI.
