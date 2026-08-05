# What is AJAX

Clicking a normal link throws the current page away and loads a whole new one. AJAX is the other
way round: JavaScript asks the server for data in the background, and when the data arrives you
rewrite only the part of the page that changed. The scroll position, the half-filled form and the
rest of the DOM all survive.

Every exchange is a request and a response. A request is a method, a URL, headers and sometimes a
body. A response is a status code, headers and a body. The methods are `GET` (read), `POST`
(create), `PUT` (replace) and `DELETE` (remove). The status codes worth knowing are `200 OK`,
`201 Created`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` and
`500 Internal Server Error`.

The body is almost always JSON. JSON is text, and it is stricter than a JavaScript object literal:
keys must be in double quotes, strings must use double quotes, and there are no trailing commas, no
comments, no `undefined` and no functions. `JSON.parse` turns the text into a real object,
`JSON.stringify` turns an object back into text.

```
JSON.parse('{"name":"Anong Srisai","year":2}').year   // 2
```

## Display
### HTML

```
<h2>Student card</h2>
<div id="card">nothing yet</div>
<h3>The same value as text</h3>
<pre id="raw"></pre>
```

### CSS

```
body { color: #131A26; font-family: system-ui, sans-serif; }
#card {
  background: #EEF1F4;
  border: 1px solid #DDE2E8;
  border-left: 4px solid #F2A93B;
  padding: 10px;
}
#raw { background: #0F1B33; color: #EEF1F4; padding: 10px; }
```

### Javascript

```
const text = '{"name":"Anong Srisai","nickname":"Nong","year":2,"gpa":3.42}';

const student = JSON.parse(text);
console.log("text is a", typeof text, "- student is an", typeof student);

const card = document.getElementById("card");
card.textContent = student.name + " (" + student.nickname + "), year " + student.year;

document.getElementById("raw").textContent = JSON.stringify(student, null, 2);
```

## Your Tasks
### 1. Parse JSON text
`JSON.parse` takes a string and gives back a value you can use with the dot operator.

```
const text = '{"name":"Boonmee Thongdee","year":2}';
const student = JSON.parse(text);
console.log(student.name, student.year);
```

### 2. Read a nested value
Nesting in JSON works exactly like nesting in an object literal once it is parsed.

```
const profile = JSON.parse('{"name":"Rathachai","lab":{"name":"SAIG Lab"}}');
console.log(profile.lab.name);
```

### 3. Turn an object back into text
You need text whenever the value has to travel — into a request body or into `localStorage`.

```
const course = { code: "01076021", title: "Web Application Development", credits: 3 };
console.log(JSON.stringify(course));
console.log(JSON.stringify(course, null, 2));
```

### 4. See what is not valid JSON
Single quotes are fine in JavaScript and illegal in JSON, so parsing throws.

```
try {
  JSON.parse("{'name':'Nong'}");
} catch (err) {
  console.log("not JSON:", err.message);
}
```

### 5. Name a status code
Reading the number is not enough — your code has to decide what to do about it.

```
function statusText(code) {
  if (code === 200) return "OK";
  if (code === 201) return "Created";
  if (code === 404) return "Not Found";
  return "unhandled status";
}
console.log(201, statusText(201));
```

## Exercises

### Exercise 1: Parse an array
Put a JSON string holding an array of two students in your code, parse it, and log each name to the
console with a loop.

### Exercise 2: Round trip
Take an object, `JSON.stringify` it, `JSON.parse` the result, and log both the original and the copy.
Then log whether `original === copy` and explain the answer.

### Exercise 3: Repair the JSON
Fix this so it parses: `{name: 'Chai', year: 3, skills: ['C', 'Linux'],}`. Log the parsed object.

### Exercise 4: What stringify drops
Build an object with a number, a function and a property set to `undefined`. Stringify it and read
the result in the console. Write down which two properties disappeared.

### Exercise 5: Status reporter
Write `describe(code)` covering 200, 201, 400, 401, 403, 404 and 500, and render one line per code
into the page.

## Quizes

### Q1. Which string is valid JSON?
1. `{'id': 1}`
2. `{id: 1}`
3. `{"id": 1}`
4. `{"id": 1,}`

### Q2. What does `JSON.parse` return?
1. A string
2. A JavaScript value, such as an object or an array
3. A promise for the parsed value
4. A copy of the text with the quotes removed

### Q3. A request asks for a record that does not exist. Which status should the server send?
1. `200`
2. `400`
3. `500`
4. `404`

### Q4. What does `console.log(JSON.stringify({ a: 1, b: undefined }))` print?
1. `{"a":1,"b":undefined}`
2. `{"a":1}`
3. `{"a":1,"b":null}`
4. It throws, because `undefined` cannot be serialised

### Q5. What is the point of updating a page with AJAX instead of a link?
1. It downloads less markup because JSON is compressed
2. It works without JavaScript enabled
3. Only the changed part of the page is replaced, so the rest of the page keeps its state
4. It avoids sending any HTTP request at all
