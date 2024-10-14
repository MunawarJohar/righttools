"use strict";

(function () {
  "use strict"; // ======= Sticky

  window.onscroll = function () {
    var ud_header = document.querySelector(".ud-header");
    var sticky = ud_header.offsetTop;
    var logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    } // === logo change


    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo.PNG";
    } else {
      logo.src = "assets/images/logo/logo.PNG";
    } // show or hide the back-top-top button


    var backToTop = document.querySelector(".back-to-top");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  }; //===== close navbar-collapse when a  clicked


  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  document.querySelectorAll(".ud-menu-scroll").forEach(function (e) {
    return e.addEventListener("click", function () {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    });
  });
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  }); // ===== submenu

  var submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach(function (elem) {
    elem.querySelector("a").addEventListener("click", function () {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  }); // ===== wow js

  new WOW().init(); // ====== scroll top js

  function scrollTo(element) {
    var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
    var start = element.scrollTop;
    var change = to - start;
    var increment = 20;
    var currentTime = 0;

    var animateScroll = function animateScroll() {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = function () {
    scrollTo(document.documentElement);
  };
})();
//# sourceMappingURL=main.dev.js.map
