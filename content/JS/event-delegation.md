# Event delegation

An event on a child also runs handlers on its ancestors — it bubbles. Attach one listener to the
container instead of one per row, and use `event.target.closest("selector")` to find which specific
row was actually clicked; that keeps working for rows added after the listener was attached, with no
extra code needed for them. `event.preventDefault()` stops the browser's own reaction to an event,
such as a form reloading on submit.

## Display
### HTML

```
<h1>Study list</h1>
<form id="add"><input id="task" placeholder="Read chapter 3"> <button>Add</button></form>
<ul id="list">
  <li><span>Read chapter 3</span> <button type="button" data-action="delete">x</button></li>
  <li><span>Finish lab 2</span> <button type="button" data-action="delete">x</button></li>
</ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#list li { padding: 6px 0; border-bottom: 1px solid #DDE2E8; }
#list li.done span { text-decoration: line-through; color: #4B5563; }
#list button { margin-left: 8px; }
```

### Javascript

```
const list = document.getElementById("list");
const input = document.getElementById("task");

list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  if (event.target.dataset.action === "delete") li.remove();
  else li.classList.toggle("done");
});

document.getElementById("add").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!input.value.trim()) return;
  const li = document.createElement("li");
  li.innerHTML = `<span>${input.value.trim()}</span> <button type="button" data-action="delete">x</button>`;
  list.append(li);
  input.value = "";
});
```

## Your Tasks
### 1. Delegate one listener
One handler on the container covers every row, including rows added after it was attached.

```
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li) li.classList.toggle("done");
});
```

### 2. Distinguish which part was clicked
Read `event.target` to see exactly what was clicked, versus `event.currentTarget` for the listener's
own element.

```
list.addEventListener("click", (event) => {
  console.log("target:", event.target.tagName, "currentTarget:", event.currentTarget.tagName);
});
```

### 3. Route by a data attribute
`dataset.action` on the clicked element says what to do, without checking tag names.

```
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  if (event.target.dataset.action === "delete") li.remove();
});
```

### 4. Stop the default on submit
A submit reloads the page unless you prevent it.

```
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

### 5. New rows work automatically
A row appended after the listener was attached still responds, because the listener lives on the
container, not the row.

```
list.append(newLi);   // clicks on newLi already work — no new listener needed
```

## Exercises

### Exercise 1: Delegated toggle
Attach one click listener to a list and toggle a `done` class on whichever `<li>` was clicked.

### Exercise 2: Inspect the delegation
Log `event.target.tagName` and `event.currentTarget.tagName` in the list handler, click the text and
then the delete button, and explain the difference in a comment.

### Exercise 3: Delete button
Add a delete button to each row, routed through `dataset.action`, that removes just that row.

### Exercise 4: New row inherits behaviour
Add a row through a form after the page loads, then click it, and confirm the delegated listener
still works with no extra code.

### Exercise 5: Prevent the reload
Attach a `submit` listener that calls `event.preventDefault()`, and confirm the page does not reload
when a new row is added.

## Quizes

### Q1. Why attach one listener to the list instead of one per row?
1. Listeners on `<li>` elements are not allowed
2. Events bubble, so the container sees clicks on rows that exist now and rows added later
3. It makes the click fire faster than the browser default
4. Because `classList` only works on containers

### Q2. What does `event.target.closest("li")` do?
1. Returns the `<li>` nearest in the page, measured in pixels
2. Returns the last `<li>` in the list
3. Returns the clicked element's nearest `<li>` ancestor, or itself, or `null`
4. Closes the element so it stops receiving events

### Q3. What is the difference between `event.target` and `event.currentTarget`?
1. There is no difference
2. `target` is the exact element clicked; `currentTarget` is the element the listener is attached to
3. `currentTarget` is always the `<body>`
4. `target` only works inside forms

### Q4. What does `event.preventDefault()` do inside a form's `submit` handler?
1. Stops the browser's default page reload/navigation for that submit
2. Removes the form from the page
3. Cancels every future event on the form
4. Deletes the submitted values

### Q5. Does a row added to the list after the delegated listener was attached respond to clicks?
1. No — a new listener must be attached to it individually
2. Yes — the container's listener already covers it, since events bubble up to it
3. Only if `addEventListener` is called again
4. Only if the row is added with `innerHTML`, not `createElement`
