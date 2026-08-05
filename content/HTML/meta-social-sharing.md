# Open Graph and Twitter cards

Chat apps and social networks do not read `<title>` or the description meta tag. They read **Open
Graph** — `og:title`, `og:description`, `og:image`, `og:url` — plus Twitter's `twitter:card` set, and
build a preview card from them. `og:image` must be an absolute URL on a real site.

`lang` and `dir` on `<html>` tell the browser and screen readers which language to speak and which
direction to lay out. Search engines also read **structured data** — a `<script>` block of JSON-LD
describing the page as a Course, Person or Event — which is how rich results are produced; you do not
need it today, but know the name.

## Display
### HTML

```
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
```

## Your Tasks
### 1. Add Open Graph tags
Note the attribute is `property`, not `name`, and the image URL is absolute.

```
<meta property="og:title" content="CE WebDev Academy">
<meta property="og:description" content="Learn HTML, CSS and JavaScript by building real pages.">
<meta property="og:image" content="https://ce.kmitl.ac.th/img/campus.jpg">
<meta property="og:url" content="https://ce.kmitl.ac.th/webdev">
<meta property="og:type" content="website">
```

### 2. Add a Twitter card
`summary_large_image` renders the wide preview; the other tags fall back to Open Graph if omitted.

```
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CE WebDev Academy">
<meta name="twitter:image" content="https://ce.kmitl.ac.th/img/campus.jpg">
```

### 3. Set language and direction
`lang` is on `<html>`; `dir="rtl"` is for right-to-left scripts such as Arabic.

```
<html lang="en" dir="ltr">
```

### 4. Add minimal structured data
A JSON-LD block describes the page's meaning directly, in a format search engines parse.

```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Web Development",
  "provider": "CE-KMITL"
}
</script>
```

### 5. Build the preview card from the tags
The same pattern a real chat app uses: read each tag, then fill in a template.

```
const meta = (sel) => document.querySelector(sel)?.content ?? "(missing)";
document.getElementById("cardTitle").textContent = meta('meta[property="og:title"]');
```

## Exercises

### Exercise 1: Break the preview
Delete the `og:image` tag from the starter and re-render. Describe what the card shows now and which
line of the JavaScript produced it.

### Exercise 2: Two languages
Make one page `lang="th"` and one `lang="en"`, each with its own title and description, and link them
with `<link rel="alternate" hreflang="…">`.

### Exercise 3: Build a Twitter card
Add a full `twitter:card` set (`card`, `title`, `description`, `image`) to a page that already has
Open Graph tags, and explain in one sentence when Twitter falls back to Open Graph instead.

### Exercise 4: Structured data for a person
Write a JSON-LD block with `@type: "Person"` describing a course instructor, including `name` and
`worksFor`.

### Exercise 5: Fallback check
Remove `og:title` but keep `<title>Course</title>`. Log which value a well-behaved chat app preview
would most likely fall back to, and why.

## Quizes

### Q1. Which attribute does an Open Graph tag use for its key?
1. `name`
2. `property`
3. `rel`
4. `itemprop`

### Q2. A page has no `og:title` but does have `<title>Course</title>`. What does a chat app most likely show?
1. Nothing at all, because Open Graph is required
2. An error card
3. It falls back to the `<title>` text
4. The first `<h1>` on the page

### Q3. What does `lang="th"` on `<html>` affect?
1. The character encoding of the file
2. Pronunciation by screen readers, hyphenation and translation offers
3. Which fonts are downloaded
4. The direction the text is laid out

### Q4. What must `og:image` be?
1. A relative path, so it works on any domain
2. An absolute URL on a real, reachable site
3. A `data:` URL, so no request is needed
4. Optional and ignored by most platforms

### Q5. What is structured data (JSON-LD) used for?
1. Styling the page for print
2. Describing the page's meaning to search engines, enabling rich results
3. Replacing `<meta>` tags entirely
4. Loading fonts faster
