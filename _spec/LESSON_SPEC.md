# Lesson authoring spec — CE WebDev Academy

Read this whole file before writing anything. Every lesson you produce must satisfy it exactly.

Audience: **second-year Computer Engineering students in an English-language program.** They are
competent programmers-in-training but new to the web. Write plain, precise English. No filler, no
marketing tone, no emoji, no "Let's dive in".

---

## 1. Hard structural contract

The app parses these files. Deviating breaks the site.

```
# Title

<intro prose — see length limits>

## Display
### HTML

```
<starter HTML for the playground>
```

### CSS

```
<starter CSS for the playground>
```

### Javascript

```
<starter JS for the playground>
```

## Your Tasks
### 1. <short imperative name>
<one or two sentences>

```
<the answer code>
```

### 2. …   (exactly 5, numbered 1–5)

## Exercises

### Exercise 1: <short name>
<one or two sentences, no answer given>

### Exercise 2: …   (exactly 5)

## Quizes

### Q1. <question>
1. option
2. option
3. option
4. option

### Q2. …   (exactly 5, four options each)
```

Non-negotiable details:

- The heading is spelled **`## Quizes`** (one z). It is the existing convention; do not "fix" it.
- `## Display` must contain exactly the three `### HTML`, `### CSS`, `### Javascript` sub-headings,
  **in that order**, each followed by **a blank line** and then a fenced block. The parser regex is
  `### <name>\n\n```…```` — a missing blank line silently breaks the playground.
- Open fences with plain ``` (no language tag) inside `## Display`. Elsewhere plain ``` too.
- A lesson with no JS still needs an `### Javascript` heading with an empty fence.
- `## Your Tasks` items are numbered `### 1.` … `### 5.` and each ends with a fenced answer block.
- `### Exercise N:` items have **no** answer. `### QN.` options are a plain `1.`–`4.` numbered list.
- Exactly one correct quiz answer, and do not mark it. Vary its position — do not always make it #2.

## 2. Length limits — the point of this pass

Lessons were too long. Keep them tight.

| Part | Limit |
| --- | --- |
| Intro prose (title → `## Display`) | **≤ 14 lines** of text, plus at most one short fenced example |
| Each Your Task instruction | 1–2 sentences |
| Each Your Task answer block | ≤ 12 lines |
| Each Exercise | 1–2 sentences |
| Whole file | **≤ 170 lines** |

If a topic cannot fit, that is a signal it is two lessons. Do not overflow — instead write both files
and say so in your final report. Prefer short declarative sentences to bullet lists of adjectives.

Teach the *why* in one clause, not a paragraph. Good: "Give `width` and `height` so the browser
reserves the space and the page does not jump while loading." Bad: a three-sentence essay on CLS.

## 3. Playground rules

The preview is an iframe built as `<style>CSS</style> + HTML + <script>JS</script>`. So:

- The `## Display` starter must **run and show something visible** on its own. No placeholders like
  `<!-- your code here -->` as the only content.
- Keep starters small — roughly ≤ 20 lines per fence.
- `console.log` output appears in the app's own console panel, so JS lessons may rely on it.
- The iframe's base URL is the app's URL, so **relative asset paths work**: `resources/img/…`,
  `resources/data/…`. Never link to an external CDN or an image host — lessons must work offline.

## 4. Available assets

Under `resources/`. Use these; do not invent file names.

**`resources/img/`**

| Path | Size | Good for |
| --- | --- | --- |
| `resources/img/campus.jpg` | 1600×900 | full-size photo |
| `resources/img/campus-800.jpg` | 800×450 | mid resolution, `srcset` |
| `resources/img/campus-400.jpg` | 400×225 | thumbnail |
| `resources/img/banner.jpg` | 1600×400 | very wide — `object-fit` demos |
| `resources/img/profile.jpg` | 600×600 | square — avatars |
| `resources/img/chip.png` | 512×512 | transparent PNG |
| `resources/img/ce-logo.svg` | 240×80 | vector logo |
| `resources/img/box-model.svg` | 360×240 | box-model diagram |

**`resources/data/`** — fetch these in AJAX lessons; no external API, no CORS setup.

| Path | Shape |
| --- | --- |
| `resources/data/students.json` | array of 8 — `id, name, nickname, year, gpa, major, skills[]` |
| `resources/data/courses.json` | array of 6 — `code, title, credits, year, semester, instructor, seats, enrolled` |
| `resources/data/posts.json` | array of 6 — `id, title, author, tags[], published, likes, excerpt` |
| `resources/data/gallery.json` | array of 5 — `id, title, src, alt, width, height, tags[]` |
| `resources/data/profile.json` | **single object** — `name, role, department, lab{name,url}, teaches[], office{building,room}` |

If you need an asset that does not exist, do **not** reference it. Use an existing one, or drop the
idea. Report the gap in your final message instead.

## 5. House style

- Sentence case for headings. No trailing punctuation in headings.
- Inline code for every property, tag, keyword and file name: `color`, `<figure>`, `const`.
- Prefer `const`, then `let`. Never write `var` except when a lesson is specifically about it.
- Use the site's palette in example CSS so lessons look like one product:
  `#0F1B33` navy, `#F2A93B` amber, `#6B4207` amber ink, `#EEF1F4` paper, `#DDE2E8` border,
  `#131A26` ink, `#4B5563` soft ink.
- Example data should be plausibly Thai/KMITL — student names, course codes, lab names.
- Accessibility is taught inline where it is cheap, never as a bolted-on section.
- Exercises should ask the student to *do* something checkable, not to "explore" or "think about".
  At least one exercise per lesson should involve reading the result in DevTools or the console.
- Quiz questions should test understanding, including one "what does this code print / produce"
  style question per lesson. Distractors must be plausible — no joke options.

## 6. Worked example — copy this shape

```markdown
# Colors and backgrounds

CSS has two colour properties you will use constantly: `color` sets the text colour, and
`background-color` sets the colour behind an element.

A colour value can be written three ways:

- a name — `red`, `teal`
- a hex code — `#F2A93B`
- an rgb function — `rgb(242, 169, 59)`

`color` is inherited, so setting it on `body` reaches every descendant that does not override it.

## Display
### HTML

```
<h1>Colour demo</h1>
<p class="note">This paragraph has its own background.</p>
```

### CSS

```
h1 { color: #0F1B33; }

.note {
  color: #6B4207;
  background-color: #F2A93B;
  padding: 8px;
}
```

### Javascript

```

```

## Your Tasks
### 1. Set a text colour
Use a colour name.

```
h1 { color: teal; }
```

### 2. Use a hex code
Every hex code is `#RRGGBB`.

```
h1 { color: #F2A93B; }
```

… (3, 4, 5)

## Exercises

### Exercise 1: Three headings
Give `h1`, `h2` and `h3` three different colours — one name, one hex, one `rgb()`.

… (2–5)

## Quizes

### Q1. Which property sets the colour of text?
1. `text-color`
2. `color`
3. `font-color`
4. `background-color`

… (Q2–Q5)
```

## 7. What to deliver

Write each lesson with the `Write` tool to the exact path you are given. Do not create any other
files. When you are done, reply with **only** a JSON array, no prose around it:

```json
[{"file": "CSS/colors.md", "name": "Colors and backgrounds", "lines": 142}]
```

`name` is the menu label for `toc.json` — short, title-ish, no group prefix. If you had to split a
topic into an extra lesson, include the extra entry in the array in the right reading order.
