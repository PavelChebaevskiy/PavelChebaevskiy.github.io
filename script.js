var swiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 1200px
    1280: {
      slidesPerView: 6,
      spaceBetween: 10
    },
  },
});