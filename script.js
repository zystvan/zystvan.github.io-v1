$(document).ready(function() {
  // get a random number between 1 and 20
  var min = 1;
  var max = 20;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // generate a background image based on the random number
  switch (random) {
    case 1:
      $('header .background').css("background", "url('img/river-mountains-trees.jpg') center center no-repeat fixed");
      break;
    case 2:
      $('header .background').css("background", "url('img/fox.jpg') center center no-repeat fixed");
      break;
    case 3:
      $('header .background').css("background", "url('img/grass.jpg') center center no-repeat fixed");
      break;
    case 4:
      $('header .background').css("background", "url('img/hillside.jpg') center center no-repeat fixed");
      break;
    case 5:
      $('header .background').css("background", "url('img/moose.jpg') center center no-repeat fixed");
      break;
    case 6:
      $('header .background').css("background", "url('img/mountain.jpg') center center no-repeat fixed");
      break;
    case 7:
      $('header .background').css("background", "url('img/mountain-top.jpg') center center no-repeat fixed");
      break;
    case 8:
      $('header .background').css("background", "url('img/ocean-mountains.jpg') center center no-repeat fixed");
      break;
    case 9:
      $('header .background').css("background", "url('img/stream.jpg') center center no-repeat fixed");
      break;
    case 10:
      $('header .background').css("background", "url('img/volcano.jpg') center center no-repeat fixed");
      break;
    case 11:
      $('header .background').css("background", "url('img/bear.jpg') center center no-repeat fixed");
      break;
    case 12:
      $('header .background').css("background", "url('img/leopard.jpg') center center no-repeat fixed");
      break;
    case 13:
      $('header .background').css("background", "url('img/mountain-ridge.jpg') center center no-repeat fixed");
      break;
    case 14:
      $('header .background').css("background", "url('img/sheep.jpg') center center no-repeat fixed");
      break;
    case 16:
      $('header .background').css("background", "url('img/snowy-mountains-evening.jpg') center center no-repeat fixed");
      break;
    case 17:
      $('header .background').css("background", "url('img/snowy-mountains-night.jpg') center center no-repeat fixed");
      break;
    case 18:
      $('header .background').css("background", "url('img/snowy-trees.jpg') center center no-repeat fixed");
      break;
    case 19:
      $('header .background').css("background", "url('img/watery-rocks.jpg') center center no-repeat fixed");
      break;
    case 20:
      $('header .background').css("background", "url('img/grass-mountain.jpg') center center no-repeat fixed");
      break;
  }
  });