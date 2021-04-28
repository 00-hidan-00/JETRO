
$(function () {



    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.thumbs',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/button-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/button-right.png" alt=""></button>'
    });

    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    $('.header__menu-btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });


});
