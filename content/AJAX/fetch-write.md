# Writing data with fetch overview

You have now met `POST`, `PUT` and `DELETE` on their own. All three share the same shape: pass a
second argument to `fetch` — an options object with `method`, and for `POST`/`PUT` a `headers` and a
`JSON.stringify`'d `body`. `POST` creates at a collection URL, `PUT` replaces at one specific record's
URL, and `DELETE` removes it, normally with no body at all.

This course's server only serves static files, so every write here changes nothing on disk — it
answers with an error status such as `405` or `501`. What you are checking is the request you built
and the status that came back, not a saved record.

## Display
### HTML

```
<h2>Send a write request</h2>
<p>
  <button id="post" type="button">POST</button>
  <button id="put" type="button">PUT</button>
  <button id="del" type="button">DELETE</button>
</p>
<pre id="out">Press a button, then read the console.</pre>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
button { background: #0F1B33; color: #EEF1F4; border: 0; padding: 6px 12px; margin-right: 6px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; white-space: pre-wrap; }
```

### Javascript

```
const student = { name: "Somchai Wongdee", nickname: "Chai", year: 2, gpa: 3.20 };
const url = "resources/data/students.json";
const out = document.getElementById("out");

async function send(method) {
  const options = { method, headers: { "Content-Type": "application/json" } };
  if (method !== "DELETE") options.body = JSON.stringify(student);
  console.log("request", url, options);

  const res = await fetch(url, options);
  console.log("response status", res.status, "ok", res.ok);
  out.textContent = method + " → " + res.status +
    "\nStatic server: nothing was stored.\nbody sent: " + (options.body || "none");
}

document.getElementById("post").addEventListener("click", () => send("POST"));
document.getElementById("put").addEventListener("click", () => send("PUT"));
document.getElementById("del").addEventListener("click", () => send("DELETE"));
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

### 3. Replace with PUT
`PUT` addresses one record, so the id belongs in the URL and the full object in the body.

```
const options = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 3, name: "Chaiwat Pimpa", year: 3, gpa: 3.80 })
};
console.log("PUT /students/3", options);
```

### 4. Remove with DELETE
The URL says what to remove, so there is nothing to put in a body.

```
const res = await fetch("resources/data/students.json", { method: "DELETE" });
console.log("DELETE →", res.status, res.ok);
```

### 5. Read the answer to a write
A rejected write explains itself in the body, and that body is often not JSON — read it as text.

```
const res = await fetch("resources/data/students.json", { method: "POST" });
const text = await res.text();
console.log(res.status, text.slice(0, 120));
```

## Exercises

### Exercise 1: Build the three option objects
Write `options` for a `POST`, a `PUT` and a `DELETE` against `students.json`, log all three, and note
in the console which one has no `body`.

### Exercise 2: Nested body
Stringify an object containing an array (`skills`) and a nested object (`office`), and log the
resulting string.

### Exercise 3: Missing header
Send the same `POST` twice, once with `Content-Type: application/json` and once without. Log both
statuses and say why the header still matters even though this server answered the same way.

### Exercise 4: Report the status honestly
Render one line per request in the page: the method, the status, and the sentence "not persisted —
static server".

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

### Q3. What does `PUT /students/3` mean?
1. Create a new student and let the server choose the id
2. Replace the student at id 3 with the object in the body
3. Read student 3 without caching
4. Delete student 3 and return the old value

### Q4. Which of the three write verbs normally sends no body at all?
1. `POST`
2. `PUT`
3. `DELETE`
4. All three always send a body

### Q5. You POST a new student in this course's playground and reload the page. Why is the student gone?
1. `fetch` cannot send `POST` from inside an iframe
2. The body was not stringified, so the server discarded it
3. The response was a `201`, which means queued rather than saved
4. The server only serves static files, so it never applied the write
