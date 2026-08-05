# Arrays

An array is an ordered list. Write it with `[]`, read an item by index starting at `0`, and ask for
`length` to know how many there are. `push` adds an item to the end and returns the new length;
`pop` removes the last item and returns the item that was removed.

## Display
### HTML

```
<h1>Your courses</h1>
<ul id="list"></ul>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#list li { padding: 4px 0; border-bottom: 1px solid #DDE2E8; }
```

### Javascript

```
const codes = ["CE-201", "CE-210", "CE-233"];
console.log("count:", codes.length, "first:", codes[0]);

codes.push("CE-241");
const removed = codes.pop();
console.log("removed:", removed, "now:", codes);

let html = "";
for (const code of codes) html += `<li>${code}</li>`;
document.getElementById("list").innerHTML = html;
```

## Your Tasks
### 1. Make an array and read it
Indexes start at `0`, so the last item is `length - 1`.

```
const codes = ["CE-201", "CE-210", "CE-233"];
console.log(codes[0], codes[codes.length - 1], codes.length);
```

### 2. Add an item with `push`
`push` appends to the end and returns the array's new length.

```
const codes = ["CE-201"];
const newLength = codes.push("CE-210");
console.log(newLength, codes);
```

### 3. Remove an item with `pop`
`pop` removes the last item and hands it back to you.

```
const codes = ["CE-201", "CE-210"];
const last = codes.pop();
console.log(last, codes);
```

### 4. Loop the array
`for...of` hands you each element directly.

```
for (const code of ["CE-201", "CE-210", "CE-233"]) {
  console.log(code);
}
```

### 5. Build HTML from an array
Collect the string first, then write it to the page once.

```
const rooms = ["ECC-401", "ECC-402"];
let html = "";
for (const r of rooms) html += `<li>${r}</li>`;
document.getElementById("list").innerHTML = html;
```

## Exercises

### Exercise 1: Your courses
Build an array of five course code strings, then log the first, the last and the count.

### Exercise 2: Push and pop
Start with an empty array, `push` three items one at a time logging the array after each, then `pop`
one and log what was removed.

### Exercise 3: Render a list
Build an array of four room names and render them as `<li>` items using a loop.

### Exercise 4: Find by index
Given a five-item array, log the item at index `2` and the item at the last valid index using
`length - 1`.

### Exercise 5: Sum the array
Given `[10, 25, 30, 15]`, loop over it and log the total.

## Quizes

### Q1. What is the index of the first item in an array?
1. `-1`
2. `0`
3. `1`
4. It depends on how the array was created

### Q2. What does `push()` return?
1. The item that was added
2. The array's new length
3. `undefined`
4. The whole array as a copy

### Q3. What does `pop()` do?
1. Adds an item to the end of the array
2. Removes the first item and returns it
3. Removes the last item and returns it
4. Empties the array

### Q4. What does `const a = ["CE-201"]; a.push("CE-210"); console.log(a.length, a[1]);` print?
1. `2 "CE-210"`
2. `1 "CE-210"`
3. `2 "CE-201"`
4. A `TypeError`, because `a` is a `const`

### Q5. Given a five-item array `arr`, which expression reads the last item?
1. `arr[5]`
2. `arr[arr.length]`
3. `arr[arr.length - 1]`
4. `arr.last()`
