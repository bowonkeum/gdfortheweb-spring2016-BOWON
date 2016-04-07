//blinking time
function blinking () {

  $(".blink").each(function() {
    var elem = $(this);
    setInterval(function() {
      if (elem.css('visibility') == 'visible') {
        elem.css('visibility', 'hidden');
      } else {
        elem.css('visibility', 'visible');
      }
    }, 800);
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
  $('.container').click(function(){

    $('.intro').hide();

    $allElements.eq(i).css({
      "display": "block",
      "position": "absolute",
      "left": event.pageX,
      "top": event.pageY,
      'transform': 'rotate(' + getRandomFloat(-45,45) + 'deg)'
    });

    i++ % $allElements.length;
    $('.container').append(eq(i));

      //break the loop
      if (i == 4) {
        return false;
      }
    });

  //fire blinking
  blinking();

});