window.onload = function() {
  // functions
  
  // https://stackoverflow.com/a/18018710/4013202
  // fade something out
  var elementToFade = document.getElementById('overlay').style;
  elementToFade.opacity = 1;
  function fade(){
    (elementToFade.opacity -= 0.1) < 0 ? elementToFade.display = "none" : setTimeout(fade, 40);
  }
  
  // https://gist.github.com/dezinezync/5487119
  // smoothly scroll to the portfolio
  function scrollTo(Y, duration, easingFunction, callback) {
    var start = Date.now();
    var elem = document.documentElement.scrollTop ? document.documentElement : document.body;
    var from = elem.scrollTop;
 
    if (from == Y) {
      callback();
      return;
    }
 
    function min(a, b) {
    	return a < b ? a : b;
    }
 
    function scroll(timestamp) {
      var currentTime = Date.now();
      var time = min(1, ((currentTime - start) / duration));
      var easedT = easingFunction(time);
 
      elem.scrollTop = (easedT * (Y - from)) + from;
      
      if (time < 1) {
        requestAnimationFrame(scroll);
      }
      else {
        if (callback) {
          callback();
        }
      }
    }
 
    requestAnimationFrame(scroll)
  }
  
  // options for easing when I call the obove function
  var easing = {
    // no easing, no acceleration
    linear: function(t) { return t },
    // accelerating from zero velocity
    easeInQuad: function(t) { return t * t },
    // decelerating to zero velocity
    easeOutQuad: function(t) { return t * (2 - t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
    // accelerating from zero velocity 
    easeInCubic: function(t) { return t * t * t },
    // decelerating to zero velocity 
    easeOutCubic: function(t) { return (--t) * t * t +1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
  };
  
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
  background.style["background-size"] = "cover";
  background.style["background-position"] = "center center";
  background.style["background-repeat"] = "no-repeat";
  
  var distanceFromTop = document.getElementById('portfolio').getBoundingClientRect().top;
  
  // fade out the overlay when the user clicks the close button
  document.getElementById('close').onclick = function() {
    fade();
  };
  
  // fade out the overlay when the escape key is pressed
  document.addEventListener("keydown", function(key) {
    if (key.which == 27) {
      fade();
    }
  });
  
  // scroll to the portfolio when the link to it is clicked
  document.getElementById('portfolio-link').onclick = function() {
    scrollTo(distanceFromTop, 400, easing.easeOutQuad);
    
    return false;
  };
};