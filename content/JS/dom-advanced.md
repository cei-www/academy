# DOM manipulation overview

Building nodes is safer than building strings. `document.createElement("li")` returns a detached
element; set its properties, then attach it with `parent.append(node)`, which takes several nodes or
plain strings at once. `node.remove()` deletes a node, and `node.cloneNode(true)` copies its subtree.

Two element properties carry state without touching the text. `classList` adds, removes and toggles
classes. `dataset` reads and writes `data-*` attributes: `li.dataset.id = 7` becomes `data-id="7"` in
the HTML, and comes back as the string `"7"`.

Appending inside a loop touches the live page on every iteration. Append into a
`document.createDocumentFragment()` and insert that once instead, so the browser lays out one time.

An event on a child also runs handlers on its ancestors — it bubbles. Attach one listener to the
container and use `event.target.closest("li")` to find which row was hit; that keeps working for rows
added later. `event.preventDefault()` stops the browser's own reaction, such as a form reloading.

## Display
### HTML

```
<h1>Study list</h1>
<form id="add"><input id="task" placeholder="Read chapter 3"> <button>Add</button></form>
<ul id="list"></ul>
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
let nextId = 1;
function row(text) {
  const li = document.createElement("li"), span = document.createElement("span");
  const del = document.createElement("button");
  li.dataset.id = nextId++;
  span.textContent = text;
  del.type = "button"; del.textContent = "x"; del.dataset.action = "delete";
  li.append(span, del);
  return li;
}
const frag = document.createDocumentFragment();
["Read chapter 3", "Finish lab 2", "Revise C pointers"].forEach(t => frag.append(row(t)));
list.append(frag);
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  if (event.target.dataset.action === "delete") li.remove();
  else li.classList.toggle("done");
});
document.getElementById("add").addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim()) list.append(row(input.value.trim()));
  input.value = "";
});
```

## Your Tasks
### 1. Create and attach
Build the node first, fill it, then append — nothing is visible until the last step.

```
const li = document.createElement("li");
li.textContent = "Book a lab slot";
document.getElementById("list").append(li);
```

### 2. Carry data on the element
`dataset` keys are camelCase in JS and `data-kebab-case` in HTML, and values are always strings.

```
li.dataset.id = 42; li.dataset.dueDate = "2026-09-01";
console.log(li.outerHTML, typeof li.dataset.id);   // data-due-date="..." and "string"
```

### 3. Batch with a fragment
The fragment lives off-screen, so the page is only touched by the final `append`.

```
const frag = document.createDocumentFragment();
["CE-231", "CE-232", "CE-241"].forEach(code => {
  const item = document.createElement("li");
  item.textContent = code;
  frag.append(item);
});
list.append(frag);
```

### 4. Delegate one listener
One handler on the container covers every row, including rows added after it was attached.

```
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li) li.classList.toggle("done");
});
```

### 5. Stop the default and clone
A submit reloads the page unless you prevent it; `cloneNode(true)` copies children too.

```
document.getElementById("add").addEventListener("submit", (event) => {
  event.preventDefault();
  list.append(list.lastElementChild.cloneNode(true));
});
```

## Exercises

### Exercise 1: Render from data
Build the whole `<ul>` from an array of `{ code, title }` objects with `createElement` and one
fragment, using no `innerHTML` anywhere.

### Exercise 2: Count what is left
Show "3 of 5 done" under the list and keep it correct after every toggle, add and delete.

### Exercise 3: Inspect the delegation
Log `event.target.tagName` and `event.currentTarget.tagName` in the list handler, click the text and
then the delete button, and explain the difference in a comment.

### Exercise 4: Move a row
Add up and down buttons on each row that reorder it with `previousElementSibling.before` and
`nextElementSibling.after`.

### Exercise 5: Filter buttons
Add All / Active / Done buttons that hide the non-matching rows with a class, using `dataset` on each
button to say which filter it is.

## Quizes

### Q1. What does `document.createElement("li")` return?
1. A detached element that is not in the page yet
2. A string of HTML
3. The first `<li>` already in the document
4. `null` until you call `append`

### Q2. `li.dataset.userId = 7` produces which attribute?
1. `dataset-userId="7"`
2. `data-userId="7"`
3. `userId="7"`
4. `data-user-id="7"`

### Q3. Why attach one listener to the list instead of one per row?
1. Listeners on `<li>` elements are not allowed
2. Events bubble, so the container sees clicks on rows that exist now and rows added later
3. It makes the click fire faster than the browser default
4. Because `classList` only works on containers

### Q4. What does `event.target.closest("li")` do?
1. Returns the `<li>` nearest in the page, measured in pixels
2. Returns the last `<li>` in the list
3. Returns the clicked element's nearest `<li>` ancestor, or itself, or `null`
4. Closes the element so it stops receiving events

### Q5. Appending 100 nodes to a fragment and then appending the fragment once
1. Throws, because a fragment can hold only one child
2. Leaves an extra wrapper element around the 100 nodes
3. Inserts the 100 nodes and leaves the fragment empty
4. Copies the nodes, so each one ends up in the page twice
