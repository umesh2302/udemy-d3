/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 70)
  .attr("fill", "red")

/*rect x="0" y="0" width="50" height="50" fill="green"></rect*/
svg.append('rect')
  .attr('x',0)
  .attr('y',0)
  .attr('width',20)
  .attr('height',20)
  .attr('fill','green')



  