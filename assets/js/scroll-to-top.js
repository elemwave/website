(function () {
    'use strict';
    window.onscroll = function() {scrollFunction()};
})();
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollFunction() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
  