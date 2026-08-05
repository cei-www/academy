# Creating and attaching DOM nodes

Building nodes is safer than building strings. `document.createElement("li")` returns a detached
element; set its properties, then attach it with `parent.append(node)`, which takes several nodes or
plain strings at once. `node.remove()` deletes a node, and `node.cloneNode(true)` copies its subtree.

Two element properties carry state without touching the text. `classList` adds, removes and toggles
classes. `dataset` reads and writes `data-*` attributes: `li.dataset.id = 7` becomes `data-id="7"` in
the HTML, and comes back as the string `"7"`.

Appending inside a loop touches the live page on every iteration. Append into a
`document.createDocumentFragment()` and insert that once instead, so the browser lays out one time.

## Display
### HTML

```
<h1>Course list</h1>
<ul id="list"></ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#list li { padding: 6px 0; border-bottom: 1px solid #DDE2E8; }
#list li.done { text-decoration: line-through; color: #4B5563; }
```

### Javascript

```
const list = document.getElementById("list");
const frag = document.createDocumentFragment();

["CE-231", "CE-232", "CE-241"].forEach(code => {
  const li = document.createElement("li");
  li.textContent = code;
  li.dataset.code = code;
  frag.append(li);
});

list.append(frag);
list.firstElementChild.classList.add("done");
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

### 3. Toggle a class
`classList.toggle` flips a class on or off with one call.

```
li.classList.toggle("done");
```

### 4. Batch with a fragment
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

### 5. Remove and clone
`remove()` deletes a node; `cloneNode(true)` copies it and every descendant.

```
const copy = list.lastElementChild.cloneNode(true);
list.append(copy);
list.firstElementChild.remove();
```

## Exercises

### Exercise 1: Render from data
Build a whole `<ul>` from an array of `{ code, title }` objects with `createElement` and one
fragment, using no `innerHTML` anywhere.

### Exercise 2: Data attributes
Give each list item a `data-code` attribute matching its course code, then read it back with
`.dataset.code` for every item.

### Exercise 3: Toggle done
Click a list item to toggle a `done` class, and confirm the strikethrough style follows.

### Exercise 4: Clone a row
Clone the first row in the list, change its text, and append the clone — confirm the original is
unaffected.

### Exercise 5: Fragment versus direct append
Append 50 items directly to the list one at a time, then rebuild the same 50 items using a fragment.
Compare the two in DevTools' performance panel.

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

### Q3. What does `cloneNode(true)` copy?
1. Only the element itself, with no children
2. The element and its entire subtree of descendants
3. Only the element's event listeners
4. Nothing — it requires an argument of `false`

### Q4. Appending 100 nodes to a fragment and then appending the fragment once
1. Throws, because a fragment can hold only one child
2. Leaves an extra wrapper element around the 100 nodes
3. Inserts the 100 nodes and leaves the fragment empty
4. Copies the nodes, so each one ends up in the page twice

### Q5. What does `classList.toggle("done")` do if the class is already present?
1. Adds it a second time
2. Removes it
3. Throws an error
4. Does nothing at all
