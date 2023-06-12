$(document).ready(function () {
  // Show the content of the first accordion item
  $(".accordion-item:first-child .accordion-content").show();

  $(".accordion-title").click(function () {
    // Check if the clicked item is already active
    if ($(this).hasClass("active")) {
      // If it is active, then collapse it and remove the active class
      $(this).next(".accordion-content").slideUp();
      $(this).find(".accordion-icon").removeClass("active");
      $(this).removeClass("active");
    } else {
      // If it is not active, then collapse all items, remove active classes, and expand the clicked item
      $(".accordion-content").slideUp();
      $(".accordion-icon").removeClass("active");
      $(".accordion-title").removeClass("active");

      $(this).next(".accordion-content").slideDown();
      $(this).find(".accordion-icon").addClass("active");
      $(this).addClass("active");
    }
  });
});
