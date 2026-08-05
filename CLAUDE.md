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
  JS/*.md       lesson content, one markdown file per lesson
```

`index.html` contains two other inline `<script>` blocks below `app.js`'s `<script src>` tag:
one for the code playground (layout switching, live render, resizers), unrelated to the menu/lesson
system and safe to leave alone unless you're specifically changing the playground.

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
