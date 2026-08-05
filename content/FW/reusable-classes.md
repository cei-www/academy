# Reusable class lists

A real component is just a long class list. The problem starts when you need that list three times.
Copy-paste is the wrong answer: the fourth copy will drift, and a fix to one card silently stops
matching the others.

In a page that already runs JavaScript, keep the list in one place — a `const` string — and read it
everywhere an element needs those classes. A template function goes one step further: it owns both
the markup and the classes together, so a card's structure and its styling can never be edited
separately and fall out of sync.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<main class="max-w-5xl mx-auto px-4 py-8">
  <h1 class="mb-6 text-2xl font-bold text-slate-900">Course catalogue</h1>
  <div id="cards" class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</main>
```

### CSS

```
/* Empty — the card styling lives in the CARD constant, not here. */
```

### Javascript

```
const CARD = "p-4 bg-white border border-slate-200 rounded-lg shadow";

const courses = [
  { code: "CE 2103", title: "Web Application Development", seats: 40 },
  { code: "CE 2201", title: "Data Structures", seats: 60 },
  { code: "CE 2305", title: "Computer Networks", seats: 45 },
];

const card = (c) => `<article class="${CARD}">
  <h3 class="font-bold text-slate-900">${c.code}</h3>
  <p class="text-sm text-slate-600">${c.title}</p>
  <p class="mt-2 text-xs text-slate-500">${c.seats} seats</p>
</article>`;

document.getElementById("cards").innerHTML = courses.map(card).join("");
```

## Your Tasks
### 1. Name the class list once
One constant, used everywhere. Editing it changes every card at once.

```
const CARD = "p-4 bg-white border border-slate-200 rounded-lg shadow";
el.className = CARD;
```

### 2. Write a template function
The function owns both the markup and the classes, so a card can never be half-updated.

```
const card = (c) => `<article class="${CARD}">
  <h3 class="font-bold text-slate-900">${c.code}</h3>
  <p class="text-sm text-slate-600">${c.title}</p>
</article>`;
```

### 3. Render a list from an array
`.map` turns data into markup; `.join("")` turns the array of strings into one HTML string.

```
document.getElementById("cards").innerHTML = courses.map(card).join("");
```

### 4. Change one constant, change every card
Edit `CARD` and re-render — every card updates, because none of them owns its own copy.

```
const CARD = "p-4 bg-white border border-slate-200 rounded-none shadow-lg";
```

### 5. Build a second variant from the first
A "compact" card can reuse most of `CARD` and add its own extras, instead of starting from scratch.

```
const CARD_COMPACT = CARD + " text-sm";
```

## Exercises

### Exercise 1: One constant, three cards
Render three course cards from an array with a single `CARD` constant. Change `rounded-lg` to
`rounded-none` in the constant and confirm all three cards change.

### Exercise 2: Two template functions
Write a `card` function and a `cardCompact` function that share the same `CARD` constant but render
different markup. Render both from the same `courses` array.

### Exercise 3: Spot the drift
Copy the card markup into the HTML box four separate times by hand, each with a slightly different
class list. Explain in one sentence why this is the situation the constant avoids.

### Exercise 4: Add a field
Add an `instructor` field to each course object and show it in the card, without touching the `CARD`
constant.

### Exercise 5: Empty state
When `courses` is an empty array, show a single message `<p>` instead of an empty grid. Keep the same
`card` function for the non-empty case.

## Quizes

### Q1. What problem does storing a class list in one `const` solve?
1. It makes the page load faster
2. It stops multiple copies of the same class list from drifting apart
3. It is required for Tailwind's CDN build to work at all
4. It removes the need for a build step

### Q2. What does a template function like `card(c)` own, compared to a plain class constant?
1. Only the classes, not the markup
2. Only the markup, not the classes
3. Both the markup and the classes together
4. Neither — it only owns the data

### Q3. With `const CARD = "p-4 bg-white rounded"`, what does `` `<div class="${CARD} shadow">` `` produce?
1. A div with padding, a white background, rounded corners and a shadow
2. A div with a shadow only, because `${CARD}` is not evaluated in an attribute
3. A syntax error, since a class attribute cannot hold a template value
4. A div with padding and a shadow, but no background

### Q4. Why is copy-pasting a long class list into several elements risky?
1. The browser rejects duplicate class lists
2. Tailwind generates the CSS twice, doubling file size
3. A later edit to one copy is easy to miss on the others
4. It is not risky — it is the recommended pattern

### Q5. What does `courses.map(card).join("")` produce?
1. An array of HTML strings, one per course
2. A single HTML string with every card's markup concatenated
3. A single `<article>` containing every course
4. `undefined`, because `map` cannot return template strings
