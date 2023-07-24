const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400);
const y = d3.scaleLinear()
    .domain([0,828])
    .range([0,400]);
console.log(y(100))
