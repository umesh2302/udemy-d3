/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("./data/buildings.json").then(data => {
    console.log(data)
    data.forEach(d => {
        d.height = Number(d.height)

    });
    const svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400)

    const rectangle = svg.selectAll("rect")
		.data(data)
    rectangle.enter().append("rect")
	.attr("x", (d, i) => (i * 60))
	.attr("y", 0)
	.attr("width", 40)
    .attr('height', (d) => d.height)
	.attr("fill", 'grey')
});

