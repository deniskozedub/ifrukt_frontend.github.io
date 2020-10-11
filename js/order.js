$( document ).ready(function() {
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
        $('.order-info p').text(`${$( "#select option:selected" ).text()}: `);
        $('.order-info p').append('<span>');
        $('#address').val('');
    })
});
