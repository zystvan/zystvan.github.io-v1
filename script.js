$(document).ready(function() {
  // get a random number between 1 and 20
  var min = 1;
  var max = 18;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // generate a background image based on the random number
  if (window.location.pathname == "/" || window.location.pathname == "") {
    switch (random) {
      case 1:
        $('.background').css("background", "url('img/river-mountains-trees.jpg') center center no-repeat fixed");
        break;
      case 2:
        $('.background').css("background", "url('img/fox.jpg') center center no-repeat fixed");
        break;
      case 3:
        $('.background').css("background", "url('img/grass.jpg') center center no-repeat fixed");
        break;
      case 4:
        $('.background').css("background", "url('img/moose.jpg') center center no-repeat fixed");
        break;
      case 5:
        $('.background').css("background", "url('img/mountain.jpg') center center no-repeat fixed");
        break;
      case 6:
        $('.background').css("background", "url('img/mountain-top.jpg') center center no-repeat fixed");
        break;
      case 7:
        $('.background').css("background", "url('img/ocean-mountains.jpg') center center no-repeat fixed");
        break;
      case 8:
        $('.background').css("background", "url('img/stream.jpg') center center no-repeat fixed");
        break;
      case 9:
        $('.background').css("background", "url('img/volcano.jpg') center center no-repeat fixed");
        break;
      case 10:
        $('.background').css("background", "url('img/bear.jpg') center center no-repeat fixed");
        break;
      case 11:
        $('.background').css("background", "url('img/leopard.jpg') center center no-repeat fixed");
        break;
      case 12:
        $('.background').css("background", "url('img/mountain-ridge.jpg') center center no-repeat fixed");
        break;
      case 13:
        $('.background').css("background", "url('img/sheep.jpg') center center no-repeat fixed");
        break;
      case 14:
        $('.background').css("background", "url('img/snowy-mountains-evening.jpg') center center no-repeat fixed");
        break;
      case 15:
        $('.background').css("background", "url('img/snowy-mountains-night.jpg') center center no-repeat fixed");
        break;
      case 16:
        $('.background').css("background", "url('img/snowy-trees.jpg') center center no-repeat fixed");
        break;
      case 17:
        $('.background').css("background", "url('img/watery-rocks.jpg') center center no-repeat fixed");
        break;
      case 18:
        $('.background').css("background", "url('img/grass-mountain.jpg') center center no-repeat fixed");
        break;
    }
    
    $('footer').addClass("home-page-footer");
  }
  else if (window.location.pathname == "/portfolio/" || window.location.pathname == "/portfolio") {
    switch (random) {
      case 1:
        $('.background').css("background", "url('../img/river-mountains-trees.jpg') center center no-repeat fixed");
        break;
      case 2:
        $('.background').css("background", "url('../img/fox.jpg') center center no-repeat fixed");
        break;
      case 3:
        $('.background').css("background", "url('../img/grass.jpg') center center no-repeat fixed");
        break;
      case 4:
        $('.background').css("background", "url('../img/moose.jpg') center center no-repeat fixed");
        break;
      case 5:
        $('.background').css("background", "url('../img/mountain.jpg') center center no-repeat fixed");
        break;
      case 6:
        $('.background').css("background", "url('../img/mountain-top.jpg') center center no-repeat fixed");
        break;
      case 7:
        $('.background').css("background", "url('../img/ocean-mountains.jpg') center center no-repeat fixed");
        break;
      case 8:
        $('.background').css("background", "url('../img/stream.jpg') center center no-repeat fixed");
        break;
      case 9:
        $('.background').css("background", "url('../img/volcano.jpg') center center no-repeat fixed");
        break;
      case 10:
        $('.background').css("background", "url('../img/bear.jpg') center center no-repeat fixed");
        break;
      case 11:
        $('.background').css("background", "url('../img/leopard.jpg') center center no-repeat fixed");
        break;
      case 12:
        $('.background').css("background", "url('../img/mountain-ridge.jpg') center center no-repeat fixed");
        break;
      case 13:
        $('.background').css("background", "url('../img/sheep.jpg') center center no-repeat fixed");
        break;
      case 14:
        $('.background').css("background", "url('../img/snowy-mountains-evening.jpg') center center no-repeat fixed");
        break;
      case 15:
        $('.background').css("background", "url('../img/snowy-mountains-night.jpg') center center no-repeat fixed");
        break;
      case 16:
        $('.background').css("background", "url('../img/snowy-trees.jpg') center center no-repeat fixed");
        break;
      case 17:
        $('.background').css("background", "url('../img/watery-rocks.jpg') center center no-repeat fixed");
        break;
      case 18:
        $('.background').css("background", "url('../img/grass-mountain.jpg') center center no-repeat fixed");
        break;
    }
    
    $('footer').addClass("portfolio-page-footer");
  }
});

console.log("You don\'t have to be here! I made the code available on Github: \n https://github.com/KK4OXJ/KK4OXJ.github.io");