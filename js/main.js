$(function(){
  
  var smallBP = 730; // should match the small breakpoint in CSS
  var $menu = $( '.main-nav' );
  
  $menu.children('a').click(function(event) {
    var width = $(window).width();
    if (width < smallBP) {
      event.preventDefault();
      $(this).parent().children('ul').stop().slideToggle( 200 );
    };
    $(this).toggleClass( 'open-menu' );
  });  
  
  $( '.menu-toggle' ).click(function() {
    $('.main-nav ul').first().stop().slideToggle( 300 );
  });
  
  $menu.children('ul').click(function() {
    var width = $(window).width();
    if (width < smallBP) {
      $('.main-nav ul').first().stop().slideToggle( 300 );
    };
  });

  var $overlay = $('.overlay');
  
  $(document).ready(function() {
    $overlay.fadeIn();

  });
  $overlay.click(function() {
    $(this).fadeOut();
    $('body.with-overlay').css('overflow','visible');
  });
 
});