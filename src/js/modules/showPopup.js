var showPopup = (function() {
  'use strict';

  // .js-show-popup
  var showPopup = {
    init: function(){
      $('.js-show-popup').on('click', onBtnClick);
    }
  };

  function onBtnClick(ev) {
    var $btn = $(this),
        $modal = $('[data-remodal-id="'+$btn.data('modal')+'"]');

    if (is_touch_device() || !$modal.length) return;

    ev.preventDefault();
    $modal.remodal().open();


  }

  return showPopup;
}());
