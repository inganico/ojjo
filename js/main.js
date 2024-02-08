
/*======= Бургер меню =====*/

const header = document.querySelector('.header');
const burger = document.querySelector('.header-burger__menu');
const body = document.querySelector('.body');
const dearly = document.querySelector('.dearly');

burger.addEventListener('click', function () {
  header.classList.toggle('open')
  body.classList.toggle('open')
  dearly.classList.toggle('open');
})

