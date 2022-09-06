var swiper = new Swiper(".slide-content", {

  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});



var swiper = new Swiper(".slide-logo", {
  loop: true,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false
  },
  slidesPerView: '6',
  speed: 1200,
  spaceBetween: 15,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,

});




var swiper = new Swiper(".slide-product", {
  autoplay: {
    delay: 2000},
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
 
});



