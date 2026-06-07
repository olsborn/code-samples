$(() => {
  const showMessage = (message, type) => {
    const $msg = $("#formMessage");
    $msg.removeClass("success-message error-message");
    $msg.addClass(`${type}-message`);
    $msg.text(message);
    $msg.show();

    $("html, body").animate(
      {
        scrollTop: $msg.offset().top - 100,
      },
      500,
    );
  };

  $("#contactForm").on("submit", (e) => {
    e.preventDefault();

    const fullName = $('input[name="full_name"]').val().trim();
    const email = $('input[name="email_address"]').val().trim();
    const consent = $('input[name="privacy_consent"]').is(":checked");
    const recaptcha =
      typeof grecaptcha !== "undefined" ? grecaptcha.getResponse() : "";
    const b2b = $('input[name="project_type[]"][value="B2B"]').is(":checked");
    const b2c = $('input[name="project_type[]"][value="B2C"]').is(":checked");

    $("#formMessage").hide();

    if (!fullName) {
      showMessage("Please enter your full name", "error");
      return false;
    }

    if (!email) {
      showMessage("Please enter your email address", "error");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage("Please enter a valid email address", "error");
      return false;
    }

    if (!b2b && !b2c) {
      showMessage(
        "Please select at least one project type (B2B or B2C)",
        "error",
      );
      return false;
    }

    if (!consent) {
      showMessage("Please agree to the privacy policy", "error");
      return false;
    }

    if (
      window.FORM_CONFIG &&
      window.FORM_CONFIG.validateCaptcha &&
      !recaptcha
    ) {
      showMessage("Please complete the reCAPTCHA verification", "error");
      return false;
    }

    $("#submitBtn").prop("disabled", true);
    $("#formLoader").show();

    $.ajax({
      url: "submit.php",
      type: "POST",
      data: $(e.target).serialize(),
      dataType: "json",
    })
      .then((response) => {
        if (response.status === "success") {
          showMessage(response.message, "success");
          $("#contactForm")[0].reset();
          if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
          }
        } else {
          showMessage(response.message, "error");
        }
      })
      .catch(() => {
        showMessage("An error occurred while submitting the form", "error");
      })
      .always(() => {
        $("#submitBtn").prop("disabled", false);
        $("#formLoader").hide();
      });
  });
});
