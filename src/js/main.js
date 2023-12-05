$(document).ready(function(){

  // скрипт для слайдера начало
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true
  });
  // Go to the next item
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
  // конец скрипта для слайдера

  $('ul.menu__caption').on('click', 'li:not(.menu__content_active)', function() {
    $(this)
      .addClass('menu__btn_active').siblings().removeClass('menu__btn_active')
      .closest('div.menu__tabs').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
  });
    
});