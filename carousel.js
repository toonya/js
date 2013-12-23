$(function(){

	// ----------------------------------------
	// ! init
	// ----------------------------------------
	
	var theFirstTitle = $('#simpleSlide .slide-inner a img').first().attr('alt');
	$('.slide-title').html(theFirstTitle);

	// ----------------------------------------
	// ! carousel
	// ----------------------------------------

	$ss = $('#simpleSlide');
	$animate = $ss.find('.slide-inner');
	$ss.find('.slide-bt').on('click.carouselBasic','li:not(".active")',function(e){
		clearTimeout(carousel_time_controller);

		$animate.stop(true,true);
		$target = $(this);
		$now    = $target.siblings('.active');
		$area   = $('.slide-bt li');
		$title  = $('.slide-title');
		var next  = $target.data('slide-to');
		var now   = $now.data('slide-to');
		var title = $target.closest('#simpleSlide').find('.slide-inner a img').eq(next).attr('alt');
		carousel_current = next;  // for circle
		$animate.animate({
			left: '-='+294*(next-now),
			  }, 500, function() {
				$now.removeClass('active');
				$target.addClass('active');
				$title.html(title);

				carousel_circle_controller(); // for circle
			  });
		})

	// ----------------------------------------
	// ! carousel circle
	// ----------------------------------------

	var carousel_current = 0;
	var carousel_time_controller;

	function carousel_circle_controller() {
		carousel_time_controller = setTimeout(carousel_circle_run, 2000);
	}

	function carousel_circle_run() {
		var next = carousel_current+1;
		var size = $('.slide-bt li').size();
		if( next >= size ) {
			next = 0;
			carousel_current = 0;
		}
		$('.slide-bt li').eq(next).click();
	}

	carousel_circle_controller();

})
