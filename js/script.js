/* /js/script.js of theUFOExperience for UFO-Exp.bauska.org */
/* hide these elements on page load */
$('#main-menu, .menu-close').hide();

/* open menu on menu open click */
$('.menu-open').on('click', function(e) {
  e.preventDefault();
  $('#main-menu').slideDown();
  $('.menu-open').hide();
  $('.menu-close').show();
});

/* close menu on menu close or link click */
$('.menu-close').on('click', function(e) {
  e.preventDefault();
  $('#main-menu').slideUp();
  $('.menu-open').show();
  $('.menu-close').hide();
});

/* close menu on menu close or link click */
$('#main-menu a').on('click', function() {
  $('#main-menu').slideUp();
  $('.menu-open').show();
  $('.menu-close').hide();
});
