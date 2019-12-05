( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });
    
//		버튼들
		
		var bt1color = $('.button01_color');
		var bt1visual = $('.button01_visual');
		var bt2color = $('.button02_color');
		var bt2visual = $('.button02_visual');
		var bt3color = $('.button03_color');
		var bt3visual = $('.button03_visual');
		var bt4color = $('.button04_color');
		var bt4visual = $('.button04_visual');
		var bt5color = $('.button05_color');
		var bt5visual = $('.button05_visual');

//		요소들

		var body = $('body');
		
	bt1color.on("click", function(e){
		e.preventDefault();
		console.log("bt1_c:clicked");
	});
		
	bt1visual.on('click', function(){
		
	});		
		
	bt2color.on('click', function(){
		
	});
		
	bt2visual.on('click', function(){
		
	});
		
	bt3color.on('click', function(){
		
	});
		
	bt3visual.on('click', function(){
		
	});
		
	bt4color.on('click', function(){
		
	});
		
	bt4visual.on('click', function(){
		
	});
		
	bt5color.on('click', function(){
		
	});
		
	bt5visual.on('click', function(){
		
	});
          
  });
})(jQuery);

// $('.overlay').addClass('overlay-blue');