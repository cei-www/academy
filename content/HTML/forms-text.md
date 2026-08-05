# Text inputs

`<input>` is the workhorse of every form. Its `type` attribute decides what it accepts, what widget the browser shows, and what keyboard a phone offers: `text` for a plain string, `email`, `password` for masked text, `number` for digits, and `date` for a calendar picker.

The `name` attribute is what gets sent, as `name=value` — a control with no `name` submits nothing at all. Every input also needs a `<label>` whose `for` matches the input's `id`; that binding lets a click on the label focus the input and makes a screen reader announce it.

## Display
### HTML

```
<form action="#" method="get">
  <p>
    <label for="sid">Student ID</label><br>
    <input type="text" id="sid" name="student_id">
  </p>
  <p>
    <label for="email">Email</label><br>
    <input type="email" id="email" name="email">
  </p>
</form>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Bind a label to an input
`for` must match the input's `id` exactly.

```
<label for="nickname">Nickname</label>
<input type="text" id="nickname" name="nickname">
```

### 2. Add an email field
`type="email"` gives basic format checking and the right phone keyboard.

```
<label for="mail">Email</label>
<input type="email" id="mail" name="email">
```

### 3. Add a bounded number field
`min` and `max` bound a `number` input's accepted value.

```
<label for="year">Year</label>
<input type="number" id="year" name="year" min="1" max="4">
```

### 4. Add a date field
`type="date"` opens a calendar widget instead of free text.

```
<label for="dob">Date of birth</label>
<input type="date" id="dob" name="birthday">
```

### 5. Mask a password field
`type="password"` hides typed characters on screen; it does not encrypt anything by itself.

```
<label for="pw">Password</label>
<input type="password" id="pw" name="password">
```

## Exercises

### Exercise 1: Profile fields
Build four fields — name, email, birth date, year of study — each with a bound `<label>` and a sensible `type`.

### Exercise 2: Label click test
Render one input with a bound label and one with only plain text beside it. Click both pieces of text and report which input received focus.

### Exercise 3: Missing name
Remove the `name` attribute from one field, submit the form with `method="get"`, and report what disappeared from the query string.

### Exercise 4: Why not text for everything
Explain in two sentences why `type="number"` is better than `type="text"` for a numeric field, beyond just validation.

### Exercise 5: Password field
Add a password field to a login form and explain what masking the characters does and does not protect against.

## Quizes

### Q1. What binds `<label for="email">` to an input?
1. The input's `name`
2. The input's `id`
3. The input's `type`
4. The input's `value`

### Q2. Which attribute decides what the server receives a value under?
1. `id`
2. `name`
3. `value`
4. `for`

### Q3. What does `type="email"` change compared to `type="text"`?
1. Nothing, they behave identically
2. Basic format checking and the phone keyboard offered
3. It hides the typed characters
4. It only accepts numbers

### Q4. A required `<input>` has no `name` attribute. What happens on submit?
1. The form does not submit at all
2. Its value is left out of the submitted data entirely
3. It is submitted with an empty name
4. The browser generates a name automatically

### Q5. Which input type is right for a birth date field?
1. `type="text"`
2. `type="number"`
3. `type="date"`
4. `type="datetime"`
