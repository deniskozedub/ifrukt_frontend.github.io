$( document ).ready(function() {
    const orderText = $('.order-info p');
    $('.order-form-radio-last label.radio').click(function () {
        $('.order-form-radio-last label.radio').removeClass('checked');
        $(this).addClass('checked');
    })
    $('.sublist label.sub-radio').click(function () {
        $('.sublist label.sub-radio').removeClass('checked-list');
        $(this).addClass('checked-list');
    })

    $('#address').keyup(function () {
        $('.order-info span').text(this.value);
    });

    $('#select').change(function () {
        orderText.text(`${$( "#select option:selected" ).text()}: `);
        orderText.append('<span>');
        $('#address').val('');
    })
});
