let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  // Hide all slides initially
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Increment the slideIndex to show the next slide
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop back to the first slide
  }
  
  // Add 'active' class to the current slide to display it
  slides[slideIndex - 1].classList.add('active');
}

// Initialize the first slide
showSlides();

// Change image every 5 seconds
setInterval(showSlides, 5000);

// Change navbar background color on scroll
const navbar = document.querySelector('.navbar');
const scrollThreshold = 50; // Scroll threshold to apply dark background

window.onscroll = () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
