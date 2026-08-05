# Fetch and GET

`fetch(url)` sends a request and returns a promise. The promise settles as soon as the response
*headers* arrive, which is why reading the data takes a second step: `res.json()` reads the rest of
the body and parses it, and it returns a promise too. That is where the two `await`s come from — one
for the response, one for the body.

`await` is only legal inside an `async` function, so almost every fetch you write lives in one.
An `async` function always returns a promise, so its caller either `await`s it or lets it run.

The response object carries the outcome. `res.status` is the number, and `res.ok` is a shortcut for
"the status is in the 200–299 range". `fetch` defaults to `GET`, so a plain read needs no options.

Extra input for a `GET` goes in the query string. Build it with `URLSearchParams` rather than by
gluing strings together, because it escapes the values for you. Our data files are static, so the
server here ignores the query string — but the syntax is exactly what a real API needs.

```
const params = new URLSearchParams({ year: 2, sort: "gpa" });   // year=2&sort=gpa
```

## Display
### HTML

```
<h2>Course data</h2>
<p id="count">loading…</p>
<p>First student: <span id="first">—</span></p>
<p>Owner: <span id="owner">—</span></p>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
h2 { color: #0F1B33; }
span { color: #6B4207; font-weight: 600; }
p { border-bottom: 1px solid #DDE2E8; padding-bottom: 6px; }
```

### Javascript

```
async function loadStudents() {
  const res = await fetch("resources/data/students.json");
  console.log("status", res.status, "ok", res.ok);
  const students = await res.json();
  document.getElementById("count").textContent = students.length + " students";
  document.getElementById("first").textContent = students[0].name;
}

async function loadProfile() {
  const res = await fetch("resources/data/profile.json");
  const profile = await res.json();
  document.getElementById("owner").textContent = profile.name + " — " + profile.lab.name;
}

loadStudents();
loadProfile();
```

## Your Tasks
### 1. Send a GET request
`fetch` needs no options for a read, and `await` needs an `async` function around it.

```
async function load() {
  const res = await fetch("resources/data/students.json");
  console.log(res);
}
load();
```

### 2. Read the body
The second `await` is the one that gives you the data — the first only gave you the response.

```
const res = await fetch("resources/data/students.json");
const students = await res.json();
console.log(students.length, students[0].nickname);
```

### 3. Check the outcome
Look at the status before you trust the body.

```
const res = await fetch("resources/data/courses.json");
console.log(res.status, res.ok, res.headers.get("content-type"));
```

### 4. Fetch a single object
`profile.json` is one object, not an array, so there is no index and no `length`.

```
const res = await fetch("resources/data/profile.json");
const profile = await res.json();
console.log(profile.role, profile.office.building, profile.office.room);
```

### 5. Build a query string
`URLSearchParams` escapes each value, so spaces and `&` in the data cannot break the URL.

```
const params = new URLSearchParams({ year: 2, sort: "gpa" });
const url = "resources/data/students.json?" + params;
console.log(url);
const res = await fetch(url);
console.log(res.status);
```

## Exercises

### Exercise 1: List every GPA
Fetch `students.json` and log `name` and `gpa` for each student, one line per student in the console.

### Exercise 2: Count the second years
Fetch `students.json`, filter to `year === 2`, and put the count into the page.

### Exercise 3: Show what a lecturer teaches
Fetch `profile.json` and render `name`, `role` and every entry of `teaches` into the page.

### Exercise 4: Inspect the response
Fetch `courses.json` and log `res.status`, `res.ok`, `res.url` and
`res.headers.get("content-type")`. Read the four values in the console panel.

### Exercise 5: Two requests at once
Fetch `students.json` and `posts.json` in one `async` function and log both lengths. Start with two
sequential `await`s, then rewrite it with `Promise.all` so the requests overlap.

## Quizes

### Q1. What does `fetch(url)` return?
1. The response body as a string
2. A promise that settles with a `Response` object
3. The parsed JSON data
4. Nothing — it only works through a callback

### Q2. Why does reading JSON need two `await`s?
1. One retries the request if the first attempt fails
2. `await` can only unwrap one property at a time
3. The first waits for the response, the second waits for the body to arrive and be parsed
4. The second `await` converts the data from text to UTF-8

### Q3. When is `res.ok` `true`?
1. For any status from 200 to 299
2. Whenever the server replied at all, whatever the status
3. Only for exactly `200`
4. For any status below 500

### Q4. What does `const res = await fetch(url); console.log(res.json());` print?
1. The array of 8 students
2. `[object Object]`
3. A pending `Promise`
4. The raw JSON text

### Q5. What is `String(new URLSearchParams({ year: 2, sort: "gpa" }))`?
1. `?year=2&sort=gpa`
2. `year=2&sort=gpa`
3. `{"year":2,"sort":"gpa"}`
4. `year:2,sort:gpa`
