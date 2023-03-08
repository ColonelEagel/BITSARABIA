jQuery(document).ready(function($) {

  'use strict';

      //***************************
    // Click to Top Button
    //***************************
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 800){  
            jQuery('.top-btn').css('opacity','1');
        }
        else{
            jQuery('.top-btn').css('opacity','0');
        }
    });

//***************************
    // BannerOne Functions
    //***************************
      jQuery('.weto-slider-section').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          dots: false,
          arrows: true,
          centerMode: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-arrow-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-arrow-right'></i></span>",
          fade: false,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });


      //***************************
    // BannerOne Functions
    //***************************
      jQuery('.img-slider-wrap').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          fade: true,
          dots: false,
          asNavFor: '.mini-slider-wrap'
        });
        jQuery('.mini-slider-wrap').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          asNavFor: '.img-slider-wrap',
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          fade: false,
          vertical: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                  }
                }
              ],
        });


    jQuery('.top-btn').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// var url = window.location.href;
// var target = $('a[href="'+url+'"]');
// target.addClass('active');

//***************************
    // Counter Function
    //***************************
    jQuery('#numscroller1').jQuerySimpleCounter({
      end:648,
      duration: 30000
    });
    jQuery('#numscroller2').jQuerySimpleCounter({
      end:115,
      duration: 30000
    });
    jQuery('#numscroller3').jQuerySimpleCounter({
      end:2,
      duration: 30000
    });
    jQuery('#numscroller4').jQuerySimpleCounter({
      end:3,
      duration: 30000
    });
    jQuery('#numscroller5').jQuerySimpleCounter({
      end:245,
      duration: 30000
    });

// End
});

// Add smooth scrolling to all links
      $("a.bottom-scroll").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
          });
          return false;
        } // End if
      });


//***************************
    // input calander Function
    //***************************
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('.dp1').datepicker({
      onRender: function(date) {
        // return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    })