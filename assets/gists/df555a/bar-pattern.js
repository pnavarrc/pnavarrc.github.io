function barPattern() {
    'use strict';

    // Chart attributes
    var me = {
        width:  100,
        height: 100
    };

    function chart(selection) {
        selection.each(function(data) {

            var grp = d3.select(this);

            var items = d3.range(data.n),
                angle = data.angle,
                color = data.color;

            var xScale = d3.scale.ordinal()
                .domain(items)
                .rangeBands([0, me.width], data.padding);

            grp.transition().duration(1000)
                .attr('transform', 'rotate(' + angle + ')');

            var bars = grp.selectAll('rect.bar').data(items);

            bars.enter().append('rect').classed('bar', true)
                .attr('fill', color);

            bars.transition().duration(1000)
                .attr('x', function(d, i) { return xScale(i); })
                .attr('width', xScale.rangeBand())
                .attr('height', me.height)
                .attr('fill', color);

            bars.exit().remove();
        });
    }

    // Accessor methods

    chart.width = function(value) {
        if (!arguments.length) { return me.width; }
        me.width = value;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) { return me.height; }
        me.height = value;
        return chart;
    };

    return chart;
}