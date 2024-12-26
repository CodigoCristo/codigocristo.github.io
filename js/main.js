(function ($) {
 "use strict";

/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $('.homepage-our-service').owlCarousel({
    autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 4,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
  });
/*----------------------------
 Testimonial active
------------------------------ */  
  $('.homepage-testimonial').owlCarousel({
    autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
    items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:[""],
    itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
 Home page Team active
------------------------------ */  
$('.member-slideshow img').on('click', function(event) {
    var displayTarget = $("#product-1");
    displayTarget.find('.single-team').removeClass('active');
    var id = $(this).attr('data-id');
    var targetClass = ".product-gallery-img-"+id;
    console.log(targetClass);
    displayTarget.find(targetClass).addClass('active');

});
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
/*----------------------------
 News active
------------------------------ */  
  $('.homepage-total-news-area').owlCarousel({
    autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 3,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
  });
  
//jquery Stiky Menu activation code
   $(window).on('scroll', function(){
      if( $(window).scrollTop()>100 ){
        $('#sticker').addClass('stick');
      } else {
        $('#sticker').removeClass('stick');
      }
    });
/*----------------------------
Business active
------------------------------ */  
 $('.total-business').owlCarousel({
  autoPlay: false, 
  slideSpeed:2000,
  pagination:false,
  navigation:true,    
  items : 3,
   /* transitionStyle : "fade", */    /* [This code for animation ] */
  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [991,2],
  itemsTablet: [768,2],
  itemsMobile : [480,1],
 });
/*----------------------------
  About Us2 active
 ------------------------------ */  
   $('.about-us-slider').owlCarousel({
    autoPlay: true, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
   });

/*----------------------------
 About Us3 active
------------------------------ */  
  $('.about-us-3-area').owlCarousel({
    autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:false,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
  itemsMobile : [479,1],
  });

/*---------------------
accordion
--------------------- */ 

$('#accordion').children('.panel').children('.panel-collapse').each(function(){
  if($(this).hasClass('in')){
    $(this).parent('.panel').children('.panel-heading').addClass('active');
  }
});
$('#accordion')
  .on('show.bs.collapse', function(e) {
  $(e.target).prev('.panel-heading').addClass('active');
  })
  .on('hide.bs.collapse', function(e) {
  $(e.target).prev('.panel-heading').removeClass('active');
  });

/*----------------------------
Business active
------------------------------ */  
  $('.homepage-team').owlCarousel({
  autoPlay: false, 
  slideSpeed:2000,
  pagination:false,
  navigation:true,    
  items : 4,
  /* transitionStyle : "fade", */    /* [This code for animation ] */
  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [980,3],
  itemsTablet: [768,2],
  itemsMobile : [479,1],
  });
  //Gallery JS Activaton Code
    $(window).load(function(){
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
                
            }
        });     
        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        }); 
    });

  /*---------------------
     Circular Bars - Knob
  --------------------- */  
        if(typeof($.fn.knob) != 'undefined') {



          $('.knob.knob-nopercent').each(function () {
            var $this = $(this),
              knobVal = $this.attr('data-rel');
          
            $this.knob({
            'draw' : function () { 
              //$(this.i).val(this.cv + '%')
            }
            });
            
            $this.appear(function() {
            $({
              value: 0
            }).animate({
              value: knobVal
            }, {
              duration : 2000,
              easing   : 'swing',
              step     : function () {

                $this.val(Math.ceil(this.value)).trigger('change');
              }
            });
            }, {accX: 0, accY: -150});
          });

            //others skill
            
          $('.knob').each(function () {
            var $this = $(this),
              knobVal = $this.attr('data-rel');
        
            $this.knob({
            'draw' : function () { 
              $(this.i).val(this.cv + '%')
            }
            });
            
            $this.appear(function() {
            $({
              value: 0
            }).animate({
              value: knobVal
            }, {
              duration : 2000,
              easing   : 'swing',
              step     : function () {

                $this.val(Math.ceil(this.value)).trigger('change');
              }
            });
            }, {accX: 0, accY: -150});
          });

        }
/*----------------------------
 Partner Logo
------------------------------ */ 

  $('.client-logo').owlCarousel({
    autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 5,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,3],
    itemsMobile : [479,1],

  });

/*----------------------------
 Home 4 News active
------------------------------ */  
  $('.homepage-total-news-area2').owlCarousel({
    autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
  /*----------------------------
 jQuery MeanMenu
------------------------------ */

  $('nav#dropdown').meanmenu({
    siteLogo: "<a href='index.html'><img src='img/logo.png' /></a>"
  });

  $('#nav li.has-submenu > a').on('click', function(e){
    e.preventDefault();
  });

/*-------------------------------------
Jquery Fixed Header Menu 
-----------------------------------*/
  $(window).scroll(function() {
    var s = $("#sticker");
    var w = $(".wrapper");
    //alert(pos.top);
    var windowpos = $(window).scrollTop();
    if(windowpos > 0){
      s.addClass("stick");
      var h;
      if($(window).width() > 767){
        h = $(".header-top-area").outerHeight();
      }else{
        $(".mean-container .mean-bar").css('position', 'fixed');
        h = $(".mean-bar").outerHeight();
      }
      w.css('padding-top', h+"px");
    } else {
      $(".mean-container .mean-bar").css('position', 'relative');
      s.removeClass("stick");
      w.css('padding-top', 0);
    }
  });

/****************************************
Google Map activation code
***************************************/
if($('#googleMap').length){
    var initialize = function() {
      var mapOptions = {
          zoom: 15,
          scrollwheel: false,
          center: new google.maps.LatLng(-37.81618, 144.95692)
      };

      var map = new google.maps.Map(document.getElementById('googleMap'),
          mapOptions);

      var marker = new google.maps.Marker({
          position: map.getCenter(),
          animation:google.maps.Animation.BOUNCE,
          icon: 'img/map-marker.png',
          map: map
      });

    }
  google.maps.event.addDomListener(window, 'load', initialize);
}

/***************************************
Contact Form activation code
***************************************/
if($('#contact-form').length){
  $('#contact-form').validator().on('submit', function (e) {
       var $this = $(this),
          $target = $(".form-response");
     if (e.isDefaultPrevented()) {
        $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
     } else {
      var name = $("#form-name").val();
      var email = $("#form-email").val();
      var message = $("#form-message").val();
      // ajax call
       $.ajax({
         url: 'php/form-process.php',
         type: 'POST',
         data: "name=" + name + "&email=" + email + "&message=" + message,
         beforeSend: function() {
            $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
        },
         success: function( text ){
                if(text == "success"){
                    $this[0].reset();
                    $target.html("<div class='alert alert-success'><p>Message Has Been Sent.</p></div>");
                } else {
                    $target.html("<div class='alert alert-success'><p>"+text+"</p></div>");
                }
             }
       });

       return false;
     }
  });
}


})(jQuery); 