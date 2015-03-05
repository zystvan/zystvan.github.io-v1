window.onload = function() {
  // functions
  
  // https://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window
  // Get the scrolltop
  function getScrollTop() {
    if (typeof pageYOffset != 'undefined') {
      //most browsers except IE before #9
      return pageYOffset;
    } else {
      var B = document.body; //IE 'quirks'
      var D = document.documentElement; //IE with doctype
      D = (D.clientHeight) ? D : B;
      return D.scrollTop;
    }
  }
  
  function scrollTo(Y, duration, easingFunction) {
    var start = Date.now();
    var from = getScrollTop();
    
    if (from == Y) {
      return;
    }
  
    function min(a, b) {
      return a < b ? a : b;
    }
  
    function scroll(timestamp) {
      var currentTime = Date.now(),
          time = min(1, ((currentTime - start) / duration)),
          easedT = easingFunction(time),
          topCalc = (easedT * (Y - from)) + from;
      
      document.documentElement.scrollTop = topCalc;
      document.body.scrollTop = topCalc;
  
      if (time < 1) {
        requestAnimationFrame(scroll);
      }
      else {
        return;
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
  
  // scroll to the portfolio when the link to it is clicked
  document.getElementById('portfolio-link').onclick = function() {
    scrollTo(distanceFromTop, 400, easing.easeOutQuad);
    
    return false;
  };
};