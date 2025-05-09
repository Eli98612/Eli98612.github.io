---
layout: page
title: Projects
permalink: /projects/
description: A collection of my projects.
nav: true
display_categories: [Personal, Professional]
importance: 2
---
<div class="projects">
  {% for category in page.display_categories %}
  <h2 class="category">{{category}}</h2>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
      <div class="col">
        {% include project_card.html %}
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>
