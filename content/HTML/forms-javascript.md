# Handling forms with JavaScript

`addEventListener(eventName, handler)` attaches a function to any element for a named event. Forms
fire `submit` when sent; individual controls fire `input` on every keystroke and `change` once a new
value is committed — for a text field that means losing focus, for a `<select>` or checkbox it means
right after the pick.

Call `event.preventDefault()` inside a `submit` handler to stop the page reloading, then use
`new FormData(form)` to collect every named control's current value in one pass.

## Display
### HTML

```
<form id="signupForm">
  <label for="sid">Student ID (max 8 chars)</label><br>
  <input type="text" id="sid" name="student_id" maxlength="8"><br>
  <small id="counter">8 characters left</small><br>
  <label for="course">Course</label><br>
  <select id="course" name="course">
    <option value="web">Web Development</option>
    <option value="ds">Data Structures</option>
  </select><br>
  <button type="submit">Register</button>
</form>
<div id="result"></div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
label { display: block; margin-top: 10px; color: #4B5563; font-size: 14px; }
small { color: #6B7280; }
button { margin-top: 12px; background: #F2A93B; color: #6B4207; border: 0; padding: 8px 14px; }
#result { margin-top: 14px; padding: 10px; background: #EEF1F4; border-radius: 6px; }
```

### Javascript

```
const form = document.getElementById("signupForm");
const sid = document.getElementById("sid");
const course = document.getElementById("course");
const counter = document.getElementById("counter");
const result = document.getElementById("result");

sid.addEventListener("input", () => {
  counter.textContent = (8 - sid.value.length) + " characters left";
});

course.addEventListener("change", () => {
  console.log("course changed to:", course.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const pairs = [];
  for (const [name, value] of data) pairs.push(name + " = " + value);
  result.textContent = pairs.join(", ");
});
```

## Your Tasks
### 1. Attach a listener with addEventListener
Every listener needs an event name and a handler function — the element, the event, then the code.

```
sid.addEventListener("input", () => {
  console.log("current value:", sid.value);
});
```

### 2. React on every keystroke with input
`input` fires immediately as the value changes, which is why it drives live feedback like counters.

```
sid.addEventListener("input", () => {
  counter.textContent = (8 - sid.value.length) + " characters left";
});
```

### 3. React once a value is committed with change
`change` fires after the new value is settled — losing focus for text, right after picking for
`<select>` or a checkbox.

```
course.addEventListener("change", () => {
  console.log("now:", course.value);
});
```

### 4. Stop the form's default reload
`event.preventDefault()` inside the `submit` handler cancels the browser's own navigation.

```
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

### 5. Collect every field on submit
`new FormData(form)` reads every named control's current value, keyed by `name`.

```
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  console.log(data.get("student_id"));
});
```

## Exercises

### Exercise 1: Character counter
Build a text field with `maxlength="8"` and an `input` listener that updates a "chars left" message
on every keystroke.

### Exercise 2: input vs change
Attach both an `input` and a `change` listener to the same text field, each logging its event name.
Type a few characters then click away, and report which fired more often.

### Exercise 3: Change on a select
Attach a `change` listener to a `<select>` that logs the newly picked value, and confirm it does not
fire until a different option is chosen.

### Exercise 4: Prevent and log
Attach a `submit` listener that calls `event.preventDefault()` and logs "submit blocked", then confirm
the page does not reload when you click Submit.

### Exercise 5: Full form summary
On submit, build a `FormData`, loop over it with `for...of`, and render a one-line summary of every
field into a `<div>` already on the page.

## Quizes

### Q1. What are the two things `addEventListener` needs at minimum?
1. An element and a CSS selector
2. An event name and a handler function
3. A form and an `action` URL
4. A `name` and a `value`

### Q2. How do the `input` and `change` events differ on a text field?
1. They are identical — either name works
2. `input` fires on every keystroke; `change` fires once the value is committed, such as on blur
3. `change` fires on every keystroke; `input` only fires on submit
4. Neither ever fires on a text field

### Q3. When does `change` fire on a `<select>`?
1. Continuously while the dropdown is open
2. Right after a different option is picked
3. Only when the form is submitted
4. Only if the `<select>` has a `name` attribute

### Q4. What does `event.preventDefault()` do inside a `submit` handler?
1. Removes the form from the page
2. Stops the browser's default page reload/navigation for that submit
3. Deletes every value the user typed
4. Cancels every future `submit` event on that form

### Q5. What does `new FormData(form)` collect?
1. Only the field that currently has focus
2. Every named control's current value, keyed by `name`
3. The form's `action` and `method` attributes only
4. A copy of the form's HTML markup
