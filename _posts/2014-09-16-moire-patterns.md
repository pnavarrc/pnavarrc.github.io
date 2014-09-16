---
layout: post
title:  Moiré Pattern
date:   2014-09-16
screenshot: 2014-09-16-moire-pattern.png
github: https://gist.github.com/pnavarrc/df555a89d8aa590d61aa
live: http://bl.ocks.org/pnavarrc/df555a89d8aa590d61aa
categories: gist project
---

Moiré Patterns are patterns that results from overlapping two periodical patterns (series of straight lines, for instance). This demo allows to create Moiré patterns by changing the relative angle between the patterns, the number of bars, the bar width and the color of the bars.

<form role="form">

    <div class="form-group">
        <label for="input-na">Bars</label>
        <input id="input-na" type="number" min="80" max="112" step="1" value="105">

        <label for="input-ta">Angle</label>
        <input id="input-ta" type="number" min="-90" max="90" step="0.1" value="0">

        <label for="input-pa">Padding</label>
        <input id="input-pa" type="number" min="0.05" max="0.95" step="0.05" value="0.5">

        <label for="input-ca">Color</label>
        <input id="input-ca" type="color" value="#FF6B6B">
    </div>

    <div class="form-group">
        <label for="input-nb">Bars</label>
        <input id="input-nb" type="number" min="80" max="112" step="1" value="100">

        <label for="input-tb">Angle</label>
        <input id="input-tb" type="number" min="-90" max="90" step="0.1" value="0">

        <label for="input-pb">Padding</label>
        <input id="input-pb" type="number" min="0.05" max="0.95" step="0.05" value="0.5">

        <label for="input-cb">Color</label>
        <input id="input-cb" type="color" value="#4ECDC4">
    </div>
</form>

<div id="patterns"></div>

<script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.4/d3.min.js" charset="utf-8"></script>
<script src="/assets/gists/df555a/bar-pattern.js"></script>
<script src="/assets/gists/df555a/main.js"></script>

{% include github.html href="https://gist.github.com/pnavarrc/df555a89d8aa590d61aa" %}