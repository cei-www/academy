# Rendering data to the DOM

Fetching gives you an array. Rendering turns that array into elements. Keep the two apart: an
`async` function that returns data and knows nothing about the page, and a plain function that takes
an array and writes to the page. The renderer is then reusable for filtered results, with no refetch.

Build each row with `document.createElement` and set `textContent`, not `innerHTML`. `textContent`
puts the value on the page as text, so a title containing `<script>` or `&` stays a title instead of
becoming markup — with `innerHTML` you are pasting other people's data into your document as code.

A response takes time, so the page needs three states: a loading message before the request, the rows
when data arrives, and an empty state when the array has no matches. Start every render by emptying
the container — `list.textContent = ""` — or each render appends another copy under the last one.

## Display
### HTML

```
<h2>Courses</h2>
<p id="status">…</p>
<ul id="list"></ul>
<button id="year2" type="button">Year 2</button> <button id="none" type="button">No matches</button>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
#status { color: #4B5563; }
#list { list-style: none; padding: 0; }
#list li { border-bottom: 1px solid #DDE2E8; padding: 6px 0; }
button { background: #F2A93B; color: #6B4207; border: 0; padding: 6px 10px; }
```

### Javascript

```
const list = document.getElementById("list");
const status = document.getElementById("status");
let all = [];

function render(courses) {
  list.textContent = "";
  status.textContent = courses.length ? courses.length + " courses" : "No courses match.";
  for (const c of courses) {
    const li = document.createElement("li");
    li.textContent = c.code + " " + c.title + " — " + c.instructor;
    list.appendChild(li);
  }
}

async function load() {
  status.textContent = "Loading…";
  const res = await fetch("resources/data/courses.json");
  all = await res.json();
  render(all);
}

function show(year) { render(all.filter(c => c.year === year)); }

document.getElementById("year2").addEventListener("click", () => show(2));
document.getElementById("none").addEventListener("click", () => show(9));
load();
```

## Your Tasks
### 1. Show a loading state
Set the message before the `await`, because nothing runs between the request and the response.

```
status.textContent = "Loading…";
const res = await fetch("resources/data/courses.json");
const courses = await res.json();
status.textContent = courses.length + " courses";
```

### 2. Build one element per item
`createElement` plus `textContent` keeps the data as data, never as markup.

```
const li = document.createElement("li");
li.textContent = course.code + " " + course.title;
list.appendChild(li);
```

### 3. Clear before you redraw
Without this, the second render leaves the first render's rows in place.

```
function render(courses) {
  list.textContent = "";
  for (const c of courses) {
    const li = document.createElement("li");
    li.textContent = c.title;
    list.appendChild(li);
  }
}
```

### 4. Handle the empty array
Zero results is a normal outcome, not an error, and it needs its own message.

```
if (courses.length === 0) {
  status.textContent = "No courses match.";
  return;
}
```

### 5. Split fetching from rendering
The fetcher returns data, the renderer takes an array, and neither calls the other.

```
async function loadCourses() {
  const res = await fetch("resources/data/courses.json");
  return res.json();
}
loadCourses().then(render);
```

## Exercises

### Exercise 1: Seats left
Render each course as `code — title (N seats left)`, and mark it `FULL` when `enrolled` equals `seats`.

### Exercise 2: Filter buttons
Add year 2, year 3 and year 4 buttons that re-render from the array you already fetched. Confirm in
the console that only one fetch happens.

### Exercise 3: Post list
Render `posts.json` instead: one `<article>` per post, title in an `<h3>`, the rest in `<p>` elements.

### Exercise 4: Tag chips
For each post, create one `<span>` per entry in its `tags` array and append them to that post.

### Exercise 5: Text, not markup
Render a post whose title you changed to `<b>Flexbox</b>`, once with `textContent` and once with
`innerHTML`, and describe the difference on screen.

## Quizes

### Q1. Why prefer `createElement` and `textContent` over `innerHTML` for data?
1. `innerHTML` is slower on every browser
2. The value is inserted as text, so markup inside the data cannot become part of the document
3. `innerHTML` cannot create list items
4. `textContent` renders the tags in the data as real elements

### Q2. Which line empties a container before re-rendering?
1. `list.clear()`
2. `list.remove()`
3. `list.textContent = "";`
4. `list.value = "";`

### Q3. Where does the loading message belong?
1. After `await res.json()`
2. Inside the loop that builds the rows
3. In the CSS, as the container's default content
4. Before the `await` that sends the request

### Q4. `li.textContent = "<b>DSA</b>";` — what appears on the page?
1. DSA in bold
2. Nothing, because the string is treated as an element
3. The literal text `<b>DSA</b>`
4. An error is thrown

### Q5. Why keep the fetching function separate from the rendering function?
1. `async` functions are not allowed to touch the DOM
2. It makes the request finish faster
3. The renderer can be reused for filtered arrays and tested without a request
4. Only one `await` is allowed per function
