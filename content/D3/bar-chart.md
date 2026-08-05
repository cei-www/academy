# Bar charts with D3

A bar chart needs one scale per axis, but the category axis uses `d3.scaleBand()` instead of
`scaleLinear` — its domain is a list of names, not a numeric range, and it hands back both a position
and a computed `bandwidth()` for each bar's width. The classic D3 pattern for drawing many elements
from an array is `selection.selectAll("rect").data(data).join("rect")`: it creates one `<rect>` per
data item and binds each item to its element via `.datum`, so later code can read it back with `d`.

Interactivity is just DOM events on those elements — `mouseenter`/`mouseleave` to change a bar's fill
and show a tooltip, exactly like any other HTML element.

## Display
### HTML

```
<script src="resources/js/d3.v7.min.js"></script>
<div id="chart"></div>
<div id="tooltip"></div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
#tooltip { position: absolute; pointer-events: none; background: #131A26; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 12px; opacity: 0; transition: opacity 100ms ease; }
.bar { cursor: pointer; }
```

### Javascript

```
const data = [
  { course: "CE 2103", students: 42 }, { course: "CE 2201", students: 58 },
  { course: "CE 2305", students: 36 }, { course: "CE 2410", students: 49 },
  { course: "CE 3102", students: 27 },
];

const width = 420, height = 260, margin = { top: 20, right: 20, bottom: 46, left: 40 };

const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);

const x = d3.scaleBand().domain(data.map(d => d.course))
  .range([margin.left, width - margin.right]).padding(0.2);
const y = d3.scaleLinear().domain([0, d3.max(data, d => d.students)]).nice()
  .range([height - margin.bottom, margin.top]);

svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x))
  .selectAll("text").attr("transform", "rotate(-30)").style("text-anchor", "end");

svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y).ticks(5));

const tooltip = d3.select("#tooltip");

svg.selectAll("rect.bar").data(data).join("rect")
  .attr("class", "bar")
  .attr("x", d => x(d.course)).attr("y", d => y(d.students))
  .attr("width", x.bandwidth()).attr("height", d => y(0) - y(d.students))
  .attr("fill", "#0F1B33")
  .on("mouseenter", function (event, d) {
    d3.select(this).attr("fill", "#F2A93B");
    tooltip.style("opacity", 1).text(`${d.course}: ${d.students} students`);
  })
  .on("mousemove", event => {
    tooltip.style("left", (event.pageX + 12) + "px").style("top", (event.pageY - 20) + "px");
  })
  .on("mouseleave", function () {
    d3.select(this).attr("fill", "#0F1B33");
    tooltip.style("opacity", 0);
  });
```

## Your Tasks
### 1. Build a band scale
`scaleBand` maps a list of names to slots, and computes each slot's width for you.

```
const x = d3.scaleBand().domain(["A", "B", "C"]).range([0, 300]).padding(0.2);
x.bandwidth(); // the width of one bar
```

### 2. Draw one bar per item
`.data(data).join("rect")` creates exactly one element per array entry.

```
svg.selectAll("rect").data(data).join("rect")
  .attr("x", d => x(d.course)).attr("width", x.bandwidth());
```

### 3. Set a bar's height from the bottom up
SVG y grows downward, so a bar's height is the distance from the baseline to the value's y position.

```
.attr("y", d => y(d.students))
.attr("height", d => y(0) - y(d.students));
```

### 4. React to hover
`mouseenter`/`mouseleave` on each bar work exactly like on an HTML element.

```
.on("mouseenter", function (event, d) { d3.select(this).attr("fill", "#F2A93B"); });
```

### 5. Read the bound datum inside a handler
The handler receives `(event, d)`, where `d` is that element's own bound data.

```
.on("mouseenter", (event, d) => console.log(d.course, d.students));
```

## Exercises

### Exercise 1: Sort the bars
Sort `data` by `students` before building the scale, so the tallest bar is first.

### Exercise 2: Click to toggle a highlight
Add a `click` listener that toggles a `selected` class (and a distinct fill) on the clicked bar only.

### Exercise 3: Value labels
Add a `<text>` element above each bar showing its exact `students` count.

### Exercise 4: Horizontal bars
Swap the x and y roles so bars grow rightward from a vertical category axis instead.

### Exercise 5: Two grouped bars per category
Add a second value per course (e.g. `passed`) and draw two bars side by side per category using a
second, narrower band scale nested inside each `x(d.course)` slot.

## Quizes

### Q1. Why does a bar chart's category axis use `scaleBand` instead of `scaleLinear`?
1. `scaleBand` is faster to render
2. The domain is a list of discrete names, not a continuous numeric range
3. `scaleLinear` cannot be used inside SVG
4. `scaleBand` is required for any axis with more than 3 ticks

### Q2. What does `selection.selectAll("rect").data(data).join("rect")` do?
1. Selects existing `<rect>` elements only, ignoring `data`
2. Creates one `<rect>` per item in `data`, bound to that item
3. Deletes every `<rect>` already on the page
4. Runs once per pixel in the chart

### Q3. Why is a bar's height computed as `y(0) - y(d.students)`, not just `y(d.students)`?
1. SVG y-coordinates grow downward, so height is the distance from the baseline up to the value
2. It is a rounding correction with no real geometric meaning
3. `y(d.students)` alone gives a negative number
4. `y(0)` is always `0`, so the subtraction has no effect

### Q4. Inside `.on("mouseenter", function(event, d) { ... })`, what does `d` refer to?
1. The DOM element itself
2. The mouse event's coordinates
3. The data item bound to that specific element
4. The entire `data` array

### Q5. What does `x.bandwidth()` return, given `scaleBand().domain([...]).range([0,300]).padding(0.2)`?
1. The full range width, `300`
2. The computed width of one band, accounting for padding
3. The number of categories in the domain
4. The padding value itself, `0.2`
