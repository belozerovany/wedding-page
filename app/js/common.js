$(document).ready(function(){
  $('.slider__sl').slick({
  	dots:true,
  	prevArrow:'.slider__controllers-prev',
    nextArrow:'.slider__controllers-next',
    
  });
  $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });

  var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });
});