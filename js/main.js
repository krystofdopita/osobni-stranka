(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  var orbit = document.querySelector('.orbit');
  var codeWrap = document.querySelector('.code-wrap');
  var codeWindow = document.getElementById('code-window');
  var replayButton = document.getElementById('replay-code');

  function updateOrbit() {
    if (orbit) { orbit.classList.toggle('is-active', window.scrollY > 40); }
  }
  function updateScroll() {
    var max = root.scrollHeight - window.innerHeight;
    var progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    root.style.setProperty('--scroll-progress', progress.toFixed(4));
    if (!reduceMotion.matches) {
      root.style.setProperty('--scroll-y', Math.min(window.scrollY, 800) + 'px');
    }
    updateOrbit();
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

  function replayCode() {
    if (!codeWrap || !codeWindow) { return; }
    codeWrap.classList.remove('is-sparkling');
    codeWindow.classList.remove('is-replaying', 'is-running');
    void codeWrap.offsetWidth;
    codeWrap.classList.add('is-sparkling');
    codeWindow.classList.add('is-replaying');
    void codeWindow.offsetWidth;
    codeWindow.classList.add('is-running');
    window.setTimeout(function () {
      codeWrap.classList.remove('is-sparkling');
      codeWindow.classList.remove('is-replaying', 'is-running');
    }, 1100);
  }
  if (replayButton) { replayButton.addEventListener('click', replayCode); }

  var repoCards = Array.prototype.slice.call(document.querySelectorAll('.repo-card'));
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.repo-filter'));
  var repoStatus = document.querySelector('.repo-status');

  Array.prototype.forEach.call(repoCards, function (card) {
    card.addEventListener('toggle', function () {
      if (!card.open) { return; }
      card.classList.remove('is-burst');
      void card.offsetWidth;
      card.classList.add('is-burst');
      window.setTimeout(function () { card.classList.remove('is-burst'); }, 500);
    });
  });

  function applyFilter(value) {
    var count = 0;
    repoCards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(' ');
      var visible = value === 'all' || tags.indexOf(value) !== -1;
      card.hidden = !visible;
      if (visible) {
        count += 1;
        card.classList.remove('is-burst');
        void card.offsetWidth;
        card.classList.add('is-burst');
        window.setTimeout(function () { card.classList.remove('is-burst'); }, 500);
      }
    });
    filterButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', button.getAttribute('data-filter') === value ? 'true' : 'false');
    });
    if (repoStatus) { repoStatus.textContent = 'Zobrazeny ' + count + ' projekty.'; }
  }
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () { applyFilter(button.getAttribute('data-filter')); });
  });

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
