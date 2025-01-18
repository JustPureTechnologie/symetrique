document.addEventListener("DOMContentLoaded", function() {
    // Select the section and list items
    const section = document.querySelector("#why-choose-us");
    const listItems = document.querySelectorAll("#reasons-list li");
  
    // Create an IntersectionObserver to detect when the section is in view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the section enters the viewport, add the 'visible' class
          section.classList.add("visible");
  
          // Now, make each list item appear one by one with a delay
          listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, index * 300); // Delay of 300ms between each item
          });
  
          // Stop observing once the section has been shown
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is in view
    });
  
    // Start observing the section
    observer.observe(section);
  });
  