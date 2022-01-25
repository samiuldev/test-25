(function ($) {
	"use strict";

    jQuery(document).ready(function($){


                //  offcanvas-menu

        //    click-action
        $(".header__bar").on("click", function () {
            $(".offcanva, .overlay").addClass("active");
            return false;
        });

        $(".cross").on("click", function () {
            $(".offcanva, .overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".offcanva, .overlay").removeClass("active");
        });

        

       
              
        $(".hero-slider").owlCarousel({
            items:1,
            nav:true,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:1,
                   
                },
                1000:{
                    items:1,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	