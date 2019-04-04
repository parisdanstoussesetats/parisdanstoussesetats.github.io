var piewidth = 600,
    pieheight = 600,
    radius = Math.min(piewidth, pieheight) / 2;

color = d3.scale.ordinal()
    .range(["#CFF09E", "#A8DBA8", "#79BD9A", "#3B8686", "#0B486B", "#588A70"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.total; });

var piesvg = d3.select("body").append("svg")
    .attr("width", piewidth)
    .attr("height", pieheight)
  .append("g")
    .attr("transform", "translate(" + piewidth / 2 + "," + pieheight / 2 + ")");

d3.csv("../data/music.csv", function(error, data) {
    data.forEach(function(d) {
    d.total = +d.total;
});

    var g = piesvg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

    g.append("path")
    .attr("d", arc)
    .style("fill", function(d) { return color(d.data.style); });

    g.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.style; });

});
