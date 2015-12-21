
$(document).on('ready', function() {

// trying to set focus on full name when join us is clicked-->
  $('#joinus').click(function(){
   $('#entry_2117597722').focus();
  });

  // begin scroll for main navigation links
  $("#brands").click(function() {
    $('html, body').animate({
        scrollTop: $("#brandsection").offset().top
    }, 1000);
});

$("#marketing").click(function() {
  $('html, body').animate({
      scrollTop: $("#marketingsection").offset().top
  }, 1000);
});
//end of scroll for main navigation 

    $('[data-hook="menu"]').on('click', function () {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('active');
    });

    $('#ss-form').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    })
    .on('form:submit', function() {
      return false; // Don't submit form for this demo
    });


    $('.products ul').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        centerPadding: '5px',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        draggable: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            }
        ]
     });

});
