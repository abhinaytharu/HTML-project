// Check if Clipboard.js library is loaded
console.log("JavaScript file loaded!");

// Toggle Navbar for Mobile
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Ripple Effect on Button Click
document.querySelectorAll(".ripple-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        // Get position inside button
        let x = e.clientX - button.getBoundingClientRect().left;
        let y = e.clientY - button.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        button.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Initialize Clipboard.js for Copy Button
document.addEventListener("DOMContentLoaded", () => {
    const clipboard = new ClipboardJS('.copy-btn');

    // Show feedback when copied
    clipboard.on('success', function (e) {
        alert('Code copied to clipboard!');
        e.clearSelection();
    });

    // Handle errors (in case something goes wrong)
    clipboard.on('error', function (e) {
        alert('Failed to copy code. Please try again.');
    });
});
