// tampilan.js

document.addEventListener("DOMContentLoaded", function() {
    // Add hover effect for card links
    const cards = document.querySelectorAll(".cards .card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
            this.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        });
    });
});
