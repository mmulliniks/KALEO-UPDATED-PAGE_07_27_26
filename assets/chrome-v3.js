// Kaleo Arts v3 — shared chrome (nav + footer) + shared JS.
// Each page sets `window.__page = 'home' | 'kaleo-kids' | 'about' | ...` before including this.
(function(){
  const page = window.__page || '';

  // ---------- NAV ----------
  const cur = (name) => page === name ? ' class="current"' : '';
  const navHTML = `
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="index.html"><picture><source srcset="assets/img/logo-kaleo-mark.webp" type="image/webp"/><img class="nav-logo-mark" src="assets/img/logo-kaleo-mark.png" width="492" height="530" alt=""/></picture>Kaleo <em>Arts</em></a>
      <div class="nav-links">
        <a href="kaleo-kids.html"${cur('kaleo-kids')}>Kaleo Kids</a>
        <a href="kazoo.html"${cur('kazoo')}>Kazoo</a>
        <a href="songwriters.html"${cur('songwriters')}>Songwriters</a>
        <a href="classes.html"${cur('classes')}>Classes</a>
        <a href="private-lessons.html"${cur('private')}>Lessons</a>
        <a href="spark-camp.html"${cur('spark-camp')}>Camp</a>
        <a href="about.html"${cur('about')}>About</a>
        <a href="faq.html"${cur('faq')}>FAQ</a>
        <a class="nav-cta" href="enroll.html">Enroll</a>
      </div>
    </div>
  </nav>
  <!-- Burger + drawer are SIBLINGS of <nav>, not children. .nav uses
       backdrop-filter, which promotes it to a containing block for
       fixed-positioned descendants — if either lived inside .nav,
       "position: fixed" would clamp to the nav's 80px height instead of
       floating over the viewport. The burger stays visually pinned to
       the top-right of the header via its own fixed positioning. -->
  <button class="nav-burger" id="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
    <span></span><span></span><span></span>
  </button>
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <div class="mobile-menu-inner">
      <div class="mobile-menu-eye">Programs</div>
      <a href="kaleo-kids.html"${cur('kaleo-kids')}>Kaleo Kids</a>
      <a href="kazoo.html"${cur('kazoo')}>Kazoo</a>
      <a href="songwriters.html"${cur('songwriters')}>Songwriters</a>
      <a href="classes.html"${cur('classes')}>Classes</a>
      <a href="private-lessons.html"${cur('private')}>Private Lessons</a>
      <a href="spark-camp.html"${cur('spark-camp')}>Summer Camp</a>
      <div class="mobile-menu-eye">More</div>
      <a href="about.html"${cur('about')}>About</a>
      <a href="faq.html"${cur('faq')}>FAQ</a>
      <a class="mobile-menu-cta" href="enroll.html">Enroll \u2192</a>
    </div>
  </div>`;

  // ---------- FOOTER ----------
  const footerHTML = `
  <footer>
    <div class="wrap-lg">
      <div class="footer-top">
        <div>
          <a class="footer-brand" href="index.html" aria-label="Back to Kaleo Arts homepage" style="text-decoration: none; color: inherit;"><picture><source srcset="assets/img/logo-kaleo-mark.webp" type="image/webp"/><img class="footer-brand-mark" src="assets/img/logo-kaleo-mark.png" width="492" height="530" alt=""/></picture>Kaleo <em>Arts</em></a>
          <p class="footer-tag">Where creativity shines, &amp; everyone belongs. Oakland Township, MI · Est. 2005.</p>
        </div>
        <div class="footer-col">
          <h4>Programs</h4>
          <a href="kaleo-kids.html">Kaleo Kids</a>
          <a href="kazoo.html">Kazoo</a>
          <a href="songwriters.html">Songwriters</a>
          <a href="classes.html">Classes</a>
          <a href="private-lessons.html">Private Lessons</a>
          <a href="spark-camp.html">Summer Camp</a>
        </div>
        <div class="footer-col">
          <h4>More</h4>
          <a href="about.html">About</a>
          <a href="faq.html">FAQ</a>
          <a href="enroll.html">Enroll</a>
          <a href="https://abide.community/branches/kaleo-arts/" target="_blank" rel="noopener">Donate</a>
          <a href="https://g.page/r/CQpWBNSkI0EwEBM/review" target="_blank" rel="noopener">Leave a Review</a>
          <a href="share.html">Share the Invitation</a>
        </div>
        <div class="footer-col footer-contact">
          <h4>Visit &amp; Contact</h4>
          <a href="https://maps.app.goo.gl/PFHu9bBJBTwbmPDP9" target="_blank" rel="noopener">4906 N. Adams Rd.<br/>Oakland Township, MI 48306</a>
          <a href="tel:+12489551192">248-955-1192</a>
          <a href="mailto:yourfriends@kaleoarts.org">yourfriends@kaleoarts.org</a>
          <div class="footer-follow">
            <a href="https://www.instagram.com/kaleo.arts" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/kaleo.kids.arts" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.7v8h3.2z"/></svg>
            </a>
            <a href="https://www.youtube.com/@kaleoarts7468" target="_blank" rel="noopener" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-fine">
        <span>© 2026 Kaleo Arts</span>
        <span>Est. 2005 · Oakland Township, MI</span>
      </div>
    </div>
  </footer>`;

  const navSlot    = document.getElementById('nav-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.outerHTML = navHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // ---------- Shared behaviors ----------
  function initShared(){
    // Reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Nav compact on scroll
    const nav = document.getElementById('nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('compact', window.scrollY > 60);
      }, { passive: true });
    }

    // Mobile menu toggle
    const burger = document.getElementById('nav-burger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (burger && mobileMenu) {
      const setOpen = (open) => {
        burger.classList.toggle('open', open);
        mobileMenu.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
        document.body.style.overflow = open ? 'hidden' : '';
      };
      burger.addEventListener('click', () => {
        setOpen(!mobileMenu.classList.contains('open'));
      });
      // Close on link tap
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => setOpen(false));
      });
      // Close on Esc
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) setOpen(false);
      });
    }

    // Video posters: pull the real thumbnail from Vimeo's oEmbed endpoint
    // (unless the frame opts out via data-poster="keep"), then swap poster
    // for Vimeo iframe on click.
    document.querySelectorAll('.video-frame[data-vimeo]').forEach(frame => {
      const btn = frame.querySelector('.video-poster');
      if (!btn) return;

      // ---- Auto-thumbnail via Vimeo oEmbed ----
      if (frame.dataset.poster !== 'keep') {
        const raw = frame.dataset.vimeo;
        const idMatch  = raw.match(/vimeo\.com\/(?:video\/)?(\d+)/);
        // Unlisted videos require the privacy hash in the canonical URL,
        // as vimeo.com/<id>/<hash>. Grab it from either ?h=<hash> or a
        // trailing /<hash> path segment on player URLs.
        const hashMatch = raw.match(/[?&]h=([a-zA-Z0-9]+)/) || raw.match(/vimeo\.com\/(?:video\/)?\d+\/([a-zA-Z0-9]+)/);
        if (idMatch) {
          const canonical = 'https://vimeo.com/' + idMatch[1] + (hashMatch ? '/' + hashMatch[1] : '');
          const oembed = 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(canonical) + '&width=1600';
          fetch(oembed)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (!data || !data.thumbnail_url) return;
              const img = btn.querySelector('img');
              if (!img) return;
              // Vimeo returns thumbnails like ...-d_1600. Strip the size hint
              // to get the master, which is typically wider than the request.
              const hi = data.thumbnail_url.replace(/-d_\d+(x\d+)?$/, '');
              img.src = hi;
            })
            .catch(() => { /* leave the fallback poster in place */ });
        }
      }

      btn.addEventListener('click', () => {
        const src = frame.dataset.vimeo;
        const iframe = document.createElement('iframe');
        iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&title=0&byline=0&portrait=0';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('title', frame.dataset.videoTitle || 'Video');
        btn.replaceWith(iframe);
      });
    });

    // Parallax on scroll (rAF-throttled). Disabled on mobile
    // (<=720px): scale(1.05) + translateY on a scaled-wider-than-
    // -viewport image produces a horizontal "panning" drift on phones
    // via subpixel rounding, even with overflow:hidden. Mobile CSS
    // also nulls transforms on [data-parallax] as a belt-and-braces.
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    if (!isMobile) {
      const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
      let ticking = false;
      function updateParallax() {
        const vh = window.innerHeight;
        parallaxItems.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -300 || rect.top > vh + 300) return;
          const speed = parseFloat(el.dataset.parallax) || 0;
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.transform = `translateY(${progress * speed * 100}px) scale(1.05)`;
        });
        ticking = false;
      }
      window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
      }, { passive: true });
      updateParallax();
    }

    if (window.__page !== 'share') initEarlyBirdPopup();
  }


  // ---------- Early-bird registration popup ----------
  // Announces the Aug 25 early-bird deadline once per visitor (until they
  // dismiss it) and auto-expires after the deadline so nobody has to
  // remember to remove it later.
  function initEarlyBirdPopup(){
    var DEADLINE = new Date('2026-08-26T00:00:00-07:00'); // midnight Pacific, Aug 26
    var STORAGE_KEY = 'kaleo-eb-popup-dismissed-2026-08-25';
    var SESSION_KEY = 'kaleo-eb-popup-seen-session';
    if (Date.now() >= DEADLINE.getTime()) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch (e) { /* localStorage unavailable (private mode etc) — show anyway */ }
    try {
      // Already shown once this site visit (this tab) — don't show again on other pages.
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch (e) { /* sessionStorage unavailable — show anyway */ }

    var html = ''
      + '<div class="eb-popup-backdrop" id="eb-popup-backdrop" aria-hidden="true">'
      +   '<div class="eb-popup" role="dialog" aria-modal="true" aria-labelledby="eb-popup-title">'
      +     '<button class="eb-popup-close" id="eb-popup-close" aria-label="Close">&times;</button>'
      +     '<picture class="eb-popup-photo">'
      +       '<source srcset="assets/img/eb-popup.webp" type="image/webp"/>'
      +       '<img src="assets/img/eb-popup.jpg" width="920" height="336" alt="Kaleo Kids performers cheering on stage with scarves raised and mics in hand"/>'
      +     '</picture>'
      +     '<div class="eb-popup-body-wrap">'
      +       '<span class="eb-popup-eyebrow">§ Early-bird registration</span>'
      +       '<h2 class="eb-popup-title" id="eb-popup-title"><em>Hey-Yo!</em> Kaleo Early bird pricing ends <strong>Aug 25</strong>.</h2>'
      +       '<p class="eb-popup-body">Register by Aug 25 and save — <strong>$100 off</strong> Kaleo Kids &amp; Songwriters, plus <strong>no registration fees</strong> on any program.</p>'
      +       '<div class="eb-popup-actions">'
      +         '<a class="btn btn-primary" href="enroll.html" id="eb-popup-enroll">Enroll now'
      +           '<svg viewBox="0 0 14 10" fill="none"><path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>'
      +         '</a>'
      +         '<button class="btn btn-secondary" id="eb-popup-dismiss">Maybe later</button>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</div>';
    document.body.insertAdjacentHTML('beforeend', html);

    var backdrop = document.getElementById('eb-popup-backdrop');
    var closeBtn = document.getElementById('eb-popup-close');
    var dismissBtn = document.getElementById('eb-popup-dismiss');
    var enrollBtn = document.getElementById('eb-popup-enroll');

    function dismiss(){
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    }
    function show(){
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {}
    }

    closeBtn.addEventListener('click', dismiss);
    dismissBtn.addEventListener('click', dismiss);
    enrollBtn.addEventListener('click', dismiss);
    backdrop.addEventListener('click', function(e){ if (e.target === backdrop) dismiss(); });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && backdrop.classList.contains('open')) dismiss();
    });

    setTimeout(show, 3500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShared);
  } else {
    initShared();
  }
})();
// Kaleo Arts v3 — shared chrome (nav + footer) + shared JS.
// Each page sets `window.__page = 'home' | 'kaleo-kids' | 'about' | ...` before including this.
(function(){
  const page = window.__page || '';

  // ---------- NAV ----------
  const cur = (name) => page === name ? ' class="current"' : '';
  const navHTML = `
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="index.html"><picture><source srcset="assets/img/logo-kaleo-mark.webp" type="image/webp"/><img class="nav-logo-mark" src="assets/img/logo-kaleo-mark.png" width="492" height="530" alt=""/></picture>Kaleo <em>Arts</em></a>
      <div class="nav-links">
        <a href="kaleo-kids.html"${cur('kaleo-kids')}>Kaleo Kids</a>
        <a href="kazoo.html"${cur('kazoo')}>Kazoo</a>
        <a href="songwriters.html"${cur('songwriters')}>Songwriters</a>
        <a href="classes.html"${cur('classes')}>Classes</a>
        <a href="private-lessons.html"${cur('private')}>Lessons</a>
        <a href="spark-camp.html"${cur('spark-camp')}>Camp</a>
        <a href="about.html"${cur('about')}>About</a>
        <a href="faq.html"${cur('faq')}>FAQ</a>
        <a class="nav-cta" href="enroll.html">Enroll</a>
      </div>
    </div>
  </nav>
  <!-- Burger + drawer are SIBLINGS of <nav>, not children. .nav uses
       backdrop-filter, which promotes it to a containing block for
       fixed-positioned descendants — if either lived inside .nav,
       "position: fixed" would clamp to the nav's 80px height instead of
       floating over the viewport. The burger stays visually pinned to
       the top-right of the header via its own fixed positioning. -->
  <button class="nav-burger" id="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
    <span></span><span></span><span></span>
  </button>
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <div class="mobile-menu-inner">
      <div class="mobile-menu-eye">Programs</div>
      <a href="kaleo-kids.html"${cur('kaleo-kids')}>Kaleo Kids</a>
      <a href="kazoo.html"${cur('kazoo')}>Kazoo</a>
      <a href="songwriters.html"${cur('songwriters')}>Songwriters</a>
      <a href="classes.html"${cur('classes')}>Classes</a>
      <a href="private-lessons.html"${cur('private')}>Private Lessons</a>
      <a href="spark-camp.html"${cur('spark-camp')}>Summer Camp</a>
      <div class="mobile-menu-eye">More</div>
      <a href="about.html"${cur('about')}>About</a>
      <a href="faq.html"${cur('faq')}>FAQ</a>
      <a class="mobile-menu-cta" href="enroll.html">Enroll \u2192</a>
    </div>
  </div>`;

  // ---------- FOOTER ----------
  const footerHTML = `
  <footer>
    <div class="wrap-lg">
      <div class="footer-top">
        <div>
          <a class="footer-brand" href="index.html" aria-label="Back to Kaleo Arts homepage" style="text-decoration: none; color: inherit;"><picture><source srcset="assets/img/logo-kaleo-mark.webp" type="image/webp"/><img class="footer-brand-mark" src="assets/img/logo-kaleo-mark.png" width="492" height="530" alt=""/></picture>Kaleo <em>Arts</em></a>
          <p class="footer-tag">Where creativity shines, &amp; everyone belongs. Oakland Township, MI · Est. 2005.</p>
        </div>
        <div class="footer-col">
          <h4>Programs</h4>
          <a href="kaleo-kids.html">Kaleo Kids</a>
          <a href="kazoo.html">Kazoo</a>
          <a href="songwriters.html">Songwriters</a>
          <a href="classes.html">Classes</a>
          <a href="private-lessons.html">Private Lessons</a>
          <a href="spark-camp.html">Summer Camp</a>
        </div>
        <div class="footer-col">
          <h4>More</h4>
          <a href="about.html">About</a>
          <a href="faq.html">FAQ</a>
          <a href="enroll.html">Enroll</a>
          <a href="https://abide.community/branches/kaleo-arts/" target="_blank" rel="noopener">Donate</a>
          <a href="https://g.page/r/CQpWBNSkI0EwEBM/review" target="_blank" rel="noopener">Leave a Review</a>
          <a href="share.html">Share the Invitation</a>
        </div>
        <div class="footer-col footer-contact">
          <h4>Visit &amp; Contact</h4>
          <a href="https://maps.app.goo.gl/PFHu9bBJBTwbmPDP9" target="_blank" rel="noopener">4906 N. Adams Rd.<br/>Oakland Township, MI 48306</a>
          <a href="tel:+12489551192">248-955-1192</a>
          <a href="mailto:yourfriends@kaleoarts.org">yourfriends@kaleoarts.org</a>
          <div class="footer-follow">
            <a href="https://www.instagram.com/kaleo.arts" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/kaleo.kids.arts" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.7v8h3.2z"/></svg>
            </a>
            <a href="https://www.youtube.com/@kaleoarts7468" target="_blank" rel="noopener" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-fine">
        <span>© 2026 Kaleo Arts</span>
        <span>Est. 2005 · Oakland Township, MI</span>
      </div>
    </div>
  </footer>`;

  const navSlot    = document.getElementById('nav-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.outerHTML = navHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // ---------- Shared behaviors ----------
  function initShared(){
    // Reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Nav compact on scroll
    const nav = document.getElementById('nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('compact', window.scrollY > 60);
      }, { passive: true });
    }

    // Mobile menu toggle
    const burger = document.getElementById('nav-burger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (burger && mobileMenu) {
      const setOpen = (open) => {
        burger.classList.toggle('open', open);
        mobileMenu.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
        document.body.style.overflow = open ? 'hidden' : '';
      };
      burger.addEventListener('click', () => {
        setOpen(!mobileMenu.classList.contains('open'));
      });
      // Close on link tap
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => setOpen(false));
      });
      // Close on Esc
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) setOpen(false);
      });
    }

    // Video posters: pull the real thumbnail from Vimeo's oEmbed endpoint
    // (unless the frame opts out via data-poster="keep"), then swap poster
    // for Vimeo iframe on click.
    document.querySelectorAll('.video-frame[data-vimeo]').forEach(frame => {
      const btn = frame.querySelector('.video-poster');
      if (!btn) return;

      // ---- Auto-thumbnail via Vimeo oEmbed ----
      if (frame.dataset.poster !== 'keep') {
        const raw = frame.dataset.vimeo;
        const idMatch  = raw.match(/vimeo\.com\/(?:video\/)?(\d+)/);
        // Unlisted videos require the privacy hash in the canonical URL,
        // as vimeo.com/<id>/<hash>. Grab it from either ?h=<hash> or a
        // trailing /<hash> path segment on player URLs.
        const hashMatch = raw.match(/[?&]h=([a-zA-Z0-9]+)/) || raw.match(/vimeo\.com\/(?:video\/)?\d+\/([a-zA-Z0-9]+)/);
        if (idMatch) {
          const canonical = 'https://vimeo.com/' + idMatch[1] + (hashMatch ? '/' + hashMatch[1] : '');
          const oembed = 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(canonical) + '&width=1600';
          fetch(oembed)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (!data || !data.thumbnail_url) return;
              const img = btn.querySelector('img');
              if (!img) return;
              // Vimeo returns thumbnails like ...-d_1600. Strip the size hint
              // to get the master, which is typically wider than the request.
              const hi = data.thumbnail_url.replace(/-d_\d+(x\d+)?$/, '');
              img.src = hi;
            })
            .catch(() => { /* leave the fallback poster in place */ });
        }
      }

      btn.addEventListener('click', () => {
        const src = frame.dataset.vimeo;
        const iframe = document.createElement('iframe');
        iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&title=0&byline=0&portrait=0';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('title', frame.dataset.videoTitle || 'Video');
        btn.replaceWith(iframe);
      });
    });

    // Parallax on scroll (rAF-throttled). Disabled on mobile
    // (<=720px): scale(1.05) + translateY on a scaled-wider-than-
    // -viewport image produces a horizontal "panning" drift on phones
    // via subpixel rounding, even with overflow:hidden. Mobile CSS
    // also nulls transforms on [data-parallax] as a belt-and-braces.
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    if (!isMobile) {
      const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
      let ticking = false;
      function updateParallax() {
        const vh = window.innerHeight;
        parallaxItems.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -300 || rect.top > vh + 300) return;
          const speed = parseFloat(el.dataset.parallax) || 0;
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.transform = `translateY(${progress * speed * 100}px) scale(1.05)`;
        });
        ticking = false;
      }
      window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
      }, { passive: true });
      updateParallax();
    }

    initEarlyBirdPopup();
  }


  // ---------- Early-bird registration popup ----------
  // Announces the Aug 25 early-bird deadline once per visitor (until they
  // dismiss it) and auto-expires after the deadline so nobody has to
  // remember to remove it later.
  function initEarlyBirdPopup(){
    var DEADLINE = new Date('2026-08-26T00:00:00-07:00'); // midnight Pacific, Aug 26
    var STORAGE_KEY = 'kaleo-eb-popup-dismissed-2026-08-25';
    var SESSION_KEY = 'kaleo-eb-popup-seen-session';
    if (Date.now() >= DEADLINE.getTime()) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch (e) { /* localStorage unavailable (private mode etc) — show anyway */ }
    try {
      // Already shown once this site visit (this tab) — don't show again on other pages.
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch (e) { /* sessionStorage unavailable — show anyway */ }

    var html = ''
      + '<div class="eb-popup-backdrop" id="eb-popup-backdrop" aria-hidden="true">'
      +   '<div class="eb-popup" role="dialog" aria-modal="true" aria-labelledby="eb-popup-title">'
      +     '<button class="eb-popup-close" id="eb-popup-close" aria-label="Close">&times;</button>'
      +     '<picture class="eb-popup-photo">'
      +       '<source srcset="assets/img/eb-popup.webp" type="image/webp"/>'
      +       '<img src="assets/img/eb-popup.jpg" width="920" height="336" alt="Kaleo Kids performers cheering on stage with scarves raised and mics in hand"/>'
      +     '</picture>'
      +     '<div class="eb-popup-body-wrap">'
      +       '<span class="eb-popup-eyebrow">§ Early-bird registration</span>'
      +       '<h2 class="eb-popup-title" id="eb-popup-title"><em>Hey-Yo!</em> Kaleo Early bird pricing ends <strong>Aug 25</strong>.</h2>'
      +       '<p class="eb-popup-body">Register by Aug 25 and save — <strong>$100 off</strong> Kaleo Kids &amp; Songwriters, plus <strong>no registration fees</strong> on any program.</p>'
      +       '<div class="eb-popup-actions">'
      +         '<a class="btn btn-primary" href="enroll.html" id="eb-popup-enroll">Enroll now'
      +           '<svg viewBox="0 0 14 10" fill="none"><path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>'
      +         '</a>'
      +         '<button class="btn btn-secondary" id="eb-popup-dismiss">Maybe later</button>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</div>';
    document.body.insertAdjacentHTML('beforeend', html);

    var backdrop = document.getElementById('eb-popup-backdrop');
    var closeBtn = document.getElementById('eb-popup-close');
    var dismissBtn = document.getElementById('eb-popup-dismiss');
    var enrollBtn = document.getElementById('eb-popup-enroll');

    function dismiss(){
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    }
    function show(){
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {}
    }

    closeBtn.addEventListener('click', dismiss);
    dismissBtn.addEventListener('click', dismiss);
    enrollBtn.addEventListener('click', dismiss);
    backdrop.addEventListener('click', function(e){ if (e.target === backdrop) dismiss(); });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && backdrop.classList.contains('open')) dismiss();
    });

    setTimeout(show, 3500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShared);
  } else {
    initShared();
  }
})();
