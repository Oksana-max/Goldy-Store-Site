const swiper = new Swiper(".slider", {
  navigation: {
    nextEl: ".slider__image-next",
    prevEl: ".slider__image-prev",
  },
  pagination: {
    el: ".slider__pagination",
    type: "bullets",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  speed: 800,
});

//slider-sale
const swiper2 = new Swiper(".mainSlider", {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".sale__btn__prev",
    prevEl: ".sale__btn__next",
  },
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    930: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1290: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiper3 = new Swiper(".slider-photo", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Slider--goods
const swiper4 = new Swiper(".slider-goods", {
  navigation: {
    nextEl: ".goods__btn__next",
    prevEl: ".goods__btn__prev",
  },
  // pagination: {
  //   el: ".slider__pagination",
  //   type: "bullets",
  //   clickable: true,
  // },
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  // speed: 800,
});

const swiper5 = new Swiper(".slider-goods-photo", {
  loop: true,
  navigation: {
    nextEl: ".slider-goods-photo__next",
    prevEl: ".slider-goods-photo__prev",
  },
});
