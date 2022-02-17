$(function () {

    $('.header__slider').slick({
        dots: true,
        dotsClass:'header__slider-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrow:true,
        prevArrow:'<img class="header__slider-arrowL" src="images/header__slider-arrowL.png">',
        nextArrow:'<img class="header__slider-arrowR" src="images/header__slider-arrowR.png">',
    });

    $('.projects__slider').slick({
        dots:false,
        arrow:true,
        prevArrow:'<img class="projects__slider-arrowL" src="images/projects__slider-arrowL.png">',
        nextArrow:'<img class="projects__slider-arrowR" src="images/projects__slider-arrowR.png">',

    });		
    $(document).ready(function() {
        $('.header__burger-btn').click(function() {
            $('.header__burger-btn,.menu').toggleClass('active');
        });
    });
})