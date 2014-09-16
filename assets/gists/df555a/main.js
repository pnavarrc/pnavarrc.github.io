// Define the width and height
var width  = 800,
    height = 600;

// Select the container div and create the SVG element
var div = d3.select('#patterns'),
    svg = div.append('svg');

svg
    .attr('width', width)
    .attr('height', height);

// Create an instance of the bar pattern chart
var pattern = barPattern()
    .width(width)
    .height(height);

var data = [
    {n: 105, angle: 0, padding: 0.5, color: '#FF6B6B'},
    {n: 100, angle: 0, padding: 0.5, color: '#4ECDC4'}
];

function updatePattern() {
    var groups = svg.selectAll('g.pattern').data(data);
    groups.enter().append('g').classed('pattern', true);
    groups.call(pattern);
}

updatePattern();

// Update the pattern when the user changes the input value

d3.select('#input-na').on('input', function() {
    data[0].n = +this.value;
    updatePattern();
});

d3.select('#input-ta').on('input', function() {
    data[0].angle = +this.value;
    updatePattern();
});

d3.select('#input-pa').on('input', function() {
    data[0].padding = +this.value;
    updatePattern();
});

d3.select('#input-ca').on('input', function() {
    data[0].color = this.value;
    updatePattern();
});

d3.select('#input-nb').on('input', function() {
    data[1].n = +this.value;
    updatePattern();
});

d3.select('#input-tb').on('input', function() {
    data[1].angle = +this.value;
    updatePattern();
});

d3.select('#input-pb').on('input', function() {
    data[1].padding = +this.value;
    updatePattern();
});

d3.select('#input-cb').on('input', function() {
    data[1].color = this.value;
    updatePattern();
});