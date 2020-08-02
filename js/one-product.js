$( document ).ready(function() {
    $(".one-product-info-rating").rateYo({
        rating: 3.2,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "#F0C963",
    });
    $(".tabs__content-reviews-stars").rateYo({
        rating: 3.2,
        readOnly: true,
        starWidth: "13px",
        ratedFill: "#F0C963",
    });
    $(".onlyRead").rateYo({
        rating: 3.2,
        readOnly: true,
        starWidth: "25px",
        ratedFill: "#F0C963",
    });
    $(".tabs__content-reviews-form-rating").rateYo({
        rating: 1.5,
        halfStar: true,
        starWidth: "25px",
        normalFill: "#C4C4C4",
        ratedFill: "#F0C963",
    });

    $('.one-product-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.one-product-slider-nav'
    });
    $('.one-product-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.one-product-slider-for',
        dots: false,
        focusOnSelect: true,
        prevArrow:`
            <button type='button' class='slick-prev customBtn banner-slider-pull-left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="25" viewBox="0 0 18 42" fill="none">
                <path d="M17 0.999999L2 21L17 41" stroke="#8F8F8F" stroke-width="2"/>
                </svg>
            </button>`,
        nextArrow:`
            <button type='button' class='slick-next customBtn banner-slider-pull-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="25" viewBox="0 0 18 42" fill="none">
                    <path d="M17 0.999999L2 21L17 41" stroke="#8F8F8F" stroke-width="2"/>
                </svg>
            </button>`,
    });

    function activeColor() {
        $('.active-color').text($('.color-checked.active').val())
    };

    function activeType() {
        $('.active-type').text($('.one-product-info-button-type.active').text())
    };

    activeColor();
    activeType();

    $('.color-checked').click(function () {
        $('.color-checked').removeClass('active');
        $(this).addClass('active');
        activeColor();
    });
    $('.one-product-info-button-type').click(function () {
        $('.one-product-info-button-type').removeClass('active');
        $(this).addClass('active');
        activeType();
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    $('.main-responsive-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:`
            <button type='button' class='slick-prev customBtn main-responsive-slider-button-left'>
                <svg width="18" height="42" viewBox="0 0 18 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 0.999999L2 21L17 41" stroke="#717070" stroke-width="2"/>
                </svg>
            </button>`,
        nextArrow:`
            <button type='button' class='slick-next customBtn main-responsive-slider-button-right'>
                <svg width="18" height="42" viewBox="0 0 18 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 0.999999L2 21L17 41" stroke="#717070" stroke-width="2"/>
                </svg>
            </button>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".set > a").on("click", function(e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
        } else {
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});
