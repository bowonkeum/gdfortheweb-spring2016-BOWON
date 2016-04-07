//blinking time
function blinking () {

  $("#blink").each(function() {
    var elem = $(this);
    setInterval(function() {
      if (elem.css('visibility') == 'visible') {
        elem.css('visibility', 'hidden');
      } else {
        elem.css('visibility', 'visible');
      }
    }, 500);
  });
}

//randoFloatGenerator
function getRandomFloat(min, max) {
  return (Math.random() * (max - min)) + min;
}

/****GO TIME SHOW TIME****/
$(document).ready(function() {

  var $allElements = $('.elements');
  var i = 0;

  //clicking magic
  $(document).click(function(){

      $allElements.eq(i).css({
        "display": "block",
        "position": "absolute",
        "left": event.pageX,
        "top": event.pageY,
        'transform': 'rotate(' + getRandomFloat(-45,45) + 'deg) ' + 'scale(' + getRandomFloat(0.5,1.5) + ')'
      });
      
      i = (i + 1) % $allElements.length;
      $(document).append(eq(i));
  });

  //fire blinking
  blinking();

});