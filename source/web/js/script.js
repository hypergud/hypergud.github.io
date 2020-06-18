var h1 = $('h1');
var textCenterTop = h1.offset().top + (h1.height() / 2);
var textCenterLeft = h1.offset().left + (h1.width() / 2);

$(document).on('mousemove', function(e) {
  var mx = e.clientX;
  var my = e.clientY;
  var deltaX = textCenterLeft - mx;
  var deltaY = textCenterTop - my;
  var shadowBlur = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
  h1.css({
//	  rgb(255, 83, 148)
    "text-shadow" : deltaX / 10 + "px " + deltaY / 15 + "px " + shadowBlur / 15 +"px " + "rgba(" + deltaX/100 + "," + deltaY/100 + ", " + deltaY/100 + ", 0.9)",
	  
    "-webkit-text-shadow" : deltaX / 10 + "px " + deltaY / 15 + "px " + shadowBlur / 15 +"px " + "rgba(0, 0, 0, 0.73)",
    "-moz-text-shadow" : deltaX / 10 + "px " + deltaY / 15 + "px " + shadowBlur / 15 +"px " + "rgba(0, 0, 0, 0.73)",
    "-o-text-shadow" : deltaX / 10 + "px " + deltaY / 15 + "px " + shadowBlur / 15 +"px " + "rgba(0, 0, 0, 0.73)"
  });
}); 
