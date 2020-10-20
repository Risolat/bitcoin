$(document).ready(function(){
  $('.site-nav__menu').click(function(){
    $('.site-nav__list').slideToggle(400, function(){
      $(this).toggleClass('nav-expanded').css('display', '');
    });
  })
});
