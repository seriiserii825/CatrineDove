$(function () {
    /*choose menu item*/
    $(document).ready(function () {
        var location = window.location.href;
        var cur_url = '' + location.split('/').pop();
        $('#js-main-menu a').each(function () {
            var link = $(this).attr('href');
            if(cur_url == link){
                $('.js-main-menu__item').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    /*show main menu*/
    $('#js-show-main-menu').on('click', function () {
       $('#js-main-menu').slideToggle(); 
    });

    /*fixed-menu*/
    var mainHeaderHeight = $('#js-main-header').innerHeight();
    $('.main-content').css({
        paddingTop: mainHeaderHeight + 'px'
    });

    /*main-slider*/
    $('#js-main-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1200,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    /*about-gallery*/
    $('#js-about-gallery').lightGallery({
        selector: 'a',
        download: false,
        getCaptionFromTitleOrAlt: false
    });

    /*gallery hover link*/
    $('.js-gallery__link').hover(function () {
        var current =  $(this).attr('data-caption');
        var dataIcon = $(this).attr('data-icon');

        $('#' + current).animate({
            width: 100 + '%'
        });

        $('#' + dataIcon).animate({
            top: 45 + '%'
        });

    }, function () {
        var current =  $(this).attr('data-caption');
        var dataIcon = $(this).attr('data-icon');

        $('#' + current).animate({
            width: 150 + 'px'
        });

        $('#' + dataIcon).animate({
            top: '-' + 60 + 'px'
        });
    },150);

    /*read-more*/
    $('.js-read-more').on('click', function (e) {
        e.preventDefault();
        var current = $(this).attr('data-read');
        $('#' + current).fadeToggle(50);
    });

    /*about-slider*/
    $('#js-about-slider').slick({
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*portfolio-gallery*/
    $('#js-portfolio-gallery').lightGallery({
        selector: 'a',
        download: false,
        getCaptionFromTitleOrAlt: false
    });

    /*map*/
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            zoomControl: false,
            scrollwheel: false,
            scrollControl: false,
            scaleControl: false,
            mapMarker: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative.country","elementType":"all","stylers":[{"invert_lightness":true}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });

        /*enable scroll zoom after click on map*/
        map.addListener('click', function () {
            map.setOptions({
                scrollwheel: true
            });
        });

        /*disable scroll zoom after mouseout*/
        map.addListener('mouseout', function () {
            map.setOptions({
                scrollwheel: false
            });
        });

        /*validation*/
        $('#js-form, #js-footer-form').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    digits: true
                }
            },
            messages: {
                name: {
                    required: 'Это поле обязательно!!!'
                },
                email: {
                    required: 'Это поле обязательно!!!',
                    email: 'Введите пожалуйста правильный e-mail'
                },
                phone: {
                    required: 'Это поле обязательно!!!',
                    digits: 'Введите только цифры'
                }
            },
            focusCleanup: true,
            focusInvalid: false
        });

        $('#js-footer-form').validate({
            rules: {
                footer_email: {
                    required: true,
                    email: true
                }
            }
        });
    }
});