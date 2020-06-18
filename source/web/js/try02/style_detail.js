( function($) {
  
  $(document).ready(function() {
    
    //		생각의 색과 생각의 시각화
		  
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
	  var title01 = $('.t01');
	  var title02 = $('.t02');
	  var title03 = $('.t03');
	  var title04 = $('.t04');
	  var title05 = $('.t05');
	  var heart = $('.heart');
		
	bt1color.on("click", function(e){
		e.preventDefault();
		console.log("bt1_c:clicked");
		body.addClass('bt1_c_body');
		title01.addClass('bt1_c_title');
	});
		
	bt1visual.on("click", function(e2){
		e2.preventDefault();
		console.log("bt1_v:clicked");
		
		function randomAlerts() {
			var alerts = new Array (
			"겨울인데 유자차 드셨나요? 감기를 위해서라도 한 잔 드셔보세요.",
			"GS25에 베리굿이당 이라는 샌드위치가 맛있다고 하더라구요?",
			"울적할 땐 리틀미스선샤인 이라는 영화를 추천해요 !",
			"카멕스 체리 립밤, 향도 좋고 양도 많아요 1년 넘게 쓰는 중,,",
			"다음 웹툰 토이 컴플렉스 꼭 봐라 진짜 .....");
			
			var  i = Math.floor(Math.random()*alerts.length);

			alert(alerts[i]);
		}
		randomAlerts();
	});		
		
	bt2color.on("click", function(e3){
		e3.preventDefault();
		console.log("bt2_c:clicked");
		body.addClass('bt2_c_body');
		title02.addClass('bt2_c_title');
	});
		
	bt2visual.on("click", function(e4){
		e4.preventDefault();
		console.log("bt2_v:clicked");
		heart.addClass('heart_vis');
	});
		
	bt3color.on('click', function(e5){
		e5.preventDefault();
		console.log("bt3_c:clicked");
		body.addClass('bt3_c_body');
		title03.addClass('bt3_c_title');
	});
		
	bt3visual.on('click', function(e6){
		e6.preventDefault();
		console.log("bt3_v:clicked");
		title03.addClass('shake01');
	});
		
	bt4color.on('click', function(e7){
		e7.preventDefault();
		console.log("bt4_c:clicked");
		body.addClass('bt4_c_body');
		title04.addClass('bt4_c_title');
	});
		
	bt4visual.on('click', function(e8){
		e8.preventDefault();
		console.log("bt4_v:clicked");
		body.addClass('focus');
	});
		
	bt5color.on('click', function(e9){
		e9.preventDefault();
		console.log("bt5_c:clicked");
		body.addClass('bt5_c_body');
		title05.addClass('bt5_c_title');
	});
		
//	bt5visual.on('click', function(e10){
//		e10.preventDefault();
//		console.log("bt5_v:clicked");
//	});
          
  });
})(jQuery);

// $('.overlay').addClass('overlay-blue');