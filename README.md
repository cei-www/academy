# CE WebDev Academy

An interactive, browser-based course for learning HTML, CSS, JavaScript, AJAX and Tailwind CSS —
built for second-year Computer Engineering (CE) students at CE-KMITL, in an English-language
program.

**Live site: [https://cei-www.github.io/academy/](https://cei-www.github.io/academy/)**

Every lesson pairs short, focused reading with a live code playground: students edit HTML, CSS and
JavaScript side by side and see the result render immediately, with a console panel for debugging —
no local setup, no build step, nothing to install.

## Features

- **A 3-level course menu** — Language → Topic → Lesson — that renders straight from `toc.json`.
- **A live code playground** with switchable layouts (grid, stacked, tabbed, full-HTML), a resizable
  console with a real JS REPL evaluated against the current preview, and per-box collapse/expand
  controls in stacked layout.
- **Self-contained lessons** — each is one short markdown file with starter code, five guided tasks
  with worked answers, five open-ended exercises, and a five-question quiz.
- **No build step** — plain HTML, CSS and vanilla JavaScript. No bundler, no framework, no
  `npm install` required to run or contribute to it.

## Getting started

Clone the repository and serve it over HTTP — fetching `toc.json` and the lesson markdown files
fails under `file://` due to CORS restrictions on local fetches.

```bash
git clone https://github.com/cei-www/academy.git
cd academy
python3 -m http.server 8000
# or: npx serve .
```

Then open `http://localhost:8000/` in a browser.

## Project structure

```
index.html        the app shell — header, footer, 3-column layout, code playground, all CSS
app.js             loads toc.json, builds the nav tree, fetches and renders lesson markdown,
                    search, deep links
toc.json           table of contents — the single source of truth for menu structure and grouping
content/
  HTML/*.md        Basic and Advanced HTML lessons
  CSS/*.md         Basic and Advanced CSS lessons
  JS/*.md          Basic and Advanced JavaScript lessons
  AJAX/*.md        Fetch, rendering data, error handling
  FW/*.md          Tailwind CSS lessons
resources/
  img/             sample images referenced by lessons
  data/            JSON fixtures the AJAX lessons fetch
_spec/
  LESSON_SPEC.md   the authoring contract every lesson file must follow
```

## How to add a lesson

Every lesson is a single markdown file under `content/<Group>/`, plus one entry in `toc.json`. Read
[`_spec/LESSON_SPEC.md`](_spec/LESSON_SPEC.md) in full before writing one — it is the authoritative
contract the app's parser depends on. The short version:

1. **Pick one small topic.** If a topic has several distinct variants (e.g. list types, selector
   kinds), prefer several short lessons plus a combining overview lesson over one long file — see
   section 4 of the spec.

2. **Write the file** at `content/<Group>/<slug>.md` following this exact structure:

   ```markdown
   # Title

   <intro prose — at most ~14 lines, plus one short example fence>

   ## Display
   ### HTML

   <starter HTML for the playground, in a fenced block>

   ### CSS

   <starter CSS — leave the fence empty for Basic HTML lessons>

   ### Javascript

   <starter JS — leave the fence empty for Basic HTML/CSS lessons>

   ## Your Tasks
   ### 1. <short task name>
   <one or two sentences>

   <the answer, in a fenced block>

   ... (exactly 5 tasks, numbered 1–5)

   ## Exercises
   ### Exercise 1: <short name>
   <one or two sentences, no answer given>

   ... (exactly 5 exercises)

   ## Quizes
   ### Q1. <question>
   1. option
   2. option
   3. option
   4. option

   ... (exactly 5 questions, 4 options each)
   ```

   Notes the parser depends on:
   - The heading `## Quizes` is spelled with one "z" — this is intentional, not a typo.
   - Each `### HTML` / `### CSS` / `### Javascript` heading must be followed by a **blank line**,
     then a fenced code block with no language tag. A missing blank line silently breaks the
     playground.
   - Keep the whole file to **170 lines or fewer**.
   - Only reference existing files under `resources/img/` and `resources/data/` — never an external
     URL or CDN (the one exception is the Tailwind CDN script used inside the Framework group's own
     lessons).

3. **Add it to `toc.json`** under the right group, in reading order. Groups can nest arbitrarily —
   a group node has a `name` and `children`; a lesson node has a `name` and a `file` path relative to
   `content/`.

4. **Preview it locally** — run the local server (see *Getting started*), open the app, and confirm
   the lesson appears in the nav, the Display starter renders correctly in the playground, and all
   five tasks, exercises and quiz questions read as intended.

5. **Follow the house style** in `_spec/LESSON_SPEC.md` section 7 — sentence-case headings, the
   site's colour palette in example CSS, plausible CE-KMITL example data, and `CE` (never `CPE`) as
   the department abbreviation.

## Credits

Built for **Computer Engineering, CE-KMITL** by **[Rathachai Chawuthai](https://rathachai.creatier.pro/)**
and the [SAIG Lab](https://github.com/SAIG-KMITL).

Source: [github.com/cei-www/academy](https://github.com/cei-www/academy)
