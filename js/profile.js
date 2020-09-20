$( document ).ready(function() {
  $('.open-popup-data').click(function () {
    $('.popup-data').addClass(' popup-open');
  });

  $('.profile-info-order-block-btn').click(function () {
    $(this).parent().parent().parent().toggleClass('active');
  });

  $(".readOnly").rateYo({
    rating: 3.2,
    readOnly: true,
    starWidth: "12px",
    ratedFill: "#F0C963",
  });
});

