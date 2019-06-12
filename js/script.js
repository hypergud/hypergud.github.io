// console.log("load");

//셀렉터 찾음
var $cursorDot = document.querySelector("#cursor-dot");


//커서 움직이기
window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e){
    e.preventDefault();
    // console.log("move");
    // window.pageXOffset
    // window.pageYOffset
    var posX = e.pageX, posY = e.pageY;
    //현재 커서의 좌표값
    // console.log(posX, posY);
    // $cursorDot.style.top = posY + "px";
    // $cursorDot.style.left = posX + "px";

    // TweenMax.killTweensOf($cursorDot);
    // TweenMax.killTweensOf($cursorBG);
    // TweenMax.killTweensOf($progress);

    TweenMax.to($cursorDot, 0, {css:{top:posY, left:posX}});
}