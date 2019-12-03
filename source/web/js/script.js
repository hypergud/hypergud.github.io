var h1 = $('h1')
var textCenterTop = h1.offset().top + (h1.height() / 2);
var textCenterLeft = h1.offset().left + (h1.width() / 2);

$(document).on('mousemove', function(e) {
  var mx = e.clientX;
  var my = e.clientY;
  var deltaX = textCenterLeft - mx;
  var deltaY = textCenterTop - my;
  var shadowBlur = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
  h1.css({
    "text-shadow" : deltaX / 20 + "px " + deltaY / 5 + "px " + shadowBlur / 10 +"px " + "rgba(0,0,0,.2)",
    "-webkit-text-shadow" : deltaX / 20 + "px " + deltaY / 5 + "px " + shadowBlur / 10 +"px " + "rgba(0,0,0,.2)",
    "-moz-text-shadow" : deltaX / 20 + "px " + deltaY / 5 + "px " + shadowBlur / 10+"px " + "rgba(0,0,0,.2)",
    "-o-text-shadow" : deltaX / 20 + "px " + deltaY / 5 + "px " + shadowBlur / 10 +"px " + "rgba(0,0,0,.2)"
  });
}); 