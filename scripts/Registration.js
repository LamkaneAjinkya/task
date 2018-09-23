$(document).ready(function () {

  $('#first_form').submit(function (e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var mobile_num = $('#mobileNum').val();
    var email_user = $('#email').val();


    $(".error").remove();

    if (first_name.length < 1) {
      $('#first_name').after('<span class="error"> required</span>');
    } else {
      if (!validate(first_name))
        $('#first_name').after('<span class="error"> enter a valid First Name</span>');
    }

    if (last_name.length < 1) {
      $('#last_name').after('<span class="error"> required</span>');
    } else {
      if (!validate(last_name))
        $('#last_name').after('<span class="error"> enter a valid Last Name</span>');
    }

    if (mobile_num.length !== 10) {
      $('#mobileNum').after('<span class="error"> required</span>');
    } else {
      if (!$('#mobileNum').val().match('[0-9]{10}')) {
        $('#mobileNum').after('<span class="error"> Enter a valid Mobile No./span>');
      }
    }

    if (email_user.length < 1) {
      $('#email').after('<span class="error"> required</span>');
    } else {
      var regEx = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

      if (!regEx.test(email_user)) {
        $('#email').after('<span class="error">enter a valid email</span>');
      }
      
    }

  });

  function validate() {
    return /^[A-Za-z\s]*$/.test();
  }
  
});