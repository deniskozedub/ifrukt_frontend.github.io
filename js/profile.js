$( document ).ready(function() {
  $('.open-popup-data').click(function () {
    $('.popup-data').addClass(' popup-open');
  });

  $('.open-popup-address').click(function () {
    $('.popup-address').addClass(' popup-open');
  });

  $('.open-popup-phone').click(function () {
    $('.popup-phone').addClass(' popup-open');
  });

  $('.profile-info-order-block-btn').click(function () {
    $(this).parent().parent().parent().toggleClass('active');
  });

  if ($('.readOnly').length) {
    $(".readOnly").rateYo({
      rating: 3.2,
      readOnly: true,
      starWidth: "12px",
      ratedFill: "#F0C963",
    });
  }
});

