# Title, description and canonical URLs

Nothing in `<head>` is drawn on the page, yet it decides how your page appears everywhere else.
`<title>` is the headline in a search result and the browser tab, so write it as a real sentence
fragment, most specific word first. `<meta name="description">` is the grey text under that headline
— roughly 150 characters, written for a human, not stuffed with keywords.

`<link rel="canonical">` names the one true URL for a page reachable at several addresses, so ranking
is not split between them. `<meta name="robots">` grants or refuses indexing and link following.
`<link rel="icon">` supplies the tab icon.

## Display
### HTML

```
<link rel="canonical" href="https://ce.kmitl.ac.th/webdev">
<link rel="icon" href="resources/img/ce-logo.svg" type="image/svg+xml">
<meta name="description" content="A hands-on web development course for CE students at KMITL.">
<meta name="robots" content="index, follow">

<h1>Web Development — CE, KMITL</h1>
<p>Search result preview, built from the tags above:</p>
<div class="serp">
  <p class="serp-url" id="serpUrl"></p>
  <h3 id="serpTitle"></h3>
  <p id="serpDesc"></p>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
.serp { max-width: 480px; }
.serp-url { color: #4B5563; font-size: 12px; margin: 0; }
.serp h3 { color: #0F1B33; margin: 2px 0; font-size: 17px; }
.serp p:last-child { color: #4B5563; margin: 0; font-size: 13px; }
```

### Javascript

```
const h1 = document.querySelector("h1").textContent;
const desc = document.querySelector('meta[name="description"]')?.content ?? "(missing)";
const canonical = document.querySelector('link[rel="canonical"]')?.href ?? location.href;

document.getElementById("serpTitle").textContent = h1;
document.getElementById("serpDesc").textContent = desc;
document.getElementById("serpUrl").textContent = canonical;
console.log("description length:", desc.length);
```

## Your Tasks
### 1. Write a title and description
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

### 3. Control indexing
`robots` can grant or refuse indexing and link following independently.

```
<meta name="robots" content="index, follow">
<meta name="robots" content="noindex, nofollow">
```

### 4. Add a favicon
`<link rel="icon">` supplies the small image shown in the browser tab.

```
<link rel="icon" href="resources/img/ce-logo.svg" type="image/svg+xml">
```

### 5. Read every meta tag in the console
`document.querySelectorAll` finds every `<meta>`, whatever attribute names its key.

```
document.querySelectorAll("meta").forEach(m =>
  console.log(m.name || m.getAttribute("property"), m.content)
);
```

## Exercises

### Exercise 1: Head block
Write a complete `<head>` for a course page: charset, viewport, title, description, canonical and
icon, in that order.

### Exercise 2: Rewrite a bad title
Given `<title>Home</title>`, write a better title under 60 characters and one sentence saying what
makes it better in a search result.

### Exercise 3: Measure the description
Write a `<meta name="description">` and log `.content.length` in the console. Report whether it
lands close to 150 characters.

### Exercise 4: Duplicate URLs
A course page is reachable at both `/webdev` and `/webdev/index.html`. Write the `<link
rel="canonical">` that fixes the split ranking, and explain in one sentence why it helps.

### Exercise 5: Block indexing
Write a `<meta name="robots">` for a draft page that should never appear in search results, and
explain the difference between `noindex` and `nofollow`.

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

### Q3. What does `<meta name="robots" content="noindex">` do?
1. Blocks the page from appearing in search results
2. Deletes the page from the server
3. Hides the page from visitors with a direct link
4. Only affects image search, not text search

### Q4. Which element supplies the browser tab icon?
1. `<meta name="icon">`
2. `<link rel="icon">`
3. `<title icon="…">`
4. `<img rel="favicon">`

### Q5. Roughly how long should a `<meta name="description">` be?
1. As long as possible, to include every keyword
2. About 150 characters, written for a human reader
3. Exactly one word
4. It has no effect on length limits, since search engines ignore it
