# Force-directed graphs with D3

A force simulation positions nodes by running small physics forces every tick, instead of you
computing coordinates: `forceManyBody` pushes nodes apart, `forceLink` pulls linked nodes toward a
target distance, and `forceCenter` keeps the whole graph centred. `d3.forceSimulation(nodes)` starts
the simulation; it settles into a stable layout after a couple of seconds.

Every `tick` event, the simulation updates each node's `x`/`y`, and your `on("tick", ...)` handler
copies those into the SVG elements' positions. `d3.drag()` makes a node draggable by pinning `fx`/`fy`
while the mouse is down and releasing them on drop, so the simulation can keep moving it.

## Display
### HTML

```
<script src="resources/js/d3.v7.min.js"></script>
<div id="chart"></div>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
#chart circle { cursor: grab; } #chart text { font-size: 10px; pointer-events: none; }
```

### Javascript

```
const nodes = [
  { id: "CE 2103" }, { id: "CE 2201" }, { id: "CE 2305" },
  { id: "CE 2410" }, { id: "CE 3102" }, { id: "CE 3201" },
];
const links = [
  { source: "CE 2103", target: "CE 2201" }, { source: "CE 2103", target: "CE 2305" },
  { source: "CE 2201", target: "CE 2410" }, { source: "CE 2305", target: "CE 3102" },
  { source: "CE 2410", target: "CE 3201" }, { source: "CE 3102", target: "CE 3201" },
];

const width = 420, height = 300;
const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);

const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(70))
  .force("charge", d3.forceManyBody().strength(-180))
  .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g").attr("stroke", "#9AA5B1")
  .selectAll("line").data(links).join("line").attr("stroke-width", 1.5);

const node = svg.append("g")
  .selectAll("circle").data(nodes).join("circle")
  .attr("r", 10).attr("fill", "#0F1B33")
  .call(drag(simulation));

node.append("title").text(d => d.id);

const label = svg.append("g")
  .selectAll("text").data(nodes).join("text")
  .text(d => d.id).attr("dx", 12).attr("dy", 4);

simulation.on("tick", () => {
  link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
  node.attr("cx", d => d.x).attr("cy", d => d.y);
  label.attr("x", d => d.x).attr("y", d => d.y);
});

function drag(sim) {
  function started(event, d) {
    if (!event.active) sim.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
  function ended(event, d) {
    if (!event.active) sim.alphaTarget(0);
    d.fx = null; d.fy = null;
  }
  return d3.drag().on("start", started).on("drag", dragged).on("end", ended);
}
```

## Your Tasks
### 1. Start a simulation from a node list
`forceSimulation` mutates each node object in place, adding `x`, `y`, `vx`, `vy`.

```
const simulation = d3.forceSimulation(nodes);
```

### 2. Pull linked nodes together
`forceLink` needs an `id` accessor so it can match `link.source`/`link.target` strings to node objects.

```
d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(70));
```

### 3. Push nodes apart
A negative `strength` in `forceManyBody` repels nodes from each other, preventing overlap.

```
.force("charge", d3.forceManyBody().strength(-180));
```

### 4. Update positions every tick
The `tick` handler is where physics coordinates become actual SVG attribute values.

```
simulation.on("tick", () => {
  node.attr("cx", d => d.x).attr("cy", d => d.y);
});
```

### 5. Make a node draggable
`fx`/`fy` pin a node in place while dragging; clearing them on release lets it rejoin the simulation.

```
function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
```

## Exercises

### Exercise 1: Stronger repulsion
Change `forceManyBody().strength(-180)` to `-400` and describe how the layout spreads out differently.

### Exercise 2: Color by degree
Count how many links touch each node, then color nodes with more connections a different color.

### Exercise 3: Directed arrows
Add an SVG `<marker>` arrowhead to each link so the graph reads as directed rather than undirected.

### Exercise 4: Click to isolate
On node click, dim every link and node except the clicked node's direct neighbours.

### Exercise 5: Fix one node in place
Set a node's `fx`/`fy` once at startup (not via drag) so it never moves, and watch the rest of the
graph settle around it.

## Quizes

### Q1. What does `forceManyBody().strength(-180)` do?
1. Attracts every node toward the centre with strength 180
2. Repels nodes from each other, preventing overlap
3. Sets each node's radius to 180
4. Limits the simulation to 180 ticks

### Q2. Why does `forceLink` need an `id` accessor when links reference nodes by string?
1. It does not — links must reference node objects directly
2. To match each link's `source`/`target` string to the corresponding node object
3. To generate a unique DOM id for each link element
4. It is optional and only affects link color

### Q3. What happens inside a `tick` handler?
1. The simulation stops permanently
2. Node and link DOM attributes are updated from the simulation's current `x`/`y` values
3. New nodes are added to the graph
4. The SVG element is deleted and recreated

### Q4. What do `fx` and `fy` do while a node is being dragged?
1. Nothing — dragging is handled entirely by the browser
2. They pin the node's position, overriding the simulation's forces until released
3. They set the node's fill color
4. They permanently remove the node from the simulation

### Q5. What does `d3.forceCenter(width / 2, height / 2)` do?
1. Removes all other forces
2. Pulls the whole graph's average position toward the given point
3. Sets every node's initial position to that exact point
4. Has no visible effect on the layout
