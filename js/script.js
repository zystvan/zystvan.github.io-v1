$(document).ready(function() {
  // smooth scroller widget thing by Chris Coyier (CSS-Tricks.com)
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  // close the overlay
  $('.close').click(function() {
    $('.overlay').fadeOut();
  });
  
  $(document).keydown(function(event) {
    if (event.which == 27) {
      $('.overlay').fadeOut();
    }
  });
});

console.log("You don\'t have to be here! I made the code available on Github: \n https://github.com/KK4OXJ/KK4OXJ.github.io");