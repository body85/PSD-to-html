jQuery(document).ready(function(){

    "use strict";

    /*=====================================================
     *  SlickNav
     * ====================================================*/
    $('#menu').slicknav({
        label: ''
    })
    /*=====================================================
     *  Slider-Carousal
     * ====================================================*/
    $('#slider-carousal').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
        height:"variable"
        },
        pagination:{
            container: '.sliderpager',
            anchorBuilder: false
        }
    })

    /*=====================================================
     *  Portfolio-Carousel
     * ====================================================*/
    $('.portfolio-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        prev: "#prev",
        next: "#next",
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
        height:"variable"
        }
    })

    /*=====================================================
     *  Team-Carousel
     * ====================================================*/
    $('.team-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        prev: "#team-prev",
        next: "#team-next",
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
        height:"variable"
        }
    })

    /*=====================================================
     *  Testimonials-Carousal
     * ====================================================*/
    $('.testimonials-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
        height:"variable"
        },
        pagination:{
            container: '.testipager',
            anchorBuilder: false
        }
    })


    /*=====================================================
     *  header fixed
     * ====================================================*/
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=112){
            $("header").removeClass('header');
            $("header").addClass("header-fixed");
            $(".slicknav_btn").css("margin-top","15px");
        }
        else{
            if($("header").hasClass('header-fixed')){
                 $("header").removeClass('header-fixed');
                 $("header").addClass('header');
                 $(".slicknav_btn").css("margin-top","35px");
            }
        }
    })



});