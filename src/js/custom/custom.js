$(function () {
    /*choose menu item
     =========================================================*/
    /*$(document).ready(function () {
        var location = window.location.href;
        var cur_url = '' + location.split('/').pop();
        $('#js-main-menu a').each(function () {
            var link = $(this).attr('href');
            if(cur_url == link){
                $('.js-main-menu__item').removeClass('active');
                $(this).addClass('active');
            }
        });
    });*/

		$('#js-main-menu a').each(function () {
				var location = window.location.href;
				var link = this.href;
				if(location == link) {
						$(this).addClass('active');
				}
		});


    /*show main menu
    =================================================================*/
    $('#js-show-main-menu').on('click', function () {
       $('#js-main-menu').slideToggle(); 
    });

    /*fixed-menu
    =============================================================*/
    var mainHeaderHeight = $('#js-main-header').innerHeight();
    $('.main-content').css({
        paddingTop: mainHeaderHeight + 'px'
    });

    /*main-slider
    =========================================================*/
    $('#js-main-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1200,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    /*about-gallery
    ==========================================================*/
    $('#js-about-gallery').lightGallery({
        selector: 'a',
        download: false,
        getCaptionFromTitleOrAlt: false
    });

    /*gallery hover link
    ================================================================*/
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

    /*read-more
    ====================================================*/
    $('.js-read-more').on('click', function (e) {
        e.preventDefault();
        var current = $(this).attr('data-read');
        $('#' + current).fadeToggle(50);
    });

    /*about-slider
    =======================================================*/
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

    /*portfolio-gallery
    ===================================================*/
    $('#js-portfolio-gallery').lightGallery({
        selector: 'a',
        download: false,
        getCaptionFromTitleOrAlt: false
    });


    /*validation
    ======================================*/
    $('#js-form').validate({
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
});