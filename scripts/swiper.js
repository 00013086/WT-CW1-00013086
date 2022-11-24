if (document.querySelector(".swiper")) {
  var swiperArrivals = new Swiper(".swiperArrivals", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  var swiperSpring = new Swiper(".swiperSpring", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: ".spring__next-arr ",
      prevEl: ".spring__prev-arr ",
    },
    breakpoints: {
      992: {
        loop: false,
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1200: {
        loop: false,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });

  var swiperClassic = new Swiper(".swiperClassic", {
    loop: true,
    navigation: {
      nextEl: ".classic__next-arr ",
      prevEl: ".classic__prev-arr ",
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: "auto",
      },
    },
  });

  var swiperDesigners = new Swiper(".swiperDesigners", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: ".designers__next-arr ",
      prevEl: ".designers__prev-arr ",
    },
    breakpoints: {
      1200: {
        loop: false,
        slidesPerView: 4,
      },
    },
  });
  var swiper = new Swiper(".swiperBig", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".swiperSmall", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      600: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    },
  });

  var swiper = new Swiper(".swiperPair", {
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      768: {
        loop: true,

        slidesPerView: 2,
      },
      992: {
        loop: false,

        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-pair",
      prevEl: ".swiper-button-prev-pair",
    },
  });

  var swiper = new Swiper(".swiperRec", {
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-rec",
      prevEl: ".swiper-button-prev-rec",
    },
  });
}
