(function () {
  var reviewForm = document.getElementById("service-review-form");

  if (!reviewForm) {
    return;
  }

  var status = document.getElementById("review-form-status");

  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(reviewForm);
    var name = String(formData.get("name") || "").trim();
    var rating = String(formData.get("rating") || "").trim();
    var description = String(formData.get("description") || "").trim();

    if (!name || !rating || !description) {
      status.textContent = "Please add your name, star rating, and review description.";
      return;
    }

    var body = [
      "Seiser Systems Service Review",
      "",
      "Name: " + name,
      "Star rating: " + rating + " out of 5",
      "",
      "Description:",
      description
    ].join("\n");

    var mailtoUrl = "mailto:contact@seisersystems.com"
      + "?subject=" + encodeURIComponent("Seiser Systems Service Review")
      + "&body=" + encodeURIComponent(body);

    status.textContent = "Opening your email app with the review details.";
    window.location.href = mailtoUrl;
  });
})();
