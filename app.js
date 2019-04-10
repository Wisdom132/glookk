document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});



$(document).ready(function () {
    $(".carousel").carousel({
      indicators: true,
      padding:100,
      dist:-300,
    });
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
  }
});

