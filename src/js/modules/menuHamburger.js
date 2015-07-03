var menuHamburger = (function() {

  var menuHamburger = {
    init: function(){
      // .js-menu
      // .js-menu-inner
      // .js-menu-control
      var menuControl = document.querySelector(".js-menu-control"),
      menu = document.querySelector(".js-menu");

      menuControl.addEventListener("click", onControlClick, false);

      document.addEventListener('keydown', onEscClicked, false);

      document.addEventListener('click', onOutSideClicked, false);
    }
  };

  function onControlClick(ev){
    ev.preventDefault();
    ev.stopPropagation();
    document.body.classList.toggle("mobile-menu-opened");
  }

  function onEscClicked(ev) {
    if (document.body.classList.contains("mobile-menu-opened") && (ev.which == 27 || ev.keyCode == 27)) {
      document.body.classList.remove("mobile-menu-opened");
    }
    return;
  }

  function onOutSideClicked(ev) {
    var ev = ev || window.event,
        targ;

    if (!document.body.classList.contains("mobile-menu-opened")) return;

    for (targ = ev.target; targ != document.body; targ = targ.parentNode) {
      if (targ.classList.contains('js-menu-inner')) return;
    };

    document.body.classList.remove("mobile-menu-opened");
    return;
  }

  return menuHamburger;
}());
