# Input types and keyboards

`type` is more than a label on a text box. `email`, `number`, `date`, `range`, `color`, `search` and
`file` each change the on-screen widget and, on a phone, the keyboard that appears — a `number` field
offers a numeric pad, an `email` field adds an `@` key.

`<datalist>` attaches a dropdown of suggestions to a text-like input without restricting it to those
values — the visitor can still type anything. `inputmode` picks the on-screen keyboard directly, and
`autocomplete` tells the browser which saved value to offer for autofill.

## Display
### HTML

```
<form action="#" method="get">
  <fieldset>
    <legend>Lab sign-up</legend>
    <p>
      <label for="email">CE-KMITL email</label><br>
      <input type="email" id="email" name="email" autocomplete="email">
    </p>
    <p>
      <label for="due">Due date</label><br>
      <input type="date" id="due" name="due">
    </p>
    <p>
      <label for="lab">Lab</label><br>
      <input type="search" id="lab" name="lab" list="labs">
      <datalist id="labs">
        <option value="Robotics Lab"></option>
        <option value="Embedded Systems Lab"></option>
      </datalist>
    </p>
    <button type="submit">Send</button>
  </fieldset>
</form>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
fieldset { border: 1px solid #DDE2E8; max-width: 320px; }
legend { color: #0F1B33; }
label { color: #4B5563; font-size: 14px; }
input { padding: 6px; border: 1px solid #DDE2E8; width: 90%; }
button { background: #F2A93B; color: #6B4207; border: 0; padding: 8px 14px; }
```

### Javascript

```
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("lab chosen:", document.getElementById("lab").value);
});
```

## Your Tasks
### 1. Pick the right type for the data
The type decides the widget and the keyboard, not just the label.

```
<input type="date" id="due" name="due">
<input type="range" id="load" name="load" min="0" max="21" step="3">
<input type="color" id="tag" name="tag" value="#F2A93B">
<input type="file" id="report" name="report" accept=".pdf">
```

### 2. Offer suggestions without restricting input
`<datalist>` is a dropdown of hints, not a locked set of choices.

```
<input type="search" id="lab" name="lab" list="labs">
<datalist id="labs">
  <option value="Robotics Lab"></option>
  <option value="Embedded Systems Lab"></option>
</datalist>
```

### 3. Help the on-screen keyboard
`inputmode` changes the on-screen keyboard only — it does not add any validation.

```
<input type="text" id="zip" name="zip" inputmode="numeric">
<input type="tel" id="phone" name="phone" inputmode="tel">
```

### 4. Name the saved value for autofill
`autocomplete` tells the browser which of the visitor's saved values to offer.

```
<input type="email" id="email" name="email" autocomplete="email">
<input type="text" id="zip" name="zip" autocomplete="postal-code">
```

### 5. Combine type, datalist and autocomplete
These three concerns stack on the same field without conflicting.

```
<input type="search" id="lab" name="lab" list="labs" autocomplete="off">
```

## Exercises

### Exercise 1: Typed registration form
Build a form with `email`, `number`, `date` and `file` inputs, each with a `<label>`, all inside one
`<fieldset>` with a `<legend>`.

### Exercise 2: Three-option datalist
Add a text input with a `<datalist>` of three lecturer names, and confirm you can still type a name
that is not in the list.

### Exercise 3: Numeric keyboard
Give a "student ID" field `inputmode="numeric"` and describe, in one sentence, what changes about the
on-screen keyboard on a phone (use DevTools' device toolbar to check).

### Exercise 4: Color and range together
Add a `type="color"` field with a default value and a `type="range"` field for a 0–100 scale, both
with visible labels.

### Exercise 5: Autofill test
Add `autocomplete="email"` to an email field, save a value once, reload the page, and report whether
the browser offered it back to you.

## Quizes

### Q1. What does the `type` attribute on an `<input>` change?
1. Only the label text next to the field
2. The on-screen widget and, on mobile, the keyboard shown
3. Only the server-side validation
4. Nothing visible — it is metadata only

### Q2. What does `<datalist>` do?
1. Restricts the input to the listed values
2. Renders a `<select>` dropdown
3. Sends the whole list to the server
4. Offers suggestions while still allowing any value

### Q3. What does `inputmode="numeric"` affect?
1. The value's type once submitted
2. The on-screen keyboard shown on touch devices
3. Whether the field is required
4. The field's `min` and `max`

### Q4. What is `autocomplete` used for?
1. Validating the value against a pattern
2. Telling the browser which saved value to offer for this field
3. Restricting input to a fixed list
4. Automatically submitting the form

### Q5. Which `type` is the right choice for uploading a file?
1. `type="text"`
2. `type="file"`
3. `type="search"`
4. `type="url"`
