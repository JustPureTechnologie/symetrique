document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".navbar li");
    const cards = document.querySelectorAll(".card");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove 'active' class from all navigation items
            navItems.forEach(nav => nav.classList.remove("active"));
            
            // Add 'active' class to clicked item
            item.classList.add("active");

            // Hide all cards
            cards.forEach(card => card.classList.remove("active"));

            // Show the corresponding card
            const contentId = item.getAttribute("data-content");
            const activeCards = document.querySelectorAll(`#${contentId}`);
            activeCards.forEach(card => {
                card.classList.add("active");
            });
        });
    });

    // Initially, make the first card visible by default
    const firstCard = document.querySelector("#content1 .card");
    if (firstCard) {
        firstCard.classList.add("active");
    }

    // Make the first navbar item active by default
    navItems[0].classList.add("active");
});
