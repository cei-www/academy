# Line charts with D3

D3 does not draw a chart for you — it maps data to numbers with **scales**, turns those numbers into
an SVG path with a **line generator**, and lets you attach ordinary DOM events to make it interactive.
`d3.scaleLinear().domain([...]).range([...])` converts a data value into a pixel position; the domain
is the data's range, the range is the pixel range on screen.

`d3.line()` takes an `x` and `y` accessor and returns a function that turns an array of points into one
`d` attribute for a `<path>`. For hover interaction, a transparent overlay `<rect>` listens for
`mousemove`, `d3.pointer(event)` gives the mouse position, `x.invert(mx)` turns that pixel back into a
data value, and `d3.bisector` finds the nearest data point to show in a tooltip.

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
.axis path, .axis line { stroke: #9AA5B1; }
```

### Javascript

```
const data = [
  { week: 1, score: 62 }, { week: 2, score: 68 }, { week: 3, score: 71 },
  { week: 4, score: 75 }, { week: 5, score: 74 }, { week: 6, score: 81 },
  { week: 7, score: 85 }, { week: 8, score: 89 },
];
const width = 420, height = 260, margin = { top: 20, right: 20, bottom: 30, left: 40 };
const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);
const x = d3.scaleLinear().domain(d3.extent(data, d => d.week)).range([margin.left, width - margin.right]);
const y = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);

svg.append("g").attr("class", "axis")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(data.length).tickFormat(d => "wk " + d));
svg.append("g").attr("class", "axis")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y));

const line = d3.line().x(d => x(d.week)).y(d => y(d.score));
svg.append("path").datum(data)
  .attr("fill", "none").attr("stroke", "#0F1B33").attr("stroke-width", 2).attr("d", line);

const focus = svg.append("circle").attr("r", 5).attr("fill", "#F2A93B").style("display", "none");
const tooltip = d3.select("#tooltip");
const bisect = d3.bisector(d => d.week).left;

svg.append("rect")
  .attr("x", margin.left).attr("y", margin.top)
  .attr("width", width - margin.left - margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("fill", "transparent")
  .on("mousemove", function (event) {
    const [mx] = d3.pointer(event);
    const i = bisect(data, x.invert(mx), 1);
    const d = data[Math.min(i, data.length - 1)];
    focus.attr("cx", x(d.week)).attr("cy", y(d.score)).style("display", null);
    tooltip.style("opacity", 1)
      .style("left", (event.pageX + 12) + "px").style("top", (event.pageY - 20) + "px")
      .text(`Week ${d.week}: ${d.score}`);
  })
  .on("mouseleave", () => { focus.style("display", "none"); tooltip.style("opacity", 0); });
```

## Your Tasks
### 1. Map data to pixels with a scale
`domain` is the data's own range; `range` is where it lands on screen.

```
const x = d3.scaleLinear().domain([1, 8]).range([40, 400]);
x(4.5); // a pixel position between 40 and 400
```

### 2. Build a line generator
`d3.line()` returns a function; call it with the data array to get a path's `d` string.

```
const line = d3.line().x(d => x(d.week)).y(d => y(d.score));
svg.append("path").datum(data).attr("d", line).attr("fill", "none").attr("stroke", "#0F1B33");
```

### 3. Draw an axis
`d3.axisBottom(scale)` builds tick marks and labels; `.call()` renders it into a `<g>`.

```
svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x));
```

### 4. Convert a pixel back into data
`scale.invert(px)` is the reverse of calling the scale — pixel in, data value out.

```
svg.on("mousemove", (event) => {
  const [mx] = d3.pointer(event);
  console.log(x.invert(mx));
});
```

### 5. Find the nearest point
`d3.bisector` locates where a value would insert into a sorted array — the nearest data point.

```
const bisect = d3.bisector(d => d.week).left;
const i = bisect(data, 4.5, 1);
```

## Exercises

### Exercise 1: Second series
Add a second line for a different course's weekly scores, in a different stroke colour, on the same
axes.

### Exercise 2: Y domain from data
Replace the hard-coded `[0, 100]` y-domain with `d3.extent(data, d => d.score)` and describe how the
line's shape changes.

### Exercise 3: Format the tooltip
Change the tooltip text to show a percentage sign and round the score to the nearest whole number.

### Exercise 4: Highlight the max
Find the data point with the highest score using `d3.max` or a manual reduce, and mark it with a
permanently visible circle.

### Exercise 5: Area under the line
Replace or add to the line with `d3.area()`, which needs a `y0` and `y1` accessor, and fill it with a
translucent colour.

## Quizes

### Q1. What does `d3.scaleLinear().domain([1,8]).range([40,400])` do?
1. Draws a line from `(1,8)` to `(40,400)`
2. Returns a function mapping data values `1..8` to pixel positions `40..400`
3. Creates an SVG `<line>` element directly
4. Filters the dataset to values between 1 and 8

### Q2. What does `d3.line()` return?
1. A single `<path>` DOM element
2. A function that turns an array of points into a path's `d` string
3. An array of pixel coordinates
4. A CSS class name for styling lines

### Q3. What does `scale.invert(px)` compute?
1. The scale's domain, reversed
2. The data value that maps to the given pixel position
3. A mirrored copy of the scale
4. The pixel position for the given data value

### Q4. Why use a transparent overlay `<rect>` for the tooltip's `mousemove` listener?
1. It is required for SVG to fire mouse events at all
2. It gives one continuous hit area, instead of only where the thin line itself is drawn
3. It hides the chart until hovered
4. It is not necessary — the trick is unnecessary complexity

### Q5. What does `d3.bisector(d => d.week).left` help find?
1. The leftmost pixel of the chart
2. Where a value would insert into the sorted data, i.e. the nearest point
3. The axis label with the smallest width
4. The first data point in the array, always
