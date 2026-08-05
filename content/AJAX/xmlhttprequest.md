# The XMLHttpRequest object

AJAX originally stood for "Asynchronous JavaScript **and XML**", and `XMLHttpRequest` (XHR) was the
only object that could make a background request. It predates `fetch` by over a decade, and every
modern site prefers `fetch` — but legacy code still uses it, and it explains what "AJAX" originally
named.

Building a request is several steps: create the object with `new XMLHttpRequest()`, `.open(method,
url)` it, attach an `onload` callback for when the response arrives, then `.send()`. The raw response
text lands in `.responseText` once `onload` fires — `JSON.parse` turns it into data, exactly like the
body you get from `fetch`.

## Display
### HTML

```
<h2>Course data (XMLHttpRequest)</h2>
<p id="count">loading…</p>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
h2 { color: #0F1B33; }
```

### Javascript

```
const xhr = new XMLHttpRequest();
xhr.open("GET", "resources/data/students.json");

xhr.onload = function () {
  console.log("status", xhr.status);
  const students = JSON.parse(xhr.responseText);
  document.getElementById("count").textContent = students.length + " students";
};

xhr.onerror = function () {
  console.log("request failed");
};

xhr.send();
```

## Your Tasks
### 1. Create and open a request
`.open` sets the method and URL but does not send anything yet.

```
const xhr = new XMLHttpRequest();
xhr.open("GET", "resources/data/courses.json");
```

### 2. Send it and read the status
Nothing happens until `.send()` is called; the status is only meaningful once `onload` fires.

```
xhr.onload = function () {
  console.log(xhr.status);
};
xhr.send();
```

### 3. Parse the response text
`.responseText` is a plain string — you still need `JSON.parse` to get usable data from it.

```
xhr.onload = function () {
  const courses = JSON.parse(xhr.responseText);
  console.log(courses.length);
};
```

### 4. Handle a network error
`onerror` fires when the request itself fails — a bad host, no connection — not for HTTP error
statuses, which still call `onload`.

```
xhr.onerror = function () {
  console.log("network error — request never completed");
};
```

### 5. Compare with `fetch`
The same GET-and-render task takes one `async` function and two `await`s with `fetch`, against three
callbacks with XHR.

```
// XHR: three separate callback-driven steps
xhr.onload = function () { /* handle success */ };
xhr.onerror = function () { /* handle failure */ };
xhr.send();

// fetch: linear, top-to-bottom
const res = await fetch(url);
const data = await res.json();
```

## Exercises

### Exercise 1: Fetch and render with XHR
Use `XMLHttpRequest` to `GET` `resources/data/posts.json` and render the number of posts into the
page inside `onload`.

### Exercise 2: Watch readyState
Add an `onreadystatechange` handler and log `xhr.readyState` on every change; note in the console
which value corresponds to "done".

### Exercise 3: Count the lines
Write the same "fetch and render a count" task twice — once with `XMLHttpRequest`, once with `fetch`
— and compare how many lines each version takes.

### Exercise 4: Trigger onerror
Point an XHR request at a URL that does not exist on this server (not a 404 JSON file, an
unreachable host) and confirm `onerror` fires instead of `onload`.

### Exercise 5: Read a single object
Use `XMLHttpRequest` to fetch `resources/data/profile.json` and render `name` and `role` into the
page.

## Quizes

### Q1. What did the "X" in AJAX originally stand for?
1. "Extra" — extra JavaScript features
2. "XML" — the format responses were expected to use
3. "Cross-origin" (X for "cross")
4. Nothing; AJAX has never been an acronym

### Q2. Which XHR method actually sends the request?
1. `.open()`
2. `.send()`
3. `.connect()`
4. `.fetch()`

### Q3. Where does the raw response text land once an XHR request completes?
1. `xhr.body`
2. `xhr.json`
3. `xhr.responseText`
4. `xhr.data`

### Q4. What is the main practical difference between `XMLHttpRequest` and `fetch`?
1. `XMLHttpRequest` cannot send a `GET` request
2. `fetch` returns a promise you can `await`; `XMLHttpRequest` is driven by callbacks like `onload`
3. `fetch` cannot read JSON responses
4. `XMLHttpRequest` only works with XML, never JSON

### Q5. When does an XHR request's `onerror` handler fire?
1. Whenever the server responds with a 4xx or 5xx status
2. Only when `JSON.parse` fails on the response
3. When the request itself fails — no connection, an unreachable host
4. Every time `.send()` is called, as a confirmation
