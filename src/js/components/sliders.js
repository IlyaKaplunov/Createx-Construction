import Swiper, { Navigation, Pagination, Thumbs, Autoplay} from "swiper"; 
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]); 

const introSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--intro-slider-speed');

document.body.style.setProperty('--intro-slider-speed', introSliderSpeed + 'ms');

const introSlider = new Swiper(".intro__slider", { 
  loop: true,
  speed: introSliderSpeed,
  slidesPerView: 1, 
  navigation: { 
    nextEl: ".intro__switch-next", 
    prevEl: ".intro__switch-prev", 
  }, 
  pagination: {
    el: '.intro__pag',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll('.intro__pag .swiper-pagination-bullet');

      paginationBullets.forEach(el => {
        el.innerHTML = `<span class="intro__bar"></span>`;
      });
    },
  },
});

const portfolioSlider = new Swiper(".portfolio__slider", { 
  spaceBetween: 30, 
  speed: 600,
  slidesPerView: 1, 
  loop: true,
  navigation: { 
    nextEl: ".portfolio-switch__next", 
    prevEl: ".portfolio-switch__prev", 
  }, 
  breakpoints: {
    1024:  {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    414: {
      slidesPerView: 1,
    },
  }
});

const reviewsSlider = new Swiper(".reviews__slider", { 
 
  speed: 600,
  slidesPerView: 1, 
  loop: true,
  navigation: { 
    nextEl: ".reviews-switch__next", 
    prevEl: ".reviews-switch__prev", 
  }, 
});

const relatedProjectsSlider = new Swiper(".related-projects__slider", { 
  slidesPerView: 1, 
  spaceBetween: 30, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".related-projects__switch-next", 
    prevEl: ".related-projects__switch-prev", 
  }, 
  breakpoints: {
    1024:  {
      slidesPerView: 3,
    },
    725: {
      slidesPerView: 2,
    },
    414: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
  }
});

const similarProjectsSlider = new Swiper(".similar-projects__slider", { 
  slidesPerView: 1, 
  spaceBetween: 30, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".related-projects__switch-next", 
    prevEl: ".related-projects__switch-prev", 
  }, 
  breakpoints: {
    1024:  {
      slidesPerView: 3,
    },
    725: {
      slidesPerView: 2,
    },
  }
});

const workImages = document.querySelector('.work-images__slider');

if (workImages) {
  const workSlider = new Swiper('.work-images__thumbs', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 10,
      }
    }
  });
  const workSliderThumbs = new Swiper(workImages, {
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__switch--next",
      prevEl: ".work-images__switch--prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}



const historySlider = new Swiper(".history__slider", { 
  spaceBetween: 20, 
  speed: 600,
  slidesPerView: 1, 
  navigation: { 
    nextEl: ".history-switch__next", 
    prevEl: ".history-switch__prev", 
  }, 
});

historySlider.on('slideChange', function () {
  console.log(historySlider.realIndex);

  historyBtns.forEach(el => {
    el.classList.remove('history__nav-btn--active');
  });

  document.querySelector(`.history__nav-btn[data-index="${historySlider.realIndex}"]`).classList.add('history__nav-btn--active');
});

const historyBtns = document.querySelectorAll('.history__nav-btn');

historyBtns.forEach((el, idx) => {
  el.setAttribute('data-index', idx);

  el.addEventListener('click', (e) => {
    const index = e.currentTarget.dataset.index;

    historyBtns.forEach(el => {
      el.classList.remove('history__nav-btn--active');
    });

    e.currentTarget.classList.add('history__nav-btn--active');

    historySlider.slideTo(index);
  })
});

