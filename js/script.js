window.onload=function(){
  $slideshow = $('.opinions-slider').slick({
    dots:true,
  autoplay:true,
  arrows:true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
  slidesToShow:1,
  slidesToScroll:1
  });
  $('.slider-box').click(function() {
    $slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide'))+1);
  });
};
