# Native UI widgets overview

You have now met three widgets the browser gives you for free, with no JavaScript required for their
basic behaviour: `<details>`/`<summary>` for a collapsible section, `<dialog>` for a true modal, and
`<progress>`/`<meter>` for a determinate or static value display. Each still exposes a small
JavaScript API — `.open`, `.showModal()`/`.close()`, `.value` — for when you need to react to or drive
the state yourself.

Reach for these before reaching for a JavaScript library: they are accessible, keyboard-operable, and
already ship in every modern browser.

## Display
### HTML

```
<details>
  <summary>Submission status</summary>
  <p>Upload: <progress value="60" max="100"></progress></p>
  <p>Storage used: <meter value="7.2" min="0" max="10"></meter></p>
</details>

<button id="openBtn" type="button">Open confirmation</button>
<dialog id="confirmDialog">
  <form method="dialog">
    <p>Delete this submission?</p>
    <button value="cancel">Cancel</button>
    <button value="confirm">Delete</button>
  </form>
</dialog>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
details { border: 1px solid #DDE2E8; border-radius: 6px; padding: 8px 12px; }
summary { cursor: pointer; font-weight: 600; }
dialog { border: none; border-radius: 8px; padding: 20px; }
dialog::backdrop { background: rgba(15, 27, 51, 0.6); }
```

### Javascript

```
const dialog = document.getElementById("confirmDialog");
document.getElementById("openBtn").addEventListener("click", () => dialog.showModal());
dialog.addEventListener("close", () => console.log("closed with:", dialog.returnValue));
```

## Your Tasks
### 1. Build a collapsible details section
No `open` attribute means it starts closed.

```
<details><summary>More info</summary><p>Hidden until clicked.</p></details>
```

### 2. Open a dialog as a true modal
`.showModal()` traps focus and dims the page via `::backdrop`.

```
document.getElementById("openBtn").addEventListener("click", () => dialog.showModal());
```

### 3. Close a dialog from a form submit
A button inside `<form method="dialog">` closes it with no JavaScript for the close action.

```
<form method="dialog"><button value="confirm">Delete</button></form>
```

### 4. Show a determinate progress bar
`value` and `max` together say how far along a task is.

```
<progress value="30" max="100"></progress>
```

### 5. Show a static measurement with meter
`<meter>` is "where a value sits", never "how much is done".

```
<meter value="7.2" min="0" max="10"></meter>
```

## Exercises

### Exercise 1: Status panel
Combine a `<details>`, a `<progress>` and a `<meter>` into one collapsible "status" section.

### Exercise 2: Confirmation modal
Build a `<dialog>` with Cancel/Delete buttons inside `<form method="dialog">`, opened by a button and
read via `dialog.returnValue` on close.

### Exercise 3: Live progress
Add a button that increases a `<progress>`'s `value` by 20 on each click, up to 100.

### Exercise 4: Pick the right widget
For "task completion", "battery level" and "hidden extra detail", state which of the three widgets
fits each, in one sentence each.

### Exercise 5: No JavaScript at all
Rebuild the status panel from Exercise 1 using only HTML and CSS, confirming the collapse still works
without any script.

## Quizes

### Q1. Which of these widgets needs no JavaScript for its basic open/close behaviour?
1. None of them — all three require JavaScript
2. `<details>`/`<summary>`
3. Only `<dialog>`
4. Only `<progress>`

### Q2. What does `.showModal()` add compared to just displaying a `<dialog>`?
1. Nothing different
2. Focus trapping and a `::backdrop`
3. It removes the dialog from the accessibility tree
4. It disables the Escape key

### Q3. What is the key difference between `<progress>` and `<meter>`?
1. They are interchangeable
2. `<progress>` shows completion of a task; `<meter>` shows a static value's position in a range
3. `<meter>` requires JavaScript; `<progress>` does not
4. `<progress>` cannot be styled with CSS

### Q4. What does the `toggle` event on `<details>` fire on?
1. Only when it opens
2. Only when it closes
3. Every open/closed state change
4. It does not exist

### Q5. Where does the value of the button that closed a `<dialog>` end up?
1. `dialog.value`
2. `dialog.returnValue`
3. It is discarded
4. `dialog.result`
