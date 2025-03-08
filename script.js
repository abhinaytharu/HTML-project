// Initialize Clipboard.js for Copy Button
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

// Toggle Navbar for Mobile
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle the nav menu on hamburger click
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close the menu if a link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Optional: Close menu if clicking anywhere outside the nav
window.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});
