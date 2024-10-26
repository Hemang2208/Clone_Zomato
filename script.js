// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.querySelector('.location-input');
    const searchInput = document.querySelector('.search-input');
    const loader = document.getElementById('loader');
    const percentageText = document.querySelector('.percentage');
    const progressBar = document.querySelector('.progress-bar');

    // Simulate loading effect
    let loadProgress = 0;
    const loadingInterval = setInterval(() => {
        if (loadProgress < 100) {
            loadProgress++;
            percentageText.textContent = loadProgress + '%';
            progressBar.style.width = loadProgress + '%'; // Correctly set width
        } else {
            clearInterval(loadingInterval);
            loader.style.display = 'none'; // Hide loader after loading
        }
    }, 30); // Adjust time for speed of loading effect

    // Add event listener to handle enter key for location input
    locationInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            alert(`Searching for restaurants in ${locationInput.value}`);
        }
    });

    // Add event listener to handle enter key for search input
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            alert(`Searching for ${searchInput.value}`);
        }
    });
});