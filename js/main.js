const burgerBtn = document.querySelector('.burger__menu');
const burgerMenu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.header__menu-list li a');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
})

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
  })
})



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
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 70,
  grabCursor: true,
  breakpoints: {
    400: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    551: {
      spaceBetween: 20,
    },
    751: {
      spaceBetween: 40,
    },
    1024: {
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 70,
    },
  },
});

