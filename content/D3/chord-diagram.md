# Chord diagrams with D3

A chord diagram shows flows between categories using a square matrix: `matrix[i][j]` is the flow from
category `i` to category `j`. `d3.chord()` turns that matrix into a layout — an arc per category and a
ribbon per non-zero flow between two categories — without you computing any angles by hand.

`d3.arc()` draws each category's outer arc; `d3.ribbon()` draws the curved band connecting two arcs,
sized by the flow value. Hovering an arc is a natural place for interactivity: dim every ribbon except
the ones touching that category, so the diagram highlights just that category's connections.

## Display
### HTML

```
<script src="resources/js/d3.v7.min.js"></script>
<div id="chart"></div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
#chart path { cursor: pointer; }
```

### Javascript

```
const matrix = [
  [0, 12, 4, 8],
  [10, 0, 6, 2],
  [3, 7, 0, 9],
  [5, 2, 8, 0],
];
const names = ["CE", "IT", "EE", "ME"];
const color = d3.scaleOrdinal(names, ["#0F1B33", "#F2A93B", "#15803D", "#B91C1C"]);

const width = 320, height = 320, outerR = Math.min(width, height) / 2 - 40, innerR = outerR - 16;

const svg = d3.select("#chart").append("svg")
  .attr("width", width).attr("height", height)
  .append("g").attr("transform", `translate(${width / 2},${height / 2})`);

const chords = d3.chord().padAngle(0.05).sortSubgroups(d3.descending)(matrix);

const arcGen = d3.arc().innerRadius(innerR).outerRadius(outerR);
const ribbonGen = d3.ribbon().radius(innerR);

const ribbons = svg.append("g").attr("fill-opacity", 0.75)
  .selectAll("path").data(chords).join("path")
  .attr("d", ribbonGen)
  .attr("fill", d => color(names[d.source.index]))
  .attr("stroke", "#fff");

svg.append("g")
  .selectAll("path").data(chords.groups).join("path")
  .attr("d", arcGen)
  .attr("fill", d => color(names[d.index]))
  .attr("stroke", "#fff")
  .on("mouseenter", (event, d) => {
    ribbons.attr("fill-opacity", r =>
      (r.source.index === d.index || r.target.index === d.index) ? 0.95 : 0.08);
  })
  .on("mouseleave", () => ribbons.attr("fill-opacity", 0.75))
  .append("title")
  .text(d => names[d.index]);
```

## Your Tasks
### 1. Describe flows with a matrix
`matrix[i][j]` is the flow from category `i` to category `j`; the diagonal is usually `0`.

```
const matrix = [
  [0, 12],
  [10, 0],
];
```

### 2. Build the chord layout
`d3.chord()` computes every arc and ribbon's angles from the matrix, ready to draw.

```
const chords = d3.chord()(matrix);
chords.groups; // one entry per category
```

### 3. Draw the category arcs
`d3.arc()` needs an inner and outer radius; each group becomes one arc.

```
const arcGen = d3.arc().innerRadius(100).outerRadius(116);
svg.selectAll("path").data(chords.groups).join("path").attr("d", arcGen);
```

### 4. Draw the connecting ribbons
`d3.ribbon()` draws the curved band between two categories' arcs, sized by the flow.

```
const ribbonGen = d3.ribbon().radius(100);
svg.selectAll("path.ribbon").data(chords).join("path").attr("d", ribbonGen);
```

### 5. Highlight on hover
Recolour every ribbon's opacity based on whether it touches the hovered category.

```
.on("mouseenter", (event, d) => {
  ribbons.attr("fill-opacity", r => r.source.index === d.index ? 0.95 : 0.08);
});
```

## Exercises

### Exercise 1: A fifth category
Add a fifth row and column to the matrix for a new category, and confirm a new arc and its ribbons
appear automatically.

### Exercise 2: Colour by target instead of source
Change each ribbon's fill to `color(names[d.target.index])` and describe how the diagram's colouring
changes.

### Exercise 3: Category labels
Add a `<text>` label positioned at the midpoint angle of each arc, outside the outer radius.

### Exercise 4: Click to pin a highlight
Change the hover highlight into a click-to-pin highlight that stays until a different category is
clicked.

### Exercise 5: Tooltip with the exact flow value
Add a `mouseenter` handler on the ribbons themselves that shows `d.source.value` in a tooltip.

## Quizes

### Q1. What does `matrix[i][j]` represent in a chord diagram?
1. The colour of category `i`
2. The flow or relationship from category `i` to category `j`
3. The angle of category `i`'s arc
4. The number of categories total

### Q2. What does `d3.chord()(matrix)` return?
1. A single SVG path string
2. A colour scale
3. A layout object with `groups` (arcs) and per-cell ribbon data
4. The original matrix, unchanged

### Q3. What does `d3.ribbon()` draw?
1. A straight line between two points
2. The curved band connecting two categories' arcs
3. The outer arc for one category
4. An axis tick

### Q4. In the hover handler, why check `r.source.index === d.index || r.target.index === d.index`?
1. To find ribbons that touch the hovered category on either end
2. To find the ribbon with the largest value
3. To sort the ribbons by colour
4. This check has no effect on the diagram

### Q5. What determines a ribbon's width where it meets an arc?
1. It is always the same fixed width
2. The corresponding matrix cell's flow value
3. The category's alphabetical position
4. The `innerRadius` only
