import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.to-top');
let heroHeight;

if (document.querySelector('.intro')) {
  heroHeight = document.querySelector('.intro').offsetHeight;
}

if (document.querySelector('.page-intro')) {
  heroHeight = document.querySelector('.page-intro').offsetHeight;
}

const isVisibleToTop = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
}

isVisibleToTop(window.scrollY);

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  isVisibleToTop(y);
});