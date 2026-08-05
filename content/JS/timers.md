# Timers

`setTimeout(fn, ms)` schedules `fn` to run once, after at least `ms` milliseconds — never sooner,
possibly later if the thread is busy. `setInterval(fn, ms)` repeats it every `ms` until stopped.
Both return an ID; pass that ID to `clearTimeout`/`clearInterval` to cancel a timer that has not
fired yet — including inside its own callback, which is how a "run N times then stop" pattern works
without `setInterval` at all.

## Display
### HTML

```
<h1>Countdown</h1>
<p id="out">10</p>
<button id="stop" type="button">Stop</button>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { font-size: 32px; font-weight: 700; color: #6B4207; }
```

### Javascript

```
const out = document.getElementById("out");
let n = 10;

const id = setInterval(() => {
  n -= 1;
  out.textContent = n;
  if (n <= 0) clearInterval(id);
}, 500);

document.getElementById("stop").addEventListener("click", () => clearInterval(id));
```

## Your Tasks
### 1. Run something once, later
`setTimeout` never runs early, and it never blocks the line after it.

```
setTimeout(() => console.log("300ms later"), 300);
console.log("this runs first");
```

### 2. Repeat on an interval
`setInterval` keeps firing every `ms`, on its own, until stopped.

```
let count = 0;
const id = setInterval(() => {
  count += 1;
  console.log(count);
}, 200);
```

### 3. Cancel a timeout before it fires
`clearTimeout` only has an effect if the timer has not run yet.

```
const id = setTimeout(() => console.log("never runs"), 1000);
clearTimeout(id);
```

### 4. Stop an interval from inside itself
Comparing against a limit and calling `clearInterval` with its own ID is the usual "N times" pattern.

```
let n = 0;
const id = setInterval(() => {
  n += 1;
  console.log(n);
  if (n >= 3) clearInterval(id);
}, 200);
```

### 5. Debounce with a single timeout
Clearing the previous timeout on every call means only the last call in a burst actually fires.

```
let pending;
function onType() {
  clearTimeout(pending);
  pending = setTimeout(() => console.log("search fired"), 300);
}
```

## Exercises

### Exercise 1: Countdown
Build a countdown from 10 to 0 with `setInterval`, stopping itself automatically at 0.

### Exercise 2: Manual stop
Add a "Stop" button that cancels a running `setInterval` with `clearInterval`.

### Exercise 3: Run three times
Use `setInterval` combined with a counter and `clearInterval` to run a callback exactly three times,
never more.

### Exercise 4: Debounced input
Attach a debounced `input` listener to a text field that logs the value only 300ms after typing
stops.

### Exercise 5: Timeout versus interval
Explain in one or two sentences when you would reach for `setTimeout` instead of `setInterval` for a
repeating task.

## Quizes

### Q1. What does `setTimeout(fn, 300)` guarantee about timing?
1. `fn` runs at exactly 300ms
2. `fn` runs no sooner than 300ms, possibly later
3. `fn` runs immediately, then again at 300ms
4. `fn` runs 300 times

### Q2. What does `setInterval(fn, 200)` do?
1. Runs `fn` once, after 200ms
2. Runs `fn` repeatedly, roughly every 200ms, until stopped
3. Runs `fn` exactly twice
4. Cancels any other running timers

### Q3. What does `clearTimeout(id)` do to a timer that already fired?
1. Reverses its effect
2. Nothing — it only has an effect on timers that have not fired yet
3. Throws an error
4. Restarts it

### Q4. How can an interval stop itself after N runs?
1. It cannot — only external code can stop it
2. By calling `clearInterval` with its own ID from inside the callback, once a counter reaches N
3. By returning `false` from the callback
4. By calling `setInterval` again with 0ms

### Q5. What does clearing and resetting a timeout on every keystroke implement?
1. A memory leak, with no useful behaviour
2. A debounce — only the last call in a burst actually fires
3. An immediate synchronous call on every keystroke
4. Nothing — `clearTimeout` has no effect on typing
