---
layout: page
permalink: /teaching/
title: Teaching
description: Materials for courses I taught.
nav: true
display_categories: [SUNY Binghamton]
importance: 4
---

<div class="teaching">
  {% if site.enable_teaching_categories and page.display_categories %}
  <!-- Display categories -->
    {% for category in page.display_categories %}
      <h2 class="category">{{category}}</h2>
      {% assign categorized_courses = site.teaching | where: "category", category %}
      {% assign sorted_courses = categorized_courses | sort: "importance" %}
      <div class="container">
        <div class="row">
        {% for course in sorted_courses %}
          <div class="col-sm-4 justify-content-around">
          {% include teaching.html %}
          </div>
        {% endfor %}
        </div>
      </div>
    {% endfor %}

  {% else %}
  <!-- Display courses without categories -->
    {% assign sorted_courses = site.teaching | sort: "importance" %}
    <!-- Generate cards for each course -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-2">
        {% for course in sorted_courses %}
          {% include teaching_horizontal.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for course in sorted_courses %}
          {% include teaching.html %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>

