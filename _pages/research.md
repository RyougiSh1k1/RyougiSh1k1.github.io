---
layout: page
title: Research
permalink: /research/
description: Upcoming
nav: true
nav_order: 2
display_categories: [Generalization]
horizontal: false
---

<!-- pages/research.md -->
<div class="research">
  {% if site.enable_research_categories and page.display_categories %}
    <!-- Display categorized research -->
    {% for category in page.display_categories %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      {% assign sorted_research = site.research | sort: "importance" %}
      <!-- Generate cards for each research item -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for research in sorted_research limit: 2 %}
              {% include research_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-2">
          {% for research in sorted_research limit: 2 %}
            {% include research.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

{% else %}

<!-- Display research without categories -->

    {% assign sorted_research = site.research | sort: "importance" %}

    <!-- Generate cards for each research item -->

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for research in sorted_research limit: 2 %}
            {% include research_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-2">
        {% for research in sorted_research limit: 2 %}
          {% include research.liquid %}
        {% endfor %}
      </div>
    {% endif %}

{% endif %}

</div>
