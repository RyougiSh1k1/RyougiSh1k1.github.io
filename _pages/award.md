---
layout: page
permalink: /award/
title: Award
nav: true
nav_order: 6
award_groups:
  - abbr: Stevens
    awards:
      - name: Graduate Conference Funding for NeurIPS (up to $1,000)
        year: 2026
  - abbr: ICML
    awards:
      - name: Silver Reviewer Award
        year: 2026
---

<div class="awards">
  <ul class="card-text font-weight-light list-group list-group-flush">
    {% for group in page.award_groups %}
      <li class="list-group-item award-conference">
        <abbr class="badge rounded">{{ group.abbr }}</abbr>
        <ul class="award-records">
          {% for award in group.awards %}
            <li class="award-record">{{ award.name }}, {{ award.year }}</li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}
  </ul>
</div>
