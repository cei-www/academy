# Creating data with POST

`POST` creates a new record at a collection URL such as `/students`. To send data you pass a second
argument to `fetch` — an options object with `method`, `headers` and `body`. `body` must be a string,
so an object goes through `JSON.stringify` first; the server has no way to guess what that string is,
so you also send `Content-Type: application/json` in `headers`, or many servers will read your JSON
as plain text and reject it.

This course's server only serves static files, so a `POST` here changes nothing on disk — it answers
with an error status such as `405` or `501`. What you are checking is the request you built and the
status that came back, not a saved record.

## Display
### HTML

```
<h2>Create a student</h2>
<button id="post" type="button">POST</button>
<pre id="out">Press the button, then read the console.</pre>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
button { background: #0F1B33; color: #EEF1F4; border: 0; padding: 6px 12px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; white-space: pre-wrap; }
```

### Javascript

```
const student = { name: "Somchai Wongdee", nickname: "Chai", year: 2, gpa: 3.20 };
const out = document.getElementById("out");

document.getElementById("post").addEventListener("click", async () => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  };
  console.log("request", options);

  const res = await fetch("resources/data/students.json", options);
  console.log("response status", res.status, "ok", res.ok);
  out.textContent = "POST → " + res.status + "\nStatic server: nothing was stored.";
});
```

## Your Tasks
### 1. Send a POST
The options object is the whole difference between a read and a write.

```
const res = await fetch("resources/data/students.json", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Somchai Wongdee", year: 2 })
});
console.log(res.status);
```

### 2. Stringify the body
`body` takes a string; passing the object itself sends the useless text `[object Object]`.

```
const student = { name: "Anong Srisai", gpa: 3.42 };
const body = JSON.stringify(student);
console.log(typeof body, body);
```

### 3. Set the Content-Type header
Without it, many servers read the JSON string as plain text and reject it.

```
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Beam" })
};
```

### 4. Read a successful status
A real API answers a successful `POST` with `201 Created`.

```
if (res.status === 201) console.log("created");
```

### 5. Read the answer to a rejected write
A rejected write explains itself in the body, often as plain text, not JSON.

```
const res = await fetch("resources/data/students.json", { method: "POST" });
const text = await res.text();
console.log(res.status, text.slice(0, 120));
```

## Exercises

### Exercise 1: Build the options object
Write the `options` object for a `POST` against `students.json`, log it, and confirm it has all
three fields: `method`, `headers`, `body`.

### Exercise 2: Nested body
Stringify an object containing an array (`skills`) and a nested object (`office`), and log the
resulting string.

### Exercise 3: Missing header
Send the same `POST` twice, once with `Content-Type: application/json` and once without. Log both
statuses and explain why the header still matters even though this server answers the same way.

### Exercise 4: Report the status honestly
Render a line in the page: the method, the status, and the sentence "not persisted — static server".

### Exercise 5: Read the request in DevTools
Open the Network panel, press the `POST` button, and find the request. Write down its method, its
`Content-Type` header, and its request payload.

## Quizes

### Q1. Which `fetch` option carries the data you are sending?
1. `data`
2. `payload`
3. `body`
4. `content`

### Q2. What type must that option be?
1. A plain object — `fetch` serialises it for you
2. A string, usually produced by `JSON.stringify`
3. An array of key/value pairs
4. A `URLSearchParams` instance only

### Q3. What does a `POST` to a collection URL like `/students` typically do?
1. Read all students
2. Create a new record
3. Replace every existing record
4. Delete the collection

### Q4. Why send `Content-Type: application/json` with a JSON body?
1. It is purely cosmetic and has no real effect
2. Without it, many servers read the JSON string as plain text and reject it
3. It encrypts the request body
4. It is only required for `GET` requests

### Q5. You POST a new student in this course's playground and reload the page. Why is the student gone?
1. `fetch` cannot send `POST` from inside an iframe
2. The body was not stringified, so the server discarded it
3. The response was a `201`, which means queued rather than saved
4. The server only serves static files, so it never applied the write
