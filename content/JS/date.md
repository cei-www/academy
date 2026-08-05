# The Date object

`new Date()` captures the current date and time. `new Date("2026-09-01")` parses an ISO date string
instead. Once you have a `Date`, getters read it apart: `getFullYear()`, `getMonth()` (0 for
January!), `getDate()` (day of the month), `getDay()` (0 for Sunday), `getHours()`.

Subtracting one `Date` from another gives the difference in milliseconds — divide by
`1000 * 60 * 60 * 24` to get days. `toLocaleDateString()` formats a date for display without you
building the string by hand.

## Display
### HTML

```
<h1>Course dates</h1>
<p id="out">See the console panel.</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; }
#out { background: #EEF1F4; border-left: 4px solid #F2A93B; padding: 8px; }
```

### Javascript

```
const now = new Date();
console.log("year:", now.getFullYear(), "month:", now.getMonth() + 1, "day:", now.getDate());

const labDue = new Date("2026-09-01");
const msLeft = labDue - now;
const daysLeft = Math.ceil(msLeft / (1000 * 60 * 60 * 24));
console.log("days until lab is due:", daysLeft);

document.getElementById("out").textContent =
  `Today: ${now.toLocaleDateString()} — ${daysLeft} days until the lab is due.`;
```

## Your Tasks
### 1. Get the current date and time
`new Date()` with no argument always means "right now".

```
const now = new Date();
console.log(now);
```

### 2. Read the year, month and day
`getMonth()` is 0-indexed — January is `0`, not `1`.

```
const now = new Date();
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate());
```

### 3. Parse a date from a string
An ISO string (`"YYYY-MM-DD"`) parses reliably in every browser.

```
const semesterStart = new Date("2026-08-10");
console.log(semesterStart.getFullYear(), semesterStart.getMonth() + 1);
```

### 4. Find the gap between two dates
Subtracting two `Date` objects gives milliseconds; convert to days by dividing.

```
const now = new Date();
const due = new Date("2026-09-01");
const days = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
console.log(days, "days left");
```

### 5. Format a date for display
`toLocaleDateString()` avoids hand-building a `DD/MM/YYYY` string.

```
const now = new Date();
console.log(now.toLocaleDateString());
```

## Exercises

### Exercise 1: Day of the week
Use `getDay()` and an array of day names to log today's weekday as a word, not a number.

### Exercise 2: Age calculator
Given a birth year, subtract it from the current year and log the age. Note the edge case: this is
wrong if the birthday has not happened yet this year — write one sentence about why.

### Exercise 3: Countdown
Pick a future date and log how many whole days remain until it, using subtraction and `Math.ceil`.

### Exercise 4: Which date is later
Given two `Date` objects, compare them with `>` and log which one is later.

### Exercise 5: Manual formatting
Build a `DD/MM/YYYY` string yourself from `getDate()`, `getMonth()` and `getFullYear()`, remembering
to add 1 to the month and pad single digits with a leading zero.

## Quizes

### Q1. What does `new Date().getMonth()` return for January?
1. `1`
2. `0`
3. `"January"`
4. `"01"`

### Q2. What does subtracting two `Date` objects give you?
1. A new `Date` object
2. The difference in milliseconds, as a number
3. A string like `"2 days"`
4. `NaN`, because dates cannot be subtracted

### Q3. What does `new Date("2026-09-01")` represent?
1. The current date and time
2. September 1st, 2026, at midnight
3. An invalid date
4. September in the year `2026-09-01`

### Q4. What does `getDay()` return?
1. The day of the month, 1–31
2. The day of the week, 0 (Sunday) to 6 (Saturday)
3. The number of days in the current month
4. The current hour

### Q5. Which method formats a `Date` for display without manual string building?
1. `JSON.stringify(date)`
2. `date.toLocaleDateString()`
3. `date.getTime()`
4. `String(date.getDate())`
