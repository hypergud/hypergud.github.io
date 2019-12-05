(function($){
    $(document).ready(function() {
        //Selector.
        var menu = $('.menu');
        var menu2 = $('.menu2');
		var menubt = $('.door');
        var menubt2 = $('.door2');
        var content = $('.ac-container');
        
        var ac1 = $('#ac-1');
        var ac2 = $('#ac-2');

        var ac1_l = $('.ac-1');
        var ac2_l = $('.ac-2');


        var ac_s = $('.ac-small');
        var ac_m = $('.ac-medium');

        var w1 = $('.work1');
        var w2 = $('.work2');

        var obj1 = $('.objectsgroup01');
        var obj2 = $('.objectsgroup02');
		
		//Event Bind.
        function addEvent() {
            menubt.on('click', onClick);
            menubt2.on('click', onClick2);
            ac1_l.on('click', onClickac1);
            ac2_l.on('click', onClickac2);
        }

        //Event Handler
        

        function onClick(e){
            e.preventDefault();
            if(menu.hasClass('door-close')){
				menubt.removeClass('door-close-bt');
				menubt.addClass('door-open-bt');
				menu.removeClass('door-close');
                menu.addClass('door-open');
                content.addClass('content_move');
			}else if(menu.hasClass('door-open')){
				menubt.removeClass('door-open-bt');
				menubt.addClass('door-close-bt');
				menu.removeClass('door-open');
                menu.addClass('door-close');
                content.removeClass('content_move');
			}
        }

        function onClick2(e){
            e.preventDefault();
            if(menu2.hasClass('door-close2')){
				menubt2.removeClass('door-close-bt2');
				menubt2.addClass('door-open-bt2');
				menu2.removeClass('door-close2');
				menu2.addClass('door-open2');
			}else if(menu2.hasClass('door-open2')){
				menubt2.removeClass('door-open-bt2');
				menubt2.addClass('door-close-bt2');
				menu2.removeClass('door-open2');
                menu2.addClass('door-close2');
                // menu2.css("color", "red")
			}
        }

        function onClickac1(e){
            e.preventDefault();
            w1.addClass('img-open');
            obj1.addClass('img-open');
            w2.addClass('img-close');
            obj2.addClass('img-close');
            w1.removeClass('img-close');
            obj1.removeClass('img-close');
            ac_s.addClass('small');
            ac_m.removeClass('medium');
            ac1.prop("checked", true); /* by ID */
            ac2.prop("checked", false); /* by NAME */  
        }

        function onClickac2(e){
            e.preventDefault();
            w2.removeClass('img-close');
            obj2.removeClass('img-close');
            w2.addClass('img-open');
            obj2.addClass('img-open');
            w1.addClass('img-close');
            obj1.addClass('img-close');
            ac_s.removeClass('small');
            ac_m.addClass('medium');
            ac2.prop("checked", true); /* by ID */
            ac1.prop("checked", false); /* by NAME */  
        }

        //Init.
        function init(){
            addEvent();
        }

        //Run initialize.
        init();


        // -----------------------

        

        $(window).scroll(function(){
            // console.log($(window).scrollTop());
            var scrollValue = $(window).scrollTop();
            // var winWdith = $(window).height();

          if(scrollValue  >60){
                // var mt1 = $(".main_txt");
                // var mt2 = $(".main_txt2");

                var Size = scrollValue;
                var Size = Size + -100;
                var top1 = Size + (Size * 0.25);
                var lef1 = -230 + (Size * -0.85);
                var top2 = Size + (Size * 0.7);
                var lef2 = 110 + (Size * 0.6);
                var rt1 = Size / 5.8;
                console.log(Size);

                
                // $(".main_txt").css('top', '670px');
                    $(".main_txt").css({ WebkitTransform: 'rotate(' + -90 + 'deg)'});
                    // $(".main_txt").css('left', '-680px');
                    // $(".main_txt2").css('top', '1200px');
                    // $(".main_txt2").css('left', '200px');

                if(Size < 550){
                    $(".main_txt").css('top', top1 +'px');
                    $(".main_txt").css('left', lef1 +'px');
                    $(".main_txt").css({ WebkitTransform: 'rotate(' + -rt1 + 'deg)'});
                    $(".main_txt2").css('top', top2+'px');
                    $(".main_txt2").css('left', lef2 +'px');

                    $('.textgroup1').css('opacity', (Size/550));
                $('.textgroup2').css('opacity', (Size/550));
                }else{
                    
                }

            }

            
            
          else{
              $(".main_txt").css('top', '-100px');
              $(".main_txt").css({ WebkitTransform: 'rotate(' + 0+ 'deg)'});
              $(".main_txt").css('left', '-250px');
              $(".main_txt2").css('top', '-100px');
              $(".main_txt2").css('left', '110px');
            }
            if(200 > scrollValue && scrollValue > 100){
                // var btsize = 100 + Size/0.95;
                // $('.index_button').css('width', btsize + 'px', 'left' , 0 + 'px');
                // $('.index_button').src = "../source/img/UI/button_onclick.png";
            }else if(scrollValue < 100){
                // $('.index_button').css('width', '10vh');
                // $('.index_button').src = "../source/img/UI/button.png";
            }

            if(scrollValue >550){
                $('.about').css('border-bottom' , '2px solid #9933ff');
                if(scrollValue <700){
                    
                $('.gudframe').css('width', Size/1.5 + 'px', 'opacity', 1);
                $('.gudimg').css('width', Size/1.75 + 'px', 'height', Size/1.75 + 'px', 'opacity', 1);
                $('.obj_frame').css('width', Size/4.5 + 'px');
                $('.obj_obj').css('width', Size/5 + 'px');
                $('.obj_frame2').css('width', Size/4.5 + 'px');
                $('.obj_obj2').css('width', Size/5 + 'px');
                }
                
            }else{
                $('.textgroup1').css('opacity', 0);
                $('.textgroup2').css('opacity', 0);
                $('.gudframe').css('width', '0px', 'height','0px', 'opacity', 0);
                $('.gudimg').css('width', '0px', 'height','0px', 'opacity', 0);
                $('.obj_frame').css('width', 0 + 'px', 'opacity', 0);
                $('.obj_obj').css('width', 0 + 'px');
                $('.obj_frame2').css('width', 0 + 'px');
                $('.obj_obj2').css('width', 0 + 'px');
                $('.about').css('border-bottom' , '0px transparent');
                $('.contact').css('border-bottom' , '0px transparent');
            }
            
            if(scrollValue > 1100){
                $('.about').css('border-bottom' , '0px transparent');
                $('.contact').css('border-bottom' , '0px transparent');
                if(scrollValue > 1350){
                    $('.contact').css('border-bottom' , '2px solid #9933ff');
                }
            }
          });

        //portfolio

        var field = $('.field');
        var menu01 = $('.01');
        var menu02 = $('.02');
        var menu03 = $('.03');
        var menu04 = $('.04');
        var menu05 = $('.05');

        var frame = $('.frame');
        var workimg01 = $('.sec01');
        var workimg02 = $('.sec02');
        var workimg03 = $('.sec03');
        var workimg04 = $('.sec04');
        var workimg05 = $('.sec05');
        workimg01.css("opacity" ,"0");
        workimg02.css("opacity" ,"0");
        workimg03.css("opacity" ,"0");
        workimg04.css("opacity" ,"0");
        workimg05.css("opacity" ,"0");

        menu01.on('mouseover', function(){
            frame.animate({width:"430px", left:"30px", height: "560px"}, 400);
            workimg01.animate({opacity:"1", left:"70px", top: "10px"});
        });
        menu01.on('mouseout', function(){
            frame.animate({width:"450px", left:"0px", height: "450px"}, 400);
            workimg01.animate({opacity:"0", left:"0px", top: "0px"});
        });
        menu02.on('mouseover', function(){
            frame.animate({width:"470px", left:"0px", height: "400px", top: "-20px"}, 400);
            workimg02.animate({opacity:"1", left:"35px", top: "30px"});
        })
        menu02.on('mouseout', function(){
            frame.animate({width:"450px", left:"0px", height: "450px"}, 400);
            workimg02.animate({opacity:"0", left:"0px", top: "0px"});
        })
        menu03.on('mouseover', function(){
            frame.animate({width:"300px", left:"100px", height: "200px", top:"-30px"}, 400);
            workimg03.animate({width:"200px", opacity:"1", left:"150px", top: "0px"});
        })
        menu03.on('mouseout', function(){
            frame.animate({width:"450px", left:"0px", height: "450px"}, 400);
            workimg03.animate({opacity:"0", left:"0px", top: "0px"});
        })
        menu04.on('mouseover', function(){
            frame.animate({width:"570px", left:"-35px", height: "350px", top:"-40px"}, 400);
            workimg04.animate({opacity:"1", left:"0px", top: "0px"});
        })
        menu04.on('mouseout', function(){
            frame.animate({width:"450px", left:"0px", height: "450px"}, 400);
            workimg04.animate({opacity:"0", left:"0px", top: "0px"});
        })
        menu05.on('mouseover', function(){
            frame.animate({width:"570px", left:"-35px", height: "340px", top:"-40px"}, 400);
            workimg05.animate({opacity:"1", left:"0px", top: "0px"});
        })
        menu05.on('mouseout', function(){
            frame.animate({width:"450px", left:"0px", height: "450px"}, 400);
            workimg05.animate({opacity:"0", left:"0px", top: "0px"});
        })
        
    });
})(jQuery);