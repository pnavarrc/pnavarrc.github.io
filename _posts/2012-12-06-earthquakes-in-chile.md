---
layout: post
title:  Earthquakes in Chile since 1900
date:   2012-12-06
screenshot: 2012-12-06-earthquakes.png
github: https://github.com/pnavarrc/earthquake
live: http://pnavarrc.github.io/earthquake/
categories: project
---

A timelapse animation of the most important seismic events in Chile since 1900. Each earthquake is represented with a red bubble centered in the epicenter, the area of the circle, color and duration of the bubble are proportional to the earthquake magnitude.

<div class="screenshot">
<img src="{{site.screenshots}}/2012-12-06-earthquakes.png" alt="Screenshot - Earthquakes in Chile since 1900.">
</div>

This project was made with [D3](http://d3js.org/), [Mapbox](https://www.mapbox.com/) and [Bootstrap](http://getbootstrap.com/). Mapbox uses open data from OpenStreepMap and its contributors.

The earthquake data was retrieved from the [ANSS Composite Catalog](http://quake.geo.berkeley.edu/cnss/) and joined with the [Centennial Catalog](http://earthquake.usgs.gov/research/data/centennial.php) from the [USGS](http://www.usgs.gov/). Thanks to the USGS, to the  Advanced National Seismic System (ANSS) for providing the catalog and to the [Northern California Earthquake Data Center (NCEDC)](http://quake.geo.berkeley.edu/) and to the organizations that contributed the data to the NCEDC.

{% include github.html href="https://github.com/pnavarrc/earthquake" %}
{% include live.html href="http://pnavarrc.github.io/earthquake/" %}
