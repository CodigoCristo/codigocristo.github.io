(function($) {

    "use strict";

    /*----------------------------
     wow js active
     ------------------------------ */
    new WOW().init();

    /*-------------------------------------
     Carousel slider initiation
     -------------------------------------*/
$('.rc-carousel').each(function() {
    var carousel = $(this),
        loop = carousel.data('loop'),
        items = carousel.data('items'),
        margin = carousel.data('margin'),
        stagePadding = carousel.data('stage-padding'),
        autoplay = carousel.data('autoplay'),
        autoplayTimeout = carousel.data('autoplay-timeout'),
        smartSpeed = carousel.data('smart-speed'),
        dots = carousel.data('dots'),
        nav = carousel.data('nav'),
        navSpeed = carousel.data('nav-speed'),
        rXsmall = carousel.data('r-x-small'),
        rXsmallNav = carousel.data('r-x-small-nav'),
        rXsmallDots = carousel.data('r-x-small-dots'),
        rXmedium = carousel.data('r-x-medium'),
        rXmediumNav = carousel.data('r-x-medium-nav'),
        rXmediumDots = carousel.data('r-x-medium-dots'),
        rSmall = carousel.data('r-small'),
        rSmallNav = carousel.data('r-small-nav'),
        rSmallDots = carousel.data('r-small-dots'),
        rMedium = carousel.data('r-medium'),
        rMediumNav = carousel.data('r-medium-nav'),
        rMediumDots = carousel.data('r-medium-dots'),
        center = carousel.data('center');

    carousel.owlCarousel({
        loop: (loop ? true : false),
        items: (items ? items : 4),
        lazyLoad: true,
        margin: (margin ? margin : 0),
        autoplay: (autoplay ? true : false),
        autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
        smartSpeed: (smartSpeed ? smartSpeed : 250),
        dots: (dots ? true : false),
        nav: (nav ? true : false),
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navSpeed: (navSpeed ? true : false),
        center: (center ? true : false),
        responsiveClass: true,
        responsive: {
            0: {
                items: (rXsmall ? rXsmall : 1),
                nav: (rXsmallNav ? true : false),
                dots: (rXsmallDots ? true : false)
            },
            480: {
                items: (rXmedium ? rXmedium : 2),
                nav: (rXmediumNav ? true : false),
                dots: (rXmediumDots ? true : false)
            },
            768: {
                items: (rSmall ? rSmall : 3),
                nav: (rSmallNav ? true : false),
                dots: (rSmallDots ? true : false)
            },
            992: {
                items: (rMedium ? rMedium : 5),
                nav: (rMediumNav ? true : false),
                dots: (rMediumDots ? true : false)
            }
        }
    });

});


    /*----------------------------
     Home page Team active
     ------------------------------ */
    $('.member-slideshow img').on('click', function(event) {
        var displayTarget = $("#product-1");
        displayTarget.find('.single-team').removeClass('active');
        var id = $(this).attr('data-id');
        var targetClass = ".product-gallery-img-" + id;
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


    //jquery Stiky Menu activation code
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#sticker').addClass('stick');
        } else {
            $('#sticker').removeClass('stick');
        }
    });


    /*---------------------
     accordion
     --------------------- */

    $('#accordion').children('.panel').children('.panel-collapse').each(function() {
        if ($(this).hasClass('in')) {
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


    //Gallery JS Activaton Code
    $(window).load(function() {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,

            }
        });
        $('.portfolioFilter a').click(function() {
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
    if (typeof($.fn.knob) != 'undefined') {


        $('.knob.knob-nopercent').each(function() {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function() {
                    //$(this.i).val(this.cv + '%')
                }
            });

            $this.appear(function() {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {

                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, { accX: 0, accY: -150 });
        });

        //others skill

        $('.knob').each(function() {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function() {
                    $(this.i).val(this.cv + '%')
                }
            });

            $this.appear(function() {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {

                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, { accX: 0, accY: -150 });
        });

    }

    /*----------------------------
     jQuery MeanMenu
     ------------------------------ */

    $('nav#dropdown').meanmenu({
        siteLogo: "<a href='index.html'><img src='img/logo.png' alt='image' width='65' height='65' style='padding: 5px;' /></a>"
    });

    $('#nav li.has-submenu > a').on('click', function(e) {
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
        if (windowpos > 0) {
            s.addClass("stick");
            var h;
            if ($(window).width() > 767) {
                h = $(".header-top-area").outerHeight();
            } else {
                $(".mean-container .mean-bar").css('position', 'fixed');
                h = $(".mean-bar").outerHeight();
            }
            w.css('padding-top', h + "px");
        } else {
            $(".mean-container .mean-bar").css('position', 'relative');
            s.removeClass("stick");
            w.css('padding-top', 0);
        }
    });

    /****************************************
     Google Map activation code
     ***************************************/
    if ($('#googleMap').length) {
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
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    /***************************************
     Contact Form activation code
     ***************************************/
    if ($('#contact-form').length) {
        $('#contact-form').validator().on('submit', function(e) {
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
                    success: function(text) {
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                        }
                    }
                });

                return false;
            }
        });
    }
    /***************************************
     Request Form
     ***************************************/
    if ($('#request-form').length) {
        $('#request-form').validator().on('submit', function(e) {
            var $this = $(this),
                $target = $(".form-response");
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
            } else {
                var data = $(this).serialize();

                // ajax call
                $.ajax({
                    url: 'php/form-process.php',
                    type: 'POST',
                    data: data + "&form-type=request",
                    beforeSend: function() {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function(text) {
                        console.log(text);
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                        }
                    }
                });

                return false;
            }
        });
    }


    $(window).on('scroll', function() {

        if ($(window).width() > 767) {
            var scrollTop = $(window).scrollTop(),
                h = $('.header-area').outerHeight(),
                targetHolder = $('.single-service-inner-page'),
                target = targetHolder.find('.single-service-inner-tab'),
                targetHeight = target.height(),
                targetHolderTop = targetHolder.position().top,
                targetHolderHeight = targetHolder.height(),
                targetScroll = scrollTop + h,
                paddingTop, thh;
            if (targetScroll > targetHolderTop) {
                var targetHolderHeightT = targetHolderHeight + targetHolderTop;
                var tTotal = targetHeight + scrollTop;

                console.log("scrolTop :" + scrollTop);
                console.log("TargetH :" + targetHeight);
                console.log("THtotal :" + targetHolderHeightT);
                console.log("TTotal :" + tTotal);
                var trigger = false;
                paddingTop = targetScroll - targetHolderTop;
                if (tTotal >= targetHolderHeightT) {
                    paddingTop = paddingTop - (tTotal - targetHolderHeightT);
                }

                target.addClass('sidebarFix');
                target.css('top', paddingTop + 'px');
            } else {
                target.removeClass('sidebarFix');
                target.css('top', '');
            }
        } else {
            target.removeClass('sidebarFix');
            target.css('top', '');
        }

    })

})(jQuery);
