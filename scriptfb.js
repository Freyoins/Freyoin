$(document).ready(function () {
  $("#feedbackForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using AJAX
    $.ajax({
      type: "POST",
      url: $(this).attr("action"), // The action URL of the form
      data: $(this).serialize(), // Serialize form data
      success: function (response) {
        // On success, hide the form and show the thank you message
        $("#feedbackForm").hide();
        $("#thankYouMessage").removeClass("hidden");
      },
      error: function () {
        alert(
          "There was an error submitting your feedback. Please try again later."
        );
      },
    });
  });
});
