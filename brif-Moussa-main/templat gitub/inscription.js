$("#show_password").hover(
  function functionName() {
    //Change the attribute to text
    $("#password").attr("type", "text");
    $(".glyphicon")
      .removeClass("glyphicon-eye-open")
      .addClass("glyphicon-eye-close");
  },
  function() {
    //Change the attribute back to password
    $("#password").attr("type", "password");
    $(".glyphicon")
      .removeClass("glyphicon-eye-close")
      .addClass("glyphicon-eye-open");
  }
);
