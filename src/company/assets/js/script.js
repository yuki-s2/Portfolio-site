'use strict';


$(document).ready(function(){
	if (window.matchMedia('(min-width: 768px)').matches) {

$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: false,
});

}
});


$(document).ready(function() {
    $('.drawer').drawer();
  });


  new WOW().init();