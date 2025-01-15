// Smooth Scroll to Solutions Section
const exploreButton = document.querySelector('.explore-btn');
exploreButton.addEventListener('click', function(e) {
  e.preventDefault();
  const targetSection = document.getElementById('solutions');
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Adding hover effects for solution images with zoom using JavaScript
const solutionImages = document.querySelectorAll('.solution-image');

solutionImages.forEach((image) => {
  image.addEventListener('mouseenter', function() {
    image.style.transform = 'scale(1.1)';
  });

  image.addEventListener('mouseleave', function() {
    image.style.transform = 'scale(1)';
  });
});

// Fade in solutions as you scroll
const solutions = document.querySelectorAll('.solution-card');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  solutions.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top + window.scrollY;
    if (scrollPosition >= cardTop) {
      card.classList.add('fade-in');
    }
  });
});

// CSS class to trigger fade-in
document.addEventListener('DOMContentLoaded', function() {
  const solutionCards = document.querySelectorAll('.solution-card');
  solutionCards.forEach(card => {
    card.classList.add('hidden');
  });
});

// CSS for fade-in
const style = document.createElement('style');
style.innerHTML = `
  .solution-card.hidden {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .solution-card.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
