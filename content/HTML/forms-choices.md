# Choice inputs

Some fields offer a fixed set of choices instead of free text. Radio buttons that share one `name` form a group where only one can be selected — give each its own `id` and `value`. Checkboxes are independent: any number can be checked, each submitting its own `name=value` only when checked. `<select>` holds `<option>` elements and shows them as a dropdown.

## Display
### HTML

```
<form action="#" method="get">
  <fieldset>
    <legend>Section</legend>
    <input type="radio" id="am" name="section" value="morning">
    <label for="am">Morning</label>
    <input type="radio" id="pm" name="section" value="afternoon">
    <label for="pm">Afternoon</label>
  </fieldset>

  <fieldset>
    <legend>Interests</legend>
    <input type="checkbox" id="web" name="interest" value="web" checked>
    <label for="web">Web development</label>
    <input type="checkbox" id="ai" name="interest" value="ai">
    <label for="ai">AI</label>
  </fieldset>

  <label for="course">Course</label>
  <select id="course" name="course">
    <option value="01076021">Web Development</option>
    <option value="01076014">Data Structures</option>
  </select>
</form>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Group radio buttons
One shared `name` makes them exclusive; each still needs its own `id` and `value`.

```
<input type="radio" id="y" name="agree" value="yes">
<label for="y">Yes</label>
<input type="radio" id="n" name="agree" value="no">
<label for="n">No</label>
```

### 2. Build a checkbox group
Unlike radios, any number of checkboxes can be checked at once.

```
<input type="checkbox" id="web" name="interest" value="web">
<label for="web">Web development</label>
<input type="checkbox" id="ai" name="interest" value="ai">
<label for="ai">AI</label>
```

### 3. Build a select dropdown
Each `<option>`'s `value` is what gets submitted; its text is what the student sees.

```
<label for="major">Major</label>
<select id="major" name="major">
  <option value="ce">Computer Engineering</option>
  <option value="ee">Electrical Engineering</option>
</select>
```

### 4. Pre-select an option
`selected` on one `<option>` makes it the default shown.

```
<select id="year" name="year">
  <option value="1">Year 1</option>
  <option value="2" selected>Year 2</option>
</select>
```

### 5. Pre-check a checkbox
`checked` sets a checkbox's starting state without any JavaScript.

```
<input type="checkbox" id="news" name="subscribe" value="yes" checked>
<label for="news">Send me updates</label>
```

## Exercises

### Exercise 1: Radio group
Build a group of three mutually exclusive radio options and state which attribute makes them exclusive.

### Exercise 2: Checkbox group
Build a group of three independent checkboxes for "interests".

### Exercise 3: Major dropdown
Build a `<select>` of four majors, with the second pre-selected.

### Exercise 4: All three together
Combine a radio group, a checkbox group and a `<select>` inside one `<form>`.

### Exercise 5: Query string check
Submit a form with `method="get"` where you leave every checkbox unchecked, and report which names are missing from the query string.

## Quizes

### Q1. Two radio buttons must be mutually exclusive. What must they share?
1. The same `id`
2. The same `value`
3. The same `name`
4. The same `<label>`

### Q2. How many checkboxes in one group can be checked at once?
1. Exactly one
2. At most two
3. Any number, including zero
4. All or none

### Q3. What does `selected` do on an `<option>`?
1. Disables that option
2. Makes it the default shown when the page loads
3. Hides it from the dropdown
4. Sends it twice on submit

### Q4. An unchecked checkbox named `subscribe` is in a submitted GET form. What appears in the query string?
1. `subscribe=false`
2. `subscribe=`
3. `subscribe=off`
4. Nothing — its name is left out entirely

### Q5. Which element holds the choices shown by a `<select>`?
1. `<choice>`
2. `<item>`
3. `<option>`
4. `<li>`
