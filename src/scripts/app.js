jQuery(function($){
	$('.header-search-button, .header-search-button__icon').on('click', function(e){
	  $('.header-search-window').addClass('header-search-window--show');
	  $('.header-overlay').addClass('header-overlay--visible');
	});
	
	$('.header-search-window').on('click', function(e){
	  e.stopPropagation();
	});
	
	$('body').on('click', function(e){
	  if(e.target !== $('.header-search-window')[0] && e.target !== $('.header-search-button')[0] && e.target !== $('.header-search-button__icon')[0] && $('.header-search-window').hasClass('header-search-window--show') ){
	  	$('.header-search-window').removeClass('header-search-window--show');
		$('.header-overlay').removeClass('header-overlay--visible');
	  }
	});
});