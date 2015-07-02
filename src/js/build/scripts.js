/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*
 *  Remodal - v1.0.1
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(v&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;c>e;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return d}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){var a,c,e=b("html"),f=p+"-is-locked";e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}function f(){var a,c,e=b("html"),f=p+"-is-locked";e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}function g(a,b,c,d){a.$bg.removeClass(p+"-is-"+t.CLOSING+" "+p+"-is-"+t.OPENING+" "+p+"-is-"+t.CLOSED+" "+p+"-is-"+t.OPENED).addClass(p+"-is-"+b),a.$overlay.removeClass(p+"-is-"+t.CLOSING+" "+p+"-is-"+t.OPENING+" "+p+"-is-"+t.CLOSED+" "+p+"-is-"+t.OPENED).addClass(p+"-is-"+b),a.$wrapper.removeClass(p+"-is-"+t.CLOSING+" "+p+"-is-"+t.OPENING+" "+p+"-is-"+t.CLOSED+" "+p+"-is-"+t.OPENED).addClass(p+"-is-"+b),a.$modal.removeClass(p+"-is-"+t.CLOSING+" "+p+"-is-"+t.OPENING+" "+p+"-is-"+t.CLOSED+" "+p+"-is-"+t.OPENED).addClass(p+"-is-"+b),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(q+" "+r)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(q,g).on(r,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(q+" "+r)}),d())}function i(a){a.state!==t.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(q+" "+r)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,t.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;c>e;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||("false"===d?!1:d)),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){var a,c,d=location.hash.replace("#","");if(d){try{c=b("[data-"+o+"-id="+d.replace(new RegExp("/","g"),"\\/")+"]")}catch(e){}c&&c.length&&(a=b[o].lookup[c.data(o)],a&&a.settings.hashTracking&&a.open())}else m&&m.state===t.OPENED&&m.settings.hashTracking&&m.close()}function l(a,c){var d=b(document.body),e=this;e.settings=b.extend({},s,c),e.index=b[o].lookup.push(e)-1,e.state=t.CLOSED,e.$overlay=b("."+p+"-overlay"),e.$overlay.length||(e.$overlay=b("<div>").addClass(p+"-overlay "+p+"-is-"+t.CLOSED).hide(),d.append(e.$overlay)),e.$bg=b("."+p+"-bg").addClass(p+"-is-"+t.CLOSED),e.$modal=a,e.$modal.addClass(p+"-is-initialized "+p+" "+e.settings.modifier+" "+p+"-is-"+t.CLOSED),e.$wrapper=b("<div>").addClass(p+"-wrapper "+e.settings.modifier+" "+p+"-is-"+t.CLOSED).hide().append(e.$modal),d.append(e.$wrapper),e.$wrapper.on("click."+p,"[data-"+o+'-action="close"]',function(a){a.preventDefault(),e.close()}),e.$wrapper.on("click."+p,"[data-"+o+'-action="cancel"]',function(a){a.preventDefault(),e.$modal.trigger(u.CANCELLATION),e.settings.closeOnCancel&&e.close(u.CANCELLATION)}),e.$wrapper.on("click."+p,"[data-"+o+'-action="confirm"]',function(a){a.preventDefault(),e.$modal.trigger(u.CONFIRMATION),e.settings.closeOnConfirm&&e.close(u.CONFIRMATION)}),e.$wrapper.on("click."+p,function(a){var c=b(a.target);c.hasClass(p+"-wrapper")&&e.settings.closeOnOutsideClick&&e.close()})}var m,n,o="remodal",p=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||o,q=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+p}).join(" "),r=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+p}).join(" "),s=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),t={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},u={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},v=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}();l.prototype.open=function(){var a,c=this;c.state!==t.OPENING&&c.state!==t.CLOSING&&(a=c.$modal.attr("data-"+o+"-id"),a&&c.settings.hashTracking&&(n=b(window).scrollTop(),location.hash=a),m&&m!==c&&i(m),m=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),h(function(){g(c,t.OPENING)},function(){g(c,t.OPENED)},c))},l.prototype.close=function(a){var c=this;c.state!==t.OPENING&&c.state!==t.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-"+o+"-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(n)),h(function(){g(c,t.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,t.CLOSED,!1,a)},c))},l.prototype.getState=function(){return this.state},l.prototype.destroy=function(){var a,c=b[o].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(p+"-is-"+t.CLOSING+" "+p+"-is-"+t.OPENING+" "+p+"-is-"+t.CLOSED+" "+p+"-is-"+t.OPENED))},b[o]={lookup:[]},b.fn[o]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(o)?(c=new l(d,a),d.data(o,c.index),c.settings.hashTracking&&d.attr("data-"+o+"-id")===location.hash.substr(1)&&c.open()):c=b[o].lookup[d.data(o)]}),c},b(document).ready(function(){b(document).on("click","[data-"+o+"-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-"+o+"-target"),e=b("[data-"+o+"-id="+d+"]");b[o].lookup[e.data(o)].open()}),b(document).find("."+p).each(function(a,c){var d=b(c),e=d.data(o+"-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[o](e)}),b(document).on("keyup."+p,function(a){m&&m.settings.closeOnEscape&&m.state===t.OPENED&&27===a.keyCode&&m.close()}),b(window).on("hashchange."+p,k)})});
var formdecor = (function() {

  var formdecor = {
    init: function(){

              // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }
        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }
    }
  };

  return formdecor;
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

var smoothScrolling = (function() {

  var smoothScrolling = {
    init: function(){
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }
  };

  return smoothScrolling;
}());

var yandexMap = (function() {

  var yandexMap = {

    init: function(){

    if (typeof ymaps === 'undefined') return;

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

  document.querySelector('.form') && formdecor.init();

  smoothScrolling.init();
