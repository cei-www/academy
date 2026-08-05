# Textarea and buttons

`<textarea>` takes multi-line text; unlike `<input>`, it has a closing tag and its visible size is set with `rows` and `cols`. Every `<button>` needs an explicit `type` — `submit` sends the form, `reset` clears it back to its starting values, and `button` does nothing on its own until JavaScript gives it a job. `<fieldset>` groups related controls under one border, and its `<legend>` names the group for sighted users and screen readers alike.

## Display
### HTML

```
<form action="#" method="get">
  <fieldset>
    <legend>Feedback</legend>
    <label for="note">Comments</label><br>
    <textarea id="note" name="note" rows="4" cols="40"></textarea>
    <p>
      <button type="submit">Send</button>
      <button type="reset">Clear</button>
    </p>
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
### 1. Add a labelled textarea
Bind it exactly like an `<input>` — `for` matches `id`.

```
<label for="note">Why do you want this course?</label><br>
<textarea id="note" name="reason" rows="4" cols="40"></textarea>
```

### 2. Set a submit button
`type="submit"` sends the form's current values.

```
<button type="submit">Register</button>
```

### 3. Set a reset button
`type="reset"` restores every control to its original value, discarding edits.

```
<button type="reset">Start over</button>
```

### 4. Give a plain button a job
`type="button"` never submits or resets on its own — it needs a `click` handler.

```
<button type="button" id="preview">Preview</button>
```

### 5. Group controls with a fieldset
`<legend>` is the group's visible and accessible name.

```
<fieldset>
  <legend>Project</legend>
  <textarea name="summary" rows="3"></textarea>
</fieldset>
```

## Exercises

### Exercise 1: Feedback form
Build a `<textarea>` with a bound label and a `submit` button inside one `<fieldset>`.

### Exercise 2: Reset behaviour
Add a `reset` button next to a filled-in text field, click it, and report what changed.

### Exercise 3: Two button types
Add a `submit` button and a `button`-type button to one form, then describe the difference in what happens when each is clicked.

### Exercise 4: Two fieldsets
Split a form into "Student" and "Project" fieldsets, each with its own `<legend>` and at least one control.

### Exercise 5: Default textarea size
Render a `<textarea>` with no `rows` or `cols` set and report its default size in the browser.

## Quizes

### Q1. What happens when a `<button>` inside a form has no `type`?
1. Nothing happens when it is clicked
2. It resets the form
3. It submits the form
4. The form will not render

### Q2. Which attributes set a `<textarea>`'s visible size?
1. `width` and `height`
2. `rows` and `cols`
3. `size` and `length`
4. `min` and `max`

### Q3. What does `type="reset"` do?
1. Submits the form
2. Clears every control back to its original value
3. Deletes the form from the page
4. Reloads the page from the server

### Q4. What does `<legend>` provide?
1. A default value for the fieldset's controls
2. The visible and accessible name for the group of controls
3. A submit button for just that fieldset
4. Extra spacing around the fieldset

### Q5. `<textarea>` differs from `<input>` in that it:
1. Cannot have a `name` attribute
2. Has a closing tag and can hold multi-line text
3. Cannot be inside a `<form>`
4. Is always read-only
