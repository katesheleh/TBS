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
