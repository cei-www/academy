# Meta, SEO and sharing

Nothing in `<head>` is drawn on the page, yet it decides how your page appears everywhere else.
`<title>` is the headline in a search result and the browser tab, so write it as a real sentence
fragment, most specific word first. `<meta name="description">` is the grey text under that headline
— roughly 150 characters, written for a human, not stuffed with keywords.

`<link rel="canonical">` names the one true URL for a page that is reachable at several addresses,
so ranking is not split between them. `<meta name="robots">` grants or refuses indexing and link
following. `<link rel="icon">` supplies the tab icon.

Chat apps and social networks do not read any of that. They read **Open Graph** — `og:title`,
`og:description`, `og:image`, `og:url` — plus Twitter's `twitter:card` set, and build a preview card
from them. `og:image` must be an absolute URL on a real site.

Finally, `lang` and `dir` on `<html>` tell the browser and screen readers which language to speak and
which direction to lay out. Search engines also read **structured data** — a `<script>` block of
JSON-LD describing the page as a Course, Person or Event — which is how rich results are produced;
you do not need it today, but know the name.

## Display
### HTML

```
<meta name="description" content="A hands-on web development course for CE students at KMITL.">
<meta property="og:title" content="CE WebDev Academy">
<meta property="og:description" content="Learn HTML, CSS and JavaScript by building real pages.">
<meta property="og:image" content="resources/img/campus-400.jpg">
<meta property="og:url" content="https://ce.kmitl.ac.th/webdev">

<p>The card below is built from the meta tags above, the way a chat app builds a preview.</p>

<article class="card">
  <img id="cardImg" width="400" height="225" alt="">
  <div class="body">
    <p class="url" id="cardUrl"></p>
    <h3 id="cardTitle"></h3>
    <p id="cardDesc"></p>
  </div>
</article>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
.card { max-width: 400px; border: 1px solid #DDE2E8; background: #EEF1F4; }
.card img { display: block; width: 100%; height: auto; }
.card .body { padding: 10px 12px; }
.card h3 { margin: 4px 0; color: #0F1B33; font-size: 16px; }
.card p { margin: 0; color: #4B5563; font-size: 13px; }
.card .url { text-transform: uppercase; letter-spacing: .04em; }
```

### Javascript

```
const meta = (sel) => document.querySelector(sel)?.content ?? "(missing)";
const set = (id, text) => (document.getElementById(id).textContent = text);

set("cardTitle", meta('meta[property="og:title"]'));
set("cardDesc", meta('meta[property="og:description"]'));
set("cardUrl", meta('meta[property="og:url"]'));
document.getElementById("cardImg").src = meta('meta[property="og:image"]');
console.log("description:", meta('meta[name="description"]'));
```

## Your Tasks
### 1. Title and description
The title is the headline; the description is the summary under it. Both belong in `<head>`.

```
<title>Web Development — CE, KMITL</title>
<meta name="description"
      content="A second-year course on HTML, CSS and JavaScript at KMITL's CE department.">
```

### 2. Name the canonical URL
Point every duplicate address at the single version you want indexed.

```
<link rel="canonical" href="https://ce.kmitl.ac.th/webdev">
```

### 3. Add Open Graph tags
Note the attribute is `property`, not `name`, and the image URL is absolute.

```
<meta property="og:title" content="CE WebDev Academy">
<meta property="og:description" content="Learn HTML, CSS and JavaScript by building real pages.">
<meta property="og:image" content="https://ce.kmitl.ac.th/img/campus.jpg">
<meta property="og:url" content="https://ce.kmitl.ac.th/webdev">
<meta property="og:type" content="website">
```

### 4. Add a Twitter card
`summary_large_image` renders the wide preview; the other tags fall back to Open Graph if omitted.

```
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CE WebDev Academy">
<meta name="twitter:image" content="https://ce.kmitl.ac.th/img/campus.jpg">
```

### 5. Language, icon and indexing
`lang` is on `<html>`; `dir="rtl"` is for right-to-left scripts such as Arabic.

```
<html lang="en" dir="ltr">
<head>
  <link rel="icon" href="resources/img/ce-logo.svg" type="image/svg+xml">
  <meta name="robots" content="index, follow">
</head>
```

## Exercises

### Exercise 1: Head block
Write a complete `<head>` for a course page: charset, viewport, title, description, canonical and
icon, in that order.

### Exercise 2: Rewrite a bad title
Given `<title>Home</title>`, write a better title under 60 characters and one sentence saying what
makes it better in a search result.

### Exercise 3: Read the tags in the console
Log every meta tag on the starter page with
`document.querySelectorAll("meta").forEach(m => console.log(m.name || m.getAttribute("property"), m.content))`
and report which ones have no `name`.

### Exercise 4: Break the preview
Delete the `og:image` tag from the starter and re-render. Describe what the card shows now and which
line of the JavaScript produced it.

### Exercise 5: Two languages
Make one page `lang="th"` and one `lang="en"`, each with its own title and description, and link them
with `<link rel="alternate" hreflang="…">`.

## Quizes

### Q1. Where does `<meta name="description">` appear?
1. As a heading at the top of the page
2. In the browser tab, next to the icon
3. Nowhere — it is only for the developer
4. As the summary text under the link in a search result

### Q2. What does `<link rel="canonical">` solve?
1. It redirects visitors to the correct page
2. It stops search engines indexing the page at all
3. It names the preferred URL when one page has several addresses
4. It sets the site's home page

### Q3. Which attribute does an Open Graph tag use for its key?
1. `name`
2. `property`
3. `rel`
4. `itemprop`

### Q4. A page has no `og:title` but does have `<title>Course</title>`. What does a chat app most likely show?
1. Nothing at all, because Open Graph is required
2. An error card
3. It falls back to the `<title>` text
4. The first `<h1>` on the page

### Q5. What does `lang="th"` on `<html>` affect?
1. The character encoding of the file
2. Pronunciation by screen readers, hyphenation and translation offers
3. Which fonts are downloaded
4. The direction the text is laid out
