// Sub-menu -------------------------------------------------------------------
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// Visual ---------------------------------------------------------------------
const badgesEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // badgesEl.style.display = 'none';
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }
  else {
    // badgesEl.style.display = 'block';
    gsap.to(badgesEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(handler pointer, milli-seconds);

// Title fade-in --------------------------------------------------------------
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});