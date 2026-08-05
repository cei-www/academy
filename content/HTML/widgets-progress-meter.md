# Progress and meter

`<progress>` and `<meter>` look similar but mean different things. `<progress value="…" max="…">`
shows how far a task has gotten toward completion — a file upload, a multi-step form. `<meter
value="…" min="…" max="…">` shows a static measurement within a known range, like disk usage or a
score — it is never about "how much is done", only "where this value sits".

`<progress>` with no `value` attribute renders an indeterminate animation, for when you know work is
happening but not how much is left.

## Display
### HTML

```
<label for="upload">Upload progress</label>
<progress id="upload" value="60" max="100"></progress>

<label for="quota">Storage used</label>
<meter id="quota" value="7.2" min="0" max="10"></meter>

<p>Indeterminate — work is happening, but the amount left is unknown:</p>
<progress></progress>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
label { display: block; margin-top: 12px; color: #4B5563; font-size: 14px; }
progress, meter { width: 260px; height: 14px; }
```

### Javascript

```
const upload = document.getElementById("upload");
console.log("upload:", upload.value, "/", upload.max);
```

## Your Tasks
### 1. Show a determinate progress bar
`value` and `max` together say how far along the task is.

```
<progress value="30" max="100"></progress>
```

### 2. Show an indeterminate progress bar
Omitting `value` tells the browser the amount of work left is unknown.

```
<progress></progress>
```

### 3. Update progress from JavaScript
`.value` is a plain number you can set directly.

```
const bar = document.querySelector("progress");
bar.value = 75;
```

### 4. Show a static measurement with meter
`<meter>` is for "where does this value sit", not "how much is done".

```
<meter value="7.2" min="0" max="10"></meter>
```

### 5. Mark a meter's healthy range
`low`, `high` and `optimum` let the browser colour the meter based on the value's position.

```
<meter value="30" min="0" max="100" low="33" high="66" optimum="80"></meter>
```

## Exercises

### Exercise 1: Upload simulation
Build a `<progress>` bar and a button that increases its `value` by 20 on each click, stopping at
100.

### Exercise 2: Storage meter
Build a `<meter>` showing 7.2 out of 10 GB used, with a visible label.

### Exercise 3: Indeterminate loading
Show an indeterminate `<progress>` element, then explain in one sentence when you would use it over
a determinate one.

### Exercise 4: Coloured ranges
Give a `<meter>` `low`, `high` and `optimum` values so a low score renders differently from a high
one, and test both ends.

### Exercise 5: Progress vs meter
Write one sentence each explaining why a battery-level indicator should be a `<meter>`, not a
`<progress>`.

## Quizes

### Q1. What does `<progress value="60" max="100">` represent?
1. A static measurement, like a score out of 100
2. A task that is 60% of the way to completion
3. A range slider the user can drag
4. An error state

### Q2. What does `<progress>` with no `value` attribute render?
1. A broken, empty element
2. An indeterminate animation, for unknown-length work
3. A bar always stuck at 0%
4. The same as `<meter>`

### Q3. What is `<meter>` for?
1. Showing how much of a task is complete
2. Showing a static value's position within a known range
3. A slider the user can drag to pick a value
4. A countdown timer

### Q4. How do you update a progress bar's fill level from JavaScript?
1. `bar.progress = 75`
2. `bar.value = 75`
3. `bar.setAttribute("fill", 75)`
4. `bar.percent = 75`

### Q5. Which element fits a battery-level indicator best?
1. `<progress>`, since a battery is "completing" a charge
2. `<meter>`, since it is a static measurement within a range
3. `<input type="range">`
4. `<output>`
