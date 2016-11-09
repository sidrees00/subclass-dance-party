var makeTrumpDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left, timeBetweenSteps);

  // use jQuery to create an HTML <span> tag
  //this.$node = $('<img class="trump"></img>');
  
};


makeTrumpDancer.prototype = Object.create(makeDancer.prototype);
makeTrumpDancer.prototype.constructor = makeTrumpDancer;

makeTrumpDancer.prototype.oldStep = makeDancer.prototype.step;

makeTrumpDancer.prototype.step = function() {
  this.oldStep();
  this.$node2.toggle();
};

makeTrumpDancer.prototype.lineUp = function() {
  
};


makeTrumpDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  //this.$node2.css(styleSettings);
};

