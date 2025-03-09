// Get the current year dynamically
const yearSpan = document.getElementById("copyright");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;