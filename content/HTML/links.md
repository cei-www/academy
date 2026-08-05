# Links

A link is an `<a>` element with an `href` attribute holding the destination, and text between the
tags that the user clicks.

There are three ways to write the destination:

- **absolute** — `https://www.kmitl.ac.th/` — a full URL, used for other sites
- **relative** — `courses.html`, `../index.html` — resolved from the current page's folder
- **root-relative** — `/courses/ce/index.html` — resolved from the site root, so it works from any
  page on the site

`href="#seats"` jumps to the element on this page whose `id` is `seats`. An `id` must be unique in
the document.

`target="_blank"` opens the link in a new tab. Add `rel="noopener noreferrer"` with it: without
`noopener` the opened page can reach back through `window.opener` and redirect yours. `mailto:` and
`tel:` open the mail client and the dialler.

Write link text that makes sense read on its own, because screen-reader users list the links out of
context. "Download the syllabus (PDF)" works; a page of "click here" does not.

## Display
### HTML

```
<h1>CE WebDev Academy</h1>

<p><a href="#schedule">Jump to the schedule</a></p>

<p>
  Read more on the
  <a href="https://www.kmitl.ac.th/" target="_blank" rel="noopener noreferrer">KMITL website</a>.
</p>

<p>Questions: <a href="mailto:advisor@kmitl.ac.th">email your advisor</a></p>

<h2 id="schedule">Schedule</h2>
<p>Tuesdays, 13:00–16:00, room ECC-703.</p>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Link to another site
An absolute URL includes the scheme, `https://`.

```
<a href="https://www.kmitl.ac.th/">KMITL home page</a>
```

### 2. Link to a page in the same folder
A relative path is resolved from the folder of the current page.

```
<a href="courses.html">Course list</a>
<a href="../index.html">Back to the site home</a>
```

### 3. Jump to a section
Give the target an `id`, then point `href` at `#` plus that `id`.

```
<a href="#grading">Grading policy</a>

<h2 id="grading">Grading policy</h2>
```

### 4. Open a new tab safely
`target="_blank"` needs `rel="noopener noreferrer"` so the new page cannot control yours.

```
<a href="https://www.kmitl.ac.th/" target="_blank" rel="noopener noreferrer">
  KMITL website
</a>
```

### 5. Link an email address and a phone number
The text is still the readable part; the scheme goes in `href`.

```
<a href="mailto:advisor@kmitl.ac.th">Email the course advisor</a>
<a href="tel:+6623298000">Call the faculty office</a>
```

## Exercises

### Exercise 1: Three kinds of path
On one page write an absolute link, a relative link and a root-relative link, and label each with the
rule the browser uses to resolve it.

### Exercise 2: Table of contents
Write a page with four `<h2>` sections, each with an `id`, and a list of four links at the top that
jump to them.

### Exercise 3: Rewrite bad link text
Rewrite these so they stand alone: "click here", "read more", "this link". Keep the same destinations
you invent for them.

### Exercise 4: Contact block
Build a contact paragraph with a `mailto:` link and a `tel:` link, then say what each one opens on a
phone.

### Exercise 5: Inspect a broken link
Set `href="cources.html"` (a typo), click it, and report the exact status the Network tab in DevTools
shows for the request.

## Quizes

### Q1. Which attribute holds a link's destination?
1. `target`
2. `src`
3. `rel`
4. `href`

### Q2. Why add `rel="noopener noreferrer"` to a `target="_blank"` link?
1. It makes the new tab load faster
2. It stops the opened page from controlling your page through `window.opener`
3. It is required or the link will not open
4. It hides the link from search engines

### Q3. The current page is `/courses/ce/web.html`. Where does `<a href="../index.html">` go?
1. `/index.html`
2. `/courses/index.html`
3. `/courses/ce/index.html`
4. `/courses/ce/../index.html`, which is an error

### Q4. What does `<a href="#seats">` do?
1. Reloads the page
2. Opens a search box
3. Scrolls to the element on this page with `id="seats"`
4. Links to a file named `seats`

### Q5. Which link text is best for a screen-reader user?
1. `<a href="syllabus.pdf">click here</a>`
2. `<a href="syllabus.pdf">read more</a>`
3. `<a href="syllabus.pdf">Download the course syllabus (PDF)</a>`
4. `<a href="syllabus.pdf">syllabus.pdf</a>`
