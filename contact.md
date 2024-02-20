---
sidebar:
nav: "docs"
permalink: /contact.html
layout: splash
header:  
    video: /assets/images/waves.mp4
    overlay_color: "rgba(63, 108, 152, 1)"
intro:
  - excerpt: "Contact"
---

{% include feature_row id="intro" type="center" %}
<div class="feature__wrapper">
  <div id="contact" class="content-container text-center"> 
      <div style="width: 250px; margin: 0 auto 30px">
          <img src="assets/logo/elemwave.webp" alt="{{ site.company }}" title="{{ site.company }}">
      </div>
      <div>{{ site.address }}</div>
      <div>{{ site.cp }} - {{ site.city }} (<span>{{ site.country }}</span>)</div>
      <div>Tel. <a href="tel:{{ site.phone }}" target="_blank" rel="nofollow noreferrer">{{ site.phone }}</a></div>
      <a href="mailto:{{ site.email }}" target="_blank" rel="nofollow noreferrer">{{ site.email }}</a>
  </div>
</div>