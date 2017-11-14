$(document).ready(function(){
	// burger button
	$(document).on('click', '.burger-btn', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle(200);
	});	

	// main slider
	if($('.main-slider').length){
		$('.main-slider').slick({
		    swipeToSlide: true,
		    responsive: [
			    {
			      breakpoint: 641,
			      settings: {
			        arrows: false,
			        autoplay: true,
  					autoplaySpeed: 3000
			      }
			    }
			  ]
		});
	};		
});