console.log('hello');
$(document).ready(function (){
  // $('#myModal').modal();
  // $(function() {
  //   $.scrollify.next();
  // });
  // jQuery(document).ready(function($) {
  //
  $.scrollify({
    section: 'section'
    //
  });

  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus();
  });
  $.scrollify({
    section: 'section',
    interstitialSection: '',
    easing: 'easeOutExpo',
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    // standardScrollElements: 'section',
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true
  });

  $('.topBtn').click(function (){

    $('html, body').animate({
      scrollTop: $('.section1').offset().top
    }, 400);
  });
  $('.skills').click(function (){
    $('html, body').animate({
      scrollTop: $('.section2').offset().top
    }, 400);
  });
  $('.projects').click(function (){
    $('html, body').animate({
      scrollTop: $('.section3').offset().top
    }, 400);
  });
  $('.contact').click(function (){
    $('html, body').animate({
      scrollTop: $('.section4').offset().top
    }, 400);
  });

  function check(){
    var scroll = $(window).scrollTop();
    if (scroll >= $(window).height()) {
      $('.topBtn').fadeIn(400);
    }else{
      $('.topBtn').fadeOut(100);
    }
    if (scroll <= $(window).height() + 300 && scroll >= $(window).height() - 300) {
      $('.section2Container').addClass('showDiv');
    }else{
      $('.section2Container').removeClass('showDiv');
    }
    if (scroll <= 2*$(window).height() + 300 && scroll >= 2*$(window).height() - 300) {
      $('.section3Container').addClass('showDiv');
    }else{
      $('.section3Container').removeClass('showDiv');
    }
  }
  setInterval(check, 100);


});
