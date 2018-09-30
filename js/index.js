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