---
layout: page
permalink: /publications/
title: Publications
# description: A collection of my research publications.
years: [2023,2022, 2021]
nav: true
importance: 2
---

Read about my field of research here: [Steganography](/blog/2021/steganography/) and [Steganalysis](/blog/2021/steganalysis/).

TEMP
My research involves a combination of steganography and steganalysis. I am specifically studying the problem of batch steganography which is concerned with hiding a message not within one image, but spreading it across an entire collection or bag of many images.
TEMP


<div class="publications">

<h1>Conference &amp; Journal Articles</h1>
{% bibliography -f {{ site.scholar.bibliography }}  -q @inproceedings[] and  @article[] %}

<h1>Thesis</h1>
{% bibliography -f {{ site.scholar.bibliography }}  -q @mastersthesis[] and  @phdthesis[] %}

<h1>Professional Talks</h1>
{% bibliography -f papers -q @misc[subtype=rump]* %}

<h1>Technical Reports</h1>
{% bibliography -f {{ site.scholar.bibliography }}  -q @techreport[] %}

</div>
