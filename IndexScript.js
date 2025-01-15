// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
  // Remove the "active" class from all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Add the "active" class to the current slide
  slides[currentIndex].classList.add('active');

  // Update the index for the next slide
  currentIndex = (currentIndex + 1) % slides.length;
}

// Start the slideshow and update every 5 seconds
setInterval(changeSlide, 5000); 

// Initialize the first slide
changeSlide();
