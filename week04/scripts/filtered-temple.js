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

// Your temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Kinshasa Democratic Republic of the Congo",
        location: "Kinshasa Democratic Republic, Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24-25",
        area: 19184,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
];

// Function to display temples dynamically
function displayTemples(temples) {
    const container = document.getElementById("temple-cards-container");

    // Clear the container before adding new temples
    container.innerHTML = "";

    temples.forEach(temple => {
        const templeCard = document.createElement("figure");
        templeCard.classList.add("temple-card");

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = `Image of ${temple.templeName}`;
        templeImage.loading = "lazy";
        templeCard.appendChild(templeImage);

        const templeName = document.createElement("figcaption");
        templeName.textContent = `${temple.templeName} (${temple.dedicated})`;
        templeCard.appendChild(templeName);

        const templeLocation = document.createElement("p");
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        const templeArea = document.createElement("p");
        templeArea.textContent = `Area: ${temple.area} sq ft`;
        templeCard.appendChild(templeArea);

        container.appendChild(templeCard);
    });
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
    let filteredTemples = temples;

    if (criteria === "old") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(",")[0]) < 1900);
    } else if (criteria === "new") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(",")[0]) > 2000);
    } else if (criteria === "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (criteria === "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    displayTemples(filteredTemples);
}

// Event listeners for the navigation links
document.querySelector('a[href="home.html"]').addEventListener('click', () => displayTemples(temples));
document.querySelector('a[href="old.html"]').addEventListener('click', () => filterTemples("old"));
document.querySelector('a[href="new.html"]').addEventListener('click', () => filterTemples("new"));
document.querySelector('a[href="large.html"]').addEventListener('click', () => filterTemples("large"));
document.querySelector('a[href="small.html"]').addEventListener('click', () => filterTemples("small"));

// Display all temples initially
displayTemples(temples);
