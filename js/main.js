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

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  }
  else {
    promotionEl.classList.remove('hide');
  }
});
// floating object ------------------------------------------------------------
function random(min, max) {
  return parseFloat((Math.random() * (max-min)+min).toFixed(2));
}
function floatingObject (selector, _delay, _size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: _size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, _delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);