$( document ).ready(function() {
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        prevArrow:`
            <button type='button' class='slick-prev customBtn banner-slider-pull-left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="42" viewBox="0 0 18 42" fill="none">
                <path d="M17 0.999999L2 21L17 41" stroke="#8F8F8F" stroke-width="2"/>
                </svg>
            </button>`,
        nextArrow:`
            <button type='button' class='slick-next customBtn banner-slider-pull-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="42" viewBox="0 0 18 42" fill="none">
                    <path d="M17 0.999999L2 21L17 41" stroke="#8F8F8F" stroke-width="2"/>
                </svg>
            </button>`,
    });

    $(".readOnly").rateYo({
        rating: 3.2,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "#F0C963",
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
});
