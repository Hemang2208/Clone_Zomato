# Zomato Clone

## Overview

Welcome to the Zomato Clone! This project replicates the functionality of Zomato, a popular platform for discovering restaurants and ordering food online. With a clean design and responsive layout, this application enhances the food discovery experience for users.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Styling](#styling)
- [JavaScript Functionality](#javascript-functionality)
- [Contributing](#contributing)
- [Author](#author)

## Features

- **Responsive Design**: Optimized for various screen sizes, providing a seamless experience on both mobile and desktop devices.
- **Loading Animation**: A visually appealing loader that enhances user experience during page loading.
- **Location and Search Functionality**: Users can input their location and search for specific restaurants, cuisines, or dishes.
- **Visually Engaging Sections**: Attractive image displays showcasing dining options, takeaway, and nightlife.

## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling the application, ensuring a modern look and feel.
- **JavaScript**: For interactivity and handling dynamic content.

## Installation

To get started with the Zomato Clone, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Hemang2208/Clone_Zomato.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Clone_Zomato
   ```

3. **Open the `index.html` File**: 
   Use any web browser to view the project:
   ```bash
   open index.html
   ```

4. **Ensure All Files Are Present**: Make sure `style.css` and `script.js` are in the same directory as `index.html`.

## Usage

Once the application is opened in your browser:

- **View the Home Page**: The landing page features the Zomato logo and a brief description of services.
- **Search Functionality**: Input your location and search for restaurants or dishes. Press "Enter" to initiate a search, which triggers an alert displaying your search query.
- **Loading Animation**: Observe the loading animation that appears when the page is loading, simulating progress until the content is ready.

## File Structure

The project has the following structure:

```
/Clone_Zomato
│
├── index.html        # Main HTML file
├── style.css         # CSS for styling the application
└── script.js         # JavaScript for interactivity
```

## Styling

The CSS styles provide a modern, clean look, featuring:

- **Reset Styles**: Ensures consistent styling across different browsers.
- **Header and Footer Styles**: Visually appealing and functional.
- **Responsive Layout**: Media queries adapt the design for various screen sizes.

## JavaScript Functionality

The JavaScript code adds interactivity to the application:

- **Loading Effect**: A simulated loading animation runs on page load, displaying progress from 0% to 100%.
- **Search Inputs**: Users can input their location and search terms. Pressing "Enter" triggers an alert displaying the respective query.

Here's a brief overview of the key functions:

```javascript
document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const locationInput = document.querySelector('.location-input');
    const searchInput = document.querySelector('.search-input');
    const loader = document.getElementById('loader');
    const percentageText = document.querySelector('.percentage');
    const progressBar = document.querySelector('.progress-bar');

    // Loading effect
    let loadProgress = 0;
    const loadingInterval = setInterval(() => {
        if (loadProgress < 100) {
            loadProgress++;
            percentageText.textContent = loadProgress + '%';
            progressBar.style.width = loadProgress + '%';
        } else {
            clearInterval(loadingInterval);
            loader.style.display = 'none';
        }
    }, 30);

    // Search functionality
    locationInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            alert(`Searching for restaurants in ${locationInput.value}`);
        }
    });

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            alert(`Searching for ${searchInput.value}`);
        }
    });
});
```

## Contributing

Contributions are encouraged! To contribute to this project:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/YourFeature
   ```
5. **Create a pull request**.

## Author

**HEMANG DUTT MISHRA**

For any questions, suggestions, or feedback, feel free to reach out!