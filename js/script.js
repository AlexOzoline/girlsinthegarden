let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("new");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  const currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";
  currentSlide.classList.add("new");

  setTimeout(showSlides, 10000);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});
