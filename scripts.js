$(document).ready(function() {
  // Превъртане към секцията при кликване на връзка
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 800);
      }
  });
});