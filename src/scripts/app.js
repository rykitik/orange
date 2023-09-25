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
	$(document).ready(function() {
		$('.main-intro-slider__link, .main-intro-slider__price').on('click', function(e){
			$('.main-intro-window').addClass('main-intro-window--show');
			$('.header-overlay').addClass('header-overlay--visible');
		});
		
		$('.main-intro-window').on('click', function(e){
			e.stopPropagation();
		});
		
		$('body').on('click', function(e){
			if(e.target !== $('.main-intro-window')[0] && e.target !== $('.main-intro-slider__link')[0] && $('.main-intro-window').hasClass('main-intro-window--show') ){
				$('.main-intro-window').removeClass('main-intro-window--show');
			$('.header-overlay').removeClass('header-overlay--visible');
			}
		});

		// СЛАЙДЕР
        let slides = $('.swiper-wrapper .swiper-slide');
		let topLines = $('.main-intro-slider__nav .main-top__line');
        let currentSlide = 0;

        function showSlide(index) {
            slides.hide();
            slides.eq(index).show();
        }

        showSlide(currentSlide);

        // Обработчики событий для кнопок

		$('.main-into-slider__left-btn').on('click', function(e){
			topLines.eq(currentSlide).removeClass('main-top__line--active');
			currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
			topLines.eq(currentSlide).addClass('main-top__line--active');
		});
	
		$('.main-into-slider__right-btn').on('click', function(e){
			topLines.eq(currentSlide).removeClass('main-top__line--active');
			currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
			topLines.eq(currentSlide).addClass('main-top__line--active');
		});
	});
});