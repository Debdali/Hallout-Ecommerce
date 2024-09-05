document.addEventListener("DOMContentLoaded", function () {
  var signinBtn = document.getElementById("signin-btn");

  signinBtn.addEventListener("click", function () {
      var signInModal = new bootstrap.Modal(document.getElementById("signInModal"));
      signInModal.show();
  });
});

