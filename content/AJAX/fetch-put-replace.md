# Replacing data with PUT

`PUT` replaces the record at one specific URL such as `/students/3`, so the id belongs in the URL and
the body carries the whole new version of that record — not just the fields that changed. Like
`POST`, the body must be `JSON.stringify`'d and sent with `Content-Type: application/json`.

This course's server only serves static files, so a `PUT` here changes nothing on disk. What you are
checking is the request you built and the status that came back, not a saved record.

## Display
### HTML

```
<h2>Replace a student record</h2>
<button id="put" type="button">PUT</button>
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
const replacement = { id: 3, name: "Chaiwat Pimpa", year: 3, gpa: 3.80 };
const out = document.getElementById("out");

document.getElementById("put").addEventListener("click", async () => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(replacement)
  };
  console.log("PUT /students/3", options);

  const res = await fetch("resources/data/students.json", options);
  console.log("response status", res.status, "ok", res.ok);
  out.textContent = "PUT → " + res.status + "\nStatic server: nothing was stored.";
});
```

## Your Tasks
### 1. Replace with PUT
`PUT` addresses one record, so the id belongs in the URL and the full object in the body.

```
const options = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 3, name: "Chaiwat Pimpa", year: 3, gpa: 3.80 })
};
console.log("PUT /students/3", options);
```

### 2. Send the whole record, not just changes
`PUT` replaces everything at that URL, so a partial body would erase the fields left out.

```
const full = { id: 3, name: "Chaiwat Pimpa", year: 3, gpa: 3.80 };
console.log(JSON.stringify(full));
```

### 3. Put the id in the URL
A `PUT` request's URL identifies exactly which record is being replaced.

```
const studentId = 3;
const url = `/students/${studentId}`;   // the id lives in the path, not the body
```

### 4. Read the status
A real API answers a successful `PUT` with `200` or `204`.

```
if (res.status === 200 || res.status === 204) console.log("replaced");
```

### 5. Compare PUT to POST
`POST` creates at a collection URL; `PUT` replaces at one specific URL.

```
// POST /students          → create a new one, server assigns the id
// PUT  /students/3        → replace the one at id 3 entirely
```

## Exercises

### Exercise 1: Build a PUT request
Write the `options` object for a `PUT` replacing a specific student record, and log it.

### Exercise 2: Full versus partial body
Explain in one or two sentences why a `PUT` body should include every field, not just the ones that
changed.

### Exercise 3: PUT versus POST
Write one sentence each explaining when you would choose `PUT` over `POST` for a given request.

### Exercise 4: Report the status honestly
Render a line in the page: the method, the status, and the sentence "not persisted — static server".

### Exercise 5: Read the request in DevTools
Open the Network panel, press the `PUT` button, and find the request. Write down its method and its
request payload.

## Quizes

### Q1. What does `PUT /students/3` mean?
1. Create a new student and let the server choose the id
2. Replace the student at id 3 with the object in the body
3. Read student 3 without caching
4. Delete student 3 and return the old value

### Q2. What should a `PUT` request's body contain?
1. Only the fields that changed
2. The entire replacement record
3. Nothing — `PUT` never has a body
4. Only the record's id

### Q3. Where does the target record's id belong in a `PUT` request?
1. In the request body only
2. In the URL
3. In a custom header
4. It is not needed at all

### Q4. What is the key difference between `POST` and `PUT`?
1. There is no difference
2. `POST` creates at a collection URL; `PUT` replaces at one specific URL
3. `PUT` never needs a `Content-Type` header
4. `POST` cannot send a body

### Q5. You PUT a replacement student record in this course's playground and reload the page. Why is nothing changed?
1. `fetch` cannot send `PUT` from inside an iframe
2. The body was not stringified, so the server discarded it
3. The response means the change was only queued
4. The server only serves static files, so it never applied the write
