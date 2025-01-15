// Adding scroll-based animation to expertise sections
const expertiseAreas = document.querySelectorAll('.expertise-area');

window.addEventListener('scroll', () => {
  expertiseAreas.forEach((area) => {
    const rect = area.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      area.style.transform = 'scale(1.05)';
    } else {
      area.style.transform = 'scale(1)';
    }
  });
});
