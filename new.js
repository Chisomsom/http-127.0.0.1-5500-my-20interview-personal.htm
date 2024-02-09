const images = document.querySelectorAll(".expandable-image");

images.forEach((image) => {
  image.addEventListener("mouseenter", function () {
    image.style.transform = "scale(1.7)";
  });

  image.addEventListener("mouseleave", function () {
    image.style.transform = "scale(1)";
  });
});
