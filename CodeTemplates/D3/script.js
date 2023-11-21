// Sample data with names for each series
var data = [
    { name: "Series A", values: [10, 20, 30, 40, 50] },
    { name: "Series B", values: [50, 40, 30, 20, 10] },
    { name: "Average", values: [30, 30, 30, 30, 30]}
    // Add more series as needed
];

// Create an SVG container
var svg = d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 200);

// Create a function to generate a line for each series
var line = d3.line()
    .x(function (d, i) { return i * 80; })
    .y(function (d) { return d; });

// Bind data to path elements
var lines = svg.selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", function (d) { return line(d.values); })
    .attr("stroke", function (d, i) { return d3.schemeCategory10[i]; }) // Assign different colors to each series
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .on("mouseover", function (d) {
        // Show tooltip with the series name
        tooltip.transition()
            .duration(0)
            .style("opacity", .9);
        tooltip.html(d.name)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })
    .on("mouseout", function (d) {
        // Hide tooltip
        tooltip.transition()
            .duration(0)
            .style("opacity", 0);
    });

// Create a tooltip div
var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("padding", "5px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "5px")
    .style("opacity", 0);
