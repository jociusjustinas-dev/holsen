# Why Holsen — archived split-card variant

Status: archived on 2026-09-07 for possible reuse on another page.

This was the homepage version before the full-screen USP showcase. It used a sticky 6-column introduction beside four vertically stacked image cards. The supporting styles remain grouped under `.why-intro`, `.why-list`, `.why-item`, `.why-item__image` and `.why-item__panel` in `src/styles.css`.

```html
<section class="why-section section-shell" id="why-holsen" data-wp-section="home_why_holsen" data-avenir-source="Home A / Expertise">
  <div class="site-container section-grid">
    <div class="why-intro reveal">
      <p class="eyebrow">Why Holsen</p>
      <h2 class="section-title">Built for logistics that doesn't fit the standard playbook.</h2>
      <a class="button button--dark" href="/why-holsen/">Why Holsen</a>
    </div>
    <div class="why-list">
      <article class="why-item reveal">
        <img class="why-item__image" src="./src/assets/Amina-Photo-1.webp" alt="" width="1920" height="2560" loading="lazy" decoding="async">
        <div class="why-item__panel">
          <div><h3 class="feature-title">Fast decisions</h3><p>Fewer layers between the problem and the people responsible for solving it.</p></div>
        </div>
      </article>
      <article class="why-item reveal" data-delay="1">
        <img class="why-item__image" src="./src/assets/31429e249764135.6a16eb36d60ee.webp" alt="" width="2500" height="1667" loading="lazy" decoding="async">
        <div class="why-item__panel">
          <div><h3 class="feature-title">Dedicated ownership</h3><p>Clear responsibility from planning through final delivery.</p></div>
        </div>
      </article>
      <article class="why-item reveal" data-delay="2">
        <img class="why-item__image" src="./src/assets/b962dde2771cf4d7515934ee7463f088ee4f896a-3000x2000.jpg" alt="" width="3000" height="2000" loading="lazy" decoding="async">
        <div class="why-item__panel">
          <div><h3 class="feature-title">Complex-route expertise</h3><p>Experience where routes, regulations and operating conditions require deeper coordination.</p></div>
        </div>
      </article>
      <article class="why-item reveal" data-delay="3">
        <img class="why-item__image" src="./src/assets/services-terminal.jpg" alt="" width="2000" height="1131" loading="lazy" decoding="async">
        <div class="why-item__panel">
          <div><h3 class="feature-title">Reliable international capacity</h3><p>Flexible multimodal capacity without limiting the solution to a fixed asset base.</p></div>
        </div>
      </article>
    </div>
  </div>
</section>
```
