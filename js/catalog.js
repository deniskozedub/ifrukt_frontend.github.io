$( document ).ready(function() {
    $(".readOnly").rateYo({
        rating: 3.2,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "#F0C963",
    });

    $('.catalog-sort-button').click(function () {
        $(this).toggleClass('sorted');
    })

    $('.rangeslider-input-lower').keyup(function() {
        $('#lower').val($(this).val());
    });
    $('.rangeslider-input-upper').keyup(function() {
        $('#upper').val($(this).val());
    });

    $(".rangeslider-input").blur(function() {
        if($(this).val() < 20000) {
            $(this).val('20000');
        }
        if($(this).val() > 100000) {
            $(this).val('100000');
        }
    });

    $('.rangeslider-input').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    $( "#upper" ).mousemove(function() {
        $(".rangeslider-input-upper").val($(this).val());
    });
    $( "#lower" ).mousemove(function() {
        $(".rangeslider-input-lower").val($(this).val());
    });

    $("input[type=checkbox]").click( function(){
        if( $(this).is(':checked') ) {
            $('.show-more').removeClass("checked");
            $(this).parent().addClass("checked");
            $(this).parent().children('.show-more').addClass("checked");
        } else {
            $(this).parent().children('.show-more').removeClass("checked");
            $(this).parent().removeClass("checked");
        }
    });
});

window.onload = function() {
    let lowerSlider = document.querySelector('#lower'),
        upperSlider = document.querySelector('#upper'),
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;

            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
    };

    lowerSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;

            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }

        }
    };
};
