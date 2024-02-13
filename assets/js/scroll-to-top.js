(function () {
    'use strict';
    window.onscroll = function() {scrollFunction()};
})();
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollFunction() {
  var test = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    test.style.display = "block";
  } else {
    test.style.display = "none";
  }
}
  