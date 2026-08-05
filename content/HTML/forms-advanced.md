# Advanced forms

`type` is more than a label on a text box. `email`, `number`, `date`, `range`, `color`, `search` and
`file` each change the on-screen widget, the phone keyboard and the rules the browser checks before
submitting.

Those rules are **constraint validation**. `required` demands a value, `pattern` holds a regular
expression the whole value must match, `min`/`max` bound a number or date, `step` sets the legal
increments, and `minlength`/`maxlength` bound the character count. A control that satisfies its
constraints matches the `:valid` pseudo-class; one that does not matches `:invalid`, so you can style
the state without any JavaScript. `:invalid` matches an untouched empty `required` field too, so
combine it with `:focus` if you do not want red borders before the student types anything.

Add `novalidate` to the `<form>` and the browser stops blocking submission. That is the reminder
that client-side validation is a convenience for the user, never a security boundary — anyone can
send a request with `curl`, so the server must check every value again.

`autocomplete` tells the browser which saved value to offer; `inputmode` picks the phone keyboard.

## Display
### HTML

```
<form action="#" method="get">
  <fieldset>
    <legend>Lab sign-up</legend>
    <p>
      <label for="email">KMITL email</label><br>
      <input type="email" id="email" name="email" required autocomplete="email">
    </p>
    <p>
      <label for="year">Year (1-4)</label><br>
      <input type="number" id="year" name="year" min="1" max="4" step="1" required>
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
input:valid { border-color: #15803D; }
input:invalid { border-color: #B91C1C; }
button { background: #F2A93B; color: #6B4207; border: 0; padding: 8px 14px; }
```

### Javascript

```
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form valid:", form.checkValidity());
  console.log("email state:", document.getElementById("email").validity.typeMismatch);
});
```

## Your Tasks
### 1. Pick the right type
The type decides the widget, the keyboard and the built-in check.

```
<input type="date" id="due" name="due">
<input type="range" id="load" name="load" min="0" max="21" step="3">
<input type="color" id="tag" name="tag" value="#F2A93B">
<input type="file" id="report" name="report" accept=".pdf">
```

### 2. Require a value and bound its length
`minlength` and `maxlength` count characters; both are checked only when the field is not empty.

```
<label for="nick">Nickname</label>
<input type="text" id="nick" name="nick" required minlength="2" maxlength="12">
```

### 3. Match a pattern
`pattern` is an anchored regular expression. Add `title` — the browser shows it in the error bubble.

```
<label for="sid">Student ID</label>
<input type="text" id="sid" name="sid" pattern="[0-9]{8}"
       title="Eight digits, for example 66010123" required>
```

### 4. Help the keyboard and the autofill
`inputmode` changes the on-screen keyboard only; `autocomplete` names the saved value to reuse.

```
<input type="tel" id="phone" name="phone" inputmode="tel" autocomplete="tel">
<input type="text" id="zip" name="zip" inputmode="numeric" autocomplete="postal-code">
```

### 5. Turn the browser's messages off
`novalidate` keeps the `:valid`/`:invalid` styling and the validity API but stops the browser
blocking submission — so you can show your own messages. The server still has to validate.

```
<form action="/signup" method="post" novalidate>
```

## Exercises

### Exercise 1: Typed registration form
Build a form with `email`, `number`, `date` and `file` inputs, each with a `<label>`, all inside one
`<fieldset>` with a `<legend>`.

### Exercise 2: Course code pattern
Add an input that only accepts a KMITL course code — eight digits like `01076021` — using `pattern`,
and give it a `title` that explains the format.

### Exercise 3: Validity in the console
Type a bad address in an `email` field, then log
`document.getElementById("email").validity` and report which flag is `true`.

### Exercise 4: Two groups
Split a form into two `<fieldset>` blocks, "Student" and "Project", each with its own `<legend>`, and
give the project's supervisor field a `<datalist>` of three lecturer names.

### Exercise 5: Break the client check
Add `novalidate` to a form with a `required` field and submit it empty. Report what changed in the
URL's query string and write one sentence on what the server must now do.

## Quizes

### Q1. What does `pattern="[0-9]{8}"` require?
1. At least eight digits anywhere in the value
2. The whole value to be exactly eight digits
3. Eight characters of any kind
4. Nothing until you add JavaScript

### Q2. Which pseudo-class matches a control that fails its constraints?
1. `:error`
2. `:checked`
3. `:invalid`
4. `:disabled`

### Q3. Why is client-side validation not a security measure?
1. Because `pattern` cannot express every rule
2. Because a request can be sent without a browser, so the server must check again
3. Because older browsers ignore `required`
4. Because `novalidate` is on by default

### Q4. What does `<datalist>` do?
1. Restricts the input to the listed values
2. Renders a `<select>` dropdown
3. Sends the whole list to the server
4. Offers suggestions while still allowing any value

### Q5. `<input type="number" min="1" max="4" step="1">` holds the value `2.5`. What happens on submit?
1. It submits and the server receives `2.5`
2. The browser rounds it to `2`
3. The browser blocks submission because the value does not fit `step`
4. Nothing — `step` only affects the spinner arrows
