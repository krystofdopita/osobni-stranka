(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateScroll() {
    var max = root.scrollHeight - window.innerHeight;
    var progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    root.style.setProperty('--scroll-progress', progress.toFixed(4));
    if (!reduceMotion.matches) {
      root.style.setProperty('--scroll-y', Math.min(window.scrollY, 800) + 'px');
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    window.requestAnimationFrame(function () {
      updateScroll();
      ticking = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();

  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function showAll() {
    reveals.forEach(function (element) { element.classList.add('is-visible'); });
  }

  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    showAll();
  } else {
    reveals.forEach(function (element, index) {
      element.style.setProperty('--reveal-delay', (index % 3) * 90 + 'ms');
    });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (element) { revealObserver.observe(element); });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll('nav a[href^="#"]'));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (link) {
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(function (section) { navObserver.observe(section); });
  }
})();
