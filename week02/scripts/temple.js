document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("mobile-nav");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("show");

            // Toggle between ☰ and ×
            if (navMenu.classList.contains("show")) {
                hamburger.innerHTML = "&times;"; // Close symbol (X)
            } else {
                hamburger.innerHTML = "&#9776;"; // Menu symbol (☰)
            }
        });
    }

    // Update Footer Year and Last Modified Date
    const currentYear = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
