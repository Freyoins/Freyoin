let openDetailsId = null;

function toggleDetails(id) {
  const details = document.getElementById(id);

  if (openDetailsId === id) {
    details.style.display = "none";
    openDetailsId = null;
  } else {
    if (openDetailsId) {
      document.getElementById(openDetailsId).style.display = "none";
    }

    details.style.display = "block";
    openDetailsId = id;
  }
}

document.addEventListener("click", function (event) {
  if (openDetailsId && !event.target.closest(`#${openDetailsId}`) && !event.target.closest(".toggle-button")) {
    document.getElementById(openDetailsId).style.display = "none";
    openDetailsId = null;
  }
});

$(document).ready(function () {
  $(".progress-bar").each(function () {
    const value = $(this).data("value");
    $(this)
      .find(".progress")
      .css("width", value + "%");
  });
});
