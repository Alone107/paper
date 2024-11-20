const swiper = new Swiper(".swiper-hero", {
  // Optional parameters
  // loop: true,
  slidesPerView: 1.1,
  centeredSlides: true,
  //   slidesPerView: "auto",

  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },

  pagination: {
    el: ".swiper-pagination-hero-scrool",
    type: "progressbar",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-hero",
    prevEl: ".swiper-button-prev-hero",
  },
});

var currentIndex = swiper.activeIndex;

// Устанавливаем новый индекс на 1 (второй слайд)
swiper.slideTo(currentIndex + 1, 0, false);

document.querySelector(".counter-end").innerHTML = "0" + swiper.slides.length;

swiper.on("slideChange afterInit init", function () {
  let currentSlide = this.activeIndex + 1;
  document.querySelector(".counter").innerHTML = `
    <span class="counter__current">
    ${currentSlide < 10 ? "0" + currentSlide : currentSlide}
    </span> `;

  document.querySelector(".counter-end").innerHTML = `
     
    <span class="counter__total">
      ${"0" + this.slides.length}
    </span>`;
});

const swiperWorker = new Swiper(".worker-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,

  breakpoints: {
    // when window width is >= 320px
    700: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-worker",
    prevEl: ".swiper-button-prev-worker",
  },
});

const swiperGoods = new Swiper(".swiper-goods", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,

  breakpoints: {
    // when window width is >= 320px
    700: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-goods",
    prevEl: ".swiper-button-prev-goods",
  },
});
