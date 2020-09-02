$( document ).ready(function() {

    $('.button-registration').click(function () {
        $('.popup-registration').addClass(' popup-open');
    })

    $('.header-background-login-button-white').click(function () {
        $('.popup-login').addClass(' popup-open');
    })

    $('.popup-close').click(function () {
        $('.popup').removeClass(' popup-open');
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
});
