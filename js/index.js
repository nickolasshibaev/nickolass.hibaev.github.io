var $button = $('.menu-btn');
var openBTN = $('header');
$button.on('click', function(e){
    e.preventDefault();
    console.log('one');
    if( openBTN.hasClass('header-opened') ){
      $button.removeClass('open');
      $button.addClass('close');
    }else{
        console.log('hello');
      $button.removeClass('close');
      $button.addClass('open');
    }
});


$(function () {

    $('#up').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    })

})

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});

$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
