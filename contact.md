---
permalink: /contact.html
layout: splash
header:  
    video: /assets/images/waves.mp4
    overlay_color: "rgba(63, 108, 152, 1)"
intro:
  - excerpt: "Contact us"
---

{% include feature_row id="intro" type="center" %}
<div class="feature__wrapper contact_page">
  <!--<p>You can contact with us sending an email to: <a href="mailto:{{ site.email }}" target="_blank">{{ site.email }}</a> or by filling out the form below</p>-->
  <h1>Contact Form</h1>
  <div id="contact-form">
    <form action="https://api.web3forms.com/submit" onsubmit="sendForm()" method="POST">
      <input type="hidden" name="subject" value="ElemWave Contact Form">
      <input type="hidden" name="access_key" value="{{ site.contact_form_key }}">
      <input type="hidden" name="redirect" id="form-redirect">
      <input type="checkbox" name="botcheck" style="display: none;">
      <input type="text" name="Name" id="name" placeholder="Name(required)" required>
      <input type="email" name="Email" placeholder="Email(required)" required><br>
      <textarea name="message" placeholder="Message(required)" required></textarea>
      <div class="h-captcha" data-callback="hcaptchaCallback" data-captcha="true"></div>
      <button id="btn-form" disabled type="submit">Submit</button>
    </form>
    <script src="./assets/js/contact_form.js"></script>
    <script src="https://web3forms.com/client/script.js" async defer></script>
    <div id="contact-container">
      <a href="tel:{{ site.phone }}" target="_blank">{{ site.phone }}</a>
      <p>{{ site.address }}</p>
      <p>{{ site.cp }} - {{ site.city }} ({{ site.country }})</p>
      <p>{{ site.company }}</p>
      <a href="mailto:{{ site.email }}" target="_blank" rel="nofollow noreferrer">{{ site.email }}</a>
      <img src="assets/logo/elemwave.webp" alt="{{ site.company }}" title="{{ site.company }}">
    </div>
  </div>  
</div>