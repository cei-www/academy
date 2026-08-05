# CSS-only toggles with the checkbox hack

A `<label for="…">` linked to a hidden `<input type="checkbox">` toggles that checkbox on click —
without JavaScript. The `:checked` pseudo-class then matches while it is ticked, and the general
sibling combinator `~` reaches forward to any element after it in the same parent. Together, that is
enough to show or hide a menu, panel or dropdown with CSS alone.

This only works forwards in the markup — the toggled panel must come *after* the checkbox in the
HTML, since CSS combinators cannot select backwards.

## Display
### HTML

```
<div class="toggle-block">
  <input type="checkbox" id="menuToggle" class="visually-hidden">
  <label for="menuToggle" class="toggle-btn">Menu</label>
  <nav class="panel">
    <a href="#">Lectures</a>
    <a href="#">Labs</a>
    <a href="#">Grades</a>
  </nav>
</div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }

.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }

.toggle-btn {
  display: inline-block;
  padding: 8px 14px;
  background: #F2A93B;
  color: #6B4207;
  border-radius: 6px;
  cursor: pointer;
}

.panel { display: none; margin-top: 8px; padding: 12px; background: #EEF1F4; border-radius: 6px; }
.panel a { display: block; padding: 4px 0; color: #0F1B33; }

#menuToggle:checked ~ .panel { display: block; }
```

### Javascript

```

```

## Your Tasks
### 1. Link a label to a checkbox
Clicking the label toggles the checkbox, exactly like clicking the checkbox itself.

```
<input type="checkbox" id="menuToggle" class="visually-hidden">
<label for="menuToggle">Menu</label>
```

### 2. Hide the checkbox without `display: none`
`display: none` would also remove it from the tab order; a clipping technique keeps it focusable.

```
.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
}
```

### 3. Show a panel only while checked
`:checked` matches the input's current state; `~` reaches the sibling that should react to it.

```
#menuToggle:checked ~ .panel { display: block; }
```

### 4. Style the label as a button
The label is what the visitor actually clicks, so it needs to look clickable.

```
.toggle-btn { padding: 8px 14px; background: #F2A93B; cursor: pointer; }
```

### 5. Rotate an icon based on the checked state
`:checked` can drive more than `display` — any property on a later sibling is fair game.

```
#menuToggle:checked ~ .toggle-btn .chevron { transform: rotate(180deg); }
```

## Exercises

### Exercise 1: Toggle menu
Build a "Menu" button that reveals a list of three links when clicked, using only the checkbox hack —
no JavaScript.

### Exercise 2: Accordion panel
Build two independent checkbox-toggled panels stacked vertically, and confirm opening one does not
close the other.

### Exercise 3: Radio-button tabs
Use a group of `<input type="radio">` with the same `name`, one `<label>` each, and `:checked ~` to
show only the panel matching the selected radio.

### Exercise 4: Keyboard test
Tab to the hidden checkbox with the keyboard and press Space to toggle it, confirming the hack works
without a mouse.

### Exercise 5: Compare with `<details>`
Rebuild the toggle menu using `<details>`/`<summary>` instead, and write one sentence on which
approach you would pick for a simple show/hide panel.

## Quizes

### Q1. What makes clicking a `<label>` toggle a checkbox?
1. Nothing — labels are purely decorative
2. The label's `for` attribute matches the checkbox's `id`
3. JavaScript listens for the label's click event
4. Labels always toggle the nearest checkbox automatically

### Q2. Which combinator reaches from the checkbox to a later sibling element?
1. `>`
2. A space (descendant combinator)
3. `~` (general sibling combinator)
4. `+` only, never `~`

### Q3. Why hide the checkbox with a clip-based technique instead of `display: none`?
1. `display: none` is invalid on `<input>`
2. `display: none` would also remove it from the keyboard tab order
3. Clipping is required for `:checked` to work at all
4. There is no difference between the two approaches

### Q4. What must be true about the panel's position in the HTML for `#toggle:checked ~ .panel` to work?
1. The panel must come before the checkbox in the markup
2. The panel must come after the checkbox and share the same parent
3. The panel must be a direct child of the checkbox
4. Position in the markup does not matter

### Q5. What native HTML element offers a similar show/hide toggle with no CSS hack needed?
1. `<select>`
2. `<details>`/`<summary>`
3. `<fieldset>`
4. `<output>`
