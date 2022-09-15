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

slid= 6;
if (window.innerWidth <= 768) {
   slid =3
}

var swiper = new Swiper(".slide-logo", {
  loop: true,
  autoplay: {
    delay: 20,
    disableOnInteraction: false
  },
  slidesPerView: slid,
  speed: 2000,
  spaceBetween: 15,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,

});


var swiper = new Swiper(".slide-log1", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  slidesPerView: '1',
  sensitivity: .5,
  speed: 3400,
  spaceBetween: 0,
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
  speed: 3000,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
 
});





