jQuery(document).ready(function ($) {

  $(".ajax-contact-form").submit(function () {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
<<<<<<< HEAD
      url: "https://src/scripts/contact.php",
=======
      url: "./src/scripts/contactform.js",
>>>>>>> ee729633d9dc0c88686c86795a1d082fcfaa2b42
      data: str,
      success: function (msg) {
        if (msg == 'OK') {
          result = '<p>Ваш заказ принят</p>';
          $(".fields").hide();
        } else {
          result = msg;
        }
        $('.note').html(result);
      }
    });
    return false;
  });
});
