---
layout: post
title:  Visualizing Geotagged Tweets
date:   2014-06-01
screenshot: 2014-06-01-geotagged-tweets.png
---

Visualization of real-time geotagged tweets. This projects has two main components, the server and the client application.

<div class="screenshot">
<img src="{{site.screenshots}}/{{page.screenshot}}" alt="Visualization of Geotagged Tweets">
</div>

## Server

The server uses Twitter Streaming API, Socket.IO and Node to capture geotagged tweets in real-time. The server receives topics from the connected clients and send them the tweets matching the topics.

{% include github.html href="https://github.com/pnavarrc/chirp-server" %}

## Client

The client applications displays a map showing the location of the tweets matching each word given by the user. It also includes a small bar chart that updates as the tweets arrive.

{% include github.html href="https://github.com/pnavarrc/chirp-client" %}

{% include mastering-d3-book.html %}