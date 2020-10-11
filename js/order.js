$( document ).ready(function() {
    $('.order-form-radio-last label.radio').click(function () {
        $('.order-form-radio-last label.radio').removeClass('checked');
        $(this).addClass('checked');
    })
    $('.sublist label.sub-radio').click(function () {
        $('.sublist label.sub-radio').removeClass('checked-list');
        $(this).addClass('checked-list');
    })
});
