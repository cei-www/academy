# Forms

A form collects input and sends it somewhere. `<form>` takes `action` — the URL that receives the
data — and `method`, either `get` (the values go into the URL's query string, for searches) or
`post` (the values go in the request body, for anything that changes data).

`<input>` is the workhorse. Its `type` decides what it accepts and what the browser offers:
`text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`, `file`, `hidden`, `submit`.

The `name` attribute is what gets submitted, as `name=value` — a control with no `name` sends
nothing at all.

Every input needs a `<label>` whose `for` matches the input's `id`. That binding makes clicking the
label focus the input and makes a screen reader announce it. `id` is for the label, `name` is for
the server.

`<textarea>` takes multi-line text and `<select>` holds `<option>` elements. Radio buttons sharing
one `name` form one group where only one can be chosen. Always give `<button>` an explicit `type` —
`submit`, `reset` or `button`. `<fieldset>` groups related controls; its `<legend>` names the group.

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
body { font-family: system-ui, sans-serif; margin: 16px; }

fieldset {
  border: 1px solid #DDE2E8;
  max-width: 320px;
}

legend { color: #0F1B33; }
label { color: #4B5563; font-size: 14px; }
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

### 2. Bind a label to an input
`for` must match the input's `id` exactly.

```
<label for="nickname">Nickname</label>
<input type="text" id="nickname" name="nickname">
```

### 3. Use the right input types
The type changes validation and the on-screen keyboard on a phone.

```
<input type="email" id="mail" name="email">
<input type="number" id="year" name="year" min="1" max="4">
<input type="date" id="dob" name="birthday">
```

### 4. Group radio buttons
One shared `name` makes them exclusive; each needs its own `value` and `id`.

```
<fieldset>
  <legend>Section</legend>
  <input type="radio" id="am" name="section" value="morning">
  <label for="am">Morning</label>
  <input type="radio" id="pm" name="section" value="afternoon">
  <label for="pm">Afternoon</label>
</fieldset>
```

### 5. Take a longer answer
`<textarea>` has a closing tag, and its size is set with `rows` and `cols`.

```
<label for="note">Why do you want this course?</label><br>
<textarea id="note" name="reason" rows="4" cols="40"></textarea>
```

## Exercises

### Exercise 1: Profile form
Build a form with name, email, birth date and year of study, each with a bound `<label>` and a
sensible `type`.

### Exercise 2: Survey
Add a radio group of three options and a checkbox group of three options to that form. Say which
attribute makes the radios exclusive.

### Exercise 3: Two buttons
Add a `submit` button and a `button`-type button to one form, then describe the difference in what
happens when each is clicked.

### Exercise 4: Read the query string
Set `method="get"` and `action="#"`, fill the form in, submit it, and report the query string in the
address bar. Then remove one `name` attribute and report what disappeared.

### Exercise 5: Label test
Render a form where one input has a bound label and one has only text next to it. Click both pieces
of text and report which input received focus.

## Quizes

### Q1. Which attribute decides what the server receives a value under?
1. `id`
2. `name`
3. `value`
4. `for`

### Q2. What binds `<label for="email">` to an input?
1. The input's `name`
2. The input's `id`
3. The input's `type`
4. The input's `value`

### Q3. Two radio buttons must be mutually exclusive. What must they share?
1. The same `id`
2. The same `value`
3. The same `name`
4. The same `<label>`

### Q4. A form uses `method="get"` and `action="/search"`. A text input named `q` contains `html`. What does the browser request?
1. `/search?q=html`
2. `/search` with `q=html` in the request body
3. `/search/html`
4. `/search?html`

### Q5. What happens when a `<button>` inside a form has no `type`?
1. Nothing happens when it is clicked
2. It resets the form
3. It submits the form
4. The form will not render
