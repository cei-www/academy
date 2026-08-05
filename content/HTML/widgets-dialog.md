# The dialog element

`<dialog>` is a native modal — hidden by default, with no CSS required to hide it. `.showModal()`
opens it as a true modal: it traps focus, dims the rest of the page with a `::backdrop`
pseudo-element, and `.close()` hides it again. Inside a `<form method="dialog">`, any submit button
closes the dialog automatically, with no JavaScript needed for the close action itself.

## Display
### HTML

```
<button id="openBtn" type="button">Open confirmation</button>

<dialog id="confirmDialog">
  <form method="dialog">
    <p>Delete this lab submission? This cannot be undone.</p>
    <button value="cancel">Cancel</button>
    <button value="confirm">Delete</button>
  </form>
</dialog>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
dialog { border: none; border-radius: 8px; padding: 20px; max-width: 320px; }
dialog::backdrop { background: rgba(15, 27, 51, 0.6); }
dialog button { margin-top: 12px; margin-right: 8px; }
```

### Javascript

```
const dialog = document.getElementById("confirmDialog");
document.getElementById("openBtn").addEventListener("click", () => dialog.showModal());
dialog.addEventListener("close", () => console.log("closed with:", dialog.returnValue));
```

## Your Tasks
### 1. Open a dialog as a modal
`.showModal()` shows the dialog and dims the page behind it via `::backdrop`.

```
document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("confirmDialog").showModal();
});
```

### 2. Close it from a script
`.close()` hides the dialog and can optionally set its return value.

```
document.getElementById("cancelBtn").addEventListener("click", () => {
  document.getElementById("confirmDialog").close();
});
```

### 3. Close it from a form submit, with no JavaScript
A button inside `<form method="dialog">` closes the dialog and records its `value`.

```
<form method="dialog">
  <button value="confirm">Delete</button>
</form>
```

### 4. Read which button closed it
`returnValue` holds the `value` of whichever submit button was pressed.

```
dialog.addEventListener("close", () => {
  console.log("result:", dialog.returnValue);
});
```

### 5. Style the backdrop
`::backdrop` only exists while the dialog is open as a modal.

```
dialog::backdrop { background: rgba(0, 0, 0, 0.5); }
```

## Exercises

### Exercise 1: Confirmation dialog
Build a delete-confirmation dialog with Cancel and Delete buttons inside `<form method="dialog">`.

### Exercise 2: Read the result
Log `dialog.returnValue` after it closes and confirm it matches whichever button was clicked.

### Exercise 3: Non-modal open
Compare `.show()` (non-modal) against `.showModal()` by opening the same dialog both ways and
describing, in one or two sentences, what differs — focus trapping and the backdrop.

### Exercise 4: Escape to close
Open the dialog with `.showModal()`, press Escape, and confirm it closes without any extra code.

### Exercise 5: Style a real modal
Give the dialog a heading, body text and two buttons, styled to match the site's palette, with a
dimmed backdrop.

## Quizes

### Q1. What does `.showModal()` do that `.show()` does not?
1. Nothing — they are identical
2. Traps focus inside the dialog and dims the page with `::backdrop`
3. Only `.showModal()` can be closed with `.close()`
4. `.show()` is not a real method on `<dialog>`

### Q2. What closes a dialog automatically, with no JavaScript for the close action?
1. Any `<button>` anywhere on the page
2. A submit button inside a `<form method="dialog">`
3. Clicking outside the dialog always closes it
4. Nothing — closing always requires JavaScript

### Q3. Where does the value of the button that closed the dialog end up?
1. `dialog.value`
2. `dialog.returnValue`
3. `dialog.result`
4. It is not tracked anywhere

### Q4. When does `::backdrop` apply?
1. Always, whether the dialog is open or not
2. Only while the dialog is shown as a modal
3. Only in browsers without native `<dialog>` support
4. Only when the dialog has a `<form>` inside it

### Q5. What key closes an open modal `<dialog>` by default, with no extra code?
1. Enter
2. Tab
3. Escape
4. Space
