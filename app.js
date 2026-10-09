/* ==========================================================================
   Om Bhatt — Engineering Portfolio
   Lightbox, discipline filtering, scroll reveal. No dependencies.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------ LIGHTBOX -- */
  var lightbox = document.getElementById('lightbox');
  var stage    = document.getElementById('lightbox-stage');
  var caption  = document.getElementById('lightbox-cap');
  var closeBtn = document.getElementById('lightbox-close');
  var lastFocus = null;

  function openLightbox(el) {
    stage.innerHTML = '';

    var clone = el.cloneNode(true);
    clone.className = '';
    clone.removeAttribute('style');
    clone.removeAttribute('loading');

    if (clone.tagName === 'VIDEO') {
      clone.controls = true;
      clone.muted = false;
      clone.autoplay = true;
      clone.setAttribute('playsinline', '');
    }

    stage.appendChild(clone);
    caption.textContent = el.getAttribute('data-cap') || el.getAttribute('alt') || '';

    lastFocus = document.activeElement;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    // Clear after the fade so audio stops immediately
    setTimeout(function () { stage.innerHTML = ''; caption.textContent = ''; }, 180);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // Click a thumbnail to expand. Videos only expand via their frame, not their
  // own controls, so play/pause/seek still work inline.
  Array.prototype.forEach.call(document.querySelectorAll('.media'), function (el) {
    if (el.tagName === 'VIDEO') {
      el.addEventListener('dblclick', function (e) {
        e.preventDefault();
        openLightbox(el);
      });
    } else {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(el);
      });
    }
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === stage) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  /* -------------------------------------------------------------- FILTER -- */
  var filters  = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('.project');

  Array.prototype.forEach.call(filters, function (btn) {
    btn.addEventListener('click', function () {
      var want = btn.getAttribute('data-filter');

      Array.prototype.forEach.call(filters, function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      Array.prototype.forEach.call(projects, function (p) {
        var has = (p.getAttribute('data-disciplines') || '').split(/\s+/);
        p.hidden = !(want === 'all' || has.indexOf(want) !== -1);
      });
    });
  });

  /* -------------------------------------------------------------- REVEAL -- */
  var reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });

  Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
})();
