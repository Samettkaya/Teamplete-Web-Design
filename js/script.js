$(window).scroll(function() {
  if ($(this).scrollTop() >=200) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(150);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(150);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
  }, 1300);
});