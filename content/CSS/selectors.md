# Selectors overview

You have now met the four kinds of selector on their own: type/universal, class/id, combinators and
pseudo-classes. The priority ladder across all of them, lowest to highest: **type/universal, then
class and pseudo-class together, then id** — combinators add no weight, and a later rule wins any
tie. The full point-scoring system, including `!important`, is Advanced CSS's Cascade and
specificity lesson.

## Display
### HTML

```
<h1 id="title">Course selectors</h1>

<nav class="menu">
  <a href="#">Home</a>
  <ul>
    <li><a href="#">CE221 Data Structures</a></li>
    <li><a href="#">CE231 Databases</a></li>
  </ul>
</nav>

<p class="note">Hover any link to see the pseudo-class fire.</p>
```

### CSS

```
* { font-family: system-ui, sans-serif; }

#title { color: #0F1B33; }

.note { color: #4B5563; }

.menu a   { color: #6B4207; }     /* any link inside .menu     */
.menu > a { font-weight: 700; }   /* only .menu's own children */

.menu a:hover { color: #F2A93B; }
```

### Javascript

```

```

## Your Tasks
### 1. Select every element of a type
An element selector needs no change to the markup.

```
p { color: #4B5563; }
```

### 2. Reuse one style with a class
Put `class="note"` on as many elements as you like; they all pick the rule up.

```
.note {
  color: #6B4207;
  background-color: #F2A93B;
}
```

### 3. Target one element with an id
Because an `id` is unique, this rule can match at most one element.

```
#title { color: #0F1B33; }
```

### 4. Group selectors, and set a page-wide default
A comma applies one block to several selectors; `*` matches everything.

```
* { font-family: system-ui, sans-serif; }

h1, h2, h3 { color: #0F1B33; }
```

### 5. Add an interactive state
A pseudo-class can follow a combinator, just like any other selector.

```
.menu a:hover { color: #F2A93B; }
```

## Exercises

### Exercise 1: Class and id together
List five KMITL courses. Give them all `class="course"`, and give the one you are enrolled in
`id="mine"`. Style the class grey and the id navy.

### Exercise 2: Group, then override
Style `h1`, `h2` and `h3` with one grouped rule, then add a second rule that changes `h3` only.

### Exercise 3: Two levels deep
Write markup where `.menu a` matches a link but `.menu > a` does not. Explain in one sentence why.

### Exercise 4: Hover feedback
Make every nav link change its background color and gain an underline on `:hover`, and keep the
text readable in both states.

### Exercise 5: Count the matches
Open DevTools, press Ctrl+F in the Elements panel, and type `.menu a`. Report how many elements the
selector matches, then repeat with `.menu > a`.

## Quizes

### Q1. Which lists the selector priority order correctly, lowest to highest?
1. id, then class/pseudo-class, then type/universal
2. type/universal, then class/pseudo-class, then id
3. class/pseudo-class, then id, then type/universal
4. All four kinds share exactly the same priority

### Q2. What does `nav > a` match?
1. Every `<a>` anywhere inside a `<nav>`
2. Only an `<a>` that is a direct child of a `<nav>`
3. The `<a>` that comes immediately after a `<nav>`
4. Every `<nav>` that sits inside an `<a>`

### Q3. Given `<div class="menu"><ul><li><a>Home</a></li></ul></div>`, which rule colors the link?
1. `.menu > a { color: red; }`
2. `.menu a { color: red; }`
3. `a > .menu { color: red; }`
4. `.menu.a { color: red; }`

### Q4. How many elements on one page may use the same `id` value?
1. One
2. Two
3. Any number
4. Any number, as long as they are siblings

### Q5. What is `a:hover`?
1. A class selector for links marked hoverable
2. An id selector
3. An element selector that only works on links
4. A pseudo-class that applies while the pointer is over the link
