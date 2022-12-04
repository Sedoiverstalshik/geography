const intro__slider = new Swiper('.intro__swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.intro__pagination',
    clickable: true,
  },

});


const reviews__slider = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },

});


const tours__slider = new Swiper('.tours__swiper', {
  loop: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 70,
  grabCursor: true,
});

