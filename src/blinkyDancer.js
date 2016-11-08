// makeBlinkyDancer = subclass

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = this.step;  
  makeDancer.call(this, top, left, timeBetweenSteps);
  

  //return blinkyDancer;
};



//makeBlinkyDancer.prototype = new makeDancer;
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


// console.log("this= "+this);
//makeBlinkyDancer.prototype.oldStep = this.oldStep;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;


makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  //console.log(this);
 
  this.oldStep();
  this.$node.toggle();
  
  
  //this.step();


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  // console.log("I'm being called");
  
};      
















//var max = new makeDancer(1,2,1000);
