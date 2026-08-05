# Forms overview

A `<form>` collects input and sends it somewhere. `action` is the URL that receives the data; `method` is how it travels — `get` puts the values in the URL's query string, right for searches and anything that only reads data; `post` puts them in the request body, right for anything that changes data on the server.

You have already met each kind of control on its own: text inputs, choice inputs, and textarea with buttons. A real form combines them inside one `<form>`, usually grouped with `<fieldset>`.

## Display
### HTML

```
<form action="#" method="get">
  <fieldset>
    <legend>Course registration</legend>

    <p>
      <label for="sid">Student ID</label><br>
      <input type="text" id="sid" name="student_id">
    </p>

    <p>
      <label for="course">Course</label><br>
      <select id="course" name="course">
        <option value="01076021">Web Development</option>
        <option value="01076014">Data Structures</option>
      </select>
    </p>

    <button type="submit">Register</button>
  </fieldset>
</form>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Open a form
`action` is where the data goes, `method` is how it travels.

```
<form action="/register" method="post">
  <input type="text" name="student_id">
  <button type="submit">Send</button>
</form>
```

### 2. Choose get for a search
A search only reads data, so its values belong in the URL.

```
<form action="/search" method="get">
  <input type="text" name="q">
  <button type="submit">Search</button>
</form>
```

### 3. Choose post for a change
Registering, posting, or deleting something changes data, so it belongs in the body.

```
<form action="/register" method="post">
  <input type="text" name="student_id">
  <button type="submit">Register</button>
</form>
```

### 4. Combine three control kinds in one form
Text input, a `<select>`, and a submit button, all inside one `<fieldset>`.

```
<form action="#" method="get">
  <fieldset>
    <legend>Sign-up</legend>
    <input type="text" name="student_id">
    <select name="course"><option value="web">Web</option></select>
    <button type="submit">Send</button>
  </fieldset>
</form>
```

### 5. Split a long form into two groups
Two `<fieldset>` elements keep a long form organised without any extra CSS.

```
<fieldset><legend>Student</legend> ... </fieldset>
<fieldset><legend>Project</legend> ... </fieldset>
```

## Exercises

### Exercise 1: Full registration form
Build a form combining a text input, a radio group, a `<select>`, a `<textarea>` and a submit button, all inside one `<fieldset>` with a `<legend>`.

### Exercise 2: Read the query string
Set `method="get"` and `action="#"`, fill the form in, submit it, and report the query string in the address bar. Then remove one `name` attribute and report what disappeared.

### Exercise 3: Get or post?
For a login form and a search box, decide which `method` each should use and justify both in one sentence.

### Exercise 4: Label test across the whole form
Render your full registration form, click every label, and confirm each one focuses the right control.

### Exercise 5: Organise with fieldsets
Split your registration form from Exercise 1 into "Student" and "Course" fieldsets.

## Quizes

### Q1. A form uses `method="get"` and `action="/search"`. A text input named `q` contains `html`. What does the browser request?
1. `/search?q=html`
2. `/search` with `q=html` in the request body
3. `/search/html`
4. `/search?html`

### Q2. Which `method` belongs on a form that changes data on the server?
1. `get`, always
2. `post`
3. Neither matters
4. `put`, `<form>` does not support `post`

### Q3. What does `action` specify on a `<form>`?
1. The label shown on the submit button
2. The URL that receives the submitted data
3. The order fields are validated in
4. Which fields are required

### Q4. A control has no `name` attribute. What happens to it on submit?
1. It is submitted with a blank name
2. It is left out of the submitted data
3. The form refuses to submit
4. It is renamed automatically to `value`

### Q5. Why group related controls with `<fieldset>` and `<legend>`?
1. It is required for the form to submit
2. It gives the group a visible border and an accessible name, with no extra CSS
3. It changes the HTTP method used
4. It is only cosmetic and has no accessibility meaning
