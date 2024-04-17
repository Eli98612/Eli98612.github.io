---
layout: page
permalink: /publications/
title: Publications
description: A collection of my research publications.
years: [2023,2022, 2021]
nav: true
importance: 3
---

Read about my field of research here: [Steganography](/blog/2021/steganography/) and [Steganalysis](/blog/2021/steganalysis/).


<div class="publications">

<h1>Conference &amp; Journal Articles</h1>
{% bibliography -f {{ site.scholar.bibliography }}  -q @inproceedings[] and  @article[] %}

{% if false %}
{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}

  {% if false %}
  {% for item in site.scholar.bibliography %}
  {{item}} <br>
  {% endfor %}

  {% if site.data.bibliography %}
  IT EXITS
  {% endif %}
  {% endif %}

  {% assign filtered_items = site.bibliography.papers.bib | where: "year", y | where: "pubtype", "rump" %}
  {% for item in filtered_items %}
    {{ item }}
  {% endfor %}
{% endfor %}
{% endif %}

<h1>Thesis</h1>
{% bibliography -f {{ site.scholar.bibliography }}  -q @mastersthesis[] and  @phdthesis[] %}

<h1>Professional Talks</h1>
{% bibliography -f papers -q @misc[subtype=rump]* %}

<h1>Technical Reports</h1>
{% bibliography -f {{ site.scholar.bibliography }}  -q @techreport[] %}

{% if false %}
<h1>Thesis &amp; Dissertation</h1>
<h1>Technical Reports</h1>
{% endif %}


</div>
