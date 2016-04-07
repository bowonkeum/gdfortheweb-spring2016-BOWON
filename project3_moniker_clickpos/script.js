//time
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

$(document).ready(function() {

  var $allElements = $('.elements');
  var i = 0;

  $(document).click(function(){

      $allElements.eq(i).css({
        "display": "block",
        "position": "absolute",
        "left": event.pageX,
        "top": event.pageY
      });
      
      i = (i + 1) % $allElements.length;
      $(document).append(eq(i));
  });

      blinking();

});