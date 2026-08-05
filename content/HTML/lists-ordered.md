# Ordered lists

`<ol>` is a list whose order carries meaning — reordering the items would change what the list says, as in installation steps or a ranking. Like `<ul>`, it only accepts `<li>` children.

Two attributes control the numbering: `start="5"` makes it begin at 5, and `type` chooses the marker style — `1`, `a`, `A`, `i` or `I`. Add `reversed` to count down instead of up, useful for a top-N ranking.

## Display
### HTML

```
<h2>Enrolment steps</h2>
<ol>
  <li>Log in to the KMITL student portal</li>
  <li>Choose your courses</li>
  <li>Pay the fee</li>
</ol>
```

### CSS

```

```

### Javascript

```

```

## Your Tasks
### 1. Write an ordered list
These steps only work in this order, so use `<ol>`.

```
<ol>
  <li>Open the terminal</li>
  <li>Run the local server</li>
  <li>Open localhost:8000</li>
</ol>
```

### 2. Start the numbering elsewhere
`start` sets the first number; the rest continue from it.

```
<ol start="4">
  <li>Submit the form</li>
  <li>Wait for approval</li>
</ol>
```

### 3. Change the marker style
`type="a"` switches the marker from digits to lower-case letters.

```
<ol type="a">
  <li>Read the brief</li>
  <li>Draft the design</li>
</ol>
```

### 4. Combine start and type
Both attributes work together on the same list.

```
<ol start="3" type="I">
  <li>Compile the report</li>
  <li>Submit for review</li>
</ol>
```

### 5. Count down with reversed
`reversed` numbers from the item count down to 1, without changing the display order in the markup.

```
<ol reversed>
  <li>Third place</li>
  <li>Second place</li>
  <li>First place</li>
</ol>
```

## Exercises

### Exercise 1: Steps to submit an assignment
Write the three steps to submit an assignment as an `<ol>` and explain in one sentence why `<ul>` would be the wrong choice.

### Exercise 2: Numbered from ten
Produce a list numbered 10, 11, 12.

### Exercise 3: Roman numerals
Write a three-item list marked with lower-case Roman numerals.

### Exercise 4: Reversed top three
Build a reversed three-item ranking so the first `<li>` in the markup shows as `3.` and the last shows as `1.`.

### Exercise 5: `<ol>` or `<ul>`?
Given two lists — your three favourite programming languages, and the three steps to install Node.js — decide which should be `<ol>` and which `<ul>`, and justify each in one sentence.

## Quizes

### Q1. Which element should hold a ranked top-five list?
1. `<ul>`
2. `<ol>`
3. `<dl>`
4. `<li>`

### Q2. What does `start="5"` do on an `<ol>`?
1. Shows only the fifth item
2. Makes the numbering begin at 5
3. Skips the first five items
4. Sets the list to have exactly 5 items

### Q3. Which `type` value produces lower-case Roman numerals?
1. `type="a"`
2. `type="A"`
3. `type="i"`
4. `type="1"`

### Q4. What does `<ol start="3" type="A">` produce for two items?
1. `3.` and `4.`
2. `A.` and `B.`
3. `C.` and `D.`
4. `3A.` and `3B.`

### Q5. What does the `reversed` attribute change?
1. It reverses the order the `<li>` elements are written in the markup
2. It numbers the list downward without changing markup order
3. It hides the numbers entirely
4. It turns the list into a `<ul>`
