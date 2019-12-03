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
    });
})(jQuery);