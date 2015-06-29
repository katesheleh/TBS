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
