jQuery(document).ready(function($) {

  document.querySelector('.js-menu-control') && menuHamburger.init();

  document.querySelector('.map') && yandexMap.init();

  document.querySelector('.form') && formdecor.init();

  document.querySelector('.js-validate-form') && validateForm.init();

  $('.js-mask-phone').attr('data-mask',"(___) ___-__-__").mask("(999) 999-99-99");

  smoothScrolling.init();
});
