document.addEventListener('DOMContentLoaded', () => {
    console.log("Zomato Clone loaded.");
    initSearchInput();
    initMainContentAnimation();
});

function initSearchInput() {
    const searchInput = document.querySelector('input[type="text"]');

    searchInput.addEventListener('focus', () => {
        searchInput.style.boxShadow = '0 0 10px rgba(200, 16, 46, 0.5)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.boxShadow = 'none';
    });
}

function initMainContentAnimation() {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';

    setTimeout(() => {
        mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }, 100);
}
