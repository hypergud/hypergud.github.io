(function($) {
    $(document).ready(function(){
        var $box = $('.box');

        //gsap.
        //greensock animation platform.

        //set();
        //to();
        // gsap.set(요소, {속성});
        // gsap.to(요소, {속성});

        /*
        gsap.set($box, {autoAlpha:0});
        //visibility : hidden, opacity : 0
        //gsap.set() - $.css() 와 동일.
        gsap.to($box, {autoAlpha:1, duration:1, delay:1});
        //gsap.to() - $.animate() 와 비슷.
        */

        
        var $box1 = $('#box-1');
        /*
        gsap.set($box1, {autoAlpha:0, y:100, scale:1.2, rotation:20});
        //y - transform : translateY(100px)
        //x - transform : translateX(100px)
        gsap.to($box1, {autoAlpha:1, y:0, scale:1, rotation:0, duration:1.5})
        */

        //transform 은 다른요소에 영향 없어

        //timeline();
        //애니메이션을 위한 초기 준비.

        var $box2 = $('#box-2');
        var $box3 = $('#box-3');
        var $box4 = $('#box-4');
        var $box5 = $('#box-5');

        gsap.set($box1, {autoAlpha:0, y:100, scale:1.2, rotation:20});
        gsap.set($box2, {autoAlpha:0, x:100, y:-100, scale:0.8});
        gsap.set($box3, {autoAlpha:0});
        gsap.set($box4, {autoAlpha:0});
        gsap.set($box5, {autoAlpha:0});

        //타임라인 구성.
        var tl = gsap.timeline();
        tl.to($box1, {autoAlpha:1, y:0, scale:1, rotation:0,
        duration:1, ease:Power1.easeIn});
        //greensock ease visualizer
        //동시에, 시점 지정해 그 시점에 바로 실행.
        tl.addLabel('t2');
        //tl.addLabel('t2', '+=2.0'); //2초 밀려 진행.
        tl.to($box5, {autoAlpha:1, duration:2}, 't2');
        tl.to($box2, {autoAlpha:1, x:0, y:0,scale:1, duration:1.5, ease:Back.easeIn}, 't2');
        tl.addLabel('t3');
        tl.to($box4, {autoAlpha:1, duration:1}, 't3-=0.5'); //- 이 시점에 duration -
        tl.to($box3, {autoAlpha:1, duration:1}, 't3+=0.5'); //+ 이 시점에 duration +

        

    });
})(jQuery);