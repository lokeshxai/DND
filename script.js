// Initialize cart count from localStorage
let count = localStorage.getItem("cartCount")
    ? parseInt(localStorage.getItem("cartCount"))
    : 0;

// When the page loads
document.addEventListener("DOMContentLoaded", function () {

    // Update cart count on page
    const cart = document.getElementById("cart-count");
    if (cart) cart.innerText = count;

    // Handle contact form submission
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Show success message
            const successMsg = document.getElementById("successMessage");
            if (successMsg) {
                successMsg.style.display = "block";

                // Hide it after 3 seconds
                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 3000);
            }

            form.reset();
        });
    }
});

// Add item to cart
function addToCart(price) {
    count++;
    localStorage.setItem("cartCount", count);
    const cart = document.getElementById("cart-count");
    if (cart) cart.innerText = count;
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
}