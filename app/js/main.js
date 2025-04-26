$(function (params) {
  $('.menu__btn').on('click', function() {
    $('.menu__block').toggleClass('menu__block--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('lock');
  });
  
   $(document).on('click', function(e) {
      // Проверяем, что клик не произошел по меню или кнопке
      if (!$(e.target).closest('.menu__block, .menu__btn').length) {
        $('.menu__block').removeClass('menu__block--active');
        $('.menu__btn').removeClass('menu__btn--active');
        $('html').removeClass('lock');
      }
    });
})