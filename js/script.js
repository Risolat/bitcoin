$(document).ready(function(){
  $('.site-nav__menu').click(function(){
    $('.site-nav__list').slideToggle(400, function(){
      $(this).toggleClass('nav-expanded').css('display', '');
    });
  })
});

$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  $("label").removeClass("labelfocus");
});

var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#password-input');

togglePassword.addEventListener('click', function (e) {

  var type = password.getAttribute('type') === 'password' ? 'text' : 'password';

  password.setAttribute('type', type);

  this.classList.toggle('fa-eye-slash');
});