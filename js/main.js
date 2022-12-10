const owl = $('.owl-carousel');

owl.owlCarousel({
  center :true,
  loop: true,
  margin: 30,
  startPosition:1
});

$('.slider__btn--prev').click(function() {
  owl.trigger('prev.owl.carousel');
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})



let nav = document.querySelector('.nav');
let humburger = document.querySelector('.humburger');

humburger.addEventListener('click', ()=> {
  nav.classList.toggle('nav__menu')
  humburger.classList.toggle('active');
})