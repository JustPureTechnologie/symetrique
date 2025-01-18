// JavaScript to handle the navigation and toggle content visibility
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll('.navbar ul li');
  const contentSections = document.querySelectorAll('.content');

  // Add event listeners to navbar items
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remove 'active' class from all navbar items
      navItems.forEach(nav => nav.classList.remove('active'));

      // Add 'active' class to the clicked navbar item
      item.classList.add('active');

      // Hide all content sections
      contentSections.forEach(content => {
        content.style.display = 'none';
      });

      // Show the corresponding content section
      const contentId = item.getAttribute('data-content');
      document.getElementById(contentId).style.display = 'flex';
    });
  });

  // Set default active content
  navItems[0].classList.add('active');
  contentSections[0].style.display = 'flex';
});
