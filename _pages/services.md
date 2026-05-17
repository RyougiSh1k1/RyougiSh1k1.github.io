---
layout: page
permalink: /services/
title: Services
nav: true
nav_order: 4
reviewer_conferences:
  - abbr: ICML
    years: [2025, 2026]
  - abbr: CVPR
    years: [2025, 2026]
  - abbr: ICLR
    years: [2025, 2026]
  - abbr: NeurIPS
    years: [2026]
  - abbr: AAAI
    years: [2024, 2025, 2026]
---

<div class="services">
  <section class="service-section">
    <h2>Conference</h2>
    <ul class="card-text font-weight-light list-group list-group-flush">
      <li class="list-group-item service-role">
        <div class="service-role-title">Reviewer</div>
        <ul class="service-records">
          {% for conference in page.reviewer_conferences %}
            <li class="service-record">
              <abbr class="badge rounded">{{ conference.abbr }}</abbr>
              <span class="service-year">{{ conference.years | join: ", " }}</span>
            </li>
          {% endfor %}
        </ul>
      </li>
    </ul>
  </section>

  <section class="service-section">
    <h2>Journal</h2>
  </section>

  <section class="service-section">
    <h2>Other</h2>
  </section>
</div>
