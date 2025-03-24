const temperatureC = 10;
const windSpeedKmh = 5;

function calculateWindChill(temp, windSpeed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.getElementById("windChill");
    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temperatureC, windSpeedKmh)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

function updateFooter() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
    displayWindChill();
    updateFooter();
});

