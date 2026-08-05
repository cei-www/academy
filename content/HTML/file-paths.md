# Relative and absolute file paths

Every `href` and `src` — on a `<link>`, a `<script>`, an `<img>`, or an `<a>` — is a path, and the
browser resolves it one of three ways. A **relative** path (`style.css`, `../lib/x.js`,
`img/logo.svg`) is resolved from the folder of the *current page*, not the site root — move the page
to a different folder and every relative path inside it now points somewhere else.

A **root-relative** path (`/assets/style.css`) starts with `/` and always resolves from the site's
root, no matter which folder the current page lives in — the same link works unchanged from any depth.
An **absolute URL** (`https://cdn.example.com/x.js`) includes a scheme and host, and points at another
site entirely, not a file in this project at all.

A broken relative path is one of the most common real bugs: the file exists, the code is correct, but
it 404s because the path was written relative to the wrong folder.

## Display
### HTML

```
<link rel="stylesheet" href="resources/css/demo-style.css">

<p class="external-demo">Loaded with a relative path: resources/css/demo-style.css</p>
<img src="resources/img/ce-logo.svg" alt="CE logo, loaded with a relative path" width="60">
<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png"
     alt="HTML5 logo, loaded with an absolute URL from w3.org" width="60">
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
```

### Javascript

```

```

## Your Tasks
### 1. Write a relative path
Resolved from the current page's own folder — no leading `/`.

```
<link rel="stylesheet" href="resources/css/demo-style.css">
```

### 2. Go up a folder with `../`
Each `../` steps out of one folder before continuing.

```
<img src="../shared/logo.svg" alt="logo one folder up, then into shared/">
```

### 3. Write a root-relative path
A leading `/` means "start from the site root," regardless of the current page's own folder.

```
<link rel="stylesheet" href="/resources/css/demo-style.css">
```

### 4. Write an absolute URL
A full URL, scheme and all, always points at another site, never a file in this project.

```
<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" alt="HTML5 logo, from w3.org">
```

### 5. Diagnose a broken relative path
If a page moves folders but its relative paths do not change, they now resolve to the wrong place.

```
<!-- page moved from /pages/x.html to /pages/2026/x.html: -->
<link rel="stylesheet" href="style.css">  <!-- now 404s -->
```

## Exercises

### Exercise 1: Three path styles, one file
Write three different `<link>` tags for the same stylesheet — relative, root-relative, and (if it
were hosted online) an absolute URL. Explain when each is the right choice.

### Exercise 2: Break it by moving
Imagine moving this lesson's page one folder deeper. Rewrite `resources/css/demo-style.css` as the
relative path that would still work from the new location.

### Exercise 3: `../` chains
Write a relative path using two `../` segments to reach a file from a page nested two folders deep.

### Exercise 4: Root-relative survives a move
Explain in one sentence why `/resources/css/demo-style.css` keeps working even if the current page
moves to a different folder, while `resources/css/demo-style.css` might not.

### Exercise 5: Diagnose a 404
Given a page at `/courses/ce/index.html` linking `<img src="img/photo.jpg">`, and the real file at
`/courses/img/photo.jpg`, explain why the image fails to load and write the fix.

## Quizes

### Q1. What does a relative path like `style.css` resolve from?
1. The site's root, always
2. The current page's own folder
3. The browser's downloads folder
4. Another domain entirely

### Q2. What does a root-relative path like `/assets/style.css` resolve from?
1. The current page's own folder
2. The site's root, regardless of which folder the current page is in
3. Another domain entirely
4. It is invalid HTML

### Q3. What distinguishes an absolute URL from the other two path types?
1. It always starts with `/`
2. It includes a scheme and host, pointing at another site entirely
3. It cannot be used in `href` or `src`
4. It only works for images, never scripts or stylesheets

### Q4. A page moves to a new folder, and its relative `<link>` paths are left unchanged. What happens?
1. Nothing — relative paths always still work
2. They may now resolve to the wrong location and 404
3. The browser automatically rewrites them
4. Only `<script>` tags are affected, never `<link>`

### Q5. What does `../` do in a relative path?
1. Refers to the site root
2. Steps up one folder before continuing to resolve the rest of the path
3. Is a comment and is ignored
4. Duplicates the current file
