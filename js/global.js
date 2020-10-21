$( document ).ready(function() {

    $('.button-registration').click(function () {
        $('.popup-registration').addClass(' popup-open');
    })

    $('.header-background-login-button-white').click(function () {
        $('.popup-login').addClass(' popup-open');
    })

    $('.open-reviews-popup').click(function () {
        $('.popup-reviews').addClass(' popup-open');
    })

    $('.popup-close').click(function () {
        $('.popup').removeClass('popup-open');
        if ($('.main-responsive-slider-item.active').length) {
            $('.main-responsive-slider-item.active').removeClass('active');
        }
    })
    $('.popup-cart-item-close').click(function () {
        $('.popup').removeClass('popup-open');
        if ($('.main-responsive-slider-item.active').length) {
            $('.main-responsive-slider-item.active').removeClass('active');
        }
    })

    $('.popup-bg').click(function () {
        $('.popup').removeClass(' popup-open');
    })

    $('.popup-close-pass').click(function () {
        $(this).parent().toggleClass('show-pass');
        if ($(this).parent().children('.popup-input').attr('type') === "text") {
            $(this).parent().children('.popup-input').attr('type',  'password');
        } else {
            $(this).parent().children('.popup-input').attr('type',  'text');
        }
    });

    $('.main-responsive-slider-item-button').click(function () {
        $(this).parent().addClass('active');
        $('.popup-cart').addClass('popup-open');
        $('.popup-cart-item-image img').attr('src', $('.active .main-responsive-slider-item-image img').attr("src"));
        $('.popup-cart-item-name').text($('.active .main-responsive-slider-item-name').text());
        $(".popup-cart-item-price span").text($('.active .main-responsive-slider-item-price span').text());
    })

    $('.popup-cart-item-size-min').click(function() {
        const num = +$('.product-num').text() - 1;
        if (num === 0) {
            $('.popup-cart-item-size-min').attr("disabled", 'disabled');
        }
        $('.product-num').text(num);
        const price = parseInt($(".popup-cart-item-price span").text()) - parseInt($('.active .main-responsive-slider-item-price span').text());
        $(".popup-cart-item-price span").text(price);
    })
    $('.popup-cart-item-size-plus').click(function() {
        const num = +$('.product-num').text() + 1;
        const price = parseInt($(".popup-cart-item-price span").text()) + parseInt($('.active .main-responsive-slider-item-price span').text());
        $('.popup-cart-item-size-min').attr('disabled', false);
        $('.product-num').text(num);
        $(".popup-cart-item-price span").text(price);
    });

    $('.popup-cart-product').click(function(e) {
        console.log(e.target);
    })
});
