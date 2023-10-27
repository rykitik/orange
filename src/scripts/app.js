$(document).ready(function() {
	var $headerSearchButton = $('.header-search-button, .header-search-button__icon');
	var $headerSearchWindow = $('.header-search-window');
	var $headerOverlay = $('.header-overlay');
	
	$headerSearchButton.on('click', function(e) {
	  $headerSearchWindow.addClass('header-search-window--show');
	  $headerOverlay.addClass('header-overlay--visible');
	});
  
	$headerSearchWindow.on('click', function(e) {
	  e.stopPropagation();
	});
  
	$('body').on('click', function(e) {
	  var searchWindowVisible = $headerSearchWindow.hasClass('header-search-window--show');
	  if (e.target !== $headerSearchWindow[0] && e.target !== $headerSearchButton[0] && e.target !== $('.header-search-button__icon')[0] && searchWindowVisible) {
		$headerSearchWindow.removeClass('header-search-window--show');
		$headerOverlay.removeClass('header-overlay--visible');
	  }
	});
  
	// SLIDER
	var $slides = $('.swiper-wrapper .swiper-slide');
	var $topLines = $('.main-intro-slider__nav .main-top__line');
	var currentSlide = 0;
  
	function showSlide(index) {
	  $slides.hide();
	  $slides.eq(index).show();
	}
	
	showSlide(currentSlide);
  
	// Event handlers for buttons
	$('.main-into-slider__left-btn').on('click', function(e) {
	  $topLines.eq(currentSlide).removeClass('main-top__line--active');
	  currentSlide--;
	  if (currentSlide < 0) {
		currentSlide = $slides.length - 1;
	  }
	  showSlide(currentSlide);
	  $topLines.eq(currentSlide).addClass('main-top__line--active');
	});
  
	$('.main-into-slider__right-btn').on('click', function(e) {
	  $topLines.eq(currentSlide).removeClass('main-top__line--active');
	  currentSlide++;
	  if (currentSlide >= $slides.length) {
		currentSlide = 0;
	  }
	  showSlide(currentSlide);
	  $topLines.eq(currentSlide).addClass('main-top__line--active');
	});
  
	$(document).on('click', '.main-intro-slider__link, .main-intro-slider__price', function(e) {
	  $('.main-intro-window').addClass('main-intro-window--show');
	  $headerOverlay.addClass('header-overlay--visible');
	});
  
	$('.main-intro-window').on('click', function(e) {
	  e.stopPropagation();
	});
  
	$('body').on('click', function(e) {
	  if (e.target !== $('.main-intro-window')[0] && !$(e.target).hasClass('main-intro-slider__link')) {
		$('.main-intro-window').removeClass('main-intro-window--show');
		$headerOverlay.removeClass('header-overlay--visible');
	  }
	});

	$('.main-top__line').on('click', function() {
		var $this = $(this);
		var index = $this.index();
	
		$topLines.removeClass('main-top__line--active');
		$this.addClass('main-top__line--active');
	
		showSlide(index);
		currentSlide = index;
	});
});
