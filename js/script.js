$(document).ready(function() {
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

  var random = Math.floor(Math.random() * bgImages.length);

  $('.background').css('background', 'url(\'' + bgImages[random] + '\')');
  // generate a background image based on the random number
  /*if (window.location.pathname == "/" || window.location.pathname == "") {
    $('.background').css('background', 'url(\'' + bgImages[random] + '\')');

    $('footer').addClass("home-page-footer");
  }
  else if (window.location.pathname == "/portfolio/" || window.location.pathname == "/portfolio") {
    $('.background').css('background', 'url(\'../' + bgImages[random] + '\')');
    $('footer').addClass("portfolio-page-footer");
  }*/
  
  $('a[href*=#]:not([href=#])').click(function() {
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
});

console.log("You don\'t have to be here! I made the code available on Github: \n https://github.com/KK4OXJ/KK4OXJ.github.io");
