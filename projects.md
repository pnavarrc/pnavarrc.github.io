---
layout: default
title: Projects
shortname: projects
---

# {{ page.title }}

{% for post in site.categories.project %}
<div class="row post-summary">
    <div class="col-sm-3">
        <img src="{{site.thumbnails}}/{{post.screenshot}}" alt="" class="img-responsive">        
    </div>
    <div class="col-sm-9">
        <a href="{{post.url}}" class="post-title">{{post.title}}</a>
        <span class="post-date">{{post.date | date_to_string }}</span>
    </div>
</div>
{% endfor %}