$(document).ready(function () {
  

    $('.rooms-tabs__button').on('click', function(e) {
    e.preventDefault(); // отменяем переход по ссылке

    var tabId = $(this).data('tab');

    $('.rooms-tabs__button').removeClass('rooms-tabs__button--active');
    $(this).addClass('rooms-tabs__button--active');

    $('.rooms-tabs__panel').removeClass('rooms-tabs__panel--active');
    $('#' + tabId).addClass('rooms-tabs__panel--active');
  });


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

  $(function(){
    $('.back-to-top').on('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top:0,
        behavior: "smooth"
      })
    })
  }) 
  
});
