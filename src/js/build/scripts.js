var example = (function() {

  var example = {
    init: function(){
      console.log('hey there!');
    }
  };

  return example;
}());

var menuHamburger = (function() {

  var menuHamburger = {
    init: function(){
      // nav .js-menu
      // main link .js-menu-control
      var menuControl = document.querySelector(".js-menu-control"),
      menu = document.querySelector(".js-menu");

    menuControl.addEventListener("click", function(ev){
    ev.preventDefault();
    //menu.classList.toggle("opened");
    document.body.classList.toggle("mobile-menu-opened");
    }, false);
    }
  };

  return menuHamburger;
}());

var popupRemodal = (function() {

  var popupRemodal = {
    init: function(){
      $(document).on('opening', '.remodal', function () {
        console.log('opening');
      });

      $(document).on('opened', '.remodal', function () {
        console.log('opened');
      });

      $(document).on('closing', '.remodal', function (e) {
        console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
      });

      $(document).on('closed', '.remodal', function (e) {
        console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
      });

      $(document).on('confirmation', '.remodal', function () {
        console.log('confirmation');
      });

      $(document).on('cancellation', '.remodal', function () {
        console.log('cancellation');
      });

      //  Usage:
      //  $(function() {
      //
      //    // In this case the initialization function returns the already created instance
      //    var inst = $('[data-remodal-id=modal]').remodal();
      //
      //    inst.open();
      //    inst.close();
      //    inst.getState();
      //    inst.destroy();
      //  });

      //  The second way to initialize:
      $('[data-remodal-id=modal2]').remodal({
        modifier: 'with-red-theme'
      });
    }
  };

  return popupRemodal;
}());

var yandexMap = (function() {

  var yandexMap = {

    init: function(){


    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map('ymap', {
          center: [59.96267206, 30.29443062],
          zoom: 16,
          controls: []
        });


        myMap.controls

          .add('zoomControl', {
            float: 'none',
            position: {
              left: 10,
              bottom: 30
            }
          })


          .add('geolocationControl', {
            float: 'none',
            position: {
              left: 10,
              bottom: 95
            }
          })

          .add('routeEditor', {
            float: 'none',
            position: {
              right: 103,
              top: 10
            }
          })


          .add('trafficControl');



        myMap.controls.add(
          new ymaps.control.SearchControl({
            options: {
                provider: 'yandex#publicMap',
                useMapBounds: true
            }
          })
        );
      }
    }
  };

  return yandexMap;
}());


  document.querySelector('.js-menu-control') && menuHamburger.init();

  document.querySelector('.map') && yandexMap.init();

  document.querySelector('.remodal') && popupRemodal.init();
