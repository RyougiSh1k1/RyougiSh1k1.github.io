---
layout: page
permalink: /services/
title: Services
nav: true
nav_order: 4
reviewer_conferences:
  - abbr: ICML
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
        <div class="service-role-title">- Reviewer</div>
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
    <ul class="card-text font-weight-light list-group list-group-flush">
      <li class="list-group-item service-role">
        <div class="service-role-title">- Open-Source Contributor</div>
        <ul class="service-records">
          <li class="d-block">
            <div class="service-record">
              <a href="https://github.com/NVIDIA/NVFlare">NVIDIA FLARE (NVFlare)</a>
              <span class="service-year">2026</span>
            </div>
            <p class="mb-0">
              Contributed BreastG-FCL, a graph-conditioned federated continual learning research example built with the NVFlare Collab API
              (<a href="https://github.com/NVIDIA/NVFlare/pull/5382">merged PR #5382</a>).
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</div>
