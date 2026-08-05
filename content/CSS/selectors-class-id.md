# Class and ID selectors

`.note` matches every element whose `class` attribute contains `note` — the workhorse selector, since
any number of elements can share one class. `#title` matches the one element with `id="title"`; an
`id` must be unique in the document, so an id selector can only ever match a single element.

**Priority**: a class selector always beats a type selector on the same element, and an ID selector
always beats a class selector — however many classes the competing rule stacks.

## Display
### HTML

```
<h1 id="title">Course selectors</h1>
<p class="note">Every element with this class looks the same.</p>
<p class="note">So does this one.</p>
```

### CSS

```
#title { color: #0F1B33; }

.note {
  color: #6B4207;
  background-color: #F2A93B;
}
```

### Javascript

```

```

## Your Tasks
### 1. Target one element with an id
Because an `id` is unique, this rule can match at most one element.

```
#title { color: #0F1B33; }
```

### 2. Reuse one style with a class
Put `class="note"` on as many elements as you like; they all pick the rule up.

```
.note {
  color: #6B4207;
  background-color: #F2A93B;
}
```

### 3. Combine two classes on one element
Space-separate a `class` attribute to mix two independent styles on the same element.

```
<p class="note large">Bigger and highlighted.</p>
```

```
.large { font-size: 1.2rem; }
```

### 4. See an id outrank a class
`#lead` wins even though `.note` is written after it and the element carries both.

```
<p id="lead" class="note">Which color wins?</p>
```

```
.note { color: red; }
#lead { color: navy; }
```

### 5. Choose the right tool for the job
A one-off element gets an id; a repeated look gets a class.

```
#page-title { color: #0F1B33; }   /* one heading, unique on the page   */
.card       { border: 1px solid #DDE2E8; }   /* reused across many cards */
```

## Exercises

### Exercise 1: Class and id together
List five KMITL courses. Give them all `class="course"`, and give the one you are enrolled in
`id="mine"`. Style the class grey and the id navy.

### Exercise 2: Two classes, one element
Build a "badge" element with two classes — one setting its shape and padding, the other setting its
color — so the two concerns stay separate.

### Exercise 3: Predict the winner
Give one element both an id-based rule and a class-based rule that set the same property. Predict the
color before rendering, then check.

### Exercise 4: Count the matches
Apply one class to four elements. Open DevTools' console and confirm the count with
`document.querySelectorAll(".yourClass").length`.

### Exercise 5: Justify the choice
For a page's single main heading and for a repeated product card, say which selector kind fits each
and why.

## Quizes

### Q1. Which selector matches every element with `class="note"`?
1. `note`
2. `#note`
3. `.note`
4. `*note`

### Q2. How many elements on one page may use the same `id` value?
1. One
2. Two
3. Any number
4. Any number, as long as they are siblings

### Q3. An element has both `id="lead"` and `class="note"`, styled by `#lead { color: navy; }` and
`.note { color: red; }`. What color is it?
1. Red, because class selectors are checked first
2. Navy, because an id selector always outranks a class selector
3. Both colors blend
4. Neither; the conflicting rules cancel out

### Q4. How do you give one element two classes?
1. `class="note, large"`
2. `class="note" class="large"`
3. `class="note large"`
4. Classes cannot be combined on one element

### Q5. Which is generally the better choice for a repeated card style used on many elements?
1. An id selector, since it is more specific
2. A class selector, since any number of elements can share it
3. The universal selector `*`
4. Neither; repeated styles need a `<style>` block per element
