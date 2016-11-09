$(document).ready(function() {
  window.dancers = [];

  


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    
    if (dancerMakerFunctionName === "makeBlinkyDancer") {
      var hillary = new dancerMakerFunction(
      380,
      580,
      500
      );
      $('body').append(hillary.$node);
    
    } else {
      var trump = new dancerMakerFunction(
      280,
      600,
      500
      );

      $('body').append(trump.$node2);
    } 

    
      // $("body").height() * Math.random(),
      // $("body").width() * Math.random(),
      // Math.random() * 1000
  });

  $('#lineUpButton').on('click', function(event) {
    hillary.$node.lineUp();
  });

});

  




/*
To do:

make abutton that lines dancers to one side
  makelineUP method
use an image
dancer interact with others
  by iterating through array window.dancers
maker a dancer that reacts to the mouse

Completed:
make dancer visually distinct



*/














