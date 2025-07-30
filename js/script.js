// Carrusel de galería
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.getElementById("dotsContainer");

  let currentIndex = 0;
  const totalItems = items.length;

  items.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const transformValue = -currentIndex * 100;
    carousel.style.transform = `translateX(${transformValue}%)`;
    updateDots();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  let autoSlide = setInterval(nextSlide, 4000);

  carousel.parentElement.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

  carousel.parentElement.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextSlide, 4000);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });
});