jQuery(document).ready(function(){

/* Code to make the images at the navigation(header) section slide. Using Carouselfredsel, which was linked through a link found online and pasted in js folder, with the file name carouselfredsel.js */
  "use strict";
  $('#slider-carousel').caroufredsel({
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
      container:".sliderpager",
      pageAnchorBuilder:false
    }
  });
    
/* Make the top navigation background appear and disappear when scrolling up and down */    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $("header").addClass('secondary');
        }
        else
            if($("header").hasClass('secondary')){
                $("header").removeClass('secondary');
            }
    });
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $(".logoText").addClass('alternate-color');
            $(".logoImage").attr("src", "./image/LogoCircle.png");
        }
        else
            if($(".logoText").hasClass('alternate-color')){
                $(".logoText").removeClass('alternate-color');
                $(".logoImage").attr("src", "./image/LogoCircle%20white.png");
            }
    });
    
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $(".upPage").addClass('upPageSecond');
        }
        else
            if($(".upPage").hasClass('upPageSecond')){
                $(".upPage").removeClass('upPageSecond');
            }
    });
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $(".navClick").addClass('alternate-colorB');
        }
        else
            if($(".navClick").hasClass('alternate-colorB')){
                $(".navClick").removeClass('alternate-colorB');
            }
    });

    
    
    $(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});
    
    
    
    
});
