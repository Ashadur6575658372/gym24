// Slider functionlity
const sliderWrapper = document.getElementById("sliderWrapper");
const sliderContainer = document.getElementById("sliderIndicators");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const sliderImages = [
  "./images/gym-1.png",
  "./images/gym-2.png",
  "./images/gym-3.png",
  "./images/gym-4.png",
];

// create slider function
function initializeSlider() {
  let currentIndex = 0;

  // crate slider images
  sliderImages.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = `Gym image ${index + 1}`;

    sliderWrapper.appendChild(img);

    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    sliderContainer.appendChild(indicator);
  });

  //update slider function
  const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    //update indicators
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  };

  // go to the specific slide
  const goToSlide = (index) => {
    currentIndex = index;
    updateSlider();
  };

  // next button click
  const nextSlid = () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
  };

  nextBtn.addEventListener("click", nextSlid);

  // previous button click
  const prevSlid = () => {
    currentIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
  };

  prevBtn.addEventListener("click", prevSlid);

  // slide auto play using interval
  let autoPlayInterval = setInterval(nextSlid, 3000);

  // pause auto play on hover
  sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });

  sliderWrapper.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlid, 3000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});