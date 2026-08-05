# Removing data with DELETE

`DELETE` removes the record at a specific URL such as `/students/3`. The URL already says what to
remove, so a `DELETE` request normally has no body at all — just the `method`, with no `headers` or
`body` needed for the request itself.

This course's server only serves static files, so a `DELETE` here changes nothing on disk. What you
are checking is the request you built and the status that came back, not a removed record.

## Display
### HTML

```
<h2>Remove a student</h2>
<button id="del" type="button">DELETE</button>
<pre id="out">Press the button, then read the console.</pre>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
button { background: #6B4207; color: #FDF1DC; border: 0; padding: 6px 12px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; white-space: pre-wrap; }
```

### Javascript

```
const out = document.getElementById("out");

document.getElementById("del").addEventListener("click", async () => {
  console.log("DELETE resources/data/students.json");

  const res = await fetch("resources/data/students.json", { method: "DELETE" });
  console.log("response status", res.status, "ok", res.ok);
  out.textContent = "DELETE → " + res.status + "\nStatic server: nothing was removed.";
});
```

## Your Tasks
### 1. Remove with DELETE
The URL says what to remove, so there is nothing to put in a body.

```
const res = await fetch("resources/data/students.json", { method: "DELETE" });
console.log("DELETE →", res.status, res.ok);
```

### 2. Confirm no body is needed
Unlike `POST`/`PUT`, a `DELETE` options object usually has only `method`.

```
const options = { method: "DELETE" };
console.log(options);
```

### 3. Read a successful status
A real API often answers a successful `DELETE` with `200` or `204 No Content`.

```
if (res.status === 200 || res.status === 204) console.log("deleted");
```

### 4. Handle a rejected delete
A rejected write explains itself in the body, often as plain text, not JSON.

```
const res = await fetch("resources/data/students.json", { method: "DELETE" });
const text = await res.text();
console.log(res.status, text.slice(0, 120));
```

### 5. Compare the three write verbs
Each targets data differently, and only two of the three carry a body.

```
// POST   /students     → create, body = new record
// PUT    /students/3   → replace, body = whole record
// DELETE /students/3   → remove, no body
```

## Exercises

### Exercise 1: Build a DELETE request
Write the `options` object for a `DELETE` against a specific student record, and confirm it has no
`body`.

### Exercise 2: Confirm before deleting
Add a `confirm()` check before sending the `DELETE` request, and explain in one sentence why a
destructive action deserves that extra step.

### Exercise 3: Report the status honestly
Render a line in the page: the method, the status, and the sentence "not persisted — static server".

### Exercise 4: Compare the three verbs
Write one sentence each for `POST`, `PUT` and `DELETE`, explaining what each one does to the target
resource.

### Exercise 5: Read the request in DevTools
Open the Network panel, press the `DELETE` button, and find the request. Confirm the request payload
is empty.

## Quizes

### Q1. Does a `DELETE` request normally include a body?
1. Yes, always — the id must be in the body
2. No — the URL already identifies what to remove
3. Only if `Content-Type` is set
4. Only for arrays, never for single records

### Q2. What does `DELETE /students/3` do on a real API?
1. Reads student 3
2. Replaces student 3 with an empty record
3. Removes the record at id 3
4. Creates a new student with id 3

### Q3. Which options field is essential for a `DELETE` request?
1. `body`
2. `headers`
3. `method`
4. `credentials`

### Q4. What status code often signals a successful `DELETE` with no content to return?
1. `404`
2. `204`
3. `500`
4. `301`

### Q5. You DELETE a student in this course's playground and reload the page. Why is the student still there?
1. `fetch` cannot send `DELETE` from inside an iframe
2. `DELETE` requests are always rejected by browsers
3. The response means the deletion was only queued
4. The server only serves static files, so it never applied the write
