$(function () {
    /*choose menu item*/
    $(document).ready(function () {
        var location = window.location.href;
        var cur_url = '/build/' + location.split('/').pop();
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

    
    /*main-slider*/
    $('#js-main-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1200,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    
});