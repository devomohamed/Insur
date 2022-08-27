// Slider
var swiper = new Swiper(".slider-first", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true
});

var swiper = new Swiper(".sw2", {
  slidesPerView: 3,
  spaceBetween: 30,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  loop:true
});
// Slider
var swiper = new Swiper(".sw3", {
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    574: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    776: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
