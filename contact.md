---
sidebar:
nav: "docs"
permalink: /contact.html
layout: splash
intro:
  - excerpt: "Contact"
---

{% include feature_row id="intro" type="center" %}
<link rel="stylesheet" href="./assets/css/contact.css">
<div class="feature__wrapper">
  <div id="contact" class="content-container text-center"> 
      <div id="contact-logo">
          <img src="assets/logo/elemwave.webp" alt="{{ site.company }}" title="{{ site.company }}">
      </div>
      <div>{{ site.address }}</div>
      <div>{{ site.cp }} - {{ site.city }} (<span>{{ site.country }}</span>)</div>
      <div>Tel. <a href="tel:{{ site.phone }}" target="_blank" rel="nofollow noreferrer">{{ site.phone }}</a></div>
      <a href="mailto:{{ site.email }}" target="_blank" rel="nofollow noreferrer">{{ site.email }}</a>
  </div>
</div>