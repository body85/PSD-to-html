jQuery(document).ready(function(){

    "use strict";

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
     *  header fixed
     * ====================================================*/
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=112){
            $("header").removeClass('header');
            $("header").addClass("header-fixed");
        }
        else{
            if($("header").hasClass('header-fixed')){
                 $("header").removeClass('header-fixed');
                 $("header").addClass('header');
            }
        }
    })



});