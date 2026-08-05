# Debounced search

A search box that fetches on every keystroke sends far more requests than necessary — and results
from an earlier, now-stale keystroke can arrive after a later one, showing the wrong answer.
Debouncing waits for typing to pause before firing the request: clear the previous timeout on every
`input` event, and only the last keystroke in a burst actually triggers `fetch`, a few hundred
milliseconds later.

## Display
### HTML

```
<h1>Course search</h1>
<input id="q" placeholder="Type a course name...">
<ul id="results"></ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
input { padding: 6px 10px; width: 240px; }
#results li { padding: 4px 0; }
```

### Javascript

```
const input = document.getElementById("q");
const results = document.getElementById("results");
let pending;

async function search(term) {
  const res = await fetch("resources/data/courses.json");
  const courses = await res.json();
  const matches = courses.filter(c => c.title.toLowerCase().includes(term.toLowerCase()));
  results.innerHTML = "";
  matches.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c.title;
    results.append(li);
  });
}

input.addEventListener("input", () => {
  clearTimeout(pending);
  const term = input.value.trim();
  if (!term) { results.innerHTML = ""; return; }
  pending = setTimeout(() => search(term), 300);
});
```

## Your Tasks
### 1. Fetch on every keystroke, first
See the problem before fixing it — this fires far more than needed.

```
input.addEventListener("input", () => search(input.value));
```

### 2. Debounce with a cleared timeout
Only the last keystroke in a burst survives long enough to fire.

```
let pending;
input.addEventListener("input", () => {
  clearTimeout(pending);
  pending = setTimeout(() => search(input.value), 300);
});
```

### 3. Skip an empty query
Guard against firing a request for an empty search box.

```
input.addEventListener("input", () => {
  clearTimeout(pending);
  if (!input.value.trim()) { results.innerHTML = ""; return; }
  pending = setTimeout(() => search(input.value), 300);
});
```

### 4. Filter fetched data client-side
Once the data is fetched, `.filter` narrows it to matches.

```
const matches = courses.filter(c => c.title.toLowerCase().includes(term.toLowerCase()));
```

### 5. Render the results
Clear the list first, then build fresh `<li>` elements from the matches.

```
results.innerHTML = "";
matches.forEach(c => {
  const li = document.createElement("li");
  li.textContent = c.title;
  results.append(li);
});
```

## Exercises

### Exercise 1: Undebounced search
Build a search box that fetches on every keystroke, and count how many requests typing "web" sends
in the Network panel.

### Exercise 2: Add debouncing
Fix Exercise 1 with a cleared `setTimeout`, and confirm typing "web" now sends far fewer requests.

### Exercise 3: Empty query guard
Add a check that clears the results list instead of searching when the input is empty.

### Exercise 4: Loading indicator
Show a "searching..." message the moment the debounced timer fires, replaced by the results once
they arrive.

### Exercise 5: Tune the delay
Try 100ms and 800ms debounce delays on the same search box, and describe in one sentence the
trade-off each makes.

## Quizes

### Q1. Why does searching on every keystroke waste requests?
1. It does not — every keystroke should trigger a fresh search
2. Most keystrokes are followed almost immediately by another, making the in-between requests useless
3. `fetch` only allows one request per page
4. Keystrokes cannot trigger `fetch` at all

### Q2. What does debouncing do?
1. Sends every request twice, to be safe
2. Waits for a pause in activity before firing, cancelling any pending fire in between
3. Blocks all requests until the page reloads
4. Sends requests in a fixed, unrelated interval regardless of typing

### Q3. What does `clearTimeout(pending)` do on every new keystroke?
1. Nothing — timeouts cannot be cancelled once set
2. Cancels the previous debounce timer so only the latest keystroke's timer survives
3. Cancels the fetch request that already started
4. Resets the input field's value

### Q4. Why guard against an empty search term?
1. `fetch` throws on an empty string
2. It avoids firing a pointless request and clears stale results instead
3. Empty strings are not valid JavaScript
4. It is not necessary — empty terms should still search

### Q5. What can go wrong if requests are not debounced and arrive out of order?
1. Nothing — responses always arrive in the order they were sent
2. An earlier, now-stale response can arrive after a later one, showing outdated results
3. The browser blocks all but the first request
4. `fetch` automatically discards outdated responses
