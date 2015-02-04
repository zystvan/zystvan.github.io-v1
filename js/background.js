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
var background = document.getElementById('background');
background.style["background"] = 'url(\'' + bgImages[random] + '\')';