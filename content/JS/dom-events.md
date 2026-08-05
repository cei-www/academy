# DOM and events

The browser turns your HTML into a tree of objects called the DOM. JavaScript finds nodes in that
tree with CSS selectors: `document.querySelector("#out")` returns the first match or `null`, and
`document.querySelectorAll(".card")` returns a list of all matches that you can walk with `for...of`.

Once you hold an element you can read and write it:

```
const out = document.querySelector("#out");
out.textContent = "Registered";        // the text inside
input.value;                            // what the user typed in a form field
box.classList.add("done");              // also .remove("done") and .toggle("done")
```

`classList.toggle` adds the class when it is missing and removes it when it is there, so you can flip
a state without tracking it yourself. `element.addEventListener("click", handler)` runs `handler` on
every click and passes it an event object, whose `event.target` is the element that was clicked.

Use `textContent`, not `innerHTML`, for anything a user typed. `innerHTML` parses its string as HTML,
so untrusted text can inject markup and scripts into your page.

## Display
### HTML

```
<h1>Skill tracker</h1>
<p><input id="skill" type="text" placeholder="Verilog"> <button id="add" type="button">Add</button></p>
<p id="count">0 skills</p>
<ul id="list">
  <li class="item">C</li>
  <li class="item">Python</li>
</ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
.item { padding: 4px; border-bottom: 1px solid #DDE2E8; cursor: pointer; }
.item.done { background: #F2A93B; color: #6B4207; }
```

### Javascript

```
const list = document.querySelector("#list");
const count = document.querySelector("#count");

function refresh() {
  count.textContent = `${document.querySelectorAll(".item").length} skills`;
}

document.querySelector("#add").addEventListener("click", () => {
  const input = document.querySelector("#skill");
  const li = document.createElement("li");
  li.className = "item";
  li.textContent = input.value;      // textContent, so typed markup stays text
  list.appendChild(li);
  input.value = "";
  refresh();
});

list.addEventListener("click", event => {
  event.target.classList.toggle("done");
  console.log("toggled:", event.target.textContent);
});

refresh();
```

## Your Tasks
### 1. Find one element
`querySelector` takes any CSS selector and returns the first match.

```
const title = document.querySelector("h1");
console.log(title.textContent);
```

### 2. Find all matching elements
`querySelectorAll` returns a list you can loop with `for...of`.

```
for (const item of document.querySelectorAll(".item")) {
  console.log(item.textContent);
}
```

### 3. Read an input and write text
`value` is what is in the field; `textContent` is the text inside an element.

```
const input = document.querySelector("#skill");
input.value = "Verilog";
document.querySelector("#count").textContent = `typed: ${input.value}`;
```

### 4. Change classes
`add`, `remove` and `toggle` edit the class list without touching the others.

```
const first = document.querySelector(".item");
first.classList.add("done");
first.classList.remove("done");
first.classList.toggle("done");
```

### 5. Handle a click
The handler runs on every click; `event.target` is what was clicked.

```
document.querySelector("#add").addEventListener("click", event => {
  console.log("clicked", event.target.textContent);
});
```

## Exercises

### Exercise 1: Counter
Add a button that increases a number shown in a `<p>` by one on each click.

### Exercise 2: Echo the input
Show whatever is typed in `#skill` inside `#count` as soon as the Add button is pressed, without
adding a list item.

### Exercise 3: Highlight all
Add a button that gives every `.item` the `done` class, and a second that removes it from all of them.

### Exercise 4: Count in the console
Log `document.querySelectorAll(".item").length` before and after adding an item, and read both
numbers in the console panel.

### Exercise 5: See the injection
Type `<b>hi</b>` into the field. With `textContent` the tags appear as text; change that one line to
`innerHTML`, try again, and record what changes.

## Quizes

### Q1. What does `document.querySelector(".item")` return when nothing matches?
1. An empty array
2. `null`
3. `undefined`
4. An empty string

### Q2. Which property holds the text a user typed into an `<input>`?
1. `input.textContent`
2. `input.innerHTML`
3. `input.value`
4. `input.text`

### Q3. What does `el.classList.toggle("done")` do when `el` already has the class?
1. Adds a second copy of the class
2. Removes the class
3. Does nothing
4. Replaces every other class with `done`

### Q4. Why prefer `textContent` over `innerHTML` for text from a user?
1. `textContent` is faster on very long strings
2. `innerHTML` parses the string as HTML, so untrusted text can inject markup and scripts
3. `innerHTML` only works on elements inside `<body>`
4. `textContent` automatically translates the text

### Q5. Given `<p id="p">Hi</p>` and `document.querySelector("#p").textContent = "<b>Yo</b>";`, what does the page show?
1. `Yo` in bold
2. `<b>Yo</b>` as visible text
3. `Hi`, because `textContent` is read-only
4. Nothing, because the string contains tags
