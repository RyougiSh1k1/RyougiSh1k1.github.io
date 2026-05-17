---
layout: page
permalink: /award/
title: Award
nav: true
nav_order: 6
conference_awards:
  - abbr: ICML
    awards:
      - name: Silver Reviewer Award
        year: 2026
---

<div class="awards">
  <ul class="card-text font-weight-light list-group list-group-flush">
    {% for conference in page.conference_awards %}
      <li class="list-group-item award-conference">
        <abbr class="badge rounded">{{ conference.abbr }}</abbr>
        <ul class="award-records">
          {% for award in conference.awards %}
            <li class="award-record">{{ award.name }}, {{ award.year }}</li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}
  </ul>
</div>
