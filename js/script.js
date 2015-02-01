$(document).ready(function() {
  // array of all the background images
  var bgImages = [
    'img/river-mountains-trees.jpg',
    'img/fox.jpg',
    'img/grass.jpg',
    'img/moose.jpg',
    'img/mountain.jpg',
    'img/mountain-top.jpg',
    'img/ocean-mountains.jpg',
    'img/stream.jpg',
    'img/volcano.jpg',
    'img/bear.jpg',
    'img/leopard.jpg',
    'img/mountain-ridge.jpg',
    'img/watery-rocks.jpg',
    'img/snowy-trees.jpg',
    'img/snowy-mountains-night.jpg',
    'img/snowy-mountains-evening.jpg',
    'img/sheep.jpg',
    'img/watery-rocks.jpg',
    'img/grass-mountain.jpg'
  ];

  // randomly choose a background image...
  var random = Math.floor(Math.random() * bgImages.length);
  
  // ...and set that background image
  $('.background').css('background', 'url(\'' + bgImages[random] + '\') center center');
  
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
