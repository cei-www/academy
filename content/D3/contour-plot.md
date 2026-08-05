# Contour plots with D3

Given a cloud of scattered points, `d3.contourDensity()` estimates where they are dense and returns a
set of contour polygons — the 2D equivalent of elevation lines on a map, but for point density instead
of height. `bandwidth` controls how smooth each contour is, and `thresholds` controls how many density
levels are drawn.

Each returned contour is a GeoJSON `MultiPolygon` with a `value` (its density level); `d3.geoPath()`
turns that geometry into an SVG path's `d` attribute, the same renderer used for maps. Colouring each
contour by its `value` with a sequential scale, and adding a hover handler per contour, turns a static
density plot into something a student can probe.

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
```

### Javascript

```
const width = 420, height = 300;

function cluster(cx, cy, n, spread) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    pts.push([
      cx + (Math.random() + Math.random() + Math.random() - 1.5) * spread,
      cy + (Math.random() + Math.random() + Math.random() - 1.5) * spread,
    ]);
  }
  return pts;
}
const points = [...cluster(120, 200, 80, 60), ...cluster(280, 100, 80, 50)];

const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);

const contours = d3.contourDensity()
  .x(d => d[0]).y(d => d[1])
  .size([width, height]).bandwidth(20).thresholds(8)
  (points);

const color = d3.scaleSequential(d3.interpolateBlues)
  .domain(d3.extent(contours, d => d.value));
const path = d3.geoPath();
const tooltip = d3.select("#tooltip");

svg.append("g")
  .selectAll("path").data(contours).join("path")
  .attr("d", path)
  .attr("fill", d => color(d.value))
  .attr("stroke", "#0F1B33").attr("stroke-width", 0.4)
  .on("mouseenter", function (event, d) {
    d3.select(this).attr("stroke-width", 1.5);
    tooltip.style("opacity", 1).text(`density level ${d.value.toFixed(4)}`);
  })
  .on("mousemove", event => {
    tooltip.style("left", (event.pageX + 12) + "px").style("top", (event.pageY - 20) + "px");
  })
  .on("mouseleave", function () {
    d3.select(this).attr("stroke-width", 0.4);
    tooltip.style("opacity", 0);
  });

svg.selectAll("circle").data(points).join("circle")
  .attr("cx", d => d[0]).attr("cy", d => d[1]).attr("r", 1.5)
  .attr("fill", "#131A26").attr("opacity", 0.5);
```

## Your Tasks
### 1. Build a point cloud
Contours need raw `[x, y]` points, not pre-aggregated data — density is computed for you.

```
const points = [[100, 100], [104, 98], [220, 60], /* ... */];
```

### 2. Compute density contours
`x`/`y` accessors, a `size`, and the point array are all `contourDensity` needs.

```
const contours = d3.contourDensity().x(d => d[0]).y(d => d[1]).size([420, 300])(points);
```

### 3. Control smoothness and levels
`bandwidth` smooths the estimate; `thresholds` sets how many contour levels are computed.

```
d3.contourDensity().bandwidth(20).thresholds(8);
```

### 4. Draw each contour as a path
Each contour is GeoJSON geometry; `d3.geoPath()` converts it to an SVG `d` attribute.

```
const path = d3.geoPath();
svg.selectAll("path").data(contours).join("path").attr("d", path);
```

### 5. Colour by density value
A sequential scale maps each contour's `value` to a colour, darkest where points are densest.

```
const color = d3.scaleSequential(d3.interpolateBlues).domain(d3.extent(contours, d => d.value));
```

## Exercises

### Exercise 1: Three clusters
Add a third `cluster(...)` call at a different centre and re-render. Describe how the contours change
where two clusters overlap.

### Exercise 2: Adjust bandwidth
Try `bandwidth(8)` and `bandwidth(40)` on the same data and describe the visual difference.

### Exercise 3: More threshold levels
Change `thresholds(8)` to `thresholds(16)` and describe how the contour lines change.

### Exercise 4: Real data instead of random clusters
Replace the two `cluster()` calls with a hand-typed array of 15–20 `[x, y]` points representing exam
score vs. study hours for a class, then render its density contours.

### Exercise 5: Legend
Add a small colour legend showing which shade of blue corresponds to which density `value`.

## Quizes

### Q1. What kind of input does `d3.contourDensity()` expect?
1. Pre-aggregated bins with counts
2. Raw `[x, y]` points; density is estimated for you
3. A single average and standard deviation
4. A CSV file path

### Q2. What does the `bandwidth` option control?
1. The chart's pixel width
2. How smooth the density estimate is
3. The number of points in the dataset
4. The stroke width of each contour's outline

### Q3. What does each object in the array returned by `contourDensity()` represent?
1. A single data point
2. A GeoJSON polygon at one density level, with a `value`
3. An axis tick
4. A colour from the scale

### Q4. What does `d3.geoPath()` do with a contour object?
1. Nothing — contours render without a path generator
2. Converts its GeoJSON geometry into an SVG path's `d` attribute
3. Projects it onto a world map
4. Computes its `value` from scratch

### Q5. What does `d3.scaleSequential(d3.interpolateBlues).domain(d3.extent(contours, d => d.value))` do?
1. Sorts the contours by value
2. Maps each contour's density value onto a continuous blue colour range
3. Filters out contours below the median value
4. Converts the contours back into raw points
