// scripts.js

// === Dynamic Copyright and Last Modified ===
function updateFooter() {
    const yearSpan = document.getElementById("copyright");
    const modifiedP = document.getElementById("lastModified");

    if (yearSpan && modifiedP) {
        yearSpan.textContent = new Date().getFullYear();
        modifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// === Form Submission Feedback + localStorage Save ===
function handleFormSubmission(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("usermail").value.trim();
    const message = document.getElementById("message")?.value.trim(); // Optional, only on contact page

    if (fullName && email) {
        // Save to localStorage
        const formData = {
            fullName,
            email,
            message: message || "No message provided",
            timestamp: new Date().toISOString()
        };

        const existingData = JSON.parse(localStorage.getItem("swanzyContacts")) || [];
        existingData.push(formData);
        localStorage.setItem("swanzyContacts", JSON.stringify(existingData));

        alert(`Thank you, ${fullName}, your information has been saved!`);
        event.target.reset(); // Clear the form
    } else {
        alert("Please fill in all required fields.");
    }
}

// === Toggle CTA Section Background ===
function toggleCTAStyle() {
    const ctaSection = document.querySelector(".cta");
    if (ctaSection) {
        ctaSection.classList.toggle("highlight");
    }
}

// === Show Saved Contacts in Console ===
function showSavedContacts() {
    const saved = JSON.parse(localStorage.getItem("swanzyContacts")) || [];
    console.log("Saved Form Submissions:");
    saved.forEach((entry, index) => {
        console.log(`${index + 1}. Name: ${entry.fullName}, Email: ${entry.email}`);
    });
}

// === Resize All Employee Images to Uniform ===
function resizeEmployeeImages() {
    const employees = document.querySelectorAll(".employee img");
    employees.forEach(img => {
        img.style.width = "100%";
        img.style.height = "250px";
        img.style.objectFit = "cover";
    });
}

// === Highlight CTA Button on Hover ===
function enhanceCTAButton() {
    const ctaBtn = document.querySelector(".cta-button");
    if (ctaBtn) {
        ctaBtn.addEventListener("mouseenter", () => {
            ctaBtn.style.backgroundColor = "#111";
            ctaBtn.style.color = "#fff";
        });
        ctaBtn.addEventListener("mouseleave", () => {
            ctaBtn.style.backgroundColor = "#fff";
            ctaBtn.style.color = "#111";
        });
    }
}

// === Event Listeners Setup ===
document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    resizeEmployeeImages();
    enhanceCTAButton();
    showSavedContacts();

    // Attach to all forms
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", handleFormSubmission);
    });

    // Optional CTA style toggle
    const cta = document.querySelector(".cta");
    if (cta) {
        cta.addEventListener("click", toggleCTAStyle);
    }
});
