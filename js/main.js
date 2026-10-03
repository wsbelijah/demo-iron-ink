/* ============================================================
   IRON & INK — interactions
   Counters, drag-to-scroll gallery, parallax, smooth nav.
   NOTE: the animated-counters block below was pasted as a
   fragment; the observer head above `const progress` has been
   reconstructed to match the fragment's logic exactly.
   ============================================================ */
(function () {
  "use strict";

  /* ---- ANIMATED COUNTERS (head reconstructed 2026-10-03) ---- */
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.dataset.target, 10) || 0;
        var duration = 1500;
        var start = performance.now();

        var step = function (now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        };

        requestAnimationFrame(step);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count').forEach(function (el) {
    countObserver.observe(el);
  });

  /* ---- DRAG-TO-SCROLL GALLERY ---- */
  var track = document.querySelector('.gallery-track');
  if (track) {
    var isDown = false, startX = 0, scrollLeftPos = 0;

    track.addEventListener('mousedown', function (e) {
      isDown = true;
      track.classList.add('dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeftPos = track.scrollLeft;
    });

    track.addEventListener('mouseleave', function () {
      isDown = false;
      track.classList.remove('dragging');
    });

    track.addEventListener('mouseup', function () {
      isDown = false;
      track.classList.remove('dragging');
    });

    track.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeftPos - (x - startX) * 1.5;
    });

    track.style.overflowX = 'scroll';
    track.style.scrollbarWidth = 'none';

    /* ---- TOUCH SUPPORT ---- */
    var touchStartX = 0, touchScrollLeft = 0;

    track.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = track.scrollLeft;
    }, { passive: true });

    track.addEventListener('touchmove', function (e) {
      var x = e.touches[0].pageX;
      track.scrollLeft = touchScrollLeft - (x - touchStartX);
    }, { passive: true });
  }

  /* ---- PARALLAX EFFECT ---- */
  var parallaxBg = document.querySelector('.parallax-bg');
  var parallaxSection = document.querySelector('.parallax-section');
  if (parallaxBg && parallaxSection) {
    window.addEventListener('scroll', function () {
      var rect = parallaxSection.getBoundingClientRect();
      var speed = 0.3;
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        var offset = rect.top * speed;
        parallaxBg.style.transform = 'translateY(' + offset + 'px)';
      }
    }, { passive: true });
  }

  /* ---- SMOOTH NAV LINKS ---- */
  document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
