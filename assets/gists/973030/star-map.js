// Set the width and height of the SVG container
var width = 400,
    height = 400;

// Select the container div and append the SVG element
var div = d3.select('#map'),
    svg = div.append('svg').attr('width', width).attr('height', height),
    grp = svg.append('g').attr('class', 'gmap');

// Add a lighting effect to give the circle a spherical aspect
var filter = svg.append('filter').attr('id', 'lightMe');

filter.append('feDiffuseLighting')
    .attr('in', 'SourceGraphic')
    .attr('result', 'light')
    .attr('lighting-color', 'white')
    .append('fePointLight')
        .attr('x', 0.85 * width)
        .attr('y', 0.85 * height)
        .attr('z', 50);

filter.append('feComposite')
    .attr('in', 'SourceGraphic')
    .attr('in2', 'light')
    .attr('operator', 'arithmetic')
    .attr('k1', '1')
    .attr('k2', '0')
    .attr('k3', '0')
    .attr('k4', '0');

// Projectioon and Path Generator
// ------------------------------

// Store the current rotation
var rotate = {x: 0, y: 90};

// Create and configure an instance of the orthographic projection
var projection = d3.geo.orthographic()
    .scale(width / 2)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .rotate([rotate.x / 2, -rotate.y / 2]);

// Create and configure the geographic path generator
var path = d3.geo.path().projection(projection);

// Overlay
// -------
var overlay = svg.selectAll('circle').data([rotate])
    .enter().append('circle')
    .attr('transform', 'translate(' + [width / 2, height / 2] + ')')
    .attr('r', width / 2)
    .attr('filter', 'url(#lightMe)')
    .attr('class', 'overlay');

// Globe Outline
// -------------
var globe = grp.selectAll('path.globe').data([{type: 'Sphere'}])
    .enter().append('path')
    .attr('class', 'globe')
    .attr('d', path);

// Graticule
// ---------
var graticule = d3.geo.graticule();

// Draw graticule lines
grp.selectAll('path.graticule').data([graticule()])
    .enter().append('path')
    .attr('class', 'graticule')
    .attr('d', path);

// Load the stellar catalog
d3.json('/assets/gists/973030/hyg.json', function(error, data) {

    // Handle errors getting and parsing the data
    if (error) { return error; }

    // Compute the radius scale. The radius will be proportional to
    // the aparent magnitude
    var rScale = d3.scale.linear()
        .domain(d3.extent(data.features, function(d) { return d.properties.mag; }))
        .range([3, 1]);

    // Compute the radius for the point features
    path.pointRadius(function(d) {
        return d.properties ? rScale(d.properties.mag) : 1;
    });

    // Stars
    // -----
    grp.selectAll('path.star').data(data.features)
        .enter().append('path')
        .attr('class', 'star')
        .attr('d', path);

    // Drag Behavior
    // -------------
    var dragBehavior = d3.behavior.drag()
        .origin(Object)
        .on('drag', function(d) {
            projection.rotate([(d.x = d3.event.x) / 2, -(d.y = d3.event.y) / 2]);
            svg.selectAll('path').attr('d', function(u) {
                // The circles are not properly generated when the
                // projection has the clipAngle option set.
                return path(u) ? path(u) : 'M 10 10';
            });
        });

    // Add the drag behavior to the overlay
    overlay.call(dragBehavior);
});