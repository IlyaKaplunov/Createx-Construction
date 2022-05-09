const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

if (burger) {
  const menu = document.querySelector('.header__menu');
  burger.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}